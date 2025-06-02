import React from 'react';
import { motion } from 'framer-motion';

const WhoKnewElement = () => {
  return (
    <motion.div 
      className="mt-16 mb-8 p-8 bg-hueneu-secondary rounded-xl shadow-xl relative overflow-hidden text-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Optional decorative blurs */}
      <div aria-hidden="true" className="absolute top-0 left-0 w-32 h-32 bg-hueneu-accent/30 rounded-full filter blur-2xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div aria-hidden="true" className="absolute bottom-0 right-0 w-32 h-32 bg-hueneu-primary/30 rounded-full filter blur-2xl opacity-50 translate-x-1/2 translate-y-1/2"></div>
      
      <motion.p 
        className="text-hueneu-neutral-lightest text-lg md:text-xl mb-4 font-inter"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        It
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 15,
          delay: 0.6,
        }}
        className="inline-block px-6 py-3 bg-hueneu-accent rounded-lg shadow-md"
      >
        <h3 className="font-poppins text-3xl md:text-4xl text-hueneu-neutral-lightest font-bold">
          Who Knew?
        </h3>
      </motion.div>
      <motion.p 
        className="text-hueneu-neutral-lightest text-md md:text-lg mt-4 font-inter"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        ...that quiet could be so bold.
      </motion.p>
    </motion.div>
  );
};

export default WhoKnewElement;
