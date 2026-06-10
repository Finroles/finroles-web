'use client';

import React, { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.15,
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

const stats = [
  { value: '40%', label: "Indian graduates can't find jobs" },
  { value: '86%', label: 'Working professionals are unhappy at work' },
  { value: '85%', label: 'GDP growth potential via employment' },
];

export function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="problem" className="py-30 px-6 bg-surface/30 border-y border-muted/5 relative overflow-hidden">
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
              The Hiring Tension
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-text">
              The Two-Sided Market Failure
            </h2>
            <div className="w-12 h-1 bg-accent mx-auto mt-2 rounded-full" />
          </div>

          {/* Two Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            {/* Column 1 */}
            <motion.div
              variants={childVariants}
              className="p-8 rounded-2xl bg-surface border border-muted/10 flex flex-col gap-6"
            >
              <h3 className="text-2xl font-bold font-display text-accent border-b border-muted/10 pb-4">
                Finding the Right Fit
              </h3>
              <p className="text-muted leading-relaxed font-light text-base">
                Organizations struggle with weak employer branding, over-reliance on automated Applicant Tracking Systems (ATS), and an unmanageable volume of application overload that buries top-tier talent.
              </p>
            </motion.div>

            {/* Column 2 */}
            <motion.div
              variants={childVariants}
              className="p-8 rounded-2xl bg-surface border border-muted/10 flex flex-col gap-6"
            >
              <h3 className="text-2xl font-bold font-display text-primary border-b border-muted/10 pb-4">
                Providing the Right Job
              </h3>
              <p className="text-muted leading-relaxed font-light text-base">
                Candidates face slow recruitment processes, strict criteria overlooking non-traditional talent, unrealistic job descriptions (JDs), and rapidly changing industry skill demands.
              </p>
            </motion.div>
          </div>

          {/* Stats Callouts */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 border-t border-muted/10 pt-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={childVariants}
                className="flex flex-col items-center text-center gap-2 p-6 rounded-xl bg-surface/50 border border-muted/5"
              >
                <span className="text-5xl font-bold font-display text-accent">{stat.value}</span>
                <span className="text-sm font-light text-muted uppercase tracking-wider leading-snug">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
