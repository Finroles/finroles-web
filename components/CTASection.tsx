'use client';

import { useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import RevealText from './RevealText';
import revealStyles from './reveal.module.css';
import styles from './CTASection.module.css';

export default function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisible = useScrollReveal(containerRef);

  return (
    <section id="contact" className={styles.ctaSection}>
      {/* Animated dot grid background */}
      <div className={styles.dotGrid} />
      
      <div
        ref={containerRef}
        className={`${styles.container} ${isVisible ? revealStyles.visible : revealStyles.hidden}`}
      >
        <RevealText
          text="Ready to hire smarter?"
          tag="h2"
          className={styles.heading}
          isVisible={isVisible}
        />
        <p className={styles.subtext}>
          Join teams using Finroles to cut time-to-hire by 40%.
        </p>
        
        <div className={styles.buttonWrapper}>
          <a href="mailto:demo@finroles.com?subject=Requesting Finroles Demo" className={styles.ctaButton}>
            Book a Demo
          </a>
        </div>
      </div>
    </section>
  );
}
