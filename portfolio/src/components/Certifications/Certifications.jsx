import { motion } from 'framer-motion';
import RevealSection from '../common/RevealSection';
import { certifications } from '../../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" style={{ background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
      <div className="blob" style={{ right: '-8%', bottom: '5%', width: 340, height: 340, background: 'var(--blob2)' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <RevealSection>
          <div className="section-title">
            <h2>Certifications</h2>
            <div className="title-line" />
            <p>Credentials that validate my expertise</p>
          </div>
        </RevealSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.55 }}
              whileHover={{ y: -10, scale: 1.03, boxShadow: `0 20px 60px ${cert.color}25` }}
              className="glass-card"
              style={{
                padding: '32px 28px', textAlign: 'center',
                border: '1px solid var(--border)',
                cursor: 'default', transition: 'box-shadow 0.3s',
                position: 'relative', overflow: 'hidden',
              }}
            >
              {/* Glow bg */}
              <div style={{
                position: 'absolute', inset: 0,
                background: `radial-gradient(circle at 50% 0%, ${cert.color}12, transparent 60%)`,
                pointerEvents: 'none',
              }} />

              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                style={{ fontSize: '3.5rem', marginBottom: 16, position: 'relative', zIndex: 1 }}
              >
                {cert.icon}
              </motion.div>

              <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1rem', marginBottom: 8, color: 'var(--text-primary)', position: 'relative', zIndex: 1 }}>
                {cert.title}
              </h3>
              <p style={{ color: cert.color, fontSize: '0.82rem', fontWeight: 600, marginBottom: 12, position: 'relative', zIndex: 1 }}>
                {cert.issuer}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: 1.6, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                {cert.desc}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '8px 20px', borderRadius: 50,
                  background: `${cert.color}15`, border: `1px solid ${cert.color}40`,
                  color: cert.color, fontWeight: 600, fontSize: '0.78rem',
                  cursor: 'pointer', fontFamily: 'Syne, sans-serif',
                }}
              >
                View Certificate →
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #certifications .container > div:last-child { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          #certifications .container > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
