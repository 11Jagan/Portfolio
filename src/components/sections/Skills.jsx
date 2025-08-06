import { motion } from 'framer-motion';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiBootstrap, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiGit, SiGithub, SiVscodium, SiEjs } from 'react-icons/si';

const skillCategories = [
  {
    name: 'Frontend',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    skills: [
      { name: 'HTML', icon: <SiHtml5 color="#E34F26" size={24} /> },
      { name: 'CSS', icon: <SiCss3 color="#1572B6" size={24} /> },
      { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" size={24} /> },
      { name: 'React', icon: <SiReact color="#61DAFB" size={24} /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" size={24} /> },
      { name: 'Bootstrap', icon: <SiBootstrap color="#7952B3" size={24} /> },
    ],
  },
  {
    name: 'Backend',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs color="#339933" size={24} /> },
      { name: 'Express.js', icon: <SiExpress color="#000000" size={24} /> },
      { name: 'REST API', icon: <SiExpress color="#4CAF50" size={24} /> },
      { name: 'MongoDB', icon: <SiMongodb color="#47A248" size={24} /> },
      { name: 'SQL', icon: <SiMysql color="#4479A1" size={24} /> },
      { name: 'EJS', icon: <SiEjs color="#A91E50" size={24} /> },
    ],
  },
  {
    name: 'Tools & Platforms',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    skills: [
      { name: 'Git', icon: <SiGit color="#f05032" size={24} /> },
      { name: 'GitHub', icon: <SiGithub color="#181717" size={24} /> },
      { name: 'VS Code', icon: <SiVscodium color="#0078d4" size={24} /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="max-w-6xl mx-auto space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700"
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold ${category.color} dark:text-white mb-2`}>
                  {category.name}
                </h3>
                <div className={`w-16 h-1 mx-auto ${category.bgColor} rounded-full`}></div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="group flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-white dark:hover:bg-gray-600 hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-600"
                  >
                    <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200 text-center group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;