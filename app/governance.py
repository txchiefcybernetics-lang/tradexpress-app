from fastapi import APIRouter

from app.database import SessionLocal
from app.models import AIGovernanceRecord


router = APIRouter(
    prefix="/governance",
    tags=["AI Governance"]
)


@router.get("/")
def get_governance():

    db = SessionLocal()

    try:

        records = (
            db.query(AIGovernanceRecord)
            .order_by(
                AIGovernanceRecord.created_at.desc()
            )
            .all()
        )

        return {
            "publisher": "TradeXpress",
            "module": "AI Governance",
            "total_records": len(records),
            "records": [
                {
                    "request_id": record.request_id,
                    "user": record.user,
                    "request_summary": record.request_summary,
                    "sources_used": record.sources_used,
                    "rules_applied": record.rules_applied,
                    "result_summary": record.result_summary,
                    "confidence_score": record.confidence_score,
                    "compliance_status": record.compliance_status,
                    "created_at": record.created_at
                }
                for record in records
            ]
        }

    finally:
        db.close()
