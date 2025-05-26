import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Server, Palette, Database, Terminal, Globe } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  color: string;
  icon: React.ReactNode;
}

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skills: Record<string, Skill[]> = {
    'Frontend Development': [
      { name: 'HTML', level: 90, color: 'from-orange-400 to-orange-600', icon: <Code size={24} /> },
      { name: 'CSS', level: 85, color: 'from-blue-400 to-blue-600', icon: <Palette size={24} /> },
      { name: 'JavaScript', level: 80, color: 'from-yellow-400 to-yellow-600', icon: <Terminal size={24} /> },
      { name: 'React', level: 75, color: 'from-cyan-400 to-cyan-600', icon: <Globe size={24} /> },
      { name: 'Tailwind CSS', level: 85, color: 'from-teal-400 to-teal-600', icon: <Palette size={24} /> },
    ],
    'Backend Development': [
      { name: 'Node.js', level: 75, color: 'from-green-400 to-green-600', icon: <Server size={24} /> },
      { name: 'Express', level: 75, color: 'from-gray-400 to-gray-600', icon: <Server size={24} /> },
      { name: 'Python', level: 70, color: 'from-blue-500 to-blue-700', icon: <Terminal size={24} /> },
      { name: 'MongoDB', level: 70, color: 'from-green-500 to-green-700', icon: <Database size={24} /> },
      { name: 'MySQL', level: 65, color: 'from-orange-500 to-orange-700', icon: <Database size={24} /> },
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
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
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
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center text-white mr-3 transform hover:rotate-12 transition-transform duration-300`}>
                          {skill.icon}
                        </div>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
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
              className={`p-4 rounded-xl bg-gradient-to-r ${skill.color} text-white shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-3">
                  {skill.icon}
                </div>
                <span className="font-medium">{skill.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;