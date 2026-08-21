'use client';

import { AlertCircle, CheckCircle, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  return (
    <div className="toast-container">
      <div className={`toast ${toast.type === 'error' ? 'toast-error' : ''}`}>
        {toast.type === 'error' ? (
          <AlertCircle size={18} color="var(--danger)" />
        ) : (
          <CheckCircle size={18} color="var(--accent)" />
        )}
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 650, fontSize: '0.92rem' }}>
            {toast.title}
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>{toast.message}</div>
        </div>
        <button
          onClick={onClose}
          aria-label="Dismiss"
          style={{ border: 'none', background: 'transparent', color: 'var(--dim)', cursor: 'pointer' }}
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
