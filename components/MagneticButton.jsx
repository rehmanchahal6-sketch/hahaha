'use client';

import { useRef } from 'react';

export default function MagneticButton({ children, className = '', onClick, type = 'button', ...rest }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el || window.matchMedia('(pointer: coarse)').matches) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.22}px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate(0, 0)';
  };

  return (
    <button
      ref={ref}
      type={type}
      className={`magnetic ${className}`.trim()}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
