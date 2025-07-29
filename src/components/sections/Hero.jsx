import React, { useEffect, useState } from 'react';
import { ArrowRight, Code, Laptop, Server, FileText } from 'lucide-react';

// Parallax hook
function useParallax(multiplier = 0.5) {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * multiplier);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [multiplier]);
  return offset;
}

const Hero = () => {
  // Parallax for backgrounds and hero image
  const bgParallax = useParallax(0.3);
  const shape1 = useParallax(0.5);
  const shape2 = useParallax(0.7);
  const heroImgParallax = useParallax(0.15);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-28 pb-20 min-h-screen flex items-center relative overflow-hidden">
      {/* Parallax Background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 -z-10"
        style={{ transform: `translateY(${bgParallax * 0.5}px)`, willChange: 'transform' }}
      ></div>
      {/* Parallax Animated shapes */}
      <div className="absolute inset-0 -z-5">
        <div
          className="absolute top-20 left-10 w-72 h-72 bg-indigo-300 dark:bg-indigo-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob"
          style={{ transform: `translateY(${shape1}px)`, willChange: 'transform' }}
        ></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000"
          style={{ transform: `translateY(${-shape2}px)`, willChange: 'transform' }}
        ></div>
        <div
          className="absolute -bottom-20 left-1/2 w-72 h-72 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-4000"
          style={{ transform: `translateY(${shape2 * 0.7}px)`, willChange: 'transform' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-800 dark:text-indigo-300 mb-6">
              <span className="text-sm font-medium">Welcome to my portfolio</span>
            </div>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 transition-transform duration-500"
              style={{ transform: `translateY(${bgParallax * 0.2}px) scale(${1 - bgParallax * 0.0005})` }}
            >
              Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Jagan</span>
            </h1>
            <p className="text-2xl text-gray-600 dark:text-gray-400 font-medium mb-6">
              Aspiring Full-Stack Developer
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Passionate about building dynamic, user-friendly web applications that solve complex challenges and create intuitive digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center transform hover:scale-105"
              >
                Contact Me
                <ArrowRight size={18} className="ml-2" />
              </button>
              <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-300 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-400 text-gray-900 dark:text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
              >
                View Resume
                <FileText size={18} className="ml-2 group-hover:animate-bounce" />
              </a>
            </div>
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors duration-300">
                <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-2">
                  <Code size={20} />
                </div>
                <span className="text-sm font-medium">Frontend</span>
              </div>
              <div className="flex flex-col items-center lg:items-start p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors duration-300">
                <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-2">
                  <Server size={20} />
                </div>
                <span className="text-sm font-medium">Backend</span>
              </div>
              <div className="flex flex-col items-center lg:items-start p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors duration-300">
                <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-2">
                  <Laptop size={20} />
                </div>
                <span className="text-sm font-medium">UI/UX</span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
            <div className="relative">
              <div
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-indigo-600 dark:border-indigo-400 shadow-2xl transform hover:scale-105 transition-transform duration-300"
                style={{ transform: `translateY(${-heroImgParallax * 0.7}px) scale(${1 - heroImgParallax * 0.0007})`, willChange: 'transform' }}
              >
                <img 
                  src="https://i.postimg.cc/7PNt6pKn/me.jpg" 
                  alt="Kontham Jagan Mohan Reddy" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center transform rotate-12 animate-float">
                <span className="text-4xl">👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;