
import React, { useEffect, useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';
import GeometricBackground from './components/GeometricBackground';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.scroll-reveal');
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });

      // Simple active section detection for Nav
      const sections = ['hero', 'about', 'services', 'projects', 'philosophy', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-blue-600/30">
      <GeometricBackground />
      <Navbar activeSection={activeSection} />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about" className="scroll-reveal">
          <About />
        </section>
        
        <section id="services" className="scroll-reveal">
          <Services />
        </section>
        
        <section id="projects" className="scroll-reveal">
          <Projects />
        </section>
        
        <section id="philosophy" className="scroll-reveal">
          <Philosophy />
        </section>
        
        <section id="contact" className="scroll-reveal">
          <Contact />
        </section>
      </main>

      <footer className="py-12 border-t border-white/5 text-center text-white/40 text-sm">
        <p>&copy; 2026 Caleb Ibewachi King. Systems of Innovation.</p>
      </footer>
    </div>
  );
};

export default App;
