import React, { useEffect } from 'react';
import { useAppStore } from '../store';
import { Search, Play, ChevronDown } from 'lucide-react';

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
    <header className="h-16 border-b border-border bg-surface-raised flex items-center justify-between px-6 shadow-soft relative z-10">
      <div className="flex items-center gap-4">
        {/* Engine Status */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border">
          <span className="w-2 h-2 rounded-full bg-brand-cyan shadow-[0_0_8px_rgba(93,224,230,0.8)] animate-pulse" />
          <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">Engine Online</span>
        </div>
        
        {/* Sandbox Pill */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-decision-review/10 border border-decision-review/30 text-decision-review">
          <span className="text-xs font-bold uppercase tracking-wider">Sandbox</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Global Search / Command Palette */}
        <button 
          onClick={() => setCommandPaletteOpen(true)}
          className="flex items-center gap-2 px-3 py-1.5 rounded border border-border bg-surface text-text-muted hover:text-text-primary transition-colors text-sm"
        >
          <Search className="w-4 h-4" />
          <span>Search / Command</span>
          <div className="flex items-center gap-1 ml-4 opacity-50">
            <kbd className="font-mono bg-surface-hover px-1 rounded">Cmd</kbd>
            <kbd className="font-mono bg-surface-hover px-1 rounded">K</kbd>
          </div>
        </button>

        <div className="w-px h-6 bg-border mx-2" />

        {/* Judge Mode Button */}
        <button className="flex items-center gap-2 px-4 py-1.5 rounded bg-brand-navy border border-border text-brand-cyan hover:bg-surface-hover transition-colors shadow-soft inner-highlight text-sm font-medium">
          <Play className="w-4 h-4" />
          Judge Mode
        </button>

        {/* Role Switcher */}
        <div className="relative group">
          <button className="flex items-center gap-2 px-3 py-1.5 rounded hover:bg-surface-hover transition-colors text-sm font-medium">
            <span className="text-text-secondary">Role:</span>
            <span className="text-text-primary">{role}</span>
            <ChevronDown className="w-4 h-4 text-text-muted" />
          </button>
          
          <div className="absolute right-0 top-full mt-1 w-32 bg-surface border border-border rounded shadow-soft py-1 hidden group-hover:block z-50">
            {(['Admin', 'Analyst', 'Approver', 'Viewer'] as const).map(r => (
              <button 
                key={r} 
                onClick={() => setRole(r)}
                className={`block w-full text-left px-4 py-2 text-sm hover:bg-surface-hover transition-colors ${role === r ? 'text-brand-cyan' : 'text-text-primary'}`}
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
