import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.send(
      'service_5zsz4kk', // replace with your EmailJS service ID
      'template_1v1gg5c', // replace with your EmailJS template ID
      formData,
      'd3a2PS7ufESJocOuH' // replace with your EmailJS public key
    )
    .then(() => {
      alert('✅ Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('Email send error:', error);
      alert('❌ Failed to send message. Please try again later.');
    })
    .finally(() => {
      setIsSending(false);
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-16">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                I'm open to new opportunities, collaborations, or just a chat about tech. Feel free to reach out!
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="text-blue-600 dark:text-blue-400" size={24} />
                  <a href="mailto:saumil.upadhyay@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 text-gray-700 dark:text-gray-300">
                    saumil.upadhyay@gmail.com
                  </a>
                </div>

                <div className="flex items-center space-x-4">
                  <Linkedin className="text-blue-600 dark:text-blue-400" size={24} />
                  <a href="https://linkedin.com/in/saumil-upadhyay-4a5a05251" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 text-gray-700 dark:text-gray-300">
                    linkedin.com/in/saumil-upadhyay
                  </a>
                </div>

                <div className="flex items-center space-x-4">
                  <Github className="text-blue-600 dark:text-blue-400" size={24} />
                  <a href="https://github.com/knull23" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 text-gray-700 dark:text-gray-300">
                    github.com/knull23
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
                Send Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-blue-800 dark:bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>{isSending ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
