import React from 'react';
import { NavLink } from 'react-router-dom';
import { Shield, Activity, Inbox, FileText, Settings, Users, BarChart3, Box } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Mission Control', icon: Activity },
  { path: '/lab', label: 'Attack Lab', icon: Shield },
  { path: '/review', label: 'Human Review', icon: Inbox },
  { path: '/audit', label: 'Audit & Explainability', icon: FileText },
  { path: '/policies', label: 'Policy Studio', icon: Settings },
  { path: '/agents', label: 'Agent Registry', icon: Users },
  { path: '/benchmark', label: 'Evaluation Lab', icon: BarChart3 },
  { path: '/integrate', label: 'Developer Gateway', icon: Box },
];

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-border bg-surface flex flex-col">
      <div className="p-4 flex items-center gap-3 border-b border-border">
        <div className="w-8 h-8 rounded bg-brand-navy border border-border flex items-center justify-center shadow-soft inner-highlight">
          <Shield className="w-5 h-5 text-brand-cyan" />
        </div>
        <div>
          <h1 className="font-heading font-bold text-lg text-text-primary tracking-wide">VERITAS</h1>
          <p className="text-[10px] text-text-muted uppercase tracking-wider">Zero-Trust Action</p>
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 ${
                isActive
                  ? 'bg-surface-hover text-text-primary border border-border inner-highlight shadow-soft'
                  : 'text-text-secondary hover:bg-surface-raised hover:text-text-primary'
              }`
            }
          >
            <item.icon className="w-4 h-4" />
            <span className="text-sm font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-border">
        <div className="text-xs text-text-muted">
          Team TAQWA &bull; Track 3
        </div>
      </div>
    </aside>
  );
}
