import { motion } from 'framer-motion';
import RevealSection from '../common/RevealSection';
import { services } from '../../data/portfolioData';

export default function Services() {
  return (
    <section id="services" style={{ background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
      <div className="blob" style={{ right: '-8%', top: '20%', width: 380, height: 380, background: 'var(--blob1)' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <RevealSection>
          <div className="section-title">
            <h2>Services</h2>
            <div className="title-line" />
            <p>What I can build and deliver for you</p>
          </div>
        </RevealSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
          {services.map((svc, i) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              whileHover={{ y: -8, boxShadow: `0 20px 60px ${svc.color}22` }}
              className="glass-card"
              style={{
                padding: '36px 32px',
                border: '1px solid var(--border)',
                position: 'relative', overflow: 'hidden',
                cursor: 'default', transition: 'box-shadow 0.3s',
              }}
            >
              <div style={{
                position: 'absolute', top: 0, right: 0,
                width: 120, height: 120,
                background: `radial-gradient(circle, ${svc.color}18, transparent 70%)`,
                pointerEvents: 'none',
              }} />

              <div style={{
                width: 60, height: 60, borderRadius: 16,
                background: `${svc.color}18`,
                border: `1px solid ${svc.color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.8rem', marginBottom: 20,
              }}>
                {svc.icon}
              </div>

              <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.15rem', marginBottom: 12, color: 'var(--text-primary)' }}>
                {svc.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.75 }}>
                {svc.desc}
              </p>

              <motion.div
                whileHover={{ x: 4 }}
                style={{ marginTop: 20, color: svc.color, fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6 }}
              >
                Learn More →
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`@media (max-width: 768px) { #services .container > div:last-child { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
