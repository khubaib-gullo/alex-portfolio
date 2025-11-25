import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 bg-dark-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Get in Touch</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="bg-dark p-8 md:p-12 rounded-xl shadow-2xl border border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-dark-light border border-gray-800 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-dark-light border border-gray-800 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-500"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <textarea
                  id="message"
                  rows={6}
                  placeholder="How can I help you?"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-dark-light border border-gray-800 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-500 resize-none"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                    type="submit"
                    disabled={submitted}
                    className="inline-flex items-center space-x-2 px-10 py-4 bg-primary text-gray-900 rounded-full font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_14px_0_rgba(255,180,0,0.39)]"
                >
                    {submitted ? (
                    <span>Message Sent!</span>
                    ) : (
                    <>
                        <span>Send Message</span>
                        <Send size={18} />
                    </>
                    )}
                </button>
              </div>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;