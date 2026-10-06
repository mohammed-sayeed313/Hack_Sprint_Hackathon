import json
import hashlib
import hmac
import time
from typing import Dict, Any, List

SECRET_KEY = b"VERITAS_SUPER_SECRET_HMAC_KEY_REPLACE_IN_PROD"

def generate_receipt(decision_trace: Dict[str, Any]) -> str:
    # Deterministic JSON serialization
    canonical = json.dumps(decision_trace, sort_keys=True, separators=(",", ":"))
    # In a real impl, this would be an Ed25519 signature. Using HMAC for prototype.
    signature = hmac.new(SECRET_KEY, canonical.encode(), hashlib.sha256).hexdigest()
    return signature

def evaluate_risk(action: Dict[str, Any], agent_trust: int) -> dict:
    # Prototype Risk Model
    score = 0
    reasons = []
    
    # 1. Action Criticality (mock logic)
    critical_tools = ["deploy_to_production", "export_customer_data"]
    if action.get("tool_name") in critical_tools:
        score += 20
        reasons.append("Critical action requested")
    
    # 2. Agent Trust anomaly
    if agent_trust < 50:
        score += 10
        reasons.append("Low agent trust score")
        
    band = "LOW"
    if score >= 30: band = "MEDIUM"
    if score >= 60: band = "HIGH"
    if score >= 80: band = "CRITICAL"
    
    return {"score": score, "band": band, "reasons": reasons}

def challenger_mock(action: Dict[str, Any]) -> dict:
    tool = action.get("tool_name", "")
    if tool == "send_credentials":
        return {"verdict": "UNSAFE", "rationale": "Sending credentials externally is strictly prohibited."}
    if tool == "export_customer_data":
        return {"verdict": "UNCERTAIN", "rationale": "Bulk export of customer data requires explicit approval."}
    return {"verdict": "SAFE", "rationale": "Action appears benign and bounded."}

def verify_action(action: Dict[str, Any], agent_trust: int) -> dict:
    risk = evaluate_risk(action, agent_trust)
    challenger = challenger_mock(action)
    
    # Precedence Rules
    decision = "ALLOW"
    reason = "Safe"
    
    if challenger["verdict"] == "UNSAFE":
        decision = "BLOCK"
        reason = challenger["rationale"]
    elif challenger["verdict"] == "UNCERTAIN" or risk["band"] in ["HIGH", "CRITICAL"]:
        decision = "REVIEW"
        reason = challenger["rationale"] if challenger["verdict"] == "UNCERTAIN" else "High risk action"
    
    trace = {
        "action": action,
        "risk": risk,
        "challenger": challenger,
        "decision": decision,
        "reason": reason,
        "timestamp": time.time()
    }
    
    receipt = generate_receipt(trace)
    trace["receipt"] = receipt
    
    return trace
