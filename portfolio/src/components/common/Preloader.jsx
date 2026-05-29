import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader({ onDone }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let v = 0;
    const id = setInterval(() => {
      v += Math.random() * 18;
      if (v >= 100) { v = 100; clearInterval(id); setTimeout(onDone, 500); }
      setProgress(Math.min(Math.round(v), 100));
    }, 80);
    return () => clearInterval(id);
  }, [onDone]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      style={{
        position: 'fixed', inset: 0, zIndex: 99999,
        background: 'var(--bg-primary)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 32,
      }}
    >
      {/* Logo */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        style={{
          width: 72, height: 72, borderRadius: '50%',
          background: 'var(--gradient)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.8rem', fontFamily: 'Syne, sans-serif',
          fontWeight: 800, color: '#fff',
          boxShadow: '0 0 40px rgba(108,71,255,0.5)',
        }}
      >
        SG
      </motion.div>

      {/* Progress bar */}
      <div style={{ width: 220, textAlign: 'center' }}>
        <div style={{
          height: 3, background: 'var(--border)',
          borderRadius: 4, overflow: 'hidden', marginBottom: 12,
        }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            style={{ height: '100%', background: 'var(--gradient)', borderRadius: 4 }}
          />
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontFamily: 'Syne, sans-serif' }}>
          {progress}%
        </p>
      </div>

      <motion.p
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{ color: 'var(--text-muted)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}
      >
        Loading Portfolio...
      </motion.p>
    </motion.div>
  );
}
