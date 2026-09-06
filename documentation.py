from fastapi import APIRouter
from datetime import datetime
import requests


router = APIRouter()


@router.get("/summary")
def documentation_summary():

    report = {
        "server": "TradeXpress",
        "status": "online",
        "cpu": "18%",
        "memory": "42%",
        "disk": "55%",
        "firewall": "active",
        "time": datetime.utcnow().isoformat()
    }


    prompt = f"""
You are TradeXpress AI Infrastructure Assistant.

Create an enterprise summary from this monitoring data:

{report}

Include:
- system condition
- security status
- recommendations
"""


    try:

        response = requests.post(
            "http://192.168.0.192:11434/api/generate",
            json={
                "model":"llama3",
                "prompt":prompt,
                "stream":False
            }
        )


        ai = response.json()["response"]


    except Exception:

        ai = "AI service unavailable"


    return {
        "documentation": ai,
        "source": report
    }
