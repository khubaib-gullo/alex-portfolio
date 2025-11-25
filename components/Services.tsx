import React from 'react';
import { SERVICES } from '../constants';
import * as LucideIcons from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">My Services</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
             // Dynamic Icon Rendering
             const IconComponent = (LucideIcons as any)[service.icon.charAt(0).toUpperCase() + service.icon.slice(1)] || LucideIcons.Code;

             return (
              <div key={index} className="bg-dark-light p-8 rounded-lg border-b-2 border-transparent hover:border-primary transition-all duration-300 group hover:-translate-y-1 text-center">
                <div className="w-16 h-16 bg-dark rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-primary transition-colors duration-300 shadow-lg">
                  <IconComponent className="text-primary group-hover:text-white transition-colors" size={32} />
                </div>
                <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
             );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;