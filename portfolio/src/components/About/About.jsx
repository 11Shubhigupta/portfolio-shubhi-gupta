import { motion } from 'framer-motion';
import RevealSection from '../common/RevealSection';
import { personal, education } from '../../data/portfolioData';

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: 'var(--bg-secondary)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background blob */}
      <div
        className="blob"
        style={{
          right: '-10%',
          top: '20%',
          width: 400,
          height: 400,
          background: 'var(--blob1)',
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        <RevealSection>
          <div className="section-title">
            <h2>About Me</h2>
            <div className="title-line" />
            <p>A passionate developer crafting digital experiences</p>
          </div>
        </RevealSection>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 60,
            alignItems: 'start',
          }}
        >
          {/* Left Side */}
          <RevealSection direction="right">
            <div>
              <div style={{ marginBottom: 28 }}>
                <h3
                  style={{
                    fontSize: '1.6rem',
                    marginBottom: 16,
                    fontFamily: 'Syne, sans-serif',
                  }}
                >
                  Who am <span className="gradient-text">I?</span>
                </h3>

                <p
                  style={{
                    color: 'var(--text-secondary)',
                    lineHeight: 1.85,
                    marginBottom: 16,
                    fontSize: '0.97rem',
                  }}
                >
                  {personal.bio}
                </p>

                <p
                  style={{
                    color: 'var(--text-secondary)',
                    lineHeight: 1.85,
                    fontSize: '0.97rem',
                  }}
                >
                  I thrive on building scalable, user-centric applications
                  using the MERN stack and continuously expanding my knowledge
                  in algorithms, system design, and modern web technologies.
                </p>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 16,
                }}
              >
                {[
                  { label: 'Name', value: personal.name },
                  { label: 'Email', value: personal.email },
                  { label: 'Location', value: personal.location },
                  { label: 'Status', value: 'Open to Work 🟢' },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <span
                      style={{
                        color: 'var(--text-muted)',
                        fontSize: '0.78rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {label}
                    </span>

                    <p
                      style={{
                        color: 'var(--text-primary)',
                        fontWeight: 500,
                        fontSize: '0.9rem',
                        marginTop: 2,
                      }}
                    >
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>

          {/* Education Timeline */}
          <RevealSection direction="left">
            <div>
              <h3
                style={{
                  fontSize: '1.4rem',
                  marginBottom: 24,
                  fontFamily: 'Syne, sans-serif',
                }}
              >
                🎓 Education
              </h3>

              <div style={{ position: 'relative' }}>
                {/* Timeline Line */}
                <div
                  style={{
                    position: 'absolute',
                    left: 20,
                    top: 0,
                    bottom: 0,
                    width: 2,
                    background: 'var(--gradient)',
                    borderRadius: 2,
                  }}
                />

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 28,
                  }}
                >
                  {education.map((edu, i) => (
                    <motion.div
                      key={edu.id}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: i * 0.15,
                        duration: 0.5,
                      }}
                      style={{
                        paddingLeft: 52,
                        position: 'relative',
                      }}
                    >
                      {/* Dot */}
                      <div
                        style={{
                          position: 'absolute',
                          left: 10,
                          top: 6,
                          width: 20,
                          height: 20,
                          borderRadius: '50%',
                          background: 'var(--gradient)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.6rem',
                          color: '#fff',
                          boxShadow:
                            '0 0 10px rgba(108,71,255,0.4)',
                        }}
                      >
                        ●
                      </div>

                      <motion.div
                        whileHover={{ x: 6 }}
                        className="glass-card"
                        style={{
                          padding: '18px 20px',
                          boxShadow: 'var(--shadow-card)',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            marginBottom: 6,
                          }}
                        >
                          <h4
                            style={{
                              fontSize: '0.95rem',
                              color: 'var(--text-primary)',
                              fontFamily: 'Syne, sans-serif',
                            }}
                          >
                            {edu.degree}
                          </h4>

                          {edu.grade !== 'Current' && (
                            <span className="tag">
                              {edu.grade}
                            </span>
                          )}
                        </div>

                        <p
                          style={{
                            color: 'var(--accent)',
                            fontSize: '0.85rem',
                            fontWeight: 500,
                          }}
                        >
                          {edu.institution}
                        </p>

                        <p
                          style={{
                            color: 'var(--text-muted)',
                            fontSize: '0.78rem',
                            marginTop: 4,
                          }}
                        >
                          📅 {edu.duration}
                        </p>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container > div:nth-child(2) {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}