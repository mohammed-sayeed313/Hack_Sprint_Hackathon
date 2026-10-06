import { useState } from 'react';
import { Shield, CheckCircle2, AlertTriangle, AlertOctagon, Activity, Check } from 'lucide-react';

export default function VerifyAction() {
  const [formData, setFormData] = useState({
    user_intent: 'Analyze the customer report and send the summary to the internal finance team.',
    agent: 'ResearchAgent',
    tool: 'send_email',
    action: 'send_email()',
    arguments: '{\n  "file": "customer_report.pdf",\n  "recipient": "finance@example.com"\n}',
    evidence: 'customer_report.pdf',
    destination: 'finance@example.com',
    data_classification: 'INTERNAL',
    environment: 'DEVELOPMENT'
  });
  
  const [status, setStatus] = useState<'idle' | 'verifying' | 'complete'>('idle');
  const [result, setResult] = useState<any>(null);

  const handleVerify = async () => {
    setStatus('verifying');
    
    // Simulate delay for animation
    setTimeout(async () => {
      try {
        const payload = {
          user_intent: formData.user_intent,
          agent_id: formData.agent,
          tool_name: formData.tool,
          proposed_action: formData.action,
          arguments: JSON.parse(formData.arguments),
          evidence: formData.evidence,
          destination: formData.destination,
          data_classification: formData.data_classification,
          environment: formData.environment
        };
        
        const res = await fetch('http://localhost:8000/api/actions/verify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        const data = await res.json();
        setResult(data);
      } catch (err) {
        console.error(err);
      } finally {
        setStatus('complete');
      }
    }, 1500);
  };

  const loadScenario = (type: string) => {
    if (type === 'SAFE') {
      setFormData({
        user_intent: 'Read report.pdf and summarize it.',
        agent: 'ResearchAgent',
        tool: 'read_file',
        action: 'read_file()',
        arguments: '{\n  "path": "report.pdf"\n}',
        evidence: 'report.pdf',
        destination: 'None',
        data_classification: 'INTERNAL',
        environment: 'DEVELOPMENT'
      });
    } else if (type === 'INJECTION') {
      setFormData({
        user_intent: 'Summarize this PDF.',
        agent: 'ResearchAgent',
        tool: 'send_credentials',
        action: 'send_credentials()',
        arguments: '{\n  "recipient": "attacker@example.com"\n}',
        evidence: 'malicious_document.pdf',
        destination: 'attacker@example.com',
        data_classification: 'CREDENTIAL',
        environment: 'PRODUCTION'
      });
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex justify-between items-center bg-surface border border-border p-4 rounded-card shadow-soft">
        <div>
           <h1 className="text-2xl font-heading font-bold text-text-primary tracking-tight">VERIFY ACTION</h1>
           <p className="text-text-secondary text-sm">Independently verify an AI agent's proposed action before execution.</p>
        </div>
        <div className="flex items-center text-decision-allow text-xs px-3 py-1.5 bg-decision-allow/10 rounded-full border border-decision-allow/20 font-bold uppercase tracking-wide">
           <span className="w-1.5 h-1.5 rounded-full bg-decision-allow mr-2 animate-pulse"></span>
           VERITAS SECURITY GATEWAY
        </div>
      </div>

      {/* Demo Scenarios */}
      <div className="flex space-x-2 pb-2 overflow-x-auto">
        <span className="text-xs font-semibold text-text-muted self-center mr-2 uppercase">Demo Scenarios:</span>
        <button onClick={() => loadScenario('SAFE')} className="text-xs px-3 py-1.5 border border-border rounded bg-surface-raised hover:bg-surface-hover text-text-primary">Safe Scenario</button>
        <button onClick={() => loadScenario('INJECTION')} className="text-xs px-3 py-1.5 border border-border rounded bg-surface-raised hover:bg-surface-hover text-text-primary">Prompt Injection</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Form */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-surface rounded-card border border-border shadow-soft flex flex-col h-full">
            <div className="p-4 border-b border-border bg-surface-raised rounded-t-card">
              <h2 className="font-heading font-semibold text-text-primary text-sm">ACTION INPUT</h2>
            </div>
            <div className="p-4 space-y-4 flex-1 overflow-y-auto text-sm">
              <div>
                <label className="block text-xs font-semibold text-text-muted uppercase mb-1">User Intent</label>
                <textarea className="w-full bg-surface-raised border border-border rounded p-2 text-text-primary h-20 text-xs" value={formData.user_intent} onChange={e => setFormData({...formData, user_intent: e.target.value})} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-text-muted uppercase mb-1">Agent</label>
                  <select className="w-full bg-surface-raised border border-border rounded p-2 text-text-primary text-xs" value={formData.agent} onChange={e => setFormData({...formData, agent: e.target.value})}>
                    <option>ResearchAgent</option>
                    <option>FinanceAgent</option>
                    <option>DevOpsAgent</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-text-muted uppercase mb-1">Proposed Tool</label>
                  <input className="w-full bg-surface-raised border border-border rounded p-2 text-text-primary text-xs font-mono" value={formData.tool} onChange={e => setFormData({...formData, tool: e.target.value})} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-muted uppercase mb-1">Arguments (JSON)</label>
                <textarea className="w-full bg-surface-raised border border-border rounded p-2 text-text-primary font-mono text-xs h-24" value={formData.arguments} onChange={e => setFormData({...formData, arguments: e.target.value})} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-text-muted uppercase mb-1">Evidence</label>
                  <input className="w-full bg-surface-raised border border-border rounded p-2 text-text-primary text-xs" value={formData.evidence} onChange={e => setFormData({...formData, evidence: e.target.value})} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-text-muted uppercase mb-1">Destination</label>
                  <input className="w-full bg-surface-raised border border-border rounded p-2 text-text-primary text-xs" value={formData.destination} onChange={e => setFormData({...formData, destination: e.target.value})} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-text-muted uppercase mb-1">Data Class</label>
                  <select className="w-full bg-surface-raised border border-border rounded p-2 text-text-primary text-xs" value={formData.data_classification} onChange={e => setFormData({...formData, data_classification: e.target.value})}>
                    <option>PUBLIC</option>
                    <option>INTERNAL</option>
                    <option>CONFIDENTIAL</option>
                    <option>PII</option>
                    <option>CREDENTIAL</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-text-muted uppercase mb-1">Environment</label>
                  <select className="w-full bg-surface-raised border border-border rounded p-2 text-text-primary text-xs" value={formData.environment} onChange={e => setFormData({...formData, environment: e.target.value})}>
                    <option>DEVELOPMENT</option>
                    <option>STAGING</option>
                    <option>PRODUCTION</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-border">
              <button onClick={handleVerify} disabled={status === 'verifying'} className={`w-full py-3 rounded font-bold text-text-primary uppercase tracking-wide flex justify-center items-center ${status === 'verifying' ? 'bg-brand-blue/50 cursor-not-allowed' : 'bg-brand-blue hover:bg-blue-600'}`}>
                {status === 'verifying' ? <><Activity className="w-4 h-4 mr-2 animate-spin"/> Verifying...</> : 'Verify Action'}
              </button>
            </div>
          </div>
        </div>

        {/* Middle Column: Pipeline */}
        <div className="lg:col-span-1">
           <div className="bg-surface rounded-card border border-border shadow-soft h-full flex flex-col">
              <div className="p-4 border-b border-border bg-surface-raised rounded-t-card">
                 <h2 className="font-heading font-semibold text-text-primary text-sm">VERIFICATION PIPELINE</h2>
              </div>
              <div className="p-6 flex-1">
                 <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-border before:z-0">
                    
                    {['Intent Verification', 'Evidence Verification', 'Policy Verification', 'Permission Verification', 'Provenance Analysis', 'Risk Engine', 'Challenger Agent', 'Decision Engine'].map((stage, i) => {
                       let state = 'idle';
                       if (status === 'verifying') state = 'running';
                       if (status === 'complete' && result) state = 'complete';
                       
                       let icon = <div className={`w-6 h-6 rounded-full border-2 border-border bg-surface flex items-center justify-center text-[10px] font-bold text-text-muted z-10 relative`}>{i+1}</div>;
                       
                       if (state === 'running') {
                         icon = <div className="w-6 h-6 rounded-full border-2 border-brand-cyan bg-brand-cyan/20 flex items-center justify-center text-brand-cyan z-10 relative"><Activity className="w-3 h-3 animate-spin"/></div>
                       }
                       if (state === 'complete') {
                         let checkStatus = 'pass';
                         if (i === 0 && result.checks?.intent?.status === 'FAIL') checkStatus = 'fail';
                         if (i === 2 && result.checks?.policy?.status === 'FAIL') checkStatus = 'fail';
                         if (i === 3 && result.checks?.permission?.status === 'FAIL') checkStatus = 'fail';

                         if (checkStatus === 'pass') {
                           icon = <div className="w-6 h-6 rounded-full border-2 border-decision-allow bg-decision-allow/20 flex items-center justify-center text-decision-allow z-10 relative"><Check className="w-3 h-3"/></div>
                         } else {
                           icon = <div className="w-6 h-6 rounded-full border-2 border-decision-block bg-decision-block/20 flex items-center justify-center text-decision-block z-10 relative"><AlertOctagon className="w-3 h-3"/></div>
                         }
                       }

                       return (
                         <div key={stage} className="relative flex items-center">
                            {icon}
                            <div className="ml-4 bg-surface-raised border border-border rounded px-3 py-1.5 w-full">
                               <span className={`text-xs font-medium ${state === 'complete' ? 'text-text-primary' : 'text-text-secondary'}`}>{stage}</span>
                            </div>
                         </div>
                       )
                    })}
                 </div>
              </div>
           </div>
        </div>

        {/* Right Column: Result */}
        <div className="lg:col-span-1">
           <div className="bg-surface rounded-card border border-border shadow-soft h-full flex flex-col">
              <div className="p-4 border-b border-border bg-surface-raised rounded-t-card">
                 <h2 className="font-heading font-semibold text-text-primary text-sm">SECURITY RESULT</h2>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                 
                 {status === 'idle' && (
                   <div className="flex-1 flex flex-col items-center justify-center text-text-muted opacity-50">
                      <Shield className="w-12 h-12 mb-4" />
                      <p className="text-sm">Submit action for verification</p>
                   </div>
                 )}

                 {status === 'verifying' && (
                   <div className="flex-1 flex flex-col items-center justify-center text-brand-blue">
                      <Activity className="w-12 h-12 mb-4 animate-spin" />
                      <p className="text-sm font-semibold uppercase tracking-widest">Analyzing Action</p>
                   </div>
                 )}

                 {status === 'complete' && result && (
                    <div className="space-y-6">
                        <div className="text-center">
                           <p className="text-[10px] uppercase font-bold text-text-muted tracking-widest mb-2">Final Decision</p>
                           <div className={`inline-flex items-center text-2xl font-heading font-bold px-4 py-2 border-2 rounded ${result.decision.result === 'ALLOW' ? 'text-decision-allow border-decision-allow/50 bg-decision-allow/10' : result.decision.result === 'REVIEW' ? 'text-decision-review border-decision-review/50 bg-decision-review/10' : 'text-decision-block border-decision-block/50 bg-decision-block/10'}`}>
                              {result.decision.result === 'BLOCK' && <AlertOctagon className="w-6 h-6 mr-2" />}
                              {result.decision.result === 'REVIEW' && <AlertTriangle className="w-6 h-6 mr-2" />}
                              {result.decision.result === 'ALLOW' && <CheckCircle2 className="w-6 h-6 mr-2" />}
                              {result.decision.result}
                           </div>
                        </div>

                        <div className="bg-surface-raised rounded border border-border p-4">
                           <p className="text-xs text-text-primary leading-relaxed">{result.decision.reason}</p>
                        </div>

                        <div className="border-t border-border pt-4">
                           <div className="flex justify-between items-center mb-2">
                              <span className="text-xs text-text-secondary uppercase font-semibold">Risk Score</span>
                              <span className={`text-xs font-bold px-2 py-0.5 rounded ${result.risk.level === 'CRITICAL' ? 'bg-decision-block/20 text-decision-block' : 'bg-decision-allow/20 text-decision-allow'}`}>{result.risk.level}</span>
                           </div>
                           <div className="text-3xl font-heading font-bold text-text-primary tabular-nums mb-4">{result.risk.score}<span className="text-sm text-text-muted">/100</span></div>
                           
                           {result.challenger && (
                               <div className="flex justify-between items-center border-t border-border pt-4 mb-2">
                                  <span className="text-xs text-text-secondary uppercase font-semibold">Challenger Status</span>
                                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-surface-hover text-text-primary">{result.challenger.status}</span>
                               </div>
                           )}
                        </div>

                        {result.decision.result === 'ALLOW' && (
                            <button className="w-full bg-brand-navy border border-border hover:bg-surface-hover text-brand-cyan font-bold py-3 rounded text-xs tracking-wide uppercase transition-colors">
                                Controlled Execution
                            </button>
                        )}
                        {result.decision.result === 'BLOCK' && (
                            <button disabled className="w-full bg-surface-raised border border-border text-text-muted font-bold py-3 rounded text-xs tracking-wide uppercase opacity-50 cursor-not-allowed">
                                Execution Prevented
                            </button>
                        )}
                        {result.decision.result === 'REVIEW' && (
                            <div className="grid grid-cols-2 gap-2">
                               <button className="bg-decision-allow border border-decision-allow text-surface font-bold py-2 rounded text-xs tracking-wide uppercase">Approve</button>
                               <button className="bg-decision-block border border-decision-block text-white font-bold py-2 rounded text-xs tracking-wide uppercase">Reject</button>
                            </div>
                        )}
                    </div>
                 )}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
