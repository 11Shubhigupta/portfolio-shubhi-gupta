import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './hooks/useTheme';
import { useScrollProgress } from './hooks/useScroll';
import Preloader from './components/common/Preloader';
import Cursor from './components/common/Cursor';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Certifications from './components/Certifications/Certifications';

import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { Toaster } from 'react-hot-toast';

function ScrollBar() {
  const progress = useScrollProgress();
  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX: progress / 100, width: '100%' }}
    />
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed', bottom: 32, right: 32, zIndex: 1000,
            width: 48, height: 48, borderRadius: '50%',
            background: 'var(--gradient)', border: 'none',
            color: '#fff', fontSize: '1.2rem', cursor: 'pointer',
            boxShadow: 'var(--shadow)', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      <Toaster position="top-right" />
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" onDone={() => setLoading(false)} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Cursor />
            <ScrollBar />
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Certifications />
              
              <Services />
              <Testimonials />
              <Contact />
            </main>
            <Footer />
            <BackToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}
