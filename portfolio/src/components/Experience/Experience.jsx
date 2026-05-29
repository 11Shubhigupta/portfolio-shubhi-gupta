import { motion } from 'framer-motion';
import RevealSection from '../common/RevealSection';
import { experience } from '../../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
      <div className="blob" style={{ left: '-5%', top: '30%', width: 350, height: 350, background: 'var(--blob1)' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <RevealSection>
          <div className="section-title">
            <h2>Experience</h2>
            <div className="title-line" />
            <p>My professional journey and contributions</p>
          </div>
        </RevealSection>

        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: 30, top: 0, bottom: 0,
            width: 2, background: 'var(--gradient)', borderRadius: 2, opacity: 0.4,
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {experience.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{ paddingLeft: 72, position: 'relative' }}
              >
                {/* Dot */}
                <motion.div
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.2, duration: 0.4 }}
                  style={{
                    position: 'absolute', left: 16, top: 20,
                    width: 28, height: 28, borderRadius: '50%',
                    background: 'var(--gradient)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.9rem',
                    boxShadow: `0 0 15px ${exp.color}50`,
                  }}
                >
                  {exp.icon}
                </motion.div>

                <motion.div
                  whileHover={{ x: 6, boxShadow: `0 16px 48px ${exp.color}20` }}
                  className="glass-card"
                  style={{ padding: '28px 28px 24px', border: '1px solid var(--border)', transition: 'box-shadow 0.3s' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
                    <div>
                      <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: 4 }}>{exp.role}</h3>
                      <p style={{ color: exp.color, fontWeight: 600, fontSize: '0.92rem' }}>{exp.company}</p>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', marginTop: 2 }}>{exp.type}</p>
                    </div>
                    <span className="tag" style={{ whiteSpace: 'nowrap' }}>📅 {exp.duration}</span>
                  </div>

                  <ul style={{ paddingLeft: 0, listStyle: 'none', marginBottom: 18 }}>
                    {exp.responsibilities.map((r, j) => (
                      <li key={j} style={{
                        color: 'var(--text-secondary)', fontSize: '0.87rem',
                        lineHeight: 1.75, paddingLeft: 20, position: 'relative', marginBottom: 6,
                      }}>
                        <span style={{ position: 'absolute', left: 0, color: exp.color }}>→</span>
                        {r}
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {exp.technologies.map(t => (
                      <span key={t} className="tag" style={{ fontSize: '0.72rem' }}>{t}</span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          #experience .container > div > div > div { padding-left: 52px !important; }
        }
      `}</style>
    </section>
  );
}
