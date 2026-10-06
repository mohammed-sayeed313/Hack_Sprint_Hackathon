
import { Shield, CheckCircle2, AlertTriangle, AlertOctagon, Plus, Activity, Lock, Users, Settings, Zap, ArrowUpRight } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const KpiCard = ({ icon: Icon, title, value, delta, pct, color }: any) => (
  <div className="bg-surface rounded-card border border-border p-4 flex flex-col justify-between shadow-soft">
    <div className="flex items-center space-x-3 mb-2">
      <div className={`p-2 rounded bg-${color}/10 border border-${color}/20`}>
        <Icon className={`w-5 h-5 text-${color}`} />
      </div>
      <div className="flex flex-col">
        <span className="text-text-muted text-xs font-medium uppercase tracking-wider">{title}</span>
        <div className="flex items-baseline space-x-2">
          <span className="text-3xl font-heading font-semibold text-white tabular-nums">{value}</span>
          {delta && <span className="text-decision-allow text-xs font-medium flex items-center"><ArrowUpRight className="w-3 h-3 mr-0.5" /> {delta}</span>}
          {pct && <span className="text-text-muted text-xs">{pct}</span>}
        </div>
      </div>
    </div>
  </div>
);

const QuickAccessCard = ({ icon: Icon, title, subtitle }: any) => (
  <div className="flex items-center space-x-3 p-3 rounded-lg border border-border bg-surface-raised hover:bg-surface-hover cursor-pointer transition-colors mb-2">
      <div className="p-2 rounded bg-brand-blue/10 text-brand-blue">
          <Icon className="w-4 h-4" />
      </div>
      <div>
          <h4 className="text-sm text-white font-medium">{title}</h4>
          <p className="text-[10px] text-text-muted">{subtitle}</p>
      </div>
  </div>
);

const data = [
  { time: '00:00', allowed: 120, review: 40, blocked: 20 },
  { time: '04:00', allowed: 90, review: 30, blocked: 15 },
  { time: '08:00', allowed: 150, review: 50, blocked: 25 },
  { time: '12:00', allowed: 110, review: 45, blocked: 20 },
  { time: '16:00', allowed: 160, review: 60, blocked: 35 },
  { time: '20:00', allowed: 130, review: 40, blocked: 30 },
  { time: '24:00', allowed: 140, review: 55, blocked: 25 },
];

const decisionData = [
  { name: 'Allowed', value: 3942, color: '#22C55E' },
  { name: 'Review', value: 614, color: '#F5A524' },
  { name: 'Blocked', value: 265, color: '#EF4444' },
];

const riskData = [
  { name: 'Low', value: 52, color: '#22C55E' },
  { name: 'Medium', value: 28, color: '#F5A524' },
  { name: 'High', value: 15, color: '#F97316' },
  { name: 'Critical', value: 5, color: '#EF4444' },
];

export default function MissionControl() {
  return (
    <div className="p-6 max-w-[1600px] mx-auto space-y-4">
      
      {/* Header Area */}
      <div className="flex justify-between items-end mb-6">
        <div>
          <h1 className="text-3xl font-heading font-bold mb-1 tracking-tight">Mission Control</h1>
          <p className="text-text-secondary text-sm">Monitor, verify and secure AI agent actions in real time.</p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-brand-blue hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center transition-colors">
            <Plus className="w-4 h-4 mr-2" /> Verify Action
          </button>
          <button className="bg-surface-raised border border-border hover:bg-surface-hover text-white px-4 py-2 rounded-md text-sm font-medium flex items-center transition-colors">
            Explore Attack Lab
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
        {/* Main Left Column (Takes up 3/4) */}
        <div className="xl:col-span-3 space-y-4">
            {/* KPI Row (5 cards) */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                <KpiCard icon={Shield} title="Protected Agents" value="12" delta="2 since last 24h" color="brand-blue" />
                <KpiCard icon={Activity} title="Actions Verified" value="4,821" delta="12% since last 24h" color="brand-cyan" />
                <KpiCard icon={CheckCircle2} title="Actions Allowed" value="3,942" pct="82% of total" color="decision-allow" />
                <KpiCard icon={AlertTriangle} title="Human Reviews" value="614" pct="13% of total" color="decision-review" />
                <KpiCard icon={AlertOctagon} title="Threats Blocked" value="265" delta="5% of total" color="decision-block" />
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-[250px]">
                {/* Area Chart */}
                <div className="bg-surface rounded-card border border-border p-4 shadow-soft lg:col-span-2">
                    <h3 className="text-xs font-semibold text-text-secondary uppercase mb-4">Action Decisions (Last 24 Hours)</h3>
                    <div className="h-[180px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorAllowed" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#22C55E" stopOpacity={0.3}/>
                                        <stop offset="95%" stopColor="#22C55E" stopOpacity={0}/>
                                    </linearGradient>
                                    <linearGradient id="colorReview" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#F5A524" stopOpacity={0.3}/>
                                        <stop offset="95%" stopColor="#F5A524" stopOpacity={0}/>
                                    </linearGradient>
                                    <linearGradient id="colorBlocked" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3}/>
                                        <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="time" stroke="#4B5563" fontSize={10} tickLine={false} axisLine={false} />
                                <YAxis stroke="#4B5563" fontSize={10} tickLine={false} axisLine={false} />
                                <Tooltip contentStyle={{ backgroundColor: '#0A1A30', borderColor: '#16314F', fontSize: '12px' }} />
                                <Area type="monotone" dataKey="allowed" stroke="#22C55E" fillOpacity={1} fill="url(#colorAllowed)" />
                                <Area type="monotone" dataKey="review" stroke="#F5A524" fillOpacity={1} fill="url(#colorReview)" />
                                <Area type="monotone" dataKey="blocked" stroke="#EF4444" fillOpacity={1} fill="url(#colorBlocked)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Donut Charts side-by-side */}
                <div className="bg-surface rounded-card border border-border p-4 shadow-soft flex">
                   <div className="w-1/2 flex flex-col items-center border-r border-border">
                       <h3 className="text-[10px] font-semibold text-text-secondary uppercase mb-2">Decision Distribution</h3>
                       <div className="h-[120px] w-[120px]">
                           <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie data={decisionData} innerRadius={40} outerRadius={55} paddingAngle={2} dataKey="value" stroke="none">
                                        {decisionData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                </PieChart>
                           </ResponsiveContainer>
                       </div>
                   </div>
                   <div className="w-1/2 flex flex-col items-center">
                       <h3 className="text-[10px] font-semibold text-text-secondary uppercase mb-2">Risk Distribution</h3>
                       <div className="h-[120px] w-[120px]">
                           <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie data={riskData} innerRadius={40} outerRadius={55} paddingAngle={2} dataKey="value" stroke="none">
                                        {riskData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                </PieChart>
                           </ResponsiveContainer>
                       </div>
                   </div>
                </div>
            </div>

            {/* Live Action Monitor */}
            <div className="bg-surface rounded-card border border-border shadow-soft flex flex-col overflow-hidden">
                <div className="p-3 border-b border-border flex justify-between items-center bg-surface-raised">
                    <h3 className="font-heading font-semibold text-white flex items-center text-sm">
                        <span className="w-1.5 h-4 bg-brand-cyan rounded-full mr-2"></span>
                        Live Action Monitor
                    </h3>
                    <div className="flex items-center text-decision-allow text-xs px-2 py-0.5 bg-decision-allow/10 rounded-full border border-decision-allow/20"><span className="w-1.5 h-1.5 rounded-full bg-decision-allow mr-1.5 animate-pulse"></span> Live</div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-xs text-text-muted border-b border-border bg-surface-raised/30">
                        <th className="p-2.5 font-medium pl-4">ID</th>
                        <th className="p-2.5 font-medium">Time</th>
                        <th className="p-2.5 font-medium">Agent</th>
                        <th className="p-2.5 font-medium">Action</th>
                        <th className="p-2.5 font-medium">Target</th>
                        <th className="p-2.5 font-medium">Risk</th>
                        <th className="p-2.5 font-medium">Decision</th>
                        <th className="p-2.5 font-medium">Policy Result</th>
                        </tr>
                    </thead>
                    <tbody className="text-xs font-mono text-text-secondary">
                        {[
                        { id: 'VRT-2026-000482', time: '14:52:21', agent: 'Research-Agent-03', action: 'send_email()', target: 'external@example.com', risk: 92, decision: 'BLOCKED', policy: 'PII-EXTERNAL-DENY' },
                        { id: 'VRT-2026-000481', time: '14:51:10', agent: 'Finance-Agent-01', action: 'export_customer_data()', target: 'external-api.com', risk: 78, decision: 'BLOCKED', policy: 'DATA-EXPORT-DENY' },
                        { id: 'VRT-2026-000480', time: '14:48:33', agent: 'DevOps-Agent-02', action: 'deploy_to_production()', target: 'prod-cluster', risk: 67, decision: 'REVIEW', policy: 'PROD-DEPLOY-APPROVAL' },
                        { id: 'VRT-2026-000479', time: '14:45:02', agent: 'Email-Agent-04', action: 'send_email()', target: 'internal@company.com', risk: 22, decision: 'ALLOWED', policy: 'GENERAL-EMAIL' },
                        ].map((row) => (
                        <tr key={row.id} className="border-b border-border/50 hover:bg-surface-raised/30">
                            <td className="p-2.5 pl-4">{row.id}</td>
                            <td className="p-2.5">{row.time}</td>
                            <td className="p-2.5 flex items-center font-body text-white"><Lock className="w-3 h-3 mr-1.5 text-text-muted"/>{row.agent}</td>
                            <td className="p-2.5">{row.action}</td>
                            <td className="p-2.5">{row.target}</td>
                            <td className="p-2.5"><span className={`px-1.5 py-0.5 rounded font-bold ${row.risk >= 80 ? 'text-decision-block bg-decision-block/20' : row.risk >= 60 ? 'text-decision-review bg-decision-review/20' : 'text-decision-allow bg-decision-allow/20'}`}>{row.risk}</span></td>
                            <td className="p-2.5">
                                <span className={`px-2 py-0.5 rounded uppercase font-bold flex items-center w-max ${row.decision === 'BLOCKED' ? 'bg-decision-block/20 text-decision-block border border-decision-block/30' : row.decision === 'REVIEW' ? 'bg-decision-review/20 text-decision-review border border-decision-review/30' : 'bg-decision-allow/20 text-decision-allow border border-decision-allow/30'}`}>
                                    {row.decision}
                                </span>
                            </td>
                            <td className="p-2.5 opacity-70">{row.policy}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
            </div>
        </div>

        {/* Right Sidebar Column (Takes up 1/4) */}
        <div className="space-y-4">
            {/* Quick Access */}
            <div className="bg-surface rounded-card border border-border p-4 shadow-soft">
                <h3 className="text-xs font-semibold text-text-secondary uppercase mb-4">Quick Access</h3>
                <QuickAccessCard icon={Zap} title="Verify Action" subtitle="Check if an AI action is safe" />
                <QuickAccessCard icon={Shield} title="Attack Lab" subtitle="Run security simulations" />
                <QuickAccessCard icon={Settings} title="Policy Studio" subtitle="Manage security policies" />
                <QuickAccessCard icon={Users} title="Agent Registry" subtitle="View and manage agents" />
            </div>

            {/* Recent Activity */}
            <div className="bg-surface rounded-card border border-border p-4 shadow-soft">
                <div className="flex justify-between items-center mb-4">
                   <h3 className="text-xs font-semibold text-text-secondary uppercase">Recent Activity</h3>
                   <span className="text-[10px] text-brand-blue cursor-pointer">View All</span>
                </div>
                <div className="space-y-4">
                    <div className="flex space-x-3">
                        <div className="mt-1"><span className="text-[9px] font-bold bg-decision-block/20 text-decision-block px-1 rounded border border-decision-block/30">BLOCKED</span></div>
                        <div>
                            <p className="text-xs text-white font-medium">Credential export attempt</p>
                            <p className="text-[10px] text-text-muted mt-0.5">14:52 · Research-Agent-03</p>
                        </div>
                    </div>
                    <div className="flex space-x-3">
                        <div className="mt-1"><span className="text-[9px] font-bold bg-decision-review/20 text-decision-review px-1 rounded border border-decision-review/30">REVIEW</span></div>
                        <div>
                            <p className="text-xs text-white font-medium">Production deployment</p>
                            <p className="text-[10px] text-text-muted mt-0.5">14:48 · DevOps-Agent-02</p>
                        </div>
                    </div>
                    <div className="flex space-x-3">
                        <div className="mt-1"><span className="text-[9px] font-bold bg-decision-block/20 text-decision-block px-1 rounded border border-decision-block/30">BLOCKED</span></div>
                        <div>
                            <p className="text-xs text-white font-medium">External data transfer</p>
                            <p className="text-[10px] text-text-muted mt-0.5">14:45 · Finance-Agent-01</p>
                        </div>
                    </div>
                     <div className="flex space-x-3">
                        <div className="mt-1"><span className="text-[9px] font-bold bg-decision-allow/20 text-decision-allow px-1 rounded border border-decision-allow/30">ALLOWED</span></div>
                        <div>
                            <p className="text-xs text-white font-medium">File access</p>
                            <p className="text-[10px] text-text-muted mt-0.5">14:42 · Data-Agent-05</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
