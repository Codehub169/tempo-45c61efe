import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Placeholder for ServiceItem - this component would be in its own file: ServiceItem.js
// For now, we define its expected structure and render it directly here for completeness of ServicesSection.
const ServiceItem = ({ icon, title, microcopy, index }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.15, // Staggered delay
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div 
      variants={itemVariants}
      className="bg-neutral-DEFAULT p-6 rounded-lg shadow-lg text-center flex flex-col items-center h-full hover:shadow-xl transition-shadow duration-300"
    >
      <div className="w-16 h-16 mb-4 relative text-primary">
        {/* In a real ServiceItem, you might load SVG content directly or use a more robust icon system */}
        <Image src={icon} alt={`${title} icon`} layout="fill" objectFit="contain" />
      </div>
      <h3 className="font-heading text-xl font-semibold text-primary mb-2">{title}</h3>
      <p className="text-neutral-text text-sm leading-relaxed flex-grow">{microcopy}</p>
    </motion.div>
  );
};

const servicesData = [
  {
    icon: '/images/icon-branding.svg',
    title: 'Branding',
    microcopy: 'Logos that whisper your loudest story.',
  },
  {
    icon: '/images/icon-packaging.svg',
    title: 'Packaging',
    microcopy: 'Packaging, but make it poetic.',
  },
  {
    icon: '/images/icon-social-media.svg',
    title: 'Social Media',
    microcopy: 'Scroll-stopping stories, beautifully told.',
  },
  {
    icon: '/images/icon-stationery.svg',
    title: 'Stationery',
    microcopy: 'Tangible touches of your unique narrative.',
  },
  {
    icon: '/images/icon-coffee-table-books.svg',
    title: 'Coffee Table Books',
    microcopy: 'Curating legacies, one beautiful page at a time.',
  },
  {
    icon: '/images/icon-creative-projects.svg',
    title: 'Creative Projects',
    microcopy: 'Your wildest ideas, designed with intention.',
  },
];

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Child items will stagger in
      },
    },
  };

  return (
    <section id="services" className="py-20 px-4 md:px-8 bg-neutral-DEFAULT text-neutral-text">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="font-heading text-4xl md:text-5xl font-semibold text-primary text-center mb-12 md:mb-16"
          initial={{ opacity:0, y: 20 }}
          whileInView={{ opacity:1, y: 0}}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          What We Do
        </motion.h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {servicesData.map((service, index) => (
            <ServiceItem
              key={service.title}
              icon={service.icon}
              title={service.title}
              microcopy={service.microcopy}
              index={index} // Pass index for staggered animation
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
