import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import RevealSection from '../common/RevealSection';
import { personal } from '../../data/portfolioData';

const INPUT_STYLE = {
  width: '100%', padding: '14px 18px',
  background: 'var(--bg-secondary)', border: '1px solid var(--border)',
  borderRadius: 12, color: 'var(--text-primary)',
  fontFamily: 'DM Sans, sans-serif', fontSize: '0.95rem',
  outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s',
  boxSizing: 'border-box',
};

function Field({ label, children }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <label style={{ display: 'block', marginBottom: 8, color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 500 }}>{label}</label>
      {children}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState('');

  const handle = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) { toast.error('Please fill all required fields'); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500)); // simulate
    toast.success('Message sent! I\'ll get back to you soon. 🚀');
    setForm({ name: '', email: '', subject: '', message: '' });
    setLoading(false);
  };

  const focusStyle = (name) => focused === name ? { borderColor: 'var(--accent)', boxShadow: '0 0 0 3px rgba(108,71,255,0.12)' } : {};

  const contacts = [
    { icon: '✉', label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: '📞', label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
    { icon: '📍', label: 'Location', value: personal.location, href: '#' },
  ];

  return (
    <section id="contact" style={{ background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
      <div className="blob" style={{ left: '-5%', top: '20%', width: 380, height: 380, background: 'var(--blob3)' }} />
      <div className="blob" style={{ right: '-5%', bottom: '10%', width: 300, height: 300, background: 'var(--blob1)' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <RevealSection>
          <div className="section-title">
            <h2>Get In Touch</h2>
            <div className="title-line" />
            <p>Have a project in mind? Let's build something amazing together</p>
          </div>
        </RevealSection>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 48, alignItems: 'start' }}>
          {/* Left: contact info */}
          <RevealSection direction="right">
            <div>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.5rem', marginBottom: 12 }}>
                Let's <span className="gradient-text">Connect</span>
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 32, fontSize: '0.93rem' }}>
                I'm currently open to new opportunities and collaborations. Whether you have a project idea, internship offer, or just want to say hi — my inbox is always open!
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 36 }}>
                {contacts.map(c => (
                  <motion.a
                    key={c.label}
                    href={c.href}
                    whileHover={{ x: 6 }}
                    style={{ display: 'flex', alignItems: 'center', gap: 16, textDecoration: 'none' }}
                  >
                    <div style={{
                      width: 48, height: 48, borderRadius: 14,
                      background: 'var(--gradient-soft)', border: '1px solid var(--border)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.2rem', flexShrink: 0,
                    }}>{c.icon}</div>
                    <div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{c.label}</div>
                      <div style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.9rem' }}>{c.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social */}
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: 14, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Find me on</p>
                <div style={{ display: 'flex', gap: 12 }}>
                  {[
                    { href: personal.github, label: 'GitHub', icon: '⌥' },
                    { href: personal.linkedin, label: 'LinkedIn', icon: '💼' },
                    { href: personal.leetcode, label: 'LeetCode', icon: '⚡' },
                  ].map(s => (
                    <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, y: -4 }} title={s.label}
                      style={{
                        width: 44, height: 44, borderRadius: 12,
                        background: 'var(--glass)', border: '1px solid var(--border)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '1.1rem', textDecoration: 'none',
                        backdropFilter: 'blur(8px)',
                      }}
                    >{s.icon}</motion.a>
                  ))}
                </div>
              </div>
            </div>
          </RevealSection>

          {/* Right: Form */}
          <RevealSection direction="left">
            <motion.form
              onSubmit={submit}
              className="glass-card"
              style={{ padding: '36px 32px', border: '1px solid var(--border)' }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                <Field label="Name *">
                  <input name="name" value={form.name} onChange={handle}
                    placeholder="Shubhi Gupta"
                    onFocus={() => setFocused('name')} onBlur={() => setFocused('')}
                    style={{ ...INPUT_STYLE, ...focusStyle('name') }}
                  />
                </Field>
                <Field label="Email *">
                  <input name="email" type="email" value={form.email} onChange={handle}
                    placeholder="hello@email.com"
                    onFocus={() => setFocused('email')} onBlur={() => setFocused('')}
                    style={{ ...INPUT_STYLE, ...focusStyle('email') }}
                  />
                </Field>
              </div>
              <Field label="Subject">
                <input name="subject" value={form.subject} onChange={handle}
                  placeholder="Project Collaboration"
                  onFocus={() => setFocused('subject')} onBlur={() => setFocused('')}
                  style={{ ...INPUT_STYLE, ...focusStyle('subject') }}
                />
              </Field>
              <Field label="Message *">
                <textarea name="message" value={form.message} onChange={handle}
                  placeholder="Tell me about your project..."
                  rows={5}
                  onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
                  style={{ ...INPUT_STYLE, ...focusStyle('message'), resize: 'vertical', minHeight: 120 }}
                />
              </Field>
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.75 : 1, padding: '14px 24px', fontSize: '0.95rem' }}
              >
                {loading ? (
                  <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>⟳</motion.span>
                ) : '🚀'}{' '}
                {loading ? 'Sending...' : 'Send Message'}
              </motion.button>
            </motion.form>
          </RevealSection>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact .container > div:last-child { grid-template-columns: 1fr !important; }
          #contact form > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
