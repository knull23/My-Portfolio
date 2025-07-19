import React from 'react';
import { Award, ExternalLink, Calendar, Building } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Data Science Job Simulation',
      organization: 'Lloyds Banking Group',
      platform: 'Forage',
      date: '2025',
      description: 'Built a churn prediction model using random forest (ROC-AUC: 0.82) with GridSearchCV for hyperparameter tuning. Performed advanced preprocessing and feature analysis using pandas, scikit-learn, and matplotlib to generate actionable insights.',
      skills: ['Python', 'Random Forest', 'Exploratory Data Analysis', 'Machine Learning', 'Data Science', 'Data Visualization'],
      credentialUrl: 'https://drive.google.com/file/d/1diPimTR3he-shx_hec_p7SOhja0Nuw7O/view?usp=drive_link',
      logo: <Award className="text-green-600" size={24} />
    },
    {
      title: 'Quantitative Research Job Simulation',
      organization: 'JPMorgan Chase & Co.',
      platform: 'Forage',
      date: '2025',
      description: 'Analyzed a portfolio of loans to estimate customer default probabilities using quantitative research techniques. Applied dynamic programming to convert FICO scores into categorical risk buckets for predicting loan defaults.',
      skills: ['Risk Modeling', 'Statistical Analysis', 'Financial Data', 'Python', 'Dynamic Programming', 'Data Analysis'],
      credentialUrl: 'https://drive.google.com/file/d/1cHu2mtzlAo94yyQ6IPLPssVghdITH6TZ/view?usp=drive_link',
      logo: <Award className="text-blue-600" size={24} />
    },
    {
      title: 'Data Analytics Job Simulation',
      organization: 'Quantium',
      platform: 'Forage',
      date: '2025',
      description: 'Analyzed customer transaction data to extract insights and deliver commercial recommendations. Identified benchmark stores for uplift testing and created strategic reports for category planning.',
      skills: ['Data Analytics', 'Customer Segmentation', 'Retail Analytics', 'Python', 'Data Wrangling', 'Data Validation', 'Data Visualization'],
      credentialUrl: 'https://drive.google.com/file/d/1evvOehZfFzFAP6n-9Eb32IuwrjzCKqjN/view?usp=drive_link',
      logo: <Award className="text-purple-600" size={24} />
    },
    {
      title: 'Data Science Job Simulation',
      organization: 'BCG X',
      platform: 'Forage',
      date: '2025',
      description: 'Completed end-to-end churn analysis for XYZ Analytics using Python (Pandas, NumPy). Engineered and optimized a random forest model achieving 85% accuracy; delivered executive summary with business insights',
      skills: ['Data Science', 'Model Interpretation', 'Business Understanding', 'Python', 'Data Visualization', 'Exploratory Data Analysis'],
      credentialUrl: 'https://drive.google.com/file/d/1g49fhzIrMnaaoek_kIFE_mS_gmMhLacC/view?usp=drive_link',
      logo: <Award className="text-pink-600" size={24} />
    },
        {
      title: 'Data Science Job Simulation',
      organization: 'British Airways',
      platform: 'Forage',
      date: '2025',
      description: 'Scraped and analysed customer review data to uncover findings. Built a predictive model to understand factors that influence buying behaviour.',
      skills: ['Data Science', 'Machine Learning', 'Data Modeling', 'Python', 'Data Visualization', 'Assumption Building', 'Communication'],
      credentialUrl: 'https://drive.google.com/file/d/1VOrxHWJjEeVSTMV5mGicCKq-K31g_46X/view?usp=drive_link',
      logo: <Award className="text-yellow-600" size={24} />
    },
        {
      title: 'GenAI Job Simulation',
      organization: 'BCG X',
      platform: 'Forage',
      date: '2025',
      description: 'Integrated and interpreted complex financial data from 10-K and 10-Q reports, employing rule-based logic to create a chatbot that provides user-friendly financial insights and analysis.',
      skills: ['Data Extraction', 'Excel', 'Jupyter', 'Python', 'Finanical Analysis', 'Chatbot Development'],
      credentialUrl: 'https://drive.google.com/file/d/1TFA_mcNQ_cvSD1ZA-cadacJJ3sTXbpUX/view?usp=drive_link',
      logo: <Award className="text-orange-600" size={24} />
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-16">
            Certifications & Training
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    {cert.logo}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{cert.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">{cert.organization}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <Calendar size={14} />
                    <span>{cert.date}</span>
                    <span>•</span>
                    <span>{cert.platform}</span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{cert.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 dark:text-white mb-2 text-sm">Skills Gained:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500 dark:text-gray-400">Verified Credential</span>
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 text-sm"
                    >
                      <ExternalLink size={14} />
                      <span>View</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-600 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-400 mb-2">Continuous Learning</h3>
              <p className="text-gray-600 dark:text-gray-300">
                I'm committed to staying updated with the latest technologies and industry best practices. 
                Currently pursuing additional certifications in advanced machine learning and data science.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;