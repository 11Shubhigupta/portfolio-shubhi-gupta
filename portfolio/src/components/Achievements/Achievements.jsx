import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import RevealSection from '../common/RevealSection';
import { achievements } from '../../data/portfolioData';

function AchievCard({ a, i }) {
  const { ref, inView } = useInView({ triggerOnce: true });
  const colors = ['#6c47ff', '#a855f7', '#06b6d4', '#22c55e'];
  const color = colors[i % colors.length];
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.03, boxShadow: `0 16px 50px ${color}25` }}
      className="glass-card"
      style={{ padding: '36px 28px', textAlign: 'center', border: '1px solid var(--border)', position: 'relative', overflow: 'hidden', transition: 'box-shadow 0.3s' }}
    >
      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 50% 0%, ${color}10, transparent 60%)`, pointerEvents: 'none' }} />
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
        style={{ fontSize: '2.8rem', marginBottom: 16, position: 'relative', zIndex: 1 }}
      >{a.icon}</motion.div>

      <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '2.8rem', color, marginBottom: 6, position: 'relative', zIndex: 1 }}>
        {inView ? <CountUp end={a.count} duration={2.5} suffix={a.suffix} /> : `0${a.suffix}`}
      </div>
      <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.95rem', marginBottom: 8, position: 'relative', zIndex: 1 }}>{a.label}</h3>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', lineHeight: 1.5, position: 'relative', zIndex: 1 }}>{a.desc}</p>
    </motion.div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" style={{ background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
      <div className="blob" style={{ left: '10%', top: '-5%', width: 400, height: 400, background: 'var(--blob3)' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <RevealSection>
          <div className="section-title">
            <h2>Achievements</h2>
            <div className="title-line" />
            <p>Milestones that define my growth</p>
          </div>
        </RevealSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {achievements.map((a, i) => <AchievCard key={a.id} a={a} i={i} />)}
        </div>

        {/* Extra achievement: Hackathon */}
        <RevealSection delay={0.2}>
          <motion.div
            whileHover={{ y: -4 }}
            className="glass-card"
            style={{
              marginTop: 32, padding: '28px 32px',
              border: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap',
            }}
          >
            <div style={{ fontSize: '3rem' }}>🏆</div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.1rem', marginBottom: 6 }}>Microsoft CodeForge Hackathon</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                Participated and received recognition for technical innovation and creative problem-solving in competitive hackathon hosted by Microsoft MMIL.
              </p>
            </div>
            <span className="tag">🎖 Certificate</span>
          </motion.div>
        </RevealSection>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #achievements .container > div:nth-child(2) { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          #achievements .container > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
