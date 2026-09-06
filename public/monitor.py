from flask import Flask, jsonify
import psutil
import socket
import subprocess
import platform
import datetime
import uuid

app = Flask(__name__)


def service(s):
    return subprocess.getoutput(f"systemctl is-active {s}")


def firewall():
    return "active" if "Status: active" in subprocess.getoutput("sudo ufw status") else "inactive"


def device():
    mac = uuid.getnode()
    mac = ":".join(f"{(mac >> i) & 0xff:02x}" for i in range(40, -1, -8))

    return {
        "hostname": socket.gethostname(),
        "os": platform.platform(),
        "kernel": platform.release(),
        "architecture": platform.machine(),
        "mac": mac
    }


@app.get("/health")
def health():

    net = psutil.net_io_counters()

    return jsonify({
        "server": "tradexpress",
        "status": "online",

        "cpu": psutil.cpu_percent(),
        "memory": psutil.virtual_memory().percent,
        "disk": psutil.disk_usage("/").percent,

        "firewall": firewall(),

        "system": device(),

        "services": {
            "nginx": service("nginx"),
            "ssh": service("ssh"),
            "ollama": service("ollama")
        },

        "network": {
            "download": net.bytes_recv,
            "upload": net.bytes_sent
        },

        "timestamp": str(datetime.datetime.now())
    })


app.run(
    host="0.0.0.0",
    port=5000
)
