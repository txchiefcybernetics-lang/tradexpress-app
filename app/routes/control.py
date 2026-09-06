from fastapi import APIRouter
from app.services.audit import tradexpress_record_event


router = APIRouter()


@router.post("/restart")
def restart():

    return tradexpress_record_event(
        "RESTART",
        "admin",
        "Restart requested"
    )


@router.post("/pause")
def pause():

    return tradexpress_record_event(
        "PAUSE",
        "admin",
        "Service paused"
    )


@router.post("/resume")
def resume():

    return tradexpress_record_event(
        "RESUME",
        "admin",
        "Service resumed"
    )


@router.get("/logs")
def logs():

    import json

    with open(
        "logs/audit.json"
    ) as f:
        return json.load(f)
