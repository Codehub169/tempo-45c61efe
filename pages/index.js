import Head from 'next/head';
import { motion } from 'framer-motion';

// Import actual components using relative paths
import HeroSection from '../components/HeroSection';
import StorySection from '../components/StorySection';
import ServicesSection from '../components/ServicesSection';
import WhyHueneuSection from '../components/WhyHueneuSection';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] } },
  };

  return (
    <>
      <Head>
        <title>hueneu | Where stories find their aesthetic.</title>
        <meta name="description" content="hueneu is a graphic design studio where stories find their aesthetic. Designs that whisper loud stories. We decode narratives and craft intentional, evocative visual identities that balance creative color bursts ('Hue') with grounding neutrality ('Neu'). Quietly bold, calm, mysterious, and a little playful." />
        <meta name="keywords" content="graphic design, branding, packaging, social media, stationery, coffee table books, creative projects, design studio, hueneu, story-first design, intentional design, aesthetic development, visual identity, brand strategy" />
        <meta name="author" content="hueneu Studio" />
        <meta property="og:title" content="hueneu | Where stories find their aesthetic." />
        <meta property="og:description" content="Designs that whisper loud stories. Discover hueneu, a graphic design studio focused on intentional, evocative aesthetics that balance color and calm." />
        {/* <meta property="og:image" content="/images/hueneu-social-preview.png" /> Placeholder for social preview image */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.hueneu.com" /> {/* Replace with actual URL later */}
      </Head>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <HeroSection />
      </motion.div>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={sectionVariants}
      >
        <StorySection />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={sectionVariants}
      >
        <ServicesSection />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={sectionVariants}
      >
        <WhyHueneuSection />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={sectionVariants}
      >
        <ContactSection />
      </motion.section>
    </>
  );
}
