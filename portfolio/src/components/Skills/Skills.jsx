import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import RevealSection from '../common/RevealSection';
import { skills } from '../../data/portfolioData';

const CATEGORIES = [
  { key: 'frontend', label: '⚛️ Frontend', color: '#6c47ff' },
  { key: 'backend', label: '🟢 Backend', color: '#22c55e' },
  { key: 'database', label: '🍃 Database', color: '#06b6d4' },
  { key: 'languages', label: '🔤 Languages', color: '#f59e0b' },
  { key: 'tools', label: '🛠 Tools', color: '#ec4899' },
];

function SkillBar({ name, level, icon, color }) {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div ref={ref} style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 500 }}>
          <span>{icon}</span> {name}
        </span>
        <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{level}%</span>
      </div>
      <div style={{ height: 6, background: 'var(--bg-secondary)', borderRadius: 6, overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          style={{ height: '100%', background: `linear-gradient(90deg, ${color}, ${color}cc)`, borderRadius: 6 }}
        />
      </div>
    </div>
  );
}

function SkillCard({ skill, color }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -6, boxShadow: `0 12px 40px ${color}30` }}
      className="glass-card"
      style={{
        padding: '18px 16px', textAlign: 'center',
        border: '1px solid var(--border)',
        cursor: 'default', transition: 'box-shadow 0.25s',
      }}
    >
      <div style={{ fontSize: '2rem', marginBottom: 8 }}>{skill.icon}</div>
      <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: 6 }}>{skill.name}</div>
      <div style={{ height: 4, background: 'var(--bg-secondary)', borderRadius: 4, overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ height: '100%', background: `linear-gradient(90deg, ${color}, ${color}bb)`, borderRadius: 4 }}
        />
      </div>
      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 4 }}>{skill.level}%</div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');
  const activeCat = CATEGORIES.find(c => c.key === activeTab);

  return (
    <section id="skills" style={{ background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
      <div className="blob" style={{ left: '-8%', bottom: '10%', width: 350, height: 350, background: 'var(--blob2)' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <RevealSection>
          <div className="section-title">
            <h2>My Skills</h2>
            <div className="title-line" />
            <p>Technologies I work with to build amazing things</p>
          </div>
        </RevealSection>

        {/* Category tabs */}
        <RevealSection delay={0.1}>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
            {CATEGORIES.map(cat => (
              <motion.button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '10px 22px', borderRadius: 50,
                  border: activeTab === cat.key ? 'none' : '1px solid var(--border)',
                  background: activeTab === cat.key ? 'var(--gradient)' : 'var(--glass)',
                  color: activeTab === cat.key ? '#fff' : 'var(--text-secondary)',
                  fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '0.85rem',
                  cursor: 'pointer', transition: 'all 0.2s',
                  backdropFilter: 'blur(8px)',
                }}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </RevealSection>

        {/* Skills grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: 16,
          }}
        >
          {skills[activeTab].map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              <SkillCard skill={skill} color={activeCat.color} />
            </motion.div>
          ))}
        </motion.div>

        {/* Progress bars section */}
        <RevealSection delay={0.15}>
          <div style={{
            marginTop: 64, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48,
          }}>
            <div>
              <h3 style={{ fontFamily: 'Syne, sans-serif', marginBottom: 24, fontSize: '1.2rem' }}>
                🎨 <span className="gradient-text">Frontend</span> Expertise
              </h3>
              {skills.frontend.map(s => (
                <SkillBar key={s.name} {...s} color="#6c47ff" />
              ))}
            </div>
            <div>
              <h3 style={{ fontFamily: 'Syne, sans-serif', marginBottom: 24, fontSize: '1.2rem' }}>
                ⚙️ <span className="gradient-text">Backend</span> & Tools
              </h3>
              {skills.backend.map(s => (
                <SkillBar key={s.name} {...s} color="#22c55e" />
              ))}
              <div style={{ marginTop: 20 }}>
                {skills.tools.slice(0, 3).map(s => (
                  <SkillBar key={s.name} {...s} color="#ec4899" />
                ))}
              </div>
            </div>
          </div>
        </RevealSection>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #skills .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
