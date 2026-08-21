'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import QuoteModal from '@/components/QuoteModal';
import Toast from '@/components/Toast';

const QuoteContext = createContext(null);

export function QuoteProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialService, setInitialService] = useState('');
  const [toast, setToast] = useState(null);

  const openQuote = useCallback((service = '') => {
    setInitialService(service);
    setIsOpen(true);
  }, []);

  const showToast = useCallback((config) => {
    setToast(config);
    setTimeout(() => setToast(null), 4500);
  }, []);

  const value = useMemo(
    () => ({ openQuote, showToast }),
    [openQuote, showToast]
  );

  return (
    <QuoteContext.Provider value={value}>
      {children}
      <QuoteModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        initialService={initialService}
        showToast={showToast}
      />
      <Toast toast={toast} onClose={() => setToast(null)} />
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error('useQuote must be used within QuoteProvider');
  return ctx;
}
