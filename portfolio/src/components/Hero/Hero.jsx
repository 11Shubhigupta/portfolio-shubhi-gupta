import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { personal } from '../../data/portfolioData';

const socialLinks = [
  { href: personal.github, icon: '⌥', label: 'GitHub' },
  { href: personal.linkedin, icon: '💼', label: 'LinkedIn' },
  { href: `mailto:${personal.email}`, icon: '✉', label: 'Email' },
  { href: personal.leetcode, icon: '⚡', label: 'LeetCode' },
];

function FloatingBlob({ x, y, size, color, delay }) {
  return (
    <motion.div
      className="blob"
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -25, 20, 0],
        scale: [1, 1.08, 0.95, 1],
      }}
      transition={{ duration: 12 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
      style={{
        left: x, top: y, width: size, height: size,
        background: color, zIndex: 0,
      }}
    />
  );
}

function ParticleCanvas() {
  const canvasRef = useRef();
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;
    const onResize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    window.addEventListener('resize', onResize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.4 + 0.1,
    }));

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        p.x = (p.x + p.vx + W) % W;
        p.y = (p.y + p.vy + H) % H;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(108,71,255,${p.alpha})`;
        ctx.fill();
      });
      // draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(108,71,255,${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { window.removeEventListener('resize', onResize); cancelAnimationFrame(animId); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }} />;
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: 100 }}>
      <ParticleCanvas />

      {/* Background blobs */}
      <FloatingBlob x="-5%" y="10%" size="500px" color="var(--blob1)" delay={0} />
      <FloatingBlob x="60%" y="-10%" size="400px" color="var(--blob2)" delay={3} />
      <FloatingBlob x="75%" y="50%" size="300px" color="var(--blob3)" delay={6} />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>

          {/* Left: Text */}
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.div variants={item}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '6px 18px', borderRadius: 50,
                border: '1px solid var(--border)', background: 'var(--gradient-soft)',
                color: 'var(--accent)', fontSize: '0.82rem', fontWeight: 600,
                marginBottom: 24, letterSpacing: '0.05em',
              }}>
                <span style={{ animation: 'pulse-ring 1.5s infinite' }}>●</span>
                Available for Opportunities
              </span>
            </motion.div>

            <motion.h1 variants={item} style={{ fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', marginBottom: 8, lineHeight: 1.08 }}>
              Hi, I'm{' '}
              <span className="gradient-text">Shubhi</span>
              <br />Gupta
            </motion.h1>

            <motion.div variants={item} style={{ marginBottom: 20, height: 44, display: 'flex', alignItems: 'center' }}>
              <span style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', fontFamily: 'Syne, sans-serif', fontWeight: 600 }}>
                {'< '}
                <TypeAnimation
                  sequence={[
                    'Full Stack Developer', 2000,
                    'Web Developer', 2000,
                    'MERN Stack Enthusiast', 2000,
                    'UI/UX Enthusiast', 2000,
                    'Problem Solver', 2000,
                  ]}
                  wrapper="span"
                  repeat={Infinity}
                  style={{ color: 'var(--accent)' }}
                />
                {' />'}
              </span>
            </motion.div>

            <motion.p variants={item} style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: 480, marginBottom: 36, lineHeight: 1.75 }}>
              {personal.bio}
            </motion.p>

            <motion.div variants={item} style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 40 }}>
              <a href={personal.resumeUrl} download className="btn-primary">
                📄 Download Resume
              </a>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-outline">
                ✉ Contact Me
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={item} style={{ display: 'flex', gap: 12 }}>
              {socialLinks.map(({ href, icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  title={label}
                  style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: 'var(--glass)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.1rem', textDecoration: 'none',
                    backdropFilter: 'blur(12px)',
                    boxShadow: 'var(--shadow-card)',
                    transition: 'background 0.2s',
                  }}
                >
                  {icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
          >
            {/* Outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute', width: 340, height: 340,
                borderRadius: '50%',
                border: '2px dashed var(--border)',
              }}
            />

            {/* Glow ring */}
            <motion.div
              animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                position: 'absolute', width: 300, height: 300,
                borderRadius: '50%',
                background: 'var(--gradient)',
                filter: 'blur(60px)',
                opacity: 0.25,
              }}
            />

            {/* Avatar */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                width: 280, height: 280, borderRadius: '50%',
                background: 'var(--gradient)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '6rem',
                boxShadow: '0 0 60px rgba(108,71,255,0.4), 0 20px 60px rgba(0,0,0,0.2)',
                position: 'relative', zIndex: 1,
              }}
            >
              👩‍💻
            </motion.div>

            {/* Floating badges */}
            {[
              { emoji: '⚛️', label: 'React', x: -50, y: 20 },
              { emoji: '🟢', label: 'Node', x: 260, y: 40 },
              { emoji: '🍃', label: 'Mongo', x: -30, y: 200 },
              { emoji: '🧩', label: '500+ DSA', x: 240, y: 210 },
            ].map(({ emoji, label, x, y }, i) => (
              <motion.div
                key={label}
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                style={{
                  position: 'absolute', left: x, top: y,
                  background: 'var(--glass)', border: '1px solid var(--border)',
                  backdropFilter: 'blur(12px)', borderRadius: 12,
                  padding: '8px 14px', zIndex: 2,
                  display: 'flex', alignItems: 'center', gap: 6,
                  boxShadow: 'var(--shadow-card)',
                  fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)',
                  whiteSpace: 'nowrap',
                }}
              >
                <span style={{ fontSize: '1rem' }}>{emoji}</span>
                {label}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        style={{
          position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)',
          cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          color: 'var(--text-muted)', fontSize: '0.75rem', letterSpacing: '0.1em',
        }}
      >
        <span>SCROLL</span>
        <div style={{ width: 1.5, height: 40, background: 'var(--gradient)', borderRadius: 2 }} />
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          #hero .container > div { grid-template-columns: 1fr !important; gap: 48px !important; }
          #hero .container > div > div:last-child { display: none; }
        }
      `}</style>
    </section>
  );
}
