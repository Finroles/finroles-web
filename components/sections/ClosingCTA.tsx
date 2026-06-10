'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function ClosingCTA() {
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
    <section className="py-24 px-6 bg-surface/50 border-t border-muted/5 relative overflow-hidden text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-text leading-tight"
        >
          Join us in filling your next vacancy in a smooth and seamless manner.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-lg text-muted max-w-2xl font-light leading-relaxed"
        >
          We aim to be your trusted hiring partner for the long-run, ensuring you always find the right talent to drive your business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button size="lg" onClick={handleScrollToContact} className="px-8 border border-accent/20">
            Get in Touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
