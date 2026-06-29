'use client';

import { useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import RevealText from './RevealText';
import revealStyles from './reveal.module.css';
import styles from './Features.module.css';

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FEATURES: FeatureItem[] = [
  {
    id: 'ai-matching',
    title: 'AI Role Matching',
    description: 'Semantic search matches candidates to JDs instantly based on skills, trajectory, and fit.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3V5M12 19V21M5 12H3M21 12H19" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="square" />
        <path d="M18.36 5.64L16.95 7.05M7.05 16.95L5.64 18.36M18.36 18.36L16.95 16.95M7.05 7.05L5.64 5.64" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="square" />
        <rect x="9" y="9" width="6" height="6" stroke="var(--color-text-primary)" strokeWidth="2" strokeLinecap="square" />
      </svg>
    ),
  },
  {
    id: 'talent-pipeline',
    title: 'Talent Pipeline',
    description: 'Build and manage a warm, pre-vetted candidate bench, ready to interview when you need them.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6H20M4 12H20M4 18H14" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="square" />
        <path d="M18 15L21 18L18 21" stroke="var(--color-text-primary)" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
      </svg>
    ),
  },
  {
    id: 'hiring-metrics',
    title: 'Hiring Velocity Metrics',
    description: 'Track time-to-hire, funnel drop-offs, and offer acceptance rates with native analytics.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3V21H21" stroke="var(--color-text-primary)" strokeWidth="2" strokeLinecap="square" />
        <path d="M7 16L12 11L16 15L21 9" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
      </svg>
    ),
  },
  {
    id: 'structured-interviews',
    title: 'Structured Interviews',
    description: 'Use role-specific question kits, real-time scorecards, and cross-team calibration tools.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="18" height="16" stroke="var(--color-text-primary)" strokeWidth="2" strokeLinecap="square" />
        <path d="M7 9H17M7 13H17M7 17H12" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="square" />
      </svg>
    ),
  },
  {
    id: 'integration-ready',
    title: 'Integration Ready',
    description: 'Plug into your ATS, Slack, Notion, or HRIS in minutes with pre-built native integrations.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 17H14M4 12H7M17 12H20" stroke="var(--color-text-primary)" strokeWidth="2" strokeLinecap="square" />
        <rect x="7" y="6" width="10" height="12" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="square" />
      </svg>
    ),
  },
  {
    id: 'team-collaboration',
    title: 'Team Collaboration',
    description: 'Founders, hiring managers, and recruiters work together in one unified, collaborative pipeline view.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="var(--color-text-primary)" strokeWidth="2" strokeLinecap="square" />
        <circle cx="9" cy="7" r="4" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="square" />
        <path d="M23 21V19C22.9993 18.1137 22.6908 17.2518 22.1262 16.5614C21.5617 15.871 20.7751 15.3943 19.9 15.21" stroke="var(--color-text-primary)" strokeWidth="2" strokeLinecap="square" />
        <path d="M16 3.13C16.8799 3.30825 17.6723 3.7925 18.2346 4.49605C18.7968 5.19959 19.0978 6.07849 19.0822 6.97405C19.0667 7.86961 18.7356 8.72754 18.148 9.39423C17.5604 10.0609 16.7538 10.493 15.87 10.61" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="square" />
      </svg>
    ),
  },
];

function FeatureCard({ feature, index }: { feature: FeatureItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isVisible = useScrollReveal(cardRef);

  return (
    <div
      ref={cardRef}
      className={`${styles.card} ${isVisible ? revealStyles.visible : revealStyles.hidden}`}
      style={{
        transitionDelay: `${(index % 3) * 100}ms`
      }}
    >
      <div className={styles.iconWrapper}>
        {feature.icon}
      </div>
      <h3 className={styles.cardTitle}>{feature.title}</h3>
      <p className={styles.cardDescription}>{feature.description}</p>
    </div>
  );
}

export default function Features() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderVisible = useScrollReveal(headerRef);

  return (
    <section id="features" className={styles.featuresSection}>
      <div className={styles.container}>
        <div ref={headerRef} className={styles.header}>
          <RevealText
            text="Everything your hiring team needs"
            tag="h2"
            className={styles.heading}
            isVisible={isHeaderVisible}
          />
        </div>

        <div className={styles.grid}>
          {FEATURES.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
