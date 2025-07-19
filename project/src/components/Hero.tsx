import React from 'react';
import { Download, Mail, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 dark:text-white mb-6 animate-fade-in">
            Saumil Upadhyay
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-blue-800 dark:text-blue-400 mb-8 animate-fade-in-delay-1">
            Full Stack Developer | Data Scientist | Software Engineer
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay-2">
            I build robust, scalable applications and intelligent systems that power decision-making and performance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-delay-3">
            <a
              href="\Final-Resume-Saumil_Upadhyay-3.pdf"
              download="Saumil_Upadhyay_Resume.pdf"
              className="bg-blue-800 dark:bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Download size={20} />
              <span className="font-medium">Download Resume</span>
            </a>
            
            <button 
              onClick={scrollToContact}
              className="bg-transparent border-2 border-blue-800 dark:border-blue-400 text-blue-800 dark:text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-800 dark:hover:bg-blue-600 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Mail size={20} />
              <span className="font-medium">Contact Me</span>
            </button>
          </div>
          
          <button 
            onClick={scrollToAbout}
            className="animate-bounce text-blue-800 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-200"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;