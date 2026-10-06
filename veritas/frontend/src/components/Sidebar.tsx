import { NavLink } from 'react-router-dom';
import { Shield, Activity, Inbox, FileText, Settings, Users, BarChart3, Box, Zap, LayoutTemplate } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Mission Control', icon: Activity },
  { path: '/verify', label: 'Verify Action', icon: Zap, badge: 'New', badgeColor: 'bg-brand-blue text-text-primary' },
  { path: '/lab', label: 'Attack Lab', icon: Shield },
  { path: '/review', label: 'Human Review', icon: Inbox, badge: '4', badgeColor: 'bg-brand-blue text-text-primary rounded-full px-2' },
  { path: '/audit', label: 'Audit & Explainability', icon: FileText },
  { path: '/policies', label: 'Policy Studio', icon: Settings },
  { path: '/agents', label: 'Agent Registry', icon: Users },
  { path: '/benchmark', label: 'Evaluation Lab', icon: BarChart3 },
  { path: '/integrate', label: 'Developer Gateway', icon: Box },
];

const secondaryNav = [
  { path: '/integrations', label: 'Integrations', icon: LayoutTemplate },
  { path: '/settings', label: 'Settings', icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-[280px] border-r border-border bg-surface flex flex-col flex-shrink-0">
      <div className="p-5 flex items-center gap-3 border-b border-border h-16">
        <div className="w-8 h-8 rounded bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center">
          <Shield className="w-5 h-5 text-brand-blue" fill="currentColor" />
        </div>
        <div>
          <h1 className="font-heading font-bold text-xl text-text-primary tracking-wide">VERITAS</h1>
          <p className="text-[10px] text-text-muted uppercase tracking-wider font-semibold">Verify Before AI Acts.</p>
        </div>
      </div>
      
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center justify-between px-3 py-2.5 rounded-md transition-all duration-200 ${
                isActive
                  ? 'bg-brand-blue text-text-primary shadow-soft'
                  : 'text-text-secondary hover:bg-surface-hover hover:text-text-primary'
              }`
            }
          >
            <div className="flex items-center gap-3">
               <item.icon className="w-4 h-4" />
               <span className="text-sm font-medium">{item.label}</span>
            </div>
            {item.badge && (
               <span className={`text-[10px] font-bold ${item.badgeColor} py-0.5 rounded px-1.5`}>{item.badge}</span>
            )}
          </NavLink>
        ))}

        <div className="my-4 border-t border-border"></div>

        {secondaryNav.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center justify-between px-3 py-2.5 rounded-md transition-all duration-200 ${
                isActive
                  ? 'bg-brand-blue text-text-primary shadow-soft'
                  : 'text-text-secondary hover:bg-surface-hover hover:text-text-primary'
              }`
            }
          >
            <div className="flex items-center gap-3">
               <item.icon className="w-4 h-4" />
               <span className="text-sm font-medium">{item.label}</span>
            </div>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 space-y-4">
        {/* System Status Card */}
        <div className="bg-surface-raised rounded-lg p-4 border border-border">
           <h4 className="text-xs font-semibold text-text-secondary mb-3">System Status</h4>
           <div className="space-y-2 text-xs text-text-secondary">
               <div className="flex items-center"><span className="w-2 h-2 rounded-full bg-decision-allow mr-2"></span> Engine Online</div>
               <div className="flex items-center"><span className="w-2 h-2 rounded-full bg-decision-allow mr-2"></span> Database Connected</div>
               <div className="flex items-center"><span className="w-2 h-2 rounded-full bg-decision-allow mr-2"></span> API Healthy</div>
               <div className="flex items-center justify-between mt-1"><div className="flex items-center"><span className="w-2 h-2 rounded-full bg-decision-allow mr-2"></span> Demo Mode</div> <span className="bg-decision-allow/20 text-decision-allow px-1.5 py-0.5 rounded text-[10px] font-bold">DEMO</span></div>
           </div>
        </div>

        {/* Brand Footer Card */}
        <div className="flex gap-3">
          <div className="w-6 h-6 rounded bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center flex-shrink-0 mt-0.5">
             <Shield className="w-3.5 h-3.5 text-brand-blue" fill="currentColor" />
          </div>
          <div>
             <h4 className="font-heading font-bold text-sm text-text-primary tracking-wide">VERITAS</h4>
             <p className="text-[10px] text-text-muted mt-1 leading-tight">From autonomous execution to verified execution.</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
