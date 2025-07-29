import { motion } from 'framer-motion';
import { FaNodeJs, FaReact, FaDatabase, FaGithub, FaUsers } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiJavascript, SiTypescript, SiPostman } from 'react-icons/si';

const techStack = [
  { icon: <FaReact size={28} color="#61DAFB" />, label: 'React' },
  { icon: <FaNodeJs size={28} color="#339933" />, label: 'Node.js' },
  { icon: <SiExpress size={28} color="#000000" />, label: 'Express' },
  { icon: <SiMongodb size={28} color="#47A248" />, label: 'MongoDB' },
  { icon: <SiJavascript size={28} color="#F7DF1E" />, label: 'JavaScript' },
  { icon: <SiTypescript size={28} color="#3178C6" />, label: 'TypeScript' },
  { icon: <FaDatabase size={28} color="#4F46E5" />, label: 'REST APIs' },
  { icon: <SiPostman size={28} color="#FF6C37" />, label: 'Postman' },
  { icon: <FaGithub size={28} color="#181717" />, label: 'GitHub' },
];

const aboutVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const iconVariants = {
  hidden: { scale: 0.7, opacity: 0 },
  visible: (i) => ({ scale: 1, opacity: 1, transition: { delay: i * 0.05 + 0.1, type: 'spring', stiffness: 350, damping: 18 } }),
  hover: { scale: 1.1, transition: { type: 'spring', stiffness: 700, damping: 8 } },
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 flex items-center justify-center font-[Poppins,sans-serif]">
      <motion.div
        variants={aboutVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-4xl w-full mx-auto px-4"
      >
        <div className="bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center">
          {/* Left: Text */}
          <div className="flex-1 min-w-[250px]">
            <h2 className="font-bold mb-4 text-gray-900 dark:text-white text-3xl md:text-4xl lg:text-5xl leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              About Me
            </h2>
            <div className="w-16 h-1 bg-indigo-600 dark:bg-indigo-400 mb-6"></div>
            <p className="mb-4 text-[1.08rem] md:text-lg text-[#444] dark:text-gray-300" style={{ lineHeight: 1.6, fontFamily: 'Poppins, sans-serif' }}>
              I'm a <span className="font-semibold text-indigo-600 dark:text-indigo-400">Full Stack Web Developer</span> who builds modern, responsive, and user-centric applications. My main stack is <span className="font-semibold text-green-700 dark:text-green-400">MERN</span> (MongoDB, Express, React, Node.js), and I love working with REST APIs, JavaScript, and TypeScript.
            </p>
            <p className="mb-4 text-[1.08rem] md:text-lg text-[#555] dark:text-gray-300" style={{ lineHeight: 1.6, fontFamily: 'Poppins, sans-serif' }}>
              I thrive on <span className="font-semibold text-indigo-600 dark:text-indigo-400">problem-solving</span> and collaboration, and I'm passionate about creating seamless digital experiences that make a difference.
            </p>
            <div className="flex items-start mt-6">
              <span className="flex-shrink-0 text-2xl mr-3 select-none">💡</span>
              <div className="bg-[#f3f4f6] dark:bg-indigo-900/30 rounded-lg pl-4 pr-3 py-3 border-l-4 border-indigo-400 dark:border-indigo-500 text-[#444] dark:text-indigo-100 text-base md:text-[1.08rem] font-medium shadow-sm w-full" style={{ lineHeight: 1.6, fontFamily: 'Poppins, sans-serif' }}>
                Fun fact: I love tackling coding challenges and collaborating on open source!
              </div>
            </div>
          </div>
          {/* Right: Tech Stack Icons */}
          <div className="flex-1 flex flex-col items-center">
            <div className="grid grid-cols-3 gap-5 md:gap-6">
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech.label}
                  custom={i}
                  variants={iconVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex flex-col items-center transition-transform duration-200"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {tech.icon}
                  <span className="mt-2 text-xs text-[#555] dark:text-gray-300 font-medium">{tech.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;