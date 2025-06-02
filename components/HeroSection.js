// components/HeroSection.js
import React from 'react';
import { motion } from 'framer-motion';
import ScrollIndicator from './ScrollIndicator';

const HeroSection = () => {
  return (
    <div 
      id="hero" 
      className="min-h-screen bg-hueneu-neutral-lightest flex flex-col items-center justify-center text-center p-8 relative"
    >
      <motion.h1 
        className="text-4xl lg:text-6xl font-poppins font-bold text-hueneu-primary mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      >
        Where stories find their aesthetic.
      </motion.h1>
      <motion.p 
        className="text-lg text-hueneu-neutral-dark/80 mt-4 max-w-xl font-inter"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
      >
        Designs that whisper loud stories.
      </motion.p>
      
      <ScrollIndicator />
    </div>
  );
};

export default HeroSection;
