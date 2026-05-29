import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealSection from '../common/RevealSection';
import { testimonials } from '../../data/portfolioData';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (idx) => {
    setDir(idx > current ? 1 : -1);
    setCurrent((idx + testimonials.length) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section id="testimonials" style={{ background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
      <div className="blob" style={{ left: '20%', bottom: '-5%', width: 400, height: 400, background: 'var(--blob2)' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <RevealSection>
          <div className="section-title">
            <h2>Testimonials</h2>
            <div className="title-line" />
            <p>What people say about working with me</p>
          </div>
        </RevealSection>

        <div style={{ maxWidth: 660, margin: '0 auto', textAlign: 'center' }}>
          {/* Quote mark */}
          <div style={{ fontSize: '5rem', lineHeight: 1, color: 'var(--accent)', opacity: 0.3, marginBottom: -16, fontFamily: 'Georgia, serif' }}>"</div>

          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={current}
              custom={dir}
              variants={{
                enter: (d) => ({ opacity: 0, x: d * 60 }),
                center: { opacity: 1, x: 0 },
                exit: (d) => ({ opacity: 0, x: d * -60 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="glass-card"
              style={{
                padding: '40px 40px 32px',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow)',
              }}
            >
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: 28, fontStyle: 'italic' }}>
                {t.text}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'var(--gradient)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Syne, sans-serif', fontWeight: 700,
                  color: '#fff', fontSize: '1.1rem',
                }}>
                  {t.avatar}
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.95rem' }}>{t.name}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginTop: 28 }}>
            <motion.button
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
              onClick={() => go(current - 1)}
              style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--glass)', border: '1px solid var(--border)', cursor: 'pointer', fontSize: '1rem', color: 'var(--text-primary)', backdropFilter: 'blur(8px)' }}
            >←</motion.button>

            {testimonials.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => go(i)}
                whileHover={{ scale: 1.3 }}
                style={{
                  width: i === current ? 24 : 8, height: 8, borderRadius: 50,
                  background: i === current ? 'var(--gradient)' : 'var(--border)',
                  border: 'none', cursor: 'pointer',
                  transition: 'all 0.3s', padding: 0,
                }}
              />
            ))}

            <motion.button
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
              onClick={() => go(current + 1)}
              style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--glass)', border: '1px solid var(--border)', cursor: 'pointer', fontSize: '1rem', color: 'var(--text-primary)', backdropFilter: 'blur(8px)' }}
            >→</motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
