import { motion } from 'framer-motion';
import { Code, Layout, Paintbrush } from 'lucide-react';

const ServiceCard = ({ icon, title, description, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.2 }}
      className="group relative bg-[var(--surface)] p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-[var(--border)] overflow-hidden"
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="w-14 h-14 bg-brand rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-brand/20">
          <div className="text-white">
            {icon}
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold mb-4 text-[var(--fg)] group-hover:text-brand transition-colors duration-300">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-[var(--muted-fg)] leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-[var(--bg)] border-t border-[var(--border)]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tightest text-[var(--fg)] mb-4">
            My <span className="text-brand">Services</span>
          </h2>
          <p className="text-[var(--muted-fg)] max-w-2xl mx-auto text-lg font-serif italic">
            I offer comprehensive web development solutions tailored to your specific needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          <ServiceCard 
            icon={<Code size={28} />} 
            title="Web Development" 
            description="Creating responsive and interactive websites tailored to your needs, with a focus on performance and user experience." 
            index={0} 
          />
          <ServiceCard 
            icon={<Layout size={28} />} 
            title="API Development" 
            description="Building robust RESTful APIs and backend services with proper authentication, validation, and database integration." 
            index={1} 
          />
          <ServiceCard 
            icon={<Paintbrush size={28} />} 
            title="Full-Stack Solutions" 
            description="Building complete web applications from front-end to back-end, including database design, API development, and deployment." 
            index={2} 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Services;