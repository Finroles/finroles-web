'use client';

import React, { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { Briefcase, UserCheck, GraduationCap, ShieldAlert } from 'lucide-react';

interface OfferingItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const offerings: OfferingItem[] = [
  {
    icon: <Briefcase className="w-6 h-6 text-accent" />,
    title: 'Recruitment & Talent Acquisition',
    description:
      'Connecting top-tier finance and non-tech professionals with leading organizations through a seamless hiring process. Empowering hiring managers with real-time feedback tools.',
  },
  {
    icon: <UserCheck className="w-6 h-6 text-accent" />,
    title: 'Consultation & Support',
    description:
      'Strategic alignment between talent and business needs. Competitive compensation and career progression paths to attract top-tier talent.',
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-accent" />,
    title: 'Training & Development',
    description:
      'Equipping professionals with industry-relevant skills. Exploring alternative hiring channels like upskilling, referrals, and non-traditional talent pools.',
  },
  {
    icon: <ShieldAlert className="w-6 h-6 text-accent" />,
    title: 'Background Checks & Verification',
    description:
      'Thorough checks for candidate authenticity and compliance. Structured interviews with clear evaluation criteria.',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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

export function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-30 px-6 bg-surface/50 border-y border-muted/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold tracking-widest text-accent uppercase font-mono">
            Our Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-text">
            Core Service Offerings
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mt-2 rounded-full" />
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {offerings.map((offering) => (
            <motion.div
              key={offering.title}
              variants={cardVariants}
              className="flex flex-col gap-6 p-8 rounded-2xl bg-surface border border-muted/5 hover:border-accent/30 hover:-translate-y-2 transition-all duration-300 shadow-xl shadow-black/5"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center border border-accent/15">
                {offering.icon}
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-bold font-display text-text">
                  {offering.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed font-light">
                  {offering.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
