import React from 'react';
import { Building, Calendar, Award, TrendingUp } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Lloyds Banking Group',
      position: 'Data Science Simulation',
      duration: '2025',
      type: 'Forage Virtual Experience',
      description: 'Developed customer churn prediction models using Random Forest algorithms to identify at-risk customers.',
      achievements: [
        'Achieved ROC-AUC score of 0.82 on churn prediction model',
        'Implemented feature engineering techniques for financial data',
        'Created data visualization dashboards for stakeholder presentation',
        'Analyzed customer behavior patterns and segmentation'
      ],
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Random Forest', 'Data Visualization'],
      icon: <Building className="text-green-600" size={24} />
    },
    {
      company: 'JPMorgan Chase & Co.',
      position: 'Quantitative Research Simulation',
      duration: '2025',
      type: 'Forage Virtual Experience',
      description: 'Conducted quantitative research on FICO-based risk modeling for loan applications and credit assessment.',
      achievements: [
        'Developed risk assessment models using FICO score data',
        'Implemented statistical analysis for loan default prediction',
        'Created comprehensive risk evaluation frameworks',
        'Optimized model performance through feature selection'
      ],
      technologies: ['Python', 'NumPy', 'Statistical Analysis', 'Risk Modeling', 'Financial Data'],
      icon: <TrendingUp className="text-blue-600" size={24} />
    },
    {
      company: 'Quantium',
      position: 'Data Analytics Simulation',
      duration: '2025',
      type: 'Forage Virtual Experience',
      description: 'Performed commercial analytics for retail stores, focusing on customer behavior analysis and sales optimization.',
      achievements: [
        'Analyzed customer purchasing patterns and trends',
        'Developed insights for inventory management optimization',
        'Created data-driven recommendations for store performance',
        'Implemented customer segmentation strategies'
      ],
      technologies: ['Python', 'Pandas', 'Plotly', 'Retail Analytics', 'Customer Segmentation'],
      icon: <Award className="text-purple-600" size={24} />
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-16">
            Professional Experience
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-300 dark:bg-blue-600 transform md:-translate-x-0.5"></div>
            
            {experiences.map((experience, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full transform md:-translate-x-1.5 z-10"></div>
                
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start space-x-4 mb-4">
                      {experience.icon}
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{experience.company}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">{experience.position}</p>
                        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mt-1">
                          <Calendar size={14} />
                          <span>{experience.duration}</span>
                          <span>•</span>
                          <span>{experience.type}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{experience.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-800 dark:text-white mb-2">Key Achievements:</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start space-x-2">
                            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;