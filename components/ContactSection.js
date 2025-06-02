import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import { FiInstagram } from 'react-icons/fi'; // Using react-icons for a simple Instagram icon

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const ContactSection = () => {
  return (
    <motion.section 
      id="contact"
      className="py-20 md:py-32 bg-hueneu-neutral-lightest min-h-screen flex flex-col items-center justify-center"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <motion.h2 
          className="text-4xl md:text-5xl font-heading font-bold text-hueneu-primary mb-6"
          variants={{ hidden: { opacity: 0, y:20 }, visible: { opacity: 1, y:0, transition: {delay: 0.2, duration: 0.5}} }}
        >
          Let’s Work Together
        </motion.h2>
        <motion.p 
          className="text-lg font-body text-hueneu-neutral-dark mb-12"
          variants={{ hidden: { opacity: 0, y:20 }, visible: { opacity: 1, y:0, transition: {delay: 0.4, duration: 0.5}} }}
        >
          Have a story to tell or a project in mind? Reach out and let's create something beautiful.
        </motion.p>
        
        <ContactForm />

        <motion.div 
          className="mt-16"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: {delay: 0.8, duration: 0.5}} }}
        >
          <p className="font-body text-hueneu-neutral-dark mb-2">Find us on Instagram:</p>
          <a 
            href="https://instagram.com/hueneu_" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center font-body font-medium text-hueneu-primary hover:text-hueneu-accent transition-colors duration-300 group"
          >
            <FiInstagram className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            @hueneu_
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
