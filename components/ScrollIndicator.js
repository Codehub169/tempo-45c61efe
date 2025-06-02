import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline'; // Using Heroicons for a minimal arrow

const ScrollIndicator = () => {
  const handleScroll = () => {
    const storySection = document.getElementById('story');
    if (storySection) {
      storySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer group"
      onClick={handleScroll}
      aria-label="Scroll down to learn more"
    >
      <motion.div
        className="w-8 h-12 border-2 border-primary rounded-full flex items-center justify-center p-1"
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <motion.div
          className="w-2 h-2 bg-primary rounded-full"
          animate={{
            y: ["0%", "50%", "0%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      </motion.div>
      <ChevronDownIcon className="w-6 h-6 mt-2 text-primary opacity-75 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};

export default ScrollIndicator;
