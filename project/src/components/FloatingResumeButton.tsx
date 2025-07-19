import React from 'react';
import { Download } from 'lucide-react';

const FloatingResumeButton: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Final-Resume-Saumil_Upadhyay-2.pdf'; // Local file in /public folder
    link.setAttribute('download', 'Saumil_Upadhyay_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={handleDownload}
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
        title="Download Resume"
      >
        <Download size={24} />
      </button>
    </div>
  );
};

export default FloatingResumeButton;


