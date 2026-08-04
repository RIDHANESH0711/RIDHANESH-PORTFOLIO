'use client';

import { useEffect, useState } from 'react';

export function MouseGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[5] transition-opacity duration-500"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div
        className="absolute h-[500px] w-[500px] rounded-full opacity-20 blur-[120px] transition-transform duration-200 ease-out"
        style={{
          background:
            'radial-gradient(circle, rgba(168,85,247,0.6), rgba(59,130,246,0.3), transparent 70%)',
          transform: `translate(${pos.x - 250}px, ${pos.y - 250}px)`,
        }}
      />
    </div>
  );
}
