import React from 'react';
import { GraduationCap, Award, Code, Brain } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-16">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                As a passionate Full Stack Developer and Data Scientist, I specialize in creating intelligent, scalable solutions that bridge the gap between complex data insights and user-friendly applications. My expertise spans across modern web technologies and machine learning systems.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                With a strong foundation in both frontend and backend development, I excel at building robust applications using React, Node.js, and Python. My data science background enables me to integrate advanced analytics and ML models seamlessly into production systems.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm committed to writing clean, maintainable code and following best practices in software architecture. My goal is to develop solutions that not only solve immediate problems but also scale efficiently as businesses grow.
              </p>
              
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center space-x-2 text-blue-800 dark:text-blue-400">
                  <GraduationCap size={20} />
                  <span className="font-medium">B.Tech CSE, IIIT Sonepat (2022–2026)</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Key Strengths</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Brain className="text-blue-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-white">ML Systems</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Advanced machine learning model development and deployment</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Code className="text-blue-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-white">Full Stack Development</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">End-to-end application development with modern frameworks</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Award className="text-blue-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-white">Scalable Architecture</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Designing systems that grow with business needs</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-400 mb-2">Resume</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  View my latest resume to learn more about my experience and achievements.
                </p>
                <a
                  href="/Final-Resume-Saumil_Upadhyay-3.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-800 dark:bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors duration-200"
                >
                  View My Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;