from app.config import APP_BRAND

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import engine
from app.models import Base

from app.services.audit import tradexpress_record_event

from app.governance import AIGovernanceRecord

from app.routes import (
    health,
    equator,
    control,
    documentation,
    governance,
    library,
)

import datetime


# ==============================
# TradeXpress Application Metadata
# ==============================

APP_NAME = "TradeXpress Enterprise API"
APP_VERSION = "2.0.0"
APP_COMPONENT = "Monitor"

# Application lifecycle
APP_CREATED_DATE = "2026-08-06"
APP_MODIFIED_DATE = "2026-08-06"

# Runtime tracking
APP_START_TIME = datetime.datetime.utcnow().isoformat() + "Z"


# ==============================
# FastAPI Application
# ==============================

app = FastAPI(
    title=APP_NAME,
    version=APP_VERSION,
    description="TradeXpress Enterprise Infrastructure Monitoring API"
)

Base.metadata.create_all(bind=engine)
# ==============================
# Desktop / Web access
# ==============================

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://192.168.0.102:3000",
        "http://localhost:3000",
        "https://www.tradexpress.co",
        "https://api.tradexpress.co"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# API Routes

app.include_router(
    health.router,
    prefix="/health",
    tags=["Health"]
)


app.include_router(
    equator.router,
    prefix="/equator",
    tags=["Equator Monitor"]
)


app.include_router(
    control.router,
    prefix="/control",
    tags=["System Control"]
)


app.include_router(
    documentation.router,
    prefix="/documentation",
    tags=["AI Documentation"]
)


app.include_router(
     library.router,
     prefix="/library",
     tags=["Library Monitor"]
)

# Audit Events

@app.on_event("startup")
def tradexpress_startup():

    tradexpress_record_event(
        event="STARTUP",
        user="system",
        detail="TradeXpress Monitor API started"
    )


@app.on_event("shutdown")
def tradexpress_shutdown():

    tradexpress_record_event(
        event="SHUTDOWN",
        user="system",
        detail="TradeXpress Monitor API stopped"
    )


# API Identity Endpoint

@app.get("/")
def root():

    return {
        "publisher": "TradeXpress",
        "product": APP_NAME,
        "component": APP_COMPONENT,
        "version": APP_VERSION,

        "created_date": APP_CREATED_DATE,
        "modified_date": APP_MODIFIED_DATE,
        "started_at": APP_START_TIME,

        "status": "online",

        "documentation": "/docs",

        "services": {
            "health": "/health",
            "monitor": "/equator",
            "control": "/control",
            "ai_summary": "/documentation/summary",
            "library": "/library"
        },

        "timestamp": datetime.datetime.utcnow().isoformat() + "Z"
    }
