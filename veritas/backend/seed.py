import uuid
from database import engine, Base, SessionLocal
from models import User, Agent, Action, IntentContract, LedgerEntry

def seed_db():
    print("Creating tables...")
    Base.metadata.create_all(bind=engine)
    
    db = SessionLocal()
    
    # Check if we already have data
    if db.query(Agent).first():
        print("Database already seeded.")
        return

    print("Seeding Users...")
    demo_user = User(name="Demo Admin", role="ADMIN", is_demo=True)
    db.add(demo_user)
    
    print("Seeding Agents...")
    agents_data = [
        {"name": "Research Agent", "trust_score": 100},
        {"name": "Finance Agent", "trust_score": 85},
        {"name": "DevOps Agent", "trust_score": 95},
        {"name": "Email Agent", "trust_score": 40},
        {"name": "Data-Analysis Agent", "trust_score": 75}
    ]
    
    for agent_data in agents_data:
        agent = Agent(**agent_data, is_demo=True)
        db.add(agent)
        
    db.commit()
    print("Seeding completed successfully.")

if __name__ == "__main__":
    seed_db()
