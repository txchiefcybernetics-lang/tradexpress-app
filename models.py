from sqlalchemy import Column, Integer, String, Float, DateTime, Text
from datetime import datetime

from app.database import Base


class AuditEvent(Base):

    __tablename__ = "audit_events"

    id = Column(
        Integer,
        primary_key=True
    )

    event_type = Column(
        String
    )

    user = Column(
        String
    )

    ip_address = Column(
        String,
        nullable=True
    )

    status = Column(
        String
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )


class AIGovernanceRecord(Base):

    __tablename__ = "ai_governance_records"

    id = Column(
        Integer,
        primary_key=True
    )

    request_id = Column(
        String,
        index=True
    )

    user = Column(
        String
    )

    request_summary = Column(
        Text
    )

    sources_used = Column(
        Text
    )

    rules_applied = Column(
        Text
    )

    result_summary = Column(
        Text
    )

    confidence_score = Column(
        Float
    )

    compliance_status = Column(
        String
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )


class ExecutionRecord(Base):

    __tablename__ = "execution_records"

    id = Column(
        Integer,
        primary_key=True
    )

    function_name = Column(
        String
    )

    status = Column(
        String
    )

    execution_time = Column(
        Float
    )

    args_count = Column(
        Integer
    )

    kwargs_keys = Column(
        Text
    )

    error = Column(
        Text,
        nullable=True
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )
