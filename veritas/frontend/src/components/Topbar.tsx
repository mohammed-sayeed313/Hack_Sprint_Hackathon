import { useEffect } from 'react';
import { useAppStore } from '../store';
import { Search, Bell, Sun, ChevronDown, User } from 'lucide-react';

export default function Topbar() {
  const { role, setRole, setCommandPaletteOpen } = useAppStore();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setCommandPaletteOpen]);

  return (
    <header className="h-16 border-b border-border bg-surface flex items-center justify-between px-6 shadow-soft relative z-10">
      <div className="flex items-center gap-6">
        {/* Demo Pill */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/20 border border-brand-blue/40 text-brand-blue cursor-help">
          <span className="w-2 h-2 rounded-full bg-brand-blue"></span>
          <span className="text-[10px] font-bold uppercase tracking-wider">Demo Environment</span>
        </div>
        
        {/* Engine Status */}
        <div className="flex items-center gap-2 cursor-help">
          <span className="w-2 h-2 rounded-full bg-decision-allow shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
          <span className="text-xs font-medium text-text-secondary tracking-wide">Engine Online</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Global Search / Command Palette */}
        <button 
          onClick={() => setCommandPaletteOpen(true)}
          className="flex items-center justify-between w-80 px-3 py-1.5 rounded-full border border-border bg-surface-raised text-text-muted hover:text-text-primary transition-colors text-xs"
        >
          <div className="flex items-center gap-2">
             <Search className="w-3.5 h-3.5" />
             <span>Search actions, agents, policies, incidents...</span>
          </div>
          <div className="flex items-center gap-1 opacity-60">
            <kbd className="font-mono bg-surface px-1.5 rounded py-0.5 border border-border text-[10px]">Ctrl + K</kbd>
          </div>
        </button>

        <div className="flex items-center gap-4 ml-2">
           <button className="relative text-text-muted hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-decision-block text-white text-[9px] font-bold rounded-full flex items-center justify-center border border-surface">5</span>
           </button>
           <button className="text-text-muted hover:text-white transition-colors">
              <Sun className="w-5 h-5" />
           </button>
        </div>

        <div className="w-px h-6 bg-border mx-2" />

        {/* User Profile Menu */}
        <div className="relative group cursor-pointer flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue border border-brand-blue/30">
             <User className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
             <span className="text-sm font-semibold text-white leading-tight">Admin</span>
             <span className="text-[10px] text-text-muted">System Administrator</span>
          </div>
          <ChevronDown className="w-3 h-3 text-text-muted ml-1" />
          
          <div className="absolute right-0 top-full mt-2 w-48 bg-surface-raised border border-border rounded shadow-soft py-1 hidden group-hover:block z-50">
            <div className="px-4 py-2 border-b border-border mb-1">
               <span className="text-xs text-text-muted uppercase">Role Switcher (Demo)</span>
            </div>
            {(['Admin', 'Analyst', 'Approver', 'Viewer'] as const).map(r => (
              <button 
                key={r} 
                onClick={() => setRole(r)}
                className={`block w-full text-left px-4 py-2 text-sm hover:bg-surface-hover transition-colors ${role === r ? 'text-brand-blue font-medium' : 'text-text-primary'}`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
