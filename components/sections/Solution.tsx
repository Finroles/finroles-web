'use client';

import React, { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { Database, Network } from 'lucide-react';

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

export function Solution() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="solution" className="py-30 px-6 bg-bg relative overflow-hidden">
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
              The Resolution
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-text">
              How Finroles Solves It
            </h2>
            <div className="w-12 h-1 bg-accent mx-auto mt-2 rounded-full" />
          </div>

          {/* Solution Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Data Expertise */}
            <motion.div
              variants={childVariants}
              className="flex flex-col gap-6 p-8 rounded-2xl bg-surface border border-muted/10 hover:border-accent/30 transition-all duration-300 shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center border border-accent/15">
                <Database className="w-6 h-6 text-accent" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-bold font-display text-text">Data Expertise</h3>
                <p className="text-muted leading-relaxed font-light text-base">
                  Specialized data and a large candidate database enabling quick, accurate matches between finance professionals and organizations.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Our Network */}
            <motion.div
              variants={childVariants}
              className="flex flex-col gap-6 p-8 rounded-2xl bg-surface border border-muted/10 hover:border-primary/30 transition-all duration-300 shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center border border-primary/15">
                <Network className="w-6 h-6 text-primary" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-bold font-display text-text">Our Network</h3>
                <p className="text-muted leading-relaxed font-light text-base">
                  A strong community of CAs, Investment Bankers, Consultants, VCs, and Accountants — enabling direct access to skilled candidates for hassle-free recruitment.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
