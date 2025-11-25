import React from 'react';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-dark-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image / Visual */}
          <div className="relative hidden lg:block">
             <div className="absolute top-4 -left-4 w-full h-full border-4 border-primary rounded-lg z-0"></div>
             <img 
              src="https://picsum.photos/600/800?grayscale" 
              alt="About Me" 
              className="relative z-10 rounded-lg shadow-2xl w-full"
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="relative">
              <h2 className="text-4xl font-bold text-white mb-2">About Me</h2>
              <div className="h-1 w-20 bg-primary"></div>
            </div>
            
            <h3 className="text-2xl text-white font-light">
              I'm a <span className="text-primary font-semibold">{PERSONAL_INFO.title}</span>
            </h3>
            
            <p className="text-gray-400 leading-relaxed text-justify">
              {PERSONAL_INFO.bio}
              <br /><br />
              I focus on creating creative, clean, and user-friendly websites. I love to solve problems and create solutions that save people time and money.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 pt-4">
               <div className="flex border-b border-gray-800 pb-2">
                 <span className="font-bold text-white w-24">Name:</span>
                 <span className="text-gray-400">{PERSONAL_INFO.name}</span>
               </div>
               <div className="flex border-b border-gray-800 pb-2">
                 <span className="font-bold text-white w-24">Email:</span>
                 <span className="text-primary truncate">{PERSONAL_INFO.email}</span>
               </div>
               <div className="flex border-b border-gray-800 pb-2">
                 <span className="font-bold text-white w-24">Age:</span>
                 <span className="text-gray-400">{PERSONAL_INFO.age}</span>
               </div>
               <div className="flex border-b border-gray-800 pb-2">
                 <span className="font-bold text-white w-24">From:</span>
                 <span className="text-gray-400">{PERSONAL_INFO.location}</span>
               </div>
               <div className="flex border-b border-gray-800 pb-2">
                 <span className="font-bold text-white w-24">Phone:</span>
                 <span className="text-gray-400">{PERSONAL_INFO.phone}</span>
               </div>
               <div className="flex border-b border-gray-800 pb-2">
                 <span className="font-bold text-white w-24">Freelance:</span>
                 <span className="text-green-500">{PERSONAL_INFO.freelance}</span>
               </div>
            </div>

            <div className="pt-6">
              <button className="px-8 py-3 bg-primary text-gray-900 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors shadow-lg">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;