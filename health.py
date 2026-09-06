from fastapi import APIRouter
from datetime import datetime
import psutil


router = APIRouter()


@router.get("/")
def health():

    return {

        "status":"online",

        "cpu":
        psutil.cpu_percent(),

        "memory":
        psutil.virtual_memory().percent,

        "disk":
        psutil.disk_usage("/").percent,

        "timestamp":
        datetime.utcnow().isoformat()

    }
