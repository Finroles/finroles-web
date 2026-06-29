'use client';

import { useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useInView } from '@/hooks/useInView';
import RevealText from './RevealText';
import revealStyles from './reveal.module.css';
import styles from './HowItWorks.module.css';

interface Step {
  number: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'A thorough discussion to understand business requirements.',
  },
  {
    number: '02',
    title: 'Customized Talent Mapping',
    description: 'Utilizing tailored strategies to identify the right candidates.',
  },
  {
    number: '03',
    title: 'Interviews & Assessments',
    description: 'Rigorous evaluation to ensure the best fit for business requirements.',
  },
  {
    number: '04',
    title: 'Regular Updates & Feedback',
    description: 'Regular checks with company and candidate to improve alignment.',
  },
];

function StepCard({ step, index }: { step: Step; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isVisible = useScrollReveal(cardRef);

  return (
    <div
      ref={cardRef}
      className={`${styles.step} ${isVisible ? revealStyles.visible : revealStyles.hidden}`}
      style={{
        transitionDelay: `${(index % 4) * 80}ms`,
      }}
    >
      <div className={styles.numberWrapper}>
        <div className={styles.number}>{step.number}</div>
      </div>
      <h3 className={styles.stepTitle}>{step.title}</h3>
      <p className={styles.stepDescription}>{step.description}</p>
    </div>
  );
}

export default function HowItWorks() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderVisible = useScrollReveal(headerRef);
  const [wrapperRef, isWrapperVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="how-it-works" className={styles.howItWorksSection}>
      <div className={styles.container}>
        <div ref={headerRef} className={styles.header}>
          <RevealText
            text="Hire in four steps"
            tag="h2"
            className={styles.heading}
            isVisible={isHeaderVisible}
          />
        </div>

        <div
          ref={wrapperRef}
          className={`${styles.stepsWrapper} ${isWrapperVisible ? styles.visible : ''}`}
        >
          {/* Animated connector line */}
          <div className={styles.lineBg}>
            <div className={styles.lineFill} />
          </div>

          <div className={styles.stepsContainer}>
            {STEPS.map((step, index) => (
              <StepCard key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
