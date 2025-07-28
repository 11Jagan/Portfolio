import { GraduationCap, Award, Coffee, MapPin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center" ref={ref}>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <div className="w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://i.postimg.cc/7PNt6pKn/me.jpg" 
                  alt="Kontham Jagan Mohan Reddy" 
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div 
                initial={{ scale: 0, rotate: -180 }}
                animate={inView ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: 0.5, type: "spring", bounce: 0.5 }}
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-indigo-600 dark:bg-indigo-400 rounded-2xl shadow-lg hidden md:flex items-center justify-center transform hover:rotate-12 transition-transform duration-300"
              >
                <Coffee size={40} className="text-white" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="w-full lg:w-1/2"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400"
            >
              Full-Stack Developer & UI/UX Enthusiast
            </motion.h3>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
            >
              As a passionate developer pursuing my B.Tech in Computer Science, I blend technical expertise with creative problem-solving to craft exceptional digital experiences. My journey in web development is driven by a commitment to creating intuitive, user-centric solutions that make a real impact.
            </motion.p>

            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
            >
              <motion.div 
                variants={itemVariants}
                className="flex items-start p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="mr-4 text-indigo-600 dark:text-indigo-400">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Education</h4>
                  <p className="text-gray-600 dark:text-gray-300">B.Tech in Computer Science</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Graduating in 2027</p>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="flex items-start p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="mr-4 text-indigo-600 dark:text-indigo-400">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Experience</h4>
                  <p className="text-gray-600 dark:text-gray-300">Web Development</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2+ Years</p>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="flex items-start p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="mr-4 text-indigo-600 dark:text-indigo-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">India</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Open to Remote</p>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="flex items-start p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="mr-4 text-indigo-600 dark:text-indigo-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Contact</h4>
                  <a 
                    href="mailto:konthamjaganmohanreddy@gmail.com"
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    Email Me
                  </a>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              className="flex flex-wrap gap-3"
            >
              {[
                'Problem Solver',
                'Creative Thinker',
                'Team Player',
                'Quick Learner',
                'Detail Oriented'
              ].map((tag, index) => (
                <motion.span
                  key={tag}
                  variants={itemVariants}
                  className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-medium hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-colors duration-300"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;