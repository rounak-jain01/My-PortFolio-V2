import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Detail from './components/Detail'; // Naya component
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Credentials from './components/Credentials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Smooth Scrolling Setup
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Scroll kitna smooth/slow hoga
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple jaisa easing function
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="bg-[#050505] min-h-screen font-sans selection:bg-purple-500/30">
      <Navbar />
      <Hero />
      <Detail /> {/* Hero ke theek neeche */}
      <About/>
      <Skills/>
      <Experience/>
      <Education/>
      <Projects/>
      <Credentials/>
      <Contact/>
      <Footer/>
    </main>
  );
}

export default App;