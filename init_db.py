from app.database import engine, Base

# Import all models so SQLAlchemy knows them
from app.models import AuditEvent
from app.governance import AIGovernanceRecord


def initialize_database():

    print("Initializing TradeXpress database...")

    Base.metadata.create_all(
        bind=engine
    )

    print("Database tables verified.")


if __name__ == "__main__":
    initialize_database()
