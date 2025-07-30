import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">
              <span className="text-indigo-600 dark:text-indigo-400">Jagan</span> Mohan
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-md">
              Full-Stack Developer dedicated to creating intuitive and dynamic web experiences.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <motion.a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=konthamjaganmohanreddy@gmail.com" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 hover:from-red-400 hover:to-pink-500 rounded-2xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 transform"
              aria-label="Email"
            >
              <Mail size={20} />
            </motion.a>
            <motion.a 
              href="https://github.com/11Jagan" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 hover:from-indigo-600 hover:to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 transform"
              aria-label="GitHub"
            >
              <Github size={20} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/jagan-mohan-reddy-kontham-445250293" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 transform"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a 
              href="https://www.instagram.com/11_jagan_/" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 rounded-2xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 transform"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </motion.a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Kontham Jagan Mohan Reddy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;