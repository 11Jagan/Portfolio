import { motion } from 'framer-motion';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiGit, SiGithub, SiPostman, SiTypescript, SiEjs, SiVscodium } from 'react-icons/si';

const skillCategories = [
  {
    name: 'Frontend',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    skills: [
      { name: 'HTML', icon: <SiHtml5 color="#E34F26" size={20} /> },
      { name: 'CSS', icon: <SiCss3 color="#1572B6" size={20} /> },
      { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" size={20} /> },
      { name: 'React', icon: <SiReact color="#61DAFB" size={20} /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" size={20} /> },
    ],
  },
  {
    name: 'Backend',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs color="#339933" size={20} /> },
      { name: 'Express', icon: <SiExpress color="#000000" size={20} /> },
    ],
  },
  {
    name: 'Database',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb color="#47A248" size={20} /> },
      { name: 'MySQL', icon: <SiMysql color="#4479A1" size={20} /> },
    ],
  },
  {
    name: 'Tools',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    skills: [
      { name: 'Git', icon: <SiGit color="#f05032" size={20} /> },
      { name: 'GitHub', icon: <SiGithub color="#181717" size={20} /> },
      { name: 'Postman', icon: <SiPostman color="#FF6C37" size={20} /> },
      { name: 'VS Code', icon: <SiVscodium color="#0078d4" size={20} /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="mb-8"
            >
              <h3 className={`text-xl font-bold mb-4 ${category.color} dark:text-white`}>
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border ${category.bgColor} ${category.borderColor} dark:bg-gray-800 dark:border-gray-700 hover:shadow-md transition-all duration-200 cursor-pointer`}
                  >
                    {skill.icon}
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
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