import { useEffect, useRef } from 'react';

export default function Cursor() {
  const glowRef = useRef();
  const ringRef = useRef();

  useEffect(() => {
    let mx = -100, my = -100, rx = -100, ry = -100;

    const move = (e) => {
      mx = e.clientX; my = e.clientY;
      if (glowRef.current) {
        glowRef.current.style.left = mx + 'px';
        glowRef.current.style.top = my + 'px';
      }
    };

    let animId;
    const follow = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px';
        ringRef.current.style.top = ry + 'px';
      }
      animId = requestAnimationFrame(follow);
    };
    animId = requestAnimationFrame(follow);

    const grow = () => {
      if (glowRef.current) { glowRef.current.style.width = '40px'; glowRef.current.style.height = '40px'; glowRef.current.style.opacity = '0.8'; }
      if (ringRef.current) { ringRef.current.style.width = '60px'; ringRef.current.style.height = '60px'; ringRef.current.style.opacity = '0.6'; }
    };
    const shrink = () => {
      if (glowRef.current) { glowRef.current.style.width = '20px'; glowRef.current.style.height = '20px'; glowRef.current.style.opacity = '0.5'; }
      if (ringRef.current) { ringRef.current.style.width = '40px'; ringRef.current.style.height = '40px'; ringRef.current.style.opacity = '0.35'; }
    };

    window.addEventListener('mousemove', move);
    document.querySelectorAll('a, button, [role=button]').forEach(el => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });

    // hide on mobile
    if ('ontouchstart' in window) {
      if (glowRef.current) glowRef.current.style.display = 'none';
      if (ringRef.current) ringRef.current.style.display = 'none';
    }

    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className="cursor-glow" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
