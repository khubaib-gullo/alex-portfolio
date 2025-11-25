import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { ArrowDown, Facebook, Twitter, Linkedin, Github, Instagram } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark pt-16">
      {/* Diagonal Overlay */}
      <div className="absolute top-0 right-0 w-full h-full bg-dark-light transform -skew-x-12 translate-x-1/2 z-0 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6 order-2 lg:order-1">
            <h3 className="text-primary font-bold text-xl tracking-widest uppercase">Hello, I am</h3>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed max-w-lg">
              {PERSONAL_INFO.title} based in {PERSONAL_INFO.location}.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-6">
              <a 
                href="#portfolio"
                className="px-8 py-3 bg-primary text-gray-900 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-primary transition-all duration-300 shadow-[0_0_20px_rgba(255,180,0,0.3)]"
              >
                View Portfolio
              </a>
              <a 
                href="#contact"
                className="px-8 py-3 border-2 border-white text-white rounded-full font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-8 text-gray-400">
               <a href={PERSONAL_INFO.socials.github} className="hover:text-primary transition-colors"><Github size={20} /></a>
               <a href={PERSONAL_INFO.socials.linkedin} className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
               <a href={PERSONAL_INFO.socials.twitter} className="hover:text-primary transition-colors"><Twitter size={20} /></a>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-[10px] border-dark-light overflow-hidden shadow-2xl">
               <img 
                 src="https://picsum.photos/600/600?grayscale" 
                 alt={PERSONAL_INFO.name}
                 className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
               />
            </div>
            {/* Floating Badge */}
            <div className="absolute bottom-10 left-0 lg:left-10 bg-primary text-gray-900 p-4 rounded-lg shadow-xl font-bold text-center hidden md:block animate-bounce" style={{ animationDuration: '3s' }}>
                <span className="block text-2xl">5+</span>
                <span className="text-xs uppercase tracking-wider">Years Exp.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-500 hover:text-primary transition-colors cursor-pointer">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;