import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChat from './components/AIChat';

function App() {
  return (
    <div className="bg-dark min-h-screen text-gray-200 font-sans selection:bg-primary selection:text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating AI Assistant */}
      <AIChat />
    </div>
  );
}

export default App;