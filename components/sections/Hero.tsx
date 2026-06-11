'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export function Hero() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      const offsetPosition = contactElement.offsetTop - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-bg px-6 overflow-hidden pt-20">
      {/* Placeholder for floating navbar */}
      <nav id="main-nav" className="absolute top-0 left-0 w-full h-0 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center z-10 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Tagline */}
          <motion.div
            variants={itemVariants}
            className="px-4 py-1.5 rounded-full border border-muted/20 bg-surface backdrop-blur-md text-xs font-semibold uppercase tracking-widest text-text"
          >
            Finroles &bull; Recruitment and Upskilling
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-bold font-display leading-[1.1] text-text"
          >
            Connecting the world&apos;s best companies with the{' '}
            <span className="text-text">
              brightest finance professionals
            </span>
          </motion.h1>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="mt-6">
            <Button
              size="lg"
              onClick={handleScrollToContact}
              className="group gap-2 border border-text/30"
            >
              Partner With Us
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Slide-down Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted/40">
        <span className="text-xs tracking-widest uppercase font-light">Scroll</span>
        <div className="w-1.5 h-6 rounded-full bg-muted/20 relative overflow-hidden">
          <motion.div
            animate={{
              y: [0, 16, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-1.5 h-2.5 rounded-full bg-text absolute top-0"
          />
        </div>
      </div>
    </section>
  );
}
