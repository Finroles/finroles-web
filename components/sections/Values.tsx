'use client';

import React, { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { ShieldCheck, TrendingUp, Landmark } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export function Values() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="values" className="py-30 px-6 bg-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col gap-16"
        >
          {/* Section Header */}
          <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
            <span className="text-xs font-semibold tracking-widest text-accent uppercase font-mono">
              Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-text">
              Our Values
            </h2>
            <div className="w-12 h-1 bg-accent mx-auto mt-2 rounded-full" />
          </div>

          {/* Values Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Transparency & Integrity */}
            <motion.div
              variants={childVariants}
              className="flex flex-col gap-6 p-8 rounded-2xl bg-surface border border-muted/10 hover:border-accent/30 transition-all duration-300 shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center border border-accent/15">
                <ShieldCheck className="w-6 h-6 text-accent" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold font-display text-text">Transparency & Integrity</h3>
                <p className="text-sm text-muted leading-relaxed font-light">
                  Honesty, transparency, and ethical conduct in all interactions. Trust and credibility with recruiters and candidates.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Regulations and Trends */}
            <motion.div
              variants={childVariants}
              className="flex flex-col gap-6 p-8 rounded-2xl bg-surface border border-muted/10 hover:border-accent/30 transition-all duration-300 shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center border border-accent/15">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold font-display text-text">Regulations and Trends</h3>
                <p className="text-sm text-muted leading-relaxed font-light">
                  Cultivating top-tier HR expertise, staying current on regulations and industry trends to deliver tailored strategic solutions.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Business Alignment */}
            <motion.div
              variants={childVariants}
              className="flex flex-col gap-6 p-8 rounded-2xl bg-surface border border-muted/10 hover:border-accent/30 transition-all duration-300 shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center border border-accent/15">
                <Landmark className="w-6 h-6 text-accent" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold font-display text-text">Business Alignment</h3>
                <p className="text-sm text-muted leading-relaxed font-light">
                  Understanding business requirements, goals, challenges, and culture so candidates align with values and possess the requisite skills.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
