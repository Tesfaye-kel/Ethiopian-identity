import React, { useEffect, useRef } from 'react';

function MouseGlow() {
  const rafRef = useRef(null);
  const targetRef = useRef({ x: 50, y: 50 });
  const currentRef = useRef({ x: 50, y: 50 });

  useEffect(() => {
    const el = document.querySelector('.bb-mouse-glow');
    if (!el) return;

    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      targetRef.current = { x, y };
      if (!rafRef.current) {
        rafRef.current = window.requestAnimationFrame(() => {
          rafRef.current = null;
          const step = () => {
            const c = currentRef.current;
            const t = targetRef.current;
            c.x += (t.x - c.x) * 0.08;
            c.y += (t.y - c.y) * 0.08;
            el.style.setProperty('--mx', `${c.x}%`);
            el.style.setProperty('--my', `${c.y}%`);
            if (Math.abs(t.x - c.x) > 0.1 || Math.abs(t.y - c.y) > 0.1) {
              rafRef.current = window.requestAnimationFrame(step);
            }
          };
          step();
        });
      }
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className="bb-mouse-glow pointer-events-none fixed inset-0 z-[-1]"
      aria-hidden="true"
    />
  );
}

export default MouseGlow;

