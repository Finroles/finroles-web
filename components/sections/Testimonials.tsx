'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';

interface Testimonial {
  quote: string;
  name: string;
  company: string;
}

const testimonialsData: Testimonial[] = [
  {
    quote:
      'Finroles has been our exclusive executive search partner. They sourced our current CFO and three senior private equity associates, delivering profiles that exceeded all benchmarks.',
    name: 'Marcus Vance',
    company: 'Head of Talent Acquisition, Vantage Buyout Partners',
  },
  {
    quote:
      'The speed, discretion, and absolute domain understanding of Finroles is unmatched. They understand buy-side and systematic trading spaces inside and out.',
    name: 'Sarah Lindqvist',
    company: 'Managing Partner, Capital Quantitative Systems',
  },
  {
    quote:
      'Their team managed a highly delicate desk build-out for our emerging markets advisory team. They are the premier choice for strategic financial hiring.',
    name: 'Jonathan Chen',
    company: 'VP Human Resources, Apex Capital Advisory',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export function Testimonials() {
  return (
    <section id="testimonials" className="py-30 px-6 bg-surface/50 border-t border-muted/5 relative overflow-hidden">


      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold tracking-widest text-text uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-text">
            Trusted by Leaders in Finance & Tech
          </h2>
          <div className="w-12 h-1 bg-text mx-auto mt-2 rounded-full" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonialsData.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={cardVariants}
              className="flex flex-col justify-between p-8 rounded-2xl bg-surface border border-muted/5 shadow-xl hover:border-text/20 transition-all duration-300 relative"
            >
              {/* Decorative Quotes Icon */}
              <span className="absolute top-6 left-6 text-text/5 font-serif text-[120px] leading-none select-none pointer-events-none">
                &ldquo;
              </span>

              {/* Quote */}
              <p className="text-sm sm:text-base text-text leading-relaxed font-light italic relative z-10 mb-8 pt-4">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Client Info */}
              <div className="flex flex-col gap-1 border-t border-muted/10 pt-4">
                <span className="text-sm font-bold text-text font-display">
                  {testimonial.name}
                </span>
                <span className="text-[11px] font-mono text-muted uppercase tracking-wider">
                  {testimonial.company}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
