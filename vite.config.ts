import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true, // Opens up server access to your local area network (LAN)
    proxy: {
      // Catch any outbound network requests directed to /api
      '/api': {
        target: 'http://192.168.100.11:8000', // Redirects traffic smoothly to your Kenwell Python Proxy
        changeOrigin: true,
        secure: false,
        ws: true, // Enables full WebSocket support for future AI Chatbot features
        configure: (proxy, _options) => {
          proxy.on('error', (err, _req, _res) => {
            console.log('Vite Network Proxy Pipeline Exception Error:', err);
          });
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            console.log('Proxying Inbound Request Matrix Destination:', req.method, req.url);
          });
        },
      },
    },
  },
});

