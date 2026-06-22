'use client';

import { useInView } from '@/hooks/useInView';
import styles from './CTASection.module.css';

export default function CTASection() {
  const [sectionRef, isVisible] = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section id="contact" className={styles.ctaSection} ref={sectionRef}>
      {/* Animated dot grid background */}
      <div className={styles.dotGrid} />
      
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <h2 className={styles.heading}>Ready to hire smarter?</h2>
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
