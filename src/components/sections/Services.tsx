import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Layout, Paintbrush } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ icon, title, description, index }: ServiceCardProps) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const cardHoverVariants = {
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
      variants={cardHoverVariants}
      transition={{ 
        delay: index * 0.2,
        type: "spring",
        bounce: 0.4,
        duration: 1.5
      }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 hover:shadow-xl transition-all duration-300"
    >
      <motion.div 
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ 
          delay: index * 0.2 + 0.3,
          type: "spring",
          bounce: 0.5,
          duration: 1
        }}
        className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6"
      >
        {icon}
      </motion.div>
      <motion.h3 
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: index * 0.2 + 0.4, duration: 0.6 }}
        className="text-xl font-bold mb-3"
      >
        {title}
      </motion.h3>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
        className="text-gray-700 dark:text-gray-300"
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="services" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Need a custom service not listed here? Let's discuss your specific requirements.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;