import React, { useEffect, useRef } from 'react';
import { useAppStore } from '../store';
import { Search } from 'lucide-react';

export default function CommandPalette() {
  const { isCommandPaletteOpen, setCommandPaletteOpen } = useAppStore();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isCommandPaletteOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isCommandPaletteOpen]);

  if (!isCommandPaletteOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] bg-background/80 backdrop-blur-sm">
      <div 
        className="absolute inset-0" 
        onClick={() => setCommandPaletteOpen(false)}
      />
      <div className="relative w-full max-w-xl bg-surface rounded-card border border-border shadow-soft overflow-hidden">
        <div className="flex items-center px-4 py-3 border-b border-border">
          <Search className="w-5 h-5 text-text-muted mr-3" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search or type a command..."
            className="flex-1 bg-transparent border-none outline-none text-text-primary placeholder:text-text-muted"
            onKeyDown={(e) => {
              if (e.key === 'Escape') setCommandPaletteOpen(false);
            }}
          />
        </div>
        <div className="p-2">
          <div className="px-3 py-2 text-xs font-semibold text-text-muted uppercase tracking-wider">
            Suggestions
          </div>
          <button className="w-full text-left px-3 py-2 rounded flex items-center justify-between text-sm hover:bg-surface-hover text-text-primary">
            <span>Toggle Compare Mode</span>
            <kbd className="font-mono text-xs text-text-muted bg-surface-raised px-1 rounded">C</kbd>
          </button>
          <button className="w-full text-left px-3 py-2 rounded flex items-center justify-between text-sm hover:bg-surface-hover text-text-primary">
            <span>Open Judge Mode</span>
            <div className="flex gap-1">
              <kbd className="font-mono text-xs text-text-muted bg-surface-raised px-1 rounded">J</kbd>
              <kbd className="font-mono text-xs text-text-muted bg-surface-raised px-1 rounded">M</kbd>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
