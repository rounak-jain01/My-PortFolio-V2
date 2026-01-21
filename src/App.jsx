import React, { useEffect } from 'react';
import Intro from './components/Intro';
import Profile from './components/Profile';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import AmbientBackground from './components/AmbientBackground'; // Import kiya
import Certificates from './components/Certificates'; // Import kiya
import Lenis from 'lenis';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    // bg-black yahan se hata sakte ho kyunki AmbientBackground sambhal lega
    <div className="min-h-screen text-white relative">
      
      {/* Global Background Layer */}
      <AmbientBackground />

      {/* Sections */}
      <Intro />
      <Profile />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Certificates />
      <Achievements />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;