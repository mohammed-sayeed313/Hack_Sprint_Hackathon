
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppStore } from '../store';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import CommandPalette from './CommandPalette';
import ToastContainer from './Toast';

export default function Layout() {
  const { theme } = useAppStore();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="flex h-screen overflow-hidden bg-transparent">
      <div className="bg-glows" />
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 overflow-y-auto relative z-0">
          <Outlet />
        </main>
      </div>
      <CommandPalette />
      <ToastContainer />
    </div>
  );
}
