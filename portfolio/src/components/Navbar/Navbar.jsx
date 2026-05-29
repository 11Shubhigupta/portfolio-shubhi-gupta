import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';
import { useActiveSection } from '../../hooks/useScroll';

const NAV_LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

const SECTION_IDS = NAV_LINKS.map(l => l.id);

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        zIndex: 1000,
        background: scrolled ? 'var(--navbar-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.4s ease',
        padding: scrolled ? '12px 0' : '20px 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollTo('hero')}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}
        >
          <div style={{
            width: 40, height: 40, borderRadius: 12,
            background: 'var(--gradient)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            color: '#fff', fontSize: '1rem',
            boxShadow: 'var(--shadow)',
          }}>
            SG
          </div>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-primary)' }}>
            Shubhi<span style={{ color: 'var(--accent)' }}>.</span>
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="desktop-nav">
          {NAV_LINKS.map(({ id, label }) => (
            <motion.button
              key={id}
              onClick={() => scrollTo(id)}
              whileHover={{ scale: 1.05 }}
              style={{
                background: active === id ? 'var(--gradient-soft)' : 'transparent',
                border: 'none',
                color: active === id ? 'var(--accent)' : 'var(--text-secondary)',
                padding: '8px 16px',
                borderRadius: 50,
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.9rem',
                fontWeight: active === id ? 600 : 400,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {label}
            </motion.button>
          ))}
        </nav>

        {/* Right controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* Theme Toggle */}
          <motion.button
            onClick={toggle}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              width: 48, height: 26,
              borderRadius: 50,
              border: '1px solid var(--border)',
              background: theme === 'dark' ? 'var(--gradient)' : 'var(--bg-secondary)',
              cursor: 'pointer',
              position: 'relative',
              transition: 'all 0.4s',
              padding: 0,
            }}
          >
            <motion.div
              animate={{ x: theme === 'dark' ? 24 : 2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              style={{
                position: 'absolute', top: 3, left: 0,
                width: 20, height: 20, borderRadius: '50%',
                background: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.65rem',
              }}
            >
              {theme === 'dark' ? '🌙' : '☀️'}
            </motion.div>
          </motion.button>

          {/* Hire Me button */}
          <motion.button
            onClick={() => scrollTo('contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
            style={{ padding: '8px 20px', fontSize: '0.85rem' }}
          >
            Hire Me
          </motion.button>

          {/* Hamburger */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(m => !m)}
            className="hamburger-btn"
            style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: 10, padding: '8px 10px',
              cursor: 'pointer', display: 'none', flexDirection: 'column', gap: 5,
            }}
          >
            {[0, 1, 2].map(i => (
              <motion.span
                key={i}
                animate={menuOpen ? {
                  rotate: i === 0 ? 45 : i === 2 ? -45 : 0,
                  y: i === 0 ? 9 : i === 2 ? -9 : 0,
                  opacity: i === 1 ? 0 : 1,
                } : { rotate: 0, y: 0, opacity: 1 }}
                style={{ display: 'block', width: 22, height: 2, background: 'var(--text-primary)', borderRadius: 2 }}
              />
            ))}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: 'var(--navbar-bg)', backdropFilter: 'blur(20px)',
              borderTop: '1px solid var(--border)',
              overflow: 'hidden',
            }}
          >
            <div className="container" style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 4 }}>
              {NAV_LINKS.map(({ id, label }, i) => (
                <motion.button
                  key={id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => scrollTo(id)}
                  style={{
                    background: active === id ? 'var(--gradient-soft)' : 'transparent',
                    border: 'none', color: active === id ? 'var(--accent)' : 'var(--text-primary)',
                    padding: '12px 16px', borderRadius: 10, textAlign: 'left',
                    fontFamily: 'Syne, sans-serif', fontSize: '1rem', fontWeight: 600, cursor: 'pointer',
                  }}
                >
                  {label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </motion.header>
  );
}
