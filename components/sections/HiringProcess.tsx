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
      staggerChildren: 0.2,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const steps = [
  {
    num: '01',
    title: 'Initial Consultation',
    desc: 'Thorough discussion to understand business requirements.',
  },
  {
    num: '02',
    title: 'Customized Talent Mapping',
    desc: 'Tailored strategies to identify the right candidates.',
  },
  {
    num: '03',
    title: 'Interviews and Assessments',
    desc: 'Rigorous evaluation to ensure the best fit.',
  },
  {
    num: '04',
    title: 'Regular Updates and Feedback',
    desc: 'Regular checks with company and candidate to improve alignment.',
  },
];

export function HiringProcess() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="process" className="py-30 px-6 bg-surface/30 border-y border-muted/5 relative overflow-hidden">
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
            <span className="text-xs font-semibold tracking-widest text-text uppercase">
              The Journey
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-text">
              Our Hiring Process
            </h2>
            <div className="w-12 h-1 bg-text mx-auto mt-2 rounded-full" />
          </div>

          {/* Timeline Wrapper */}
          <div className="relative flex flex-col md:flex-row justify-between items-start gap-12 md:gap-6 mt-8">
            {/* Horizontal Line Connector for Desktop */}
            <div className="absolute top-[2.25rem] left-[10%] right-[10%] h-[1px] bg-muted/10 hidden md:block z-0" />

            {steps.map((step) => (
              <motion.div
                key={step.num}
                variants={childVariants}
                className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4 relative z-10"
              >
                {/* Step circle */}
                <div className="w-12 h-12 rounded-full bg-accent text-bg flex items-center justify-center font-mono font-bold text-lg shadow-lg shadow-text/5 border-4 border-bg">
                  {step.num}
                </div>

                <div className="flex flex-col gap-2 px-2">
                  <h3 className="text-lg font-bold font-display text-text">{step.title}</h3>
                  <p className="text-sm text-muted font-light leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
