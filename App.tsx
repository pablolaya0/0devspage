
import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { About } from './components/About';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#E7E4F4] relative overflow-hidden text-slate-800">
      {/* Soft Ambient Gradients - Manteniendo la profundidad sin elementos distractores */}
      <div className="fixed top-[-10%] left-[-5%] w-[45vw] h-[45vw] bg-[#89ACC8]/25 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-5%] w-[55vw] h-[55vw] bg-[#B3B9C6]/25 rounded-full blur-[140px] pointer-events-none z-0" />
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Services />
        <Process />
        <About />
        <Team />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
