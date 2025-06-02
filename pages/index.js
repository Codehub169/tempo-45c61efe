import Head from 'next/head';
import { motion } from 'framer-motion';

// --- Structural Placeholder Components --- 
// These are minimal placeholders for components to be implemented in future batches.
// They are necessary for the index page to be structurally complete and to demonstrate page flow.
// Styling (min-h-screen, bg-colors, etc.) is for temporary visualization and alignment with the theme.

const HeroSection = () => <div id="hero" className="min-h-screen bg-neutral-DEFAULT flex flex-col items-center justify-center text-center p-8"><h1 className="text-4xl lg:text-6xl font-heading text-neutral-text">Hero Section</h1><p className="text-lg text-neutral-text/80 mt-4 max-w-xl">Animated hueneu logo reveal, tagline: “Where stories find their aesthetic.”, subtext: “Designs that whisper loud stories.”, and a smooth scroll-down indicator will be here.</p></div>;
const StorySection = () => <div id="story" className="min-h-screen bg-neutral-light flex flex-col items-center justify-center text-center p-8"><h2 className="text-3xl lg:text-5xl font-heading text-neutral-text">The hueneu Story</h2><p className="text-lg text-neutral-text/80 mt-4 max-w-xl">Short section about what hueneu means. Emphasize the balance of color and calm. Bring in the “Who Knew?” moment with a fun visual pop-out or scroll-triggered element.</p></div>;
const ServicesSection = () => <div id="services" className="min-h-screen bg-neutral-DEFAULT flex flex-col items-center justify-center text-center p-8"><h2 className="text-3xl lg:text-5xl font-heading text-neutral-text">What We Do</h2><p className="text-lg text-neutral-text/80 mt-4 max-w-xl">5-6 core offerings presented with icons or line visuals: Branding, Packaging, Social Media, Stationery, Coffee Table Books, Creative Projects. Each with a playful, single-line microcopy.</p></div>;
const WhyHueneuSection = () => <div id="why-hueneu" className="min-h-screen bg-neutral-light flex flex-col items-center justify-center text-center p-8"><h2 className="text-3xl lg:text-5xl font-heading text-neutral-text">Why hueneu?</h2><p className="text-lg text-neutral-text/80 mt-4 max-w-xl">Emotional brand pitch in poetic copy: “We don’t just design—we decode stories.” “Designs that speak quietly but stay with you.” Highlight calm, mystery, and balance.</p></div>;
const ContactSection = () => <div id="contact" className="min-h-screen bg-neutral-DEFAULT flex flex-col items-center justify-center text-center p-8"><h2 className="text-3xl lg:text-5xl font-heading text-neutral-text">Let’s Work Together</h2><p className="text-lg text-neutral-text/80 mt-4 max-w-xl">A contact form that feels like a note or letter. Playful CTA button copy (e.g., “Let’s design your story”). Add Instagram: @hueneu_.</p></div>;

// --- End Structural Placeholder Components ---

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
