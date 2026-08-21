'use client';

import { useEffect, useState } from 'react';

export default function AmbientCursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduce) return;

    setActive(true);
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  if (!active) return null;

  return (
    <div
      className="ambient-cursor"
      aria-hidden
      style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
    />
  );
}
