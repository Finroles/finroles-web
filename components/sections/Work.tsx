'use client';

import React, { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';

interface CaseStudy {
  industry: string;
  city: string;
  challenge: string;
  impact: string;
}

const cases: CaseStudy[] = [
  {
    industry: 'Fintech Startup',
    city: 'Bangalore',
    challenge: 'Expanding wealth arm',
    impact: 'Sourced 2 senior Investment Advisors in 15 days.',
  },
  {
    industry: 'Manufacturing Co.',
    city: 'Gurgaon',
    challenge: 'Needed Finance Manager (Accounts)',
    impact: 'Sourced Senior Accountant in 10 days.',
  },
  {
    industry: 'Digital Marketing Co.',
    city: 'Delhi',
    challenge: 'Needed Assistant Manager Finance',
    impact: 'Sourced beyond JD requirements in 21 days.',
  },
  {
    industry: 'Asset Management Co.',
    city: 'Mumbai',
    challenge: 'Needed Senior Wealth Manager',
    impact: 'Sourced 4 candidates (~14 yrs exp) in 14 days.',
  },
  {
    industry: 'Investment Banking',
    city: 'Noida',
    challenge: 'PAN India team expansion',
    impact: 'Sourced 2 senior leaders in 45 days.',
  },
  {
    industry: 'Cleantech Company',
    city: 'Bangalore',
    challenge: 'Needed Business Finance Manager',
    impact: 'Sourced in 30 days.',
  },
  {
    industry: 'Venture Fund',
    city: 'Mumbai',
    challenge: 'Needed Associate & Finance Manager',
    impact: 'Sourced both beyond JD in 45 days.',
  },
  {
    industry: 'Fintech',
    city: 'Mumbai',
    challenge: 'Needed Senior Accounts Payable Manager',
    impact: 'Sourced (~7 yrs exp) in 30 days.',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export function Work() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="work" className="py-30 px-6 bg-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold tracking-widest text-accent uppercase font-mono">
            Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-text">
            Recent Success
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mt-2 rounded-full" />
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cases.map((cs, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="flex flex-col justify-between p-6 rounded-2xl bg-surface border border-muted/5 hover:border-accent/20 transition-all duration-300 relative group"
            >
              {/* Header */}
              <div className="flex flex-col gap-1 mb-6">
                <span className="text-xs font-mono text-accent uppercase tracking-wider font-semibold">
                  {cs.industry}
                </span>
                <span className="text-[11px] font-mono text-muted/65">
                  {cs.city}
                </span>
              </div>

              {/* Challenge & Impact */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-mono text-muted/50 tracking-wider">Challenge</span>
                  <p className="text-sm text-text font-medium leading-relaxed mt-0.5">{cs.challenge}</p>
                </div>
                <div className="flex flex-col border-t border-muted/5 pt-3">
                  <span className="text-[10px] uppercase font-mono text-muted/50 tracking-wider">Impact</span>
                  <p className="text-sm text-accent font-semibold leading-relaxed mt-0.5">{cs.impact}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
