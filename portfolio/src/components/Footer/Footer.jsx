import { motion } from 'framer-motion';
import { personal } from '../../data/portfolioData';

const NAV = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer style={{
      background: 'var(--bg-primary)',
      borderTop: '1px solid var(--border)',
      padding: '64px 0 32px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div className="blob" style={{ right: '10%', top: '-30%', width: 300, height: 300, background: 'var(--blob1)', opacity: 0.5 }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 12,
                background: 'var(--gradient)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Syne, sans-serif', fontWeight: 800, color: '#fff', fontSize: '1rem',
              }}>SG</div>
              <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.1rem' }}>
                Shubhi Gupta<span style={{ color: 'var(--accent)' }}>.</span>
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.87rem', lineHeight: 1.75, maxWidth: 300 }}>
              Full Stack Developer building modern, performant web applications with the MERN stack and a strong eye for UI/UX.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'Syne, sans-serif', marginBottom: 16, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>Navigate</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {NAV.map(id => (
                <motion.button
                  key={id}
                  onClick={() => scrollTo(id)}
                  whileHover={{ x: 6 }}
                  style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem', cursor: 'pointer', textAlign: 'left', padding: 0, textTransform: 'capitalize', fontFamily: 'DM Sans, sans-serif' }}
                >
                  → {id === 'hero' ? 'Home' : id}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'Syne, sans-serif', marginBottom: 16, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href={`mailto:${personal.email}`} style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', textDecoration: 'none' }}>✉ {personal.email}</a>
              <a href={`tel:${personal.phone}`} style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', textDecoration: 'none' }}>📞 {personal.phone}</a>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>📍 {personal.location}</span>
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              {[
                { href: personal.github, icon: '⌥' },
                { href: personal.linkedin, icon: '💼' },
                { href: personal.leetcode, icon: '⚡' },
              ].map((s, i) => (
                <motion.a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: 'var(--bg-secondary)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.95rem', textDecoration: 'none',
                  }}
                >{s.icon}</motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>
            © {new Date().getFullYear()} Shubhi Gupta. Crafted with ❤️ and React
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>
            Designed & Developed by <span className="gradient-text" style={{ fontWeight: 600 }}>Shubhi Gupta</span>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer .container > div:first-child { grid-template-columns: 1fr !important; gap: 32px !important; }
          footer .container > div:last-child { flex-direction: column; text-align: center; }
        }
      `}</style>
    </footer>
  );
}
