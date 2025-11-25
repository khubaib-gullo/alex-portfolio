import React from 'react';
import { EXPERIENCE, EDUCATION } from '../constants';
import { Briefcase, GraduationCap } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-24 bg-dark-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Resume</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Experience Column */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <Briefcase className="text-primary" size={28} />
              <h3 className="text-2xl font-bold text-white">Experience</h3>
            </div>
            
            <div className="space-y-8 border-l-2 border-gray-800 ml-3 pl-8 relative">
              {EXPERIENCE.map((job) => (
                <div key={job.id} className="relative group">
                  {/* Dot */}
                  <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-2 border-gray-600 bg-dark-light group-hover:border-primary group-hover:bg-primary transition-all duration-300"></span>
                  
                  <div className="bg-dark p-6 rounded-lg border border-gray-800 hover:border-primary/50 transition-colors duration-300">
                    <span className="inline-block px-3 py-1 rounded-full bg-gray-800 text-primary text-xs font-bold mb-4">
                      {job.period}
                    </span>
                    <h4 className="text-xl font-bold text-white mb-1">{job.role}</h4>
                    <p className="text-gray-400 text-sm mb-4">{job.company}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <GraduationCap className="text-primary" size={28} />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            
            <div className="space-y-8 border-l-2 border-gray-800 ml-3 pl-8 relative">
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="relative group">
                  {/* Dot */}
                  <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-2 border-gray-600 bg-dark-light group-hover:border-primary group-hover:bg-primary transition-all duration-300"></span>
                  
                  <div className="bg-dark p-6 rounded-lg border border-gray-800 hover:border-primary/50 transition-colors duration-300">
                    <span className="inline-block px-3 py-1 rounded-full bg-gray-800 text-primary text-xs font-bold mb-4">
                      {edu.period}
                    </span>
                    <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                    <p className="text-gray-400 text-sm mb-4">{edu.school}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Resume;