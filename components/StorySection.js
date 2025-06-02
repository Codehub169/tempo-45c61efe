import React from 'react';
import { motion } from 'framer-motion';
import WhoKnewElement from './WhoKnewElement';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const StorySection = () => {
  return (
    <section id="story" className="min-h-screen py-20 px-4 md:px-8 flex flex-col items-center justify-center bg-neutral-lightest text-neutral-text">
      <div className="max-w-3xl w-full text-center">
        <motion.h2 
          custom={0} 
          variants={textVariants} 
          className="font-heading text-4xl md:text-5xl font-semibold text-primary mb-8"
        >
          The <span className="text-accent">hueneu</span> Story
        </motion.h2>
        
        <motion.div custom={1} variants={textVariants} className="space-y-6 text-lg md:text-xl leading-relaxed">
          <p>
            At its heart, <strong className="font-semibold">hueneu</strong> (Hue + Neu) is a dialogue between vibrant creativity and grounding calm. 
            It’s where bold ideas find their serene space, and quiet designs make a lasting impact.
          </p>
          <p>
            <strong className="text-accent font-medium">Hue</strong> represents the spectrum of possibilities – the creative color bursts, the playful spark, the unexpected twist that brings a story to life. It’s the part of us that dares to be different, to experiment, to evoke emotion through vivid expression.
          </p>
          <p>
            <strong className="text-primary font-medium">Neu</strong> signifies neutrality, the calm foundation upon which true creativity flourishes. It’s the intentional whitespace, the balanced composition, the quiet confidence that allows the message to resonate clearly and deeply. It’s the grounding force that ensures every design is purposeful and timeless.
          </p>
          <p>
            Together, they create a unique synergy: designs that are both evocative and intentional, playful yet sophisticated, quiet but undeniably bold.
          </p>
        </motion.div>

        <WhoKnewElement />

      </div>
    </section>
  );
};

export default StorySection;
