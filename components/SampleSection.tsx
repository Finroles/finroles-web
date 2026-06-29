'use client';

import React, { useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import RevealText from './RevealText';
import revealStyles from './reveal.module.css';
import styles from './SampleSection.module.css';

export default function SampleSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useScrollReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${isVisible ? revealStyles.visible : revealStyles.hidden}`}
    >
      <div className={styles.container}>
        <RevealText
          text="Transforming recruitment with deep intelligence."
          tag="h2"
          className={styles.title}
          isVisible={isVisible}
        />
        <RevealText
          text="Finroles matches matching engines, structures workflows, and secures compliant placement."
          tag="p"
          className={styles.description}
          isVisible={isVisible}
        />
      </div>
    </section>
  );
}
