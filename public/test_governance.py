from app.services.governance import record_ai_governance


record_ai_governance(

    user="tx",

    request_summary=
    "Customs duty calculation request",

    sources_used=[
        "TradeXpress Knowledge Base",
        "Tariff Database"
    ],

    rules_applied=[
        "HS Code validation",
        "Duty calculation"
    ],

    result_summary=
    "Calculation completed successfully",

    confidence_score=0.92,

    compliance_status="APPROVED"
)


print("Governance record saved")
