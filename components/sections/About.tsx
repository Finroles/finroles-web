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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const aboutPoints = [
  {
    num: '01',
    title: 'Platform Unification',
    text: 'A recruitment partner bringing top companies and finance professionals together on one platform.',
  },
  {
    num: '02',
    title: 'Deep Sourcing Access',
    text: 'Deep access to finance professionals enables quick, accurate candidate sourcing within tight timelines.',
  },
  {
    num: '03',
    title: 'Startup Drive',
    text: "A new, hungry startup — not India's largest agency, but committed to going the extra mile and leaving their mark.",
  },
];

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-30 px-6 bg-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={sectionRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
        >
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 flex flex-col gap-6 sticky top-28">
            <motion.div variants={childVariants} className="flex flex-col gap-2">
              <span className="text-xs font-semibold tracking-widest text-accent uppercase font-mono">
                About Finroles
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-text leading-tight">
                Our Mission & Commitment
              </h2>
            </motion.div>
            <motion.div variants={childVariants} className="w-16 h-1 bg-accent rounded-full" />
          </div>

          {/* Right Column: Three points */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            {aboutPoints.map((point) => (
              <motion.div
                key={point.num}
                variants={childVariants}
                className="flex gap-6 items-start p-6 rounded-2xl bg-surface border border-muted/10 shadow-lg"
              >
                <span className="text-xl font-mono text-accent font-bold mt-1">{point.num}</span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold font-display text-text">{point.title}</h3>
                  <p className="text-muted leading-relaxed font-light text-base">{point.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
