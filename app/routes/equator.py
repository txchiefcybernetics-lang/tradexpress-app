from fastapi import APIRouter
import socket
import platform
import subprocess
import psutil
from datetime import datetime


router = APIRouter()


def firewall_status():

    result=subprocess.getoutput(
        "sudo ufw status"
    )

    if "Status: active" in result:
        return "active"

    return "inactive"



@router.get("/")
def equator():

    return {

        "server":
        socket.gethostname(),

        "status":
        "online",

        "cpu":
        psutil.cpu_percent(),

        "memory":
        psutil.virtual_memory().percent,

        "disk":
        psutil.disk_usage("/").percent,

        "firewall":
        firewall_status(),

        "os":
        platform.platform(),

        "timestamp":
        datetime.utcnow().isoformat()

    }
