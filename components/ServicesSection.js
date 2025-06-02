import React from 'react';
import { motion } from 'framer-motion';
// Image import removed as it's used in ServiceItem, not directly here
import ServiceItem from './ServiceItem';

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
        staggerChildren: 0.15, // Adjusted stagger to match original intent if ServiceItem used index * 0.15
      },
    },
  };

  return (
    <section id="services" className="py-20 px-4 md:px-8 bg-hueneu-neutral-lightest text-hueneu-neutral-dark">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="font-poppins text-4xl md:text-5xl font-semibold text-hueneu-primary text-center mb-12 md:mb-16"
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
          {servicesData.map((service) => (
            <ServiceItem
              key={service.title} // Use a unique key like title or index
              icon={service.icon}
              title={service.title}
              microcopy={service.microcopy}
              // index prop is not used by the standalone ServiceItem for its variants unless modified
              // Staggering is handled by parent's staggerChildren
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
