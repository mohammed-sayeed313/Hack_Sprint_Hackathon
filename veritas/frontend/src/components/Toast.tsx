
import { useAppStore } from '../store';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';

export default function ToastContainer() {
  const { toasts, removeToast } = useAppStore();

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <div 
          key={toast.id}
          className={`flex items-start gap-3 p-4 rounded-card border shadow-soft w-80 backdrop-blur-md animate-in slide-in-from-right-4 fade-in ${
            toast.type === 'success' ? 'bg-decision-allow/10 border-decision-allow/30 text-decision-allow' :
            toast.type === 'error' ? 'bg-decision-block/10 border-decision-block/30 text-decision-block' :
            'bg-surface border-border text-text-primary'
          }`}
        >
          {toast.type === 'success' && <CheckCircle className="w-5 h-5 flex-shrink-0" />}
          {toast.type === 'error' && <AlertCircle className="w-5 h-5 flex-shrink-0" />}
          {toast.type === 'info' && <Info className="w-5 h-5 flex-shrink-0 text-text-secondary" />}
          
          <div className="flex-1 text-sm font-medium">
            {toast.message}
          </div>
          
          <button 
            onClick={() => removeToast(toast.id)}
            className="text-text-muted hover:text-text-primary transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
