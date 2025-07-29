import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function useParallax(multiplier = 0.3) {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * multiplier);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [multiplier]);
  return offset;
}

const About = () => {
  const parallax = useParallax(0.2);
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Parallax background shape */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/30 rounded-full filter blur-2xl opacity-40 -z-10"
        style={{ transform: `translateY(${parallax}px)`, willChange: 'transform' }}
      ></div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">About Me</h2>
        <div className="w-24 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-8"></div>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-center">
          {/* Your about text here */}
          I am a passionate full-stack developer with a love for building beautiful, performant, and accessible web applications. My focus is on delivering seamless user experiences and clean, maintainable code.
        </p>
      </motion.div>
    </section>
  );
};

export default About;