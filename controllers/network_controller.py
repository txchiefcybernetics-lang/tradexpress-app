import socket


def get_network_status():

    hostname = socket.gethostname()

    # Get real LAN IP
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

    try:
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
    except Exception:
        ip = "unknown"
    finally:
        s.close()

    return {
        "hostname": hostname,
        "ip_address": ip
    }
