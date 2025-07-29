import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Layout, Paintbrush } from 'lucide-react';

const ServiceCard = ({ icon, title, description, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const cardVariants = {
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      whileHover="hover"
      variants={cardVariants}
      transition={{ 
        delay: index * 0.2,
        type: "spring",
        bounce: 0.4,
        duration: 1.5
      }}
      className="bg-white/90 dark:bg-gray-900/80 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
    >
      <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800/80 rounded-lg flex items-center justify-center mb-6 border border-gray-200 dark:border-gray-800">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <div className="w-24 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
          <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            I offer comprehensive web development solutions tailored to your specific needs.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={ref}>
          <ServiceCard 
            icon={<Code size={32} />} 
            title="Web Development" 
            description="Creating responsive and interactive websites tailored to your needs, with a focus on performance and user experience." 
            index={0} 
          />
          <ServiceCard 
            icon={<Layout size={32} />} 
            title="UI/UX Design" 
            description="Crafting intuitive and modern user interfaces with a focus on usability, accessibility, and delightful experiences." 
            index={1} 
          />
          <ServiceCard 
            icon={<Paintbrush size={32} />} 
            title="Full-Stack Solutions" 
            description="Building complete web applications from front-end to back-end, including database design, API development, and deployment." 
            index={2} 
          />
        </div>
      </div>
    </section>
  );
};

export default Services;