import os
import json
from http.server import HTTPServer, BaseHTTPRequestHandler
import urllib.request

# --- Target Operational Environment Mappings ---
PORT = 8000
EXPRESS_ENGINE_URL = "http://localhost:3000"

class KenwellProxyEngineHandler(BaseHTTPRequestHandler):
    def end_headers(self):
        # Inject structural network availability allowances (CORS parameters)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        # Serve localized chatbot assets or fallback to telemetry verification pings
        if self.path == "/" or self.path == "/index.html":
            self.send_response(200)
            self.send_header("Content-Type", "text/html")
            self.end_headers()
            
            # Auto-fallback placeholder layout asset context matrix block
            html_content = """
            <!DOCTYPE html>
            <html lang='en'>
            <head><title>KENWELL TX Platform Console</title><script src='https://tailwindcss.com'></script></head>
            <body class='bg-slate-950 text-slate-100 flex flex-col items-center justify-center min-h-screen'>
                <div class='bg-slate-900 border border-slate-800 p-8 rounded-2xl max-w-md text-center shadow-2xl'>
                    <h1 class='text-2xl font-bold text-blue-400 mb-2'>⚡ KENWELL TX Chatbot Hub</h1>
                    <p class='text-xs text-slate-400 font-mono'>Proxy Endpoint Listening on Port 8000</p>
                    <div class='mt-6 p-4 bg-slate-950 rounded-lg border border-slate-800 text-left font-mono text-xs text-emerald-400'>
                        // Telemetry connection active.<br>// Routing queries to Express Core Port 3000.
                    </div>
                </div>
            </body>
            </html>
            """
            self.wfile.write(html_content.encode("utf-8"))
            return

        # Pass health check telemetry requests straight down to the Express Core Engine
        if "/api/monitor" in self.path:
            try:
                req = urllib.request.Request(f"{EXPRESS_ENGINE_URL}{self.path}", method="GET")
                with urllib.request.urlopen(req) as response:
                    self.send_response(200)
                    self.send_header("Content-Type", "application/json")
                    self.end_headers()
                    self.wfile.write(response.read())
            except Exception as e:
                self.send_response(500)
                self.end_headers()
                self.wfile.write(json.dumps({"success": False, "error": str(e)}).encode("utf-8"))

    def do_POST(self):
        # Proxy inbound classification and ingestion payload streams to Express core
        if self.path in ["/api/story/create", "/api/trade/classify"]:
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            
            try:
                req = urllib.request.Request(
                    f"{EXPRESS_ENGINE_URL}{self.path}",
                    data=post_data,
                    headers={'Content-Type': 'application/json'},
                    method="POST"
                )
                with urllib.request.urlopen(req) as response:
                    self.send_response(response.status)
                    self.send_header("Content-Type", "application/json")
                    self.end_headers()
                    self.wfile.write(response.read())
            except Exception as e:
                self.send_response(500)
                self.end_headers()
                self.wfile.write(json.dumps({"success": False, "error": str(e)}).encode("utf-8"))

if __name__ == "__main__":
    server = HTTPServer(('0.0.0.0', PORT), KenwellProxyEngineHandler)
    print(f"[KENWELL ENGINE] Core proxy telemetry platform live on port {PORT}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass

