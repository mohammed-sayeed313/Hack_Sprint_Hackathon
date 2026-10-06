import { FileText, Download, Calendar, ChevronDown, Search, RefreshCw, Copy, ShieldBan, ShieldAlert, ShieldCheck, Mail, Database, Wrench, CheckCircle2, XCircle, AlertTriangle, AlertCircle, Shield, FileOutput, Bot, Lock } from 'lucide-react';

const auditEvents = [
  { id: 1, title: 'Credential Export Attempt', status: 'BLOCKED', severity: 'Critical', time: 'Today, 14:32', agent: 'ResearchAgent', action: 'send_credentials()', icon: ShieldBan, color: 'text-decision-block', bg: 'bg-decision-block/10', active: true },
  { id: 2, title: 'Production Deployment', status: 'REVIEW', severity: 'High', time: 'Today, 12:18', agent: 'DevOpsAgent', action: 'deploy_to_production()', icon: ShieldAlert, color: 'text-decision-review', bg: 'bg-decision-review/10', active: false },
  { id: 3, title: 'Report Analysis', status: 'ALLOWED', severity: 'Low', time: 'Today, 11:03', agent: 'ResearchAgent', action: 'read_file()', icon: ShieldCheck, color: 'text-decision-allow', bg: 'bg-decision-allow/10', active: false },
  { id: 4, title: 'External Data Transfer', status: 'BLOCKED', severity: 'High', time: 'Today, 09:47', agent: 'DataAgent', action: 'export_data()', icon: ShieldBan, color: 'text-decision-block', bg: 'bg-decision-block/10', active: false },
  { id: 5, title: 'Email Sent (Internal)', status: 'ALLOWED', severity: 'Low', time: 'Today, 08:22', agent: 'EmailAgent', action: 'send_email()', icon: Mail, color: 'text-decision-allow', bg: 'bg-decision-allow/10', active: false },
  { id: 6, title: 'Database Query', status: 'ALLOWED', severity: 'Low', time: 'Yesterday, 16:08', agent: 'FinanceAgent', action: 'query_database()', icon: Database, color: 'text-decision-allow', bg: 'bg-decision-allow/10', active: false },
  { id: 7, title: 'Malicious Document Detected', status: 'BLOCKED', severity: 'Critical', time: 'Yesterday, 13:45', agent: 'ResearchAgent', action: 'read_file()', icon: ShieldBan, color: 'text-decision-block', bg: 'bg-decision-block/10', active: false },
  { id: 8, title: 'Tool Abuse Attempt', status: 'REVIEW', severity: 'Medium', time: 'Yesterday, 10:21', agent: 'DevOpsAgent', action: 'execute_command()', icon: Wrench, color: 'text-decision-review', bg: 'bg-decision-review/10', active: false },
];

const pipelineSteps = [
  { id: 1, name: 'Intent Verification', status: 'PASS', time: '14:32:11', desc: 'Matches user intent (evaluation request).', icon: CheckCircle2, color: 'text-decision-allow', bg: 'bg-decision-allow/20', badge: 'bg-decision-allow/20 text-decision-allow border-decision-allow/30' },
  { id: 2, name: 'Evidence Verification', status: 'FAIL', time: '14:32:14', desc: 'Evidence is untrusted and may contain malicious content.', icon: FileOutput, color: 'text-decision-block', bg: 'bg-decision-block/20', badge: 'bg-decision-block/20 text-decision-block border-decision-block/30' },
  { id: 3, name: 'Policy Verification', status: 'FAIL', time: '14:32:17', desc: 'Credential export to external destination is prohibited.', icon: Shield, color: 'text-decision-block', bg: 'bg-decision-block/20', badge: 'bg-decision-block/20 text-decision-block border-decision-block/30' },
  { id: 4, name: 'Permission Verification', status: 'FAIL', time: '14:32:20', desc: 'Agent does not have permission to access credentials.', icon: Lock, color: 'text-decision-block', bg: 'bg-decision-block/20', badge: 'bg-decision-block/20 text-decision-block border-decision-block/30' },
  { id: 5, name: 'Provenance Analysis', status: 'UNTRUSTED', time: '14:32:23', desc: 'Source is external and not trusted.', icon: AlertCircle, color: 'text-decision-review', bg: 'bg-decision-review/20', badge: 'bg-decision-review/20 text-decision-review border-decision-review/30' },
  { id: 6, name: 'Risk Engine', status: 'CRITICAL', time: '14:32:26', desc: 'Risk score 97/100 (credential + external + policy).', icon: AlertTriangle, color: 'text-decision-block', bg: 'bg-decision-block/20', badge: 'bg-decision-block/20 text-decision-block border-decision-block/30' },
  { id: 7, name: 'Challenger Agent', status: 'UNSAFE', time: '14:32:31', desc: 'Detected potential credential exfiltration and intent mismatch.', icon: Bot, color: 'text-decision-block', bg: 'bg-decision-block/20', badge: 'bg-decision-block/20 text-decision-block border-decision-block/30' },
  { id: 8, name: 'Decision Engine', status: 'BLOCK', time: '14:32:35', desc: 'Action blocked due to security policy violation.', icon: ShieldBan, color: 'text-decision-block', bg: 'bg-decision-block/20', badge: 'bg-decision-block/20 text-decision-block border-decision-block/30' },
  { id: 9, name: 'Audit & Explainability', status: 'COMPLETED', time: '14:32:37', desc: 'Audit event created (VRT-2026-000482).', icon: FileText, color: 'text-decision-allow', bg: 'bg-decision-allow/20', badge: 'bg-decision-allow/20 text-decision-allow border-decision-allow/30' },
];

export default function Audit() {
  return (
    <div className="p-8 max-w-[1600px] mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-8 h-8 text-white" />
            <h1 className="text-3xl font-heading font-bold text-white tracking-wide">Audit & Explainability</h1>
          </div>
          <p className="text-text-secondary text-sm mb-6 ml-11">
            View detailed audit logs and understand why decisions were made.
          </p>
          
          <div className="flex items-center gap-6 border-b border-border ml-11">
            <button className="pb-3 text-sm font-medium text-brand-blue border-b-2 border-brand-blue relative top-[1px]">Audit Logs</button>
            <button className="pb-3 text-sm font-medium text-text-secondary hover:text-white transition-colors">Verification Reports</button>
            <button className="pb-3 text-sm font-medium text-text-secondary hover:text-white transition-colors">Compliance</button>
            <button className="pb-3 text-sm font-medium text-text-secondary hover:text-white transition-colors">Export</button>
          </div>
        </div>
        
        <button className="flex items-center gap-2 px-4 py-2 border border-border text-text-secondary hover:text-white hover:bg-surface-hover rounded-md text-sm font-medium transition-colors mb-3">
          <Download className="w-4 h-4" />
          Export Logs
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center justify-between px-3 py-2 bg-surface border border-border rounded-md min-w-[160px] cursor-pointer hover:border-brand-blue/50 transition-colors">
          <div className="flex items-center gap-2 text-text-secondary">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">Last 7 days</span>
          </div>
          <ChevronDown className="w-4 h-4 text-text-muted" />
        </div>
        <div className="flex items-center justify-between px-3 py-2 bg-surface border border-border rounded-md min-w-[160px] cursor-pointer hover:border-brand-blue/50 transition-colors">
          <span className="text-sm text-text-secondary">All Decisions</span>
          <ChevronDown className="w-4 h-4 text-text-muted" />
        </div>
        <div className="flex items-center justify-between px-3 py-2 bg-surface border border-border rounded-md min-w-[160px] cursor-pointer hover:border-brand-blue/50 transition-colors">
          <span className="text-sm text-text-secondary">All Agents</span>
          <ChevronDown className="w-4 h-4 text-text-muted" />
        </div>
        
        <div className="flex-1 min-w-[250px] relative">
          <Search className="w-4 h-4 text-text-muted absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search audit events..." 
            className="w-full bg-surface border border-border rounded-md py-2 pl-9 pr-4 text-sm text-white placeholder-text-muted focus:outline-none focus:border-brand-blue/50"
          />
        </div>
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[800px]">
        
        {/* Left Column: Audit Events List */}
        <div className="lg:col-span-4 bg-surface-raised border border-border rounded-xl shadow-soft flex flex-col h-full overflow-hidden">
          <div className="p-4 border-b border-border flex items-center justify-between bg-surface/50">
            <div className="flex items-center gap-2 text-white font-semibold">
              <FileText className="w-4 h-4" />
              Audit Events
            </div>
            <div className="flex items-center gap-2 text-xs text-text-secondary">
              Total: 24
              <RefreshCw className="w-3.5 h-3.5 cursor-pointer hover:text-white" />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-2 space-y-2">
            {auditEvents.map(event => (
              <div 
                key={event.id} 
                className={`p-3 rounded-lg border cursor-pointer transition-all ${
                  event.active 
                  ? 'bg-brand-blue/10 border-brand-blue/30 shadow-[inset_4px_0_0_#00a3ff]' 
                  : 'bg-surface border-border hover:border-brand-blue/30 hover:bg-surface-hover'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <div className={`p-1.5 rounded-full ${event.bg}`}>
                      <event.icon className={`w-4 h-4 ${event.color}`} />
                    </div>
                    <h4 className={`text-sm font-semibold ${event.active ? 'text-white' : 'text-text-secondary'}`}>{event.title}</h4>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider ${
                      event.status === 'BLOCKED' ? 'bg-decision-block/20 text-decision-block' : 
                      event.status === 'REVIEW' ? 'bg-decision-review/20 text-decision-review' : 
                      'bg-decision-allow/20 text-decision-allow'
                    }`}>
                      {event.status}
                    </span>
                    <div className="flex items-center gap-1 text-[10px] text-text-muted">
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        event.severity === 'Critical' ? 'bg-decision-block' : 
                        event.severity === 'High' ? 'bg-decision-review' : 
                        'bg-decision-allow'
                      }`}></div>
                      {event.severity}
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-end">
                  <div className="text-[11px] text-text-muted space-y-0.5">
                    <div>{event.agent} <span className="text-text-secondary/50 mx-1">•</span> <span className="font-mono text-[10px] text-text-secondary">{event.action}</span></div>
                    {event.active && <div className="text-text-secondary/50">requests.</div>}
                  </div>
                  <div className="text-[10px] text-text-muted">{event.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Middle Column: Detailed View */}
        <div className="lg:col-span-5 flex flex-col h-full overflow-hidden">
          {/* Detail Header */}
          <div className="bg-surface-raised border border-border rounded-xl shadow-soft p-5 mb-4">
            <div className="flex items-start justify-between mb-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-decision-block/10 border border-decision-block/30 flex items-center justify-center shadow-[0_0_15px_rgba(255,71,87,0.2)]">
                  <ShieldBan className="w-6 h-6 text-decision-block" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className="text-xl font-bold text-white">Credential Export Attempt</h2>
                    <span className="text-[10px] font-bold bg-decision-block/20 text-decision-block px-2 py-0.5 rounded border border-decision-block/30">BLOCKED</span>
                  </div>
                  <div className="text-xs text-text-secondary flex items-center gap-2">
                    <span>ResearchAgent</span>
                    <span>•</span>
                    <span className="font-mono bg-surface px-1.5 py-0.5 rounded">send_credentials()</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-text-muted bg-surface px-2 py-1 rounded border border-border">
                VRT-2026-000482 <Copy className="w-3.5 h-3.5 cursor-pointer hover:text-white" />
              </div>
            </div>

            <div className="flex items-center gap-6 border-b border-border mt-6">
              <button className="pb-3 text-sm font-medium text-brand-blue border-b-2 border-brand-blue relative top-[1px]">Verification Pipeline</button>
              <button className="pb-3 text-sm font-medium text-text-secondary hover:text-white transition-colors">Details</button>
              <button className="pb-3 text-sm font-medium text-text-secondary hover:text-white transition-colors">Audit Trail</button>
              <button className="pb-3 text-sm font-medium text-text-secondary hover:text-white transition-colors">Execution</button>
            </div>
          </div>

          {/* Pipeline */}
          <div className="bg-surface-raised border border-border rounded-xl shadow-soft p-5 flex-1 overflow-y-auto">
            <h3 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-6">VERIFICATION PIPELINE</h3>
            
            <div className="relative space-y-0">
              <div className="absolute left-[15px] top-[20px] bottom-[20px] w-0.5 bg-border z-0"></div>
              
              {pipelineSteps.map((step) => (
                <div key={step.id} className="relative z-10 flex items-start gap-4 pb-6 last:pb-0 group">
                  <div className={`w-8 h-8 rounded-full ${step.bg} border border-border flex items-center justify-center shadow-sm relative z-10 mt-1`}>
                    <step.icon className={`w-4 h-4 ${step.color}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-text-muted font-medium">{step.id}.</span>
                        <h4 className="text-sm font-semibold text-white group-hover:text-brand-blue transition-colors">{step.name}</h4>
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${step.badge}`}>{step.status}</span>
                      </div>
                      <span className="text-[10px] text-text-muted">{step.time}</span>
                    </div>
                    <p className="text-xs text-text-secondary">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Summary & Decision */}
        <div className="lg:col-span-3 flex flex-col gap-4 h-full">
          {/* Security Decision */}
          <div className="bg-surface-raised border border-border rounded-xl shadow-soft p-5">
            <div className="flex items-center gap-2 text-xs font-medium text-text-secondary mb-4">
              <ShieldBan className="w-4 h-4 text-brand-blue" />
              Security Decision
            </div>
            
            <div className="flex gap-4 items-center">
              <div className="w-14 h-14 rounded-full bg-decision-block/10 border border-decision-block/30 flex items-center justify-center flex-shrink-0 relative">
                <XCircle className="w-8 h-8 text-decision-block" />
                <div className="absolute inset-0 rounded-full border-2 border-decision-block/20 animate-ping opacity-20"></div>
              </div>
              <div>
                <div className="text-xl font-bold text-decision-block mb-1">BLOCKED</div>
                <div className="text-xs text-text-secondary leading-tight">Action prevented before execution.</div>
              </div>
            </div>
          </div>

          {/* Risk Score & Checks */}
          <div className="bg-surface-raised border border-border rounded-xl shadow-soft p-5 flex-1 flex flex-col">
            <h3 className="text-sm font-semibold text-white mb-4">Risk Score</h3>
            
            <div className="flex items-center justify-between mb-8">
              <div className="relative w-24 h-12 overflow-hidden flex items-end justify-center">
                <div className="absolute top-0 w-24 h-24 rounded-full border-[8px] border-surface"></div>
                <div className="absolute top-0 w-24 h-24 rounded-full border-[8px] border-decision-block border-b-transparent border-r-transparent -rotate-45"></div>
                <div className="text-center pb-1">
                  <span className="text-lg font-bold text-white">97</span>
                  <span className="text-xs text-text-secondary">/100</span>
                </div>
              </div>
              <span className="text-[10px] font-bold bg-decision-block/20 text-decision-block border border-decision-block/30 px-3 py-1 rounded-full">CRITICAL</span>
            </div>
            
            <h3 className="text-sm font-semibold text-white mb-4">Check Summary</h3>
            <div className="space-y-3 mb-auto">
              <div className="flex justify-between items-center text-xs">
                <div className="flex items-center gap-2 text-text-secondary"><XCircle className="w-3.5 h-3.5 text-decision-block"/> Intent</div>
                <span className="font-bold text-decision-block">FAIL</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <div className="flex items-center gap-2 text-text-secondary"><FileOutput className="w-3.5 h-3.5 text-decision-block"/> Evidence</div>
                <span className="font-bold text-decision-block">FAIL</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <div className="flex items-center gap-2 text-text-secondary"><Shield className="w-3.5 h-3.5 text-decision-block"/> Policy</div>
                <span className="font-bold text-decision-block">FAIL</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <div className="flex items-center gap-2 text-text-secondary"><Lock className="w-3.5 h-3.5 text-decision-block"/> Permission</div>
                <span className="font-bold text-decision-block">FAIL</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <div className="flex items-center gap-2 text-text-secondary"><AlertCircle className="w-3.5 h-3.5 text-decision-review"/> Provenance</div>
                <span className="font-bold text-decision-review">UNTRUSTED</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <div className="flex items-center gap-2 text-text-secondary"><AlertTriangle className="w-3.5 h-3.5 text-decision-block"/> Risk</div>
                <span className="font-bold text-decision-block border-b border-decision-block/50 pb-0.5">CRITICAL</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <div className="flex items-center gap-2 text-text-secondary"><Bot className="w-3.5 h-3.5 text-decision-block"/> Challenger</div>
                <span className="font-bold text-decision-block border-b border-decision-block/50 pb-0.5">UNSAFE</span>
              </div>
            </div>

            <div className="mt-6 border-t border-border pt-4">
              <div className="flex gap-2 items-start text-xs mb-4">
                <AlertTriangle className="w-4 h-4 text-decision-block flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-text-secondary mb-1">Reason</div>
                  <p className="text-text-muted leading-relaxed">The action attempts to export credential data to an untrusted external destination, which violates security policies and agent permissions.</p>
                </div>
              </div>
              
              <button className="w-full flex items-center justify-center gap-2 py-2 bg-brand-blue/10 hover:bg-brand-blue/20 text-brand-blue rounded border border-brand-blue/30 transition-colors text-sm font-medium">
                <FileText className="w-4 h-4" />
                View Full Report
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Details */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-surface-raised border border-border rounded-xl p-4 shadow-soft">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center">
            <Shield className="w-4 h-4 text-brand-blue" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white tracking-wide">VERITAS Audit & Explainability</h4>
            <p className="text-[10px] text-text-secondary">Every decision is logged, traceable and fully explainable.</p>
          </div>
        </div>
        
        <div className="flex items-center gap-6 mt-4 md:mt-0">
          <div className="flex items-center gap-2 text-xs text-text-secondary">
            <Database className="w-3.5 h-3.5" /> Immutable Logs
          </div>
          <div className="flex items-center gap-2 text-xs text-text-secondary">
            <CheckCircle2 className="w-3.5 h-3.5" /> Compliance Ready
          </div>
          <div className="flex items-center gap-2 text-xs text-text-secondary">
            <Search className="w-3.5 h-3.5" /> Full Transparency
          </div>
        </div>
      </div>
      
    </div>
  );
}
