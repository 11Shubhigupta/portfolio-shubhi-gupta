import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealSection from '../common/RevealSection';
import { projects } from '../../data/portfolioData';

function ProjectCard({ project, onClick, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.55 }}
      whileHover={{ y: -8, boxShadow: `0 20px 60px ${project.color}25` }}
      onClick={() => onClick(project)}
      className="glass-card"
      style={{
        padding: 0, overflow: 'hidden', cursor: 'pointer',
        border: '1px solid var(--border)', transition: 'box-shadow 0.3s',
        display: 'flex', flexDirection: 'column',
      }}
    >
      {/* Header */}
      <div style={{
        background: `linear-gradient(135deg, ${project.color}22, ${project.color}08)`,
        borderBottom: `1px solid ${project.color}30`,
        padding: '28px 24px 20px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', right: -20, top: -20,
          fontSize: '6rem', opacity: 0.08,
        }}>{project.emoji}</div>
        <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>{project.emoji}</div>
        {project.featured && (
          <span className="tag" style={{ marginBottom: 10, display: 'inline-block' }}>⭐ Featured</span>
        )}
        <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.1rem', marginBottom: 4, color: 'var(--text-primary)' }}>
          {project.title}
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>{project.subtitle}</p>
      </div>

      {/* Body */}
      <div style={{ padding: '20px 24px', flex: 1 }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.87rem', lineHeight: 1.7, marginBottom: 16 }}>
          {project.description.slice(0, 110)}...
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
          {project.technologies.slice(0, 4).map(tech => (
            <span key={tech} className="tag" style={{ fontSize: '0.7rem' }}>{tech}</span>
          ))}
          {project.technologies.length > 4 && (
            <span className="tag" style={{ fontSize: '0.7rem' }}>+{project.technologies.length - 4}</span>
          )}
        </div>
      <div style={{ display: 'flex' }}>
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    onClick={e => e.stopPropagation()}
    className="btn-outline"
    style={{
      padding: '10px 16px',
      fontSize: '0.78rem',
      width: '100%',
      justifyContent: 'center'
    }}
  >
    GitHub Repository
  </a>

        </div>
      </div>
    </motion.div>
  );
}

function Modal({ project, onClose }) {
  if (!project) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9000,
        background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
      }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        onClick={e => e.stopPropagation()}
        className="glass-card"
        style={{ maxWidth: 560, width: '100%', padding: 0, overflow: 'hidden' }}
      >
        <div style={{
          background: `linear-gradient(135deg, ${project.color}33, ${project.color}11)`,
          padding: '32px 32px 24px',
          borderBottom: '1px solid var(--border)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: '3rem', marginBottom: 12 }}>{project.emoji}</div>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.5rem', marginBottom: 4 }}>{project.title}</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{project.subtitle}</p>
            </div>
            <button onClick={onClose} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 10, padding: '6px 12px', cursor: 'pointer', color: 'var(--text-primary)', fontSize: '1rem' }}>✕</button>
          </div>
        </div>
        <div style={{ padding: '24px 32px' }}>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 20 }}>{project.description}</p>
          <h4 style={{ fontFamily: 'Syne, sans-serif', marginBottom: 12, fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Technologies</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
            {project.technologies.map(tech => (
              <span key={tech} className="tag">{tech}</span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ flex: 1, justifyContent: 'center' }}>⌥ GitHub</a>
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>🚀 Live Demo</a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'featured' ? projects.filter(p => p.featured) : projects;

  return (
    <section id="projects" style={{ background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
      <div className="blob" style={{ right: '-5%', top: '15%', width: 380, height: 380, background: 'var(--blob3)' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <RevealSection>
          <div className="section-title">
            <h2>Projects</h2>
            <div className="title-line" />
            <p>Things I've built with passion and purpose</p>
          </div>
        </RevealSection>

        {/* Filter */}
        <RevealSection delay={0.1}>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginBottom: 44 }}>
            {['all', 'featured'].map(f => (
              <motion.button key={f} onClick={() => setFilter(f)} whileHover={{ scale: 1.05 }}
                style={{
                  padding: '9px 24px', borderRadius: 50, cursor: 'pointer',
                  border: filter === f ? 'none' : '1px solid var(--border)',
                  background: filter === f ? 'var(--gradient)' : 'var(--glass)',
                  color: filter === f ? '#fff' : 'var(--text-secondary)',
                  fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '0.85rem',
                  textTransform: 'capitalize', backdropFilter: 'blur(8px)',
                }}
              >
                {f === 'all' ? '🗂 All Projects' : '⭐ Featured'}
              </motion.button>
            ))}
          </div>
        </RevealSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
          <AnimatePresence>
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} onClick={setSelected} index={i} />
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
