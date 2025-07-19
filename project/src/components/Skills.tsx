import React from 'react';
import { Code, Database, Settings, GitBranch } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code className="text-blue-600" size={24} />,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'TypeScript', level: 85 },
        { name: 'C/C++', level: 75 },
        { name: 'SQL', level: 80 },
        { name: 'Golang', level: 70 },
      ]
    },
    {
      title: 'Frameworks & Tools',
      icon: <Settings className="text-green-600" size={24} />,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Flask', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'TailwindCSS', level: 90 },
      ]
    },
    {
      title: 'Databases',
      icon: <Database className="text-purple-600" size={24} />,
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 75 },
        { name: 'SQLite', level: 70 },
      ]
    },
    {
      title: 'Dev Tools & Practices',
      icon: <GitBranch className="text-orange-600" size={24} />,
      skills: [
        { name: 'Git', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'PyCharm', level: 85 },
        { name: 'Postman', level: 80 },
        { name: 'CI/CD', level: 75 },
        { name: 'Agile', level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-16">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-6">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {['REST APIs', 'JWT', 'Render', 'Jupyter', 'Debugging', 'Deployment', 'Vercel', 'SHAP'].map((tool, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                <span className="text-gray-700 dark:text-gray-300 font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;