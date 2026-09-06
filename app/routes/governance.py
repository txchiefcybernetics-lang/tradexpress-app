from fastapi import APIRouter

from app.database import SessionLocal
from app.governance import AIGovernanceRecord


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
                    "request_id": r.request_id,
                    "user": r.user,
                    "request_summary": r.request_summary,
                    "sources_used": r.sources_used,
                    "rules_applied": r.rules_applied,
                    "result_summary": r.result_summary,
                    "confidence_score": r.confidence_score,
                    "compliance_status": r.compliance_status,
                    "created_at": r.created_at
                }
                for r in records
            ]
        }

    finally:
        db.close()
