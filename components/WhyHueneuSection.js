import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.3
    }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const WhyHueneuSection = () => {
  return (
    <motion.section 
      id="why-hueneu"
      className="py-20 md:py-32 bg-hueneu-secondary text-hueneu-neutral-lightest min-h-screen flex items-center justify-center"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <motion.h2 
          className="text-4xl md:text-5xl font-heading font-bold text-hueneu-neutral-white mb-8"
          variants={textVariants}
        >
          Why hueneu?
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl font-body mb-6 leading-relaxed"
          variants={textVariants}
        >
          We don’t just design—<span className="text-hueneu-accent font-semibold">we decode stories.</span>
        </motion.p>
        <motion.p 
          className="text-lg md:text-xl font-body mb-6 leading-relaxed"
          variants={textVariants}
        >
          Designs that speak quietly but <span className="text-hueneu-accent font-semibold">stay with you.</span>
        </motion.p>
        <motion.div variants={textVariants} className="space-y-4 text-md md:text-lg font-body leading-relaxed">
          <p>
            At hueneu, we believe in the quiet power of thoughtful design. We delve into the heart of your narrative, crafting visuals that resonate with <strong className="font-medium">calm confidence</strong> and a touch of <strong className="font-medium">mystery</strong>.
          </p>
          <p>
            It's about finding that perfect <strong className="font-medium">balance</strong> – the vibrant 'Hue' of creativity grounded by the serene 'Neu' of intentionality. We create experiences that aren't just seen, but felt; designs that whisper your loudest stories and linger long after.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyHueneuSection;
