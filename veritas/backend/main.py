from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="VERITAS API",
    description="Zero-Trust Action Verification for Autonomous AI Agents",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Restrict this in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "service": "veritas-api"}

@app.get("/api/health/detail")
async def health_check_detail():
    return {
        "status": "healthy",
        "service": "veritas-api",
        "database": "connected",
        "engine": "ready",
        "demo_engine": "ready",
        "llm_provider": "mock"
    }

from pydantic import BaseModel
from typing import Dict, Any, Optional
from engine import verify_action
from database import SessionLocal
from models import Action
import json

class ActionRequest(BaseModel):
    user_intent: str
    agent_id: str
    tool_name: str
    proposed_action: str
    arguments: Dict[str, Any]
    evidence: str
    destination: str
    data_classification: str
    environment: str

@app.post("/api/actions/verify")
async def verify_action_endpoint(request: ActionRequest):
    # Mock agent trust based on agent name
    agent_trust = 100
    if "Email" in request.agent_id:
        agent_trust = 40
        
    # Build engine payload
    engine_payload = {
        "agent_id": request.agent_id,
        "tool_name": request.tool_name,
        "arguments": request.arguments,
        "intent": request.user_intent,
        "evidence": request.evidence,
        "destination": request.destination,
        "data_classification": request.data_classification,
        "environment": request.environment
    }
        
    result = verify_action(engine_payload, agent_trust)
    
    # Save to database
    db = SessionLocal()
    try:
        new_action = Action(
            agent_id=request.agent_id,
            tool_name=request.tool_name,
            arguments=request.arguments,
            status=result["decision"]["result"]
        )
        db.add(new_action)
        db.commit()
    finally:
        db.close()
        
    return result

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
