from fastapi import APIRouter
from app.services.system import get_resources

router = APIRouter()


@router.get("/")
def resources():

    return {
        "server": "TradeXpress",
        "resources": get_resources()
    }
