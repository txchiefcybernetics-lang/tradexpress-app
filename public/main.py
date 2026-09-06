from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import documentation

from app.routes import health, equator, control
from app.services.audit import tradexpress_record_event

import datetime


app = FastAPI(
    title="TradeXpress Enterprise API",
    version="2.0.0"
)


# Desktop / Web access
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


# API Modules

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


# Startup Audit

@app.on_event("startup")
def tradexpress_startup():

    tradexpress_record_event(
        event="STARTUP",
        user="system",
        detail="TradeXpress Monitor API started"
    )


# Shutdown Audit
# Records Ctrl+C / termination

@app.on_event("shutdown")
def tradexpress_shutdown():

    tradexpress_record_event(
        event="SHUTDOWN",
        user="system",
        detail="TradeXpress Monitor API stopped"
    )


# API Homepage

@app.get("/")
def root():

    return {

        "publisher": "TradeXpress",

        "product":
        "TradeXpress Enterprise",

        "component":
        "Monitor API",

        "version":
        "2.0.0",

        "status":
        "online",

        "documentation":
        "/docs",

        "time":
        datetime.datetime.utcnow().isoformat()+"Z"

    }
