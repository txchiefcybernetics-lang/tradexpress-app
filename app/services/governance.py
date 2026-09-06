import uuid

from app.database import SessionLocal
from app.governance import AIGovernanceRecord


def record_ai_governance(
    user,
    request_summary,
    sources_used,
    rules_applied,
    result_summary,
    confidence_score,
    compliance_status="PENDING"
):

    db = SessionLocal()

    try:

        record = AIGovernanceRecord(

            request_id=str(uuid.uuid4()),

            user=user,

            request_summary=request_summary,

            sources_used=", ".join(
                sources_used
            ),

            rules_applied=", ".join(
                rules_applied
            ),

            result_summary=result_summary,

            confidence_score=confidence_score,

            compliance_status=compliance_status
        )


        db.add(record)

        db.commit()

        db.refresh(record)

        return record.id


    finally:
        db.close()
