import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span>Made with</span>
            <Heart className="text-red-500" size={16} />
            <span>and</span>
            <Code className="text-blue-400" size={16} />
            <span>by Saumil Upadhyay</span>
          </div>
          
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-4">
            <span>Powered by React & TypeScript</span>
            <span>•</span>
            <span>Styled with Tailwind CSS</span>
          </div>
          
          <div className="text-sm text-gray-500">
            <p>&copy; 2025 Saumil Upadhyay. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;