'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(false);
    const id = requestAnimationFrame(() => {
      setShow(true);
    });
    window.scrollTo(0, 0);
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return (
    <div className={`page-transition ${show ? 'is-in' : 'is-out'}`} key={pathname}>
      {children}
    </div>
  );
}
