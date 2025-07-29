import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiPython, SiMongodb, SiMysql } from 'react-icons/si';

function useParallax(multiplier = 0.2) {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * multiplier);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [multiplier]);
  return offset;
}

const skillColors = {
  HTML: '#e34c26',
  CSS: '#1572b6',
  JavaScript: '#f7df1e',
  React: '#61dafb',
  'Tailwind CSS': '#38bdf8',
  'Node.js': '#339933',
  Express: '#000000',
  Python: '#3776ab',
  MongoDB: '#47a248',
  MySQL: '#4479a1',
};

const Skills = () => {
  const parallax = useParallax(0.15);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skills = {
    'Frontend Development': [
      { name: 'HTML', level: 90, icon: <SiHtml5 size={24} color="#e34c26" /> },
      { name: 'CSS', level: 85, icon: <SiCss3 size={24} color="#1572b6" /> },
      { name: 'JavaScript', level: 80, icon: <SiJavascript size={24} color="#f7df1e" /> },
      { name: 'React', level: 75, icon: <SiReact size={24} color="#61dafb" /> },
      { name: 'Tailwind CSS', level: 85, icon: <SiTailwindcss size={24} color="#38bdf8" /> },
    ],
    'Backend Development': [
      { name: 'Node.js', level: 75, icon: <SiNodedotjs size={24} color="#339933" /> },
      { name: 'Express', level: 75, icon: <SiExpress size={24} color="#000000" /> },
      { name: 'Python', level: 70, icon: <SiPython size={24} color="#3776ab" /> },
      { name: 'MongoDB', level: 70, icon: <SiMongodb size={24} color="#47a248" /> },
      { name: 'MySQL', level: 65, icon: <SiMysql size={24} color="#4479a1" /> },
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
      {/* Parallax background shape */}
      <div
        className="absolute -top-32 right-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/30 rounded-full filter blur-2xl opacity-40 -z-10"
        style={{ transform: `translateY(${parallax}px)`, willChange: 'transform' }}
      ></div>
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
          <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            My technical toolkit spans both frontend and backend technologies, enabling me to build complete web solutions.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" ref={ref}>
          {Object.entries(skills).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="bg-white/90 dark:bg-gray-900/80 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-800"
            >
              <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100">
                {category}
              </h3>
              <div className="space-y-6">
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="relative"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800/80 flex items-center justify-center mr-3 transform hover:rotate-12 transition-transform duration-300 border border-gray-200 dark:border-gray-800`}>
                          {skill.icon}
                        </div>
                        <span className="font-medium text-gray-900 dark:text-gray-100">{skill.name}</span>
                      </div>
                      <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-full bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {Object.values(skills).flat().map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotate: 5,
                transition: { duration: 0.3 }
              }}
              data-shadow-color
              style={{ '--shadow-color': skillColors[skill.name] || '#6366f1' }}
              className={`p-4 rounded-xl bg-white/90 dark:bg-gray-900/80 text-indigo-600 dark:text-gray-100 shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800/80 flex items-center justify-center mb-3 border border-gray-200 dark:border-gray-800">
                  {skill.icon}
                </div>
                <span className="font-medium text-gray-900 dark:text-gray-100">{skill.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;