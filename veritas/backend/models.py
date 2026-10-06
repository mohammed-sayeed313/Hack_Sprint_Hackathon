import uuid
from sqlalchemy import Column, String, Boolean, DateTime, JSON, Integer, ForeignKey
from sqlalchemy.sql import func
from database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    name = Column(String, index=True)
    role = Column(String, default="VIEWER")  # ADMIN, SECURITY_ANALYST, APPROVER, VIEWER
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    is_demo = Column(Boolean, default=True)

class Agent(Base):
    __tablename__ = "agents"

    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    name = Column(String, index=True)
    trust_score = Column(Integer, default=100)
    is_quarantined = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    is_demo = Column(Boolean, default=True)

class IntentContract(Base):
    __tablename__ = "intent_contracts"

    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    goal = Column(String)
    allowed_actions = Column(JSON)  # List of strings
    allowed_resources = Column(JSON)
    allowed_destinations = Column(JSON)
    max_data_classes = Column(JSON)
    expires_at = Column(DateTime(timezone=True))
    signature = Column(String)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class Action(Base):
    __tablename__ = "actions"

    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    agent_id = Column(String, ForeignKey("agents.id"))
    tool_name = Column(String)
    arguments = Column(JSON)
    status = Column(String) # PENDING, ALLOWED, REVIEW, BLOCKED
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    is_demo = Column(Boolean, default=True)

class LedgerEntry(Base):
    __tablename__ = "ledger_entries"

    index = Column(Integer, primary_key=True, autoincrement=True)
    receipt_hash = Column(String)
    prev_hash = Column(String)
    entry_hash = Column(String)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
