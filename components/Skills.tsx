import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">My Skills</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
                I value my skills and I am always trying to improve them. Here is an overview of my technical proficiency.
            </p>
            <div className="w-16 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SKILLS.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-end">
                <h4 className="text-white font-semibold font-heading tracking-wide">{skill.name}</h4>
                <span className="text-gray-400 text-sm">{skill.percentage}%</span>
              </div>
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;