import React from 'react';
import { ExternalLink, Github, Calendar, Star } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Personal Finance Tracker',
      description: 'Full-stack multi-user finance dashboard to manage 10+ spending categories and 1000+ transactions. Features JWT-based authentication, automated welcome emails, responsive design, and 12+ interactive charts for tracking trends, budgets, and cash flow insights. Deployed on Vercel with optimized API performance.',
      tech: ['Next.js', 'TypeScript', 'MongoDB', 'TailwindCSS', 'Recharts', 'JWT', 'Nodemailer'],
      features: [
        'Real-time transaction tracking',
        'Advanced budgeting logic',
        'Visual analytics dashboard with 12+ Recharts',
        'Responsive and interactive design',
        'JWT-based authentication with bcrypt',
        'Automated welcome emails using Nodemailer'
      ],
      github: 'https://github.com/knull23/Personal-Finance-Tracker-Enterprise-Final',
      live: 'https://personal-finance-tracker-enterprise.vercel.app/',
      deployment: 'Vercel',
      status: 'Live'
    },
    {
      title: 'Enterprise Churn Prediction Platform',
      description: 'Full-stack ML system for confident customer churn prediction. Uses XGBoost with SHAP explainability, JWT-secured React + Flask dashboard, dynamic probability-based risk segments, and threshold calibration (0.54) to balance false positives/negatives.',
      tech: ['XGBoost', 'Flask', 'React.js', 'SHAP', 'JWT', 'MongoDB'],
      features: [
        'SHAP-based feature explainability',
        'JWT-secured authentication (User/Admin roles)',
        'Churn risk probability thresholds with calibrated FPs/FNs',
        'Interactive ML dashboard with historical predictions',
        'Granular churn probability analysis (2%-73%)'
      ],
      github: 'https://github.com/knull23/Enterprise-Churn-Prediction-Platform',
      live: 'https://enterprise-churn-prediction-platfor-ochre.vercel.app/',
      deployment: 'Vercel',
      status: 'Live'
    },
    {
      title: 'GrowthIQ: Enterprise Forecasting & Business Planning Platform',
      description: 'End-to-end AI-powered business planning dashboard integrating LSTM and SARIMA forecasting models with dynamic scenario analysis and enterprise-grade metrics visualization.',
      tech: ['Python', 'TensorFlow', 'scikit-learn', 'Flask', 'React', 'MongoDB', 'Pandas', 'Matplotlib', 'Docker', 'Plotly'],
      features: [
        'Time series forecasting with LSTM and SARIMA models',
        'Interactive scenario planner and revenue simulator',
        'Dynamic React dashboard with live API integration',
        'MongoDB-backed forecast and metric storage',
        'Model comparison with MAE, RMSE, and MAPE',
        'Containerized deployment with Docker and Docker Compose'
      ],
      github: 'https://github.com/knull23/Revenue_forecast',
      live: null,
      deployment: 'Vercel',
      status: 'InProgress'
    },
    
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-16">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Live' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                      project.status === 'Completed' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' :
                      'bg-red-200 text-red-900 dark:bg-red-900 dark:text-red-300'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 dark:text-white mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <Star size={12} className="text-yellow-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>Deployed on {project.deployment}</span>
                    </span>
                    
                    <div className="flex space-x-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        <Github size={18} />
                        <span>Code</span>
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                        >
                          <ExternalLink size={18} />
                          <span>Live</span>
                        </a>
                      )}
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

export default Projects;