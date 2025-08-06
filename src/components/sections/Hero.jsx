import { ArrowDown, FileText, Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const socialLinks = [
  { icon: <Linkedin size={22} />, url: 'https://www.linkedin.com/in/jagan-mohan-reddy-kontham-445250293', label: 'LinkedIn' },
  { icon: <Github size={22} />, url: 'https://github.com/11Jagan', label: 'GitHub' },
  { icon: <Mail size={22} />, url: 'https://mail.google.com/mail/?view=cm&fs=1&to=konthamjaganmohanreddy@gmail.com', label: 'Email' },
];

const Hero = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-950 dark:to-gray-800 overflow-hidden px-4 py-16">
      {/* Abstract SVG Blob Background */}
      <svg className="absolute left-0 top-0 w-[600px] h-[600px] opacity-30 -z-10" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f)"><ellipse cx="300" cy="300" rx="200" ry="180" fill="#6366f1"/></g>
        <defs><filter id="filter0_f" x="0" y="0" width="600" height="600" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feGaussianBlur stdDeviation="60"/></filter></defs>
      </svg>
      <div className="max-w-6xl w-full mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left: Text */}
        <motion.div 
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="mb-4 px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-200 text-xs tracking-widest uppercase font-semibold">Welcome to my portfolio</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            Hi, I'm Jagan
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-indigo-700 dark:text-indigo-200 min-h-[2.5rem]">
            <Typewriter
              words={["Full-Stack Developer.", "Open Source Contributor."]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1200}
            />
          </h2>
          <p className="text-lg mb-8 max-w-xl text-gray-700 dark:text-gray-200">
            I build modern, user-friendly web applications that solve real-world problems and create delightful digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto justify-center lg:justify-start">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              Download Resume <FileText size={20} className="ml-2" />
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gray-200 hover:bg-indigo-700 text-indigo-700 hover:text-white dark:bg-white/10 dark:text-indigo-100 dark:hover:bg-indigo-700 dark:hover:text-white font-semibold shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              Hire Me
            </button>
          </div>
          <div className="flex gap-5 mb-8 justify-center lg:justify-start">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-indigo-700 hover:text-indigo-900 dark:text-indigo-200 dark:hover:text-indigo-400 transition-colors duration-200"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </motion.div>
        {/* Right: Profile Image */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-white bg-white dark:border-indigo-500 dark:bg-gray-800 shadow-2xl">
            <img
              src="https://i.postimg.cc/7PNt6pKn/me.jpg"
              alt="Jagan Mohan Reddy"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-xs text-indigo-200 mb-1">Scroll Down</span>
        <button onClick={() => scrollToSection('about')} aria-label="Scroll to About" className="animate-bounce text-indigo-400 hover:text-indigo-200">
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;