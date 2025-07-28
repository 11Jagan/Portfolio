import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillBar = ({ name, level, color }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-1">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-medium"
        >
          {name}
        </motion.span>
        <motion.span 
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-indigo-600 dark:text-indigo-400 font-medium"
        >
          {level}%
        </motion.span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <motion.div 
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`${color} h-2.5 rounded-full transition-colors duration-300`}
        />
      </div>
    </div>
  );
};

export default SkillBar;