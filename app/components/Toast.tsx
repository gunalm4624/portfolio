"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

type Toast = {
  id: string;
  title?: string;
  description?: string;
};

type ToastContextValue = {
  toast: (t: Omit<Toast, 'id'>) => void;
};

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within a ToastProvider');
  return ctx;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback((t: Omit<Toast, 'id'>) => {
    const id = String(Date.now()) + Math.random().toString(36).slice(2, 9);
    setToasts((prev) => [...prev, { id, ...t }]);
  }, []);

  useEffect(() => {
    if (toasts.length === 0) return;
    const timers = toasts.map((t) =>
      setTimeout(() => {
        setToasts((prev) => prev.filter((p) => p.id !== t.id));
      }, 3000)
    );
    return () => timers.forEach((id) => clearTimeout(id));
  }, [toasts]);

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}

      {/* Toast container */}
      <div className="fixed right-6 top-6 z-50 flex flex-col items-end gap-3">
        {toasts.map((t) => (
          <div
            key={t.id}
            className="max-w-sm w-full bg-black text-white border border-transparent shadow-lg rounded-md px-4 py-3 text-sm animate-slide-in"
            role="status"
            aria-live="polite"
          >
            {t.title && <div className="font-medium mb-1">{t.title}</div>}
            {t.description && <div className="text-gray-300">{t.description}</div>}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from { transform: translateY(-8px); opacity: 0 }
          to { transform: translateY(0); opacity: 1 }
        }
        .animate-slide-in {
          animation: slideIn 220ms ease-out;
        }
      `}</style>
    </ToastContext.Provider>
  );
}
