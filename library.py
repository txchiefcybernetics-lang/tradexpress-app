from fastapi import APIRouter
import sys
import platform
import datetime

router = APIRouter()


@router.get("/")
def library_status():

    return {
        "publisher": "TradeXpress",
        "component": "Library Monitor",

        "python": {
            "version": sys.version,
            "platform": platform.platform()
        },

        "libraries": {
            "fastapi": "installed",
            "uvicorn": "installed",
            "requests": "installed",
            "psutil": "pending"
        },

        "timestamp": datetime.datetime.utcnow().isoformat() + "Z"
    }
