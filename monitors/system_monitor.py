import psutil
import platform


def get_system_status():

    return {
        "hostname": platform.node(),
        "cpu_percent": psutil.cpu_percent(),
        "memory_percent": psutil.virtual_memory().percent,
        "disk_percent": psutil.disk_usage("/").percent
    }
