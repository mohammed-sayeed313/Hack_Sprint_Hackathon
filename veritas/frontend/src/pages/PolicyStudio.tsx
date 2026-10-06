import { Settings, Plus, Upload, Search, ChevronDown, ChevronLeft, ChevronRight, ShieldBan, ShieldAlert, X, Info, ShieldCheck, Link2, Beaker, BarChart3 } from 'lucide-react';

const policies = [
  { id: 1, title: 'PII External Destination Deny', severity: 'CRITICAL', desc: 'Blocks actions that attempt to send personally identifiable information (PII) to external destinations.', category: 'Data Protection', active: true, selected: true },
  { id: 2, title: 'Credential Exfiltration Deny', severity: 'CRITICAL', desc: 'Prevents any action that may expose credentials, secrets or authentication tokens.', category: 'Credential Security', active: true, selected: false },
  { id: 3, title: 'Production Deployment Approval', severity: 'HIGH', desc: 'Requires human approval for production environment deployments.', category: 'Environment', active: true, selected: false },
  { id: 4, title: 'Unknown Tool Deny', severity: 'HIGH', desc: 'Blocks the use of tools not registered for the agent or not explicitly allowed.', category: 'Agent Security', active: true, selected: false },
  { id: 5, title: 'Sensitive Data Export Deny', severity: 'CRITICAL', desc: 'Prevents export of sensitive data to external systems or untrusted destinations.', category: 'Data Protection', active: true, selected: false },
  { id: 6, title: 'External API Restriction', severity: 'MEDIUM', desc: 'Restricts calls to external APIs and unknown domains.', category: 'Network Security', active: true, selected: false },
];

export default function PolicyStudio() {
  return (
    <div className="p-8 max-w-[1600px] mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center shadow-glow">
              <Settings className="w-5 h-5 text-brand-blue" />
            </div>
            <h1 className="text-3xl font-heading font-bold text-white tracking-wide">Policy Studio</h1>
          </div>
          <p className="text-text-secondary text-sm mb-6 ml-14">
            Create, manage and enforce security policies for AI agent actions.
          </p>
          
          <div className="flex items-center gap-6 border-b border-border ml-14">
            <button className="pb-3 text-sm font-medium text-brand-blue border-b-2 border-brand-blue relative top-[1px]">Policy Library</button>
            <button className="pb-3 text-sm font-medium text-text-secondary hover:text-white transition-colors">Create Policy</button>
            <button className="pb-3 text-sm font-medium text-text-secondary hover:text-white transition-colors">Policy Categories</button>
            <button className="pb-3 text-sm font-medium text-text-secondary hover:text-white transition-colors">Policy Templates</button>
            <button className="pb-3 text-sm font-medium text-text-secondary hover:text-white transition-colors">Policy Analytics</button>
          </div>
        </div>
        
        <div className="flex items-center gap-3 mb-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-brand-blue hover:bg-brand-blue-hover text-white rounded-md text-sm font-medium transition-colors shadow-glow">
            <Plus className="w-4 h-4" />
            Create New Policy
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-border text-text-secondary hover:text-white hover:bg-surface-hover rounded-md text-sm font-medium transition-colors">
            <Upload className="w-4 h-4" />
            Import / Export
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[800px]">
        
        {/* Left Column: Policy List */}
        <div className="lg:col-span-3 bg-surface-raised border border-border rounded-xl shadow-soft flex flex-col h-full overflow-hidden">
          <div className="p-4 border-b border-border space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 text-text-muted absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search policies..." 
                className="w-full bg-surface border border-border rounded-md py-2 pl-9 pr-4 text-xs text-white placeholder-text-muted focus:outline-none focus:border-brand-blue/50"
              />
            </div>
            <div className="flex gap-2">
              <div className="flex-1 flex items-center justify-between px-2 py-1.5 bg-surface border border-border rounded cursor-pointer hover:border-brand-blue/50 text-xs text-text-secondary">
                All Categories <ChevronDown className="w-3 h-3 text-text-muted" />
              </div>
              <div className="flex-1 flex items-center justify-between px-2 py-1.5 bg-surface border border-border rounded cursor-pointer hover:border-brand-blue/50 text-xs text-text-secondary">
                All Status <ChevronDown className="w-3 h-3 text-text-muted" />
              </div>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-2 space-y-2">
            {policies.map(policy => (
              <div 
                key={policy.id} 
                className={`p-3 rounded-lg border cursor-pointer transition-all ${
                  policy.selected 
                  ? 'bg-brand-blue/10 border-brand-blue/50 shadow-[0_0_10px_rgba(0,163,255,0.1)]' 
                  : 'bg-surface border-border hover:border-brand-blue/30 hover:bg-surface-hover'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex gap-2">
                    <div className={`mt-0.5 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                      policy.severity === 'CRITICAL' ? 'bg-decision-block/20' : 
                      policy.severity === 'HIGH' ? 'bg-decision-review/20' : 'bg-decision-allow/20'
                    }`}>
                      {policy.severity === 'CRITICAL' ? <ShieldBan className="w-3.5 h-3.5 text-decision-block" /> : 
                       policy.severity === 'HIGH' ? <ShieldAlert className="w-3.5 h-3.5 text-decision-review" /> : 
                       <ShieldCheck className="w-3.5 h-3.5 text-decision-allow" />}
                    </div>
                    <div>
                      <h4 className={`text-[13px] font-semibold leading-tight mb-1 ${policy.selected ? 'text-white' : 'text-text-secondary'}`}>{policy.title}</h4>
                      <p className="text-[10px] text-text-muted leading-snug line-clamp-2">{policy.desc}</p>
                    </div>
                  </div>
                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ml-2 ${
                    policy.severity === 'CRITICAL' ? 'bg-decision-block/10 text-decision-block border-decision-block/20' : 
                    policy.severity === 'HIGH' ? 'bg-decision-review/10 text-decision-review border-decision-review/20' : 
                    'bg-decision-allow/10 text-decision-allow border-decision-allow/20'
                  }`}>
                    {policy.severity}
                  </span>
                </div>
                
                <div className="flex justify-between items-center mt-3 pt-2 border-t border-border/50">
                  <div className="text-[10px] text-brand-blue">Category: <span className="hover:underline">{policy.category}</span></div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.5)]"></div>
                    <span className="text-[10px] text-emerald-500 font-medium">Active</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-3 border-t border-border flex items-center justify-between text-xs text-text-secondary bg-surface/50">
             <span>Showing 1-5 of 12 policies</span>
             <div className="flex items-center gap-1">
                <button className="p-1 hover:text-white"><ChevronLeft className="w-3.5 h-3.5" /></button>
                <button className="w-6 h-6 rounded bg-brand-blue text-white flex items-center justify-center">1</button>
                <button className="w-6 h-6 rounded hover:bg-surface-hover flex items-center justify-center">2</button>
                <button className="w-6 h-6 rounded hover:bg-surface-hover flex items-center justify-center">3</button>
                <button className="p-1 hover:text-white"><ChevronRight className="w-3.5 h-3.5" /></button>
             </div>
          </div>
        </div>

        {/* Middle Column: Edit Policy */}
        <div className="lg:col-span-6 flex flex-col h-full overflow-y-auto pr-2 space-y-4">
          
          {/* Header section inside Edit */}
          <div className="bg-surface-raised border border-border rounded-xl shadow-soft p-5">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold text-white">Edit Policy</h2>
                <p className="text-xs text-text-secondary">Configure policy rules, conditions and actions.</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.5)]"></div>
                   <span className="text-[10px] font-bold text-emerald-500">Active</span>
                </div>
                <button className="px-4 py-2 bg-brand-blue hover:bg-brand-blue-hover text-white rounded text-xs font-medium transition-colors shadow-glow">
                  Save Changes
                </button>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4 mb-4">
              <div className="col-span-6 space-y-1.5">
                 <label className="text-xs font-medium text-text-secondary">Policy Name <span className="text-decision-block">*</span></label>
                 <input type="text" defaultValue="PII External Destination Deny" className="w-full bg-surface border border-border rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-blue/50" />
              </div>
              <div className="col-span-3 space-y-1.5">
                 <label className="text-xs font-medium text-text-secondary">Category <span className="text-decision-block">*</span></label>
                 <div className="w-full bg-surface border border-border rounded-md px-3 py-2 flex items-center justify-between cursor-pointer">
                    <span className="text-sm text-white">Data Protection</span>
                    <ChevronDown className="w-4 h-4 text-text-muted" />
                 </div>
              </div>
              <div className="col-span-3 space-y-1.5">
                 <label className="text-xs font-medium text-text-secondary">Priority <span className="text-decision-block">*</span></label>
                 <div className="w-full bg-surface border border-border rounded-md px-3 py-2 flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-2">
                       <ShieldBan className="w-3.5 h-3.5 text-decision-block" />
                       <span className="text-sm text-white">Critical</span>
                    </div>
                    <ChevronDown className="w-4 h-4 text-text-muted" />
                 </div>
              </div>
            </div>
            
            <div className="space-y-1.5">
               <label className="text-xs font-medium text-text-secondary">Description</label>
               <textarea rows={3} defaultValue="Blocks actions that attempt to send personally identifiable information (PII) to external destinations." className="w-full bg-surface border border-border rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-blue/50 resize-none"></textarea>
               <div className="flex justify-end text-[10px] text-text-muted">114/500</div>
            </div>
          </div>

          {/* Rule Conditions */}
          <div className="bg-surface-raised border border-border rounded-xl shadow-soft p-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-semibold text-white">Rule Conditions</h3>
                <p className="text-[11px] text-text-secondary">Define when this policy should be triggered.</p>
              </div>
              <button className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-blue/10 hover:bg-brand-blue/20 text-brand-blue border border-brand-blue/30 rounded text-xs font-medium transition-colors">
                <Plus className="w-3 h-3" /> Add Condition
              </button>
            </div>

            <div className="space-y-3">
               {[
                 { field: 'Data Classification', op: 'equals', val: 'PII, CONFIDENTIAL' },
                 { field: 'Destination Type', op: 'equals', val: 'EXTERNAL' },
                 { field: 'Action Type', op: 'equals', val: 'send_email, export_data' }
               ].map((cond, i) => (
                 <div key={i} className="flex gap-3 items-center group">
                    <div className="flex-1 bg-surface border border-border rounded px-3 py-2 flex items-center justify-between text-xs text-white">
                      {cond.field} <ChevronDown className="w-3.5 h-3.5 text-text-muted" />
                    </div>
                    <div className="w-24 bg-surface border border-border rounded px-3 py-2 flex items-center justify-between text-xs text-white">
                      {cond.op} <ChevronDown className="w-3.5 h-3.5 text-text-muted" />
                    </div>
                    <div className="flex-[1.5] bg-surface border border-border rounded px-3 py-2 flex items-center justify-between text-xs text-white">
                      {cond.val} <X className="w-3.5 h-3.5 text-text-muted hover:text-decision-block cursor-pointer" />
                    </div>
                 </div>
               ))}
            </div>
          </div>

          {/* Policy Action */}
          <div className="bg-surface-raised border border-border rounded-xl shadow-soft p-5">
             <div className="mb-4">
                <h3 className="text-sm font-semibold text-white">Policy Action</h3>
                <p className="text-[11px] text-text-secondary">What should happen when the policy is triggered?</p>
             </div>

             <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 p-3 rounded-lg border border-brand-blue/50 bg-brand-blue/5 cursor-pointer">
                   <div className="mt-1 w-4 h-4 rounded-full border-[4px] border-brand-blue bg-surface"></div>
                   <div>
                      <div className="flex items-center gap-2 mb-1">
                         <ShieldBan className="w-4 h-4 text-decision-block" />
                         <span className="text-sm font-semibold text-white">Block Action</span>
                      </div>
                      <p className="text-xs text-text-secondary">Immediately prevent the action from executing.</p>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                   <div className="flex items-start gap-3 p-3 rounded-lg border border-border bg-surface hover:border-brand-blue/30 cursor-pointer">
                      <div className="mt-1 w-4 h-4 rounded-full border-2 border-text-muted"></div>
                      <div>
                         <span className="text-sm font-medium text-white block mb-1">Require Human Review</span>
                         <p className="text-[10px] text-text-secondary">Send to human for approval.</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-3 p-3 rounded-lg border border-border bg-surface hover:border-brand-blue/30 cursor-pointer">
                      <div className="mt-1 w-4 h-4 rounded-full border-2 border-text-muted"></div>
                      <div>
                         <span className="text-sm font-medium text-white block mb-1">Log Only</span>
                         <p className="text-[10px] text-text-secondary">Allow but log the event.</p>
                      </div>
                   </div>
                </div>
             </div>

             <div className="bg-brand-blue/10 border border-brand-blue/30 rounded-lg p-3 flex items-start gap-3">
                <Info className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                <p className="text-xs text-brand-blue leading-relaxed">
                   This policy will be evaluated during the verification pipeline before the final decision is made.
                </p>
             </div>
          </div>
        </div>

        {/* Right Column: Testing & Usage */}
        <div className="lg:col-span-3 flex flex-col gap-4 h-full">
           
           {/* Policy Testing */}
           <div className="bg-surface-raised border border-border rounded-xl shadow-soft p-5">
              <div className="flex items-center justify-between mb-4">
                 <div className="flex items-center gap-2">
                    <Beaker className="w-4 h-4 text-brand-blue" />
                    <h3 className="text-sm font-semibold text-white">Policy Testing</h3>
                 </div>
                 <button className="px-3 py-1 bg-brand-blue hover:bg-brand-blue-hover text-white rounded text-xs font-medium transition-colors shadow-glow">
                    Run Test
                 </button>
              </div>
              <p className="text-xs text-text-secondary mb-4">Test this policy with a sample action.</p>
              
              <div className="space-y-1.5 mb-4">
                 <label className="text-[11px] font-medium text-text-secondary">Test Data</label>
                 <div className="w-full bg-surface border border-border rounded px-3 py-2 flex items-center justify-between text-xs text-white cursor-pointer">
                    Sample PII Email Export <ChevronDown className="w-3.5 h-3.5 text-text-muted" />
                 </div>
              </div>

              <div className="space-y-1.5">
                 <label className="text-[11px] font-medium text-text-secondary">Result</label>
                 <div className="bg-decision-block/10 border border-decision-block/30 rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <ShieldBan className="w-5 h-5 text-decision-block" />
                       <div>
                          <div className="text-sm font-bold text-decision-block mb-0.5">BLOCKED</div>
                          <div className="text-[9px] text-text-secondary">Policy triggered: PII External Destination Deny</div>
                       </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-text-muted" />
                 </div>
              </div>
           </div>

           {/* Policy Usage */}
           <div className="bg-surface-raised border border-border rounded-xl shadow-soft p-5">
              <div className="flex items-center gap-2 mb-6">
                 <BarChart3 className="w-4 h-4 text-brand-blue" />
                 <h3 className="text-sm font-semibold text-white">Policy Usage</h3>
              </div>

              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                 <div>
                    <div className="text-[11px] text-text-secondary mb-1">Total Evaluations</div>
                    <div className="text-xl font-bold text-white">1,248</div>
                    <div className="text-[10px] text-emerald-500 font-medium flex items-center mt-1">↑ 12%</div>
                 </div>
                 <div className="text-right">
                    <div className="text-[11px] text-text-secondary mb-1">Blocked Actions</div>
                    <div className="text-xl font-bold text-white">312</div>
                    <div className="text-[10px] text-decision-block font-medium flex items-center justify-end mt-1">↑ 8%</div>
                 </div>
                 <div>
                    <div className="text-[11px] text-text-secondary mb-1">Review Actions</div>
                    <div className="text-xl font-bold text-white">46</div>
                    <div className="text-[10px] text-decision-review font-medium flex items-center mt-1">↑ 3%</div>
                 </div>
                 <div className="text-right">
                    <div className="text-[11px] text-text-secondary mb-1">Allowed Actions</div>
                    <div className="text-xl font-bold text-white">890</div>
                    <div className="text-[10px] text-emerald-500 font-medium flex items-center justify-end mt-1">↑ 10%</div>
                 </div>
              </div>
           </div>

           {/* Related Policies */}
           <div className="bg-surface-raised border border-border rounded-xl shadow-soft p-5 flex-1">
              <div className="flex items-center justify-between mb-4">
                 <div className="flex items-center gap-2">
                    <Link2 className="w-4 h-4 text-brand-blue" />
                    <h3 className="text-sm font-semibold text-white">Related Policies</h3>
                 </div>
                 <span className="text-[11px] text-brand-blue hover:underline cursor-pointer">View All</span>
              </div>
              
              <div className="space-y-3">
                 <div className="flex justify-between items-center bg-surface border border-border rounded p-2 text-xs">
                    <div className="flex items-center gap-2">
                       <ShieldBan className="w-3.5 h-3.5 text-decision-block" />
                       <span className="text-text-secondary hover:text-white cursor-pointer truncate max-w-[140px]">Credential Exfiltration Deny</span>
                    </div>
                    <span className="text-[9px] font-bold bg-decision-block/10 text-decision-block border border-decision-block/20 px-1.5 py-0.5 rounded">CRITICAL</span>
                 </div>
                 <div className="flex justify-between items-center bg-surface border border-border rounded p-2 text-xs">
                    <div className="flex items-center gap-2">
                       <ShieldBan className="w-3.5 h-3.5 text-decision-block" />
                       <span className="text-text-secondary hover:text-white cursor-pointer truncate max-w-[140px]">Sensitive Data Export Deny</span>
                    </div>
                    <span className="text-[9px] font-bold bg-decision-block/10 text-decision-block border border-decision-block/20 px-1.5 py-0.5 rounded">CRITICAL</span>
                 </div>
                 <div className="flex justify-between items-center bg-surface border border-border rounded p-2 text-xs">
                    <div className="flex items-center gap-2">
                       <ShieldAlert className="w-3.5 h-3.5 text-decision-review" />
                       <span className="text-text-secondary hover:text-white cursor-pointer truncate max-w-[140px]">External API Restriction</span>
                    </div>
                    <span className="text-[9px] font-bold bg-decision-review/10 text-decision-review border border-decision-review/20 px-1.5 py-0.5 rounded">MEDIUM</span>
                 </div>
                 <div className="flex justify-between items-center bg-surface border border-border rounded p-2 text-xs">
                    <div className="flex items-center gap-2">
                       <ShieldAlert className="w-3.5 h-3.5 text-decision-review" />
                       <span className="text-text-secondary hover:text-white cursor-pointer truncate max-w-[140px]">Unknown Tool Deny</span>
                    </div>
                    <span className="text-[9px] font-bold bg-decision-review/10 text-decision-review border border-decision-review/20 px-1.5 py-0.5 rounded">HIGH</span>
                 </div>
              </div>
           </div>

        </div>
      </div>
      
    </div>
  );
}
