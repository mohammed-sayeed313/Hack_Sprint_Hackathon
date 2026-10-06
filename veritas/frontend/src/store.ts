import { create } from 'zustand';

type Role = 'Admin' | 'Analyst' | 'Approver' | 'Viewer';

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

interface AppState {
  role: Role;
  setRole: (role: Role) => void;
  isCommandPaletteOpen: boolean;
  setCommandPaletteOpen: (open: boolean) => void;
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  toasts: Toast[];
  addToast: (message: string, type?: 'success' | 'error' | 'info') => void;
  removeToast: (id: string) => void;
}

const getInitialTheme = (): 'light' | 'dark' => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'dark';
};

export const useAppStore = create<AppState>((set) => ({
  role: 'Admin',
  setRole: (role) => set({ role }),
  isCommandPaletteOpen: false,
  setCommandPaletteOpen: (open) => set({ isCommandPaletteOpen: open }),
  isMobileMenuOpen: false,
  setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
  theme: getInitialTheme(),
  toggleTheme: () => set((state) => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    return { theme: newTheme };
  }),
  toasts: [],
  addToast: (message, type = 'info') => {
    const id = Math.random().toString(36).slice(2, 9);
    set((state) => ({ toasts: [...state.toasts, { id, message, type }] }));
    setTimeout(() => {
      set((state) => ({ toasts: state.toasts.filter(t => t.id !== id) }));
    }, 5000);
  },
  removeToast: (id) => set((state) => ({ toasts: state.toasts.filter(t => t.id !== id) })),
}));
