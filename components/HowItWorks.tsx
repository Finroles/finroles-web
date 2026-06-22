'use client';

import { useInView } from '@/hooks/useInView';
import styles from './HowItWorks.module.css';

export default function HowItWorks() {
  const [sectionRef, isVisible] = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section id="how-it-works" className={styles.howItWorksSection} ref={sectionRef}>
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <span className="label-chip">Process</span>
          <h2 className={styles.heading}>Hire in three steps</h2>
        </div>

        <div className={`${styles.stepsWrapper} ${isVisible ? styles.visible : ''}`}>
          {/* Animated connector line */}
          <div className={styles.lineBg}>
            <div className={styles.lineFill} />
          </div>

          <div className={styles.stepsContainer}>
            <div className={styles.step}>
              <div className={styles.numberWrapper}>
                <div className={styles.number}>01</div>
              </div>
              <h3 className={styles.stepTitle}>Define the Role</h3>
              <p className={styles.stepDescription}>
                Drop in your JD or let AI draft one from a short brief.
              </p>
            </div>
            
            <div className={styles.step}>
              <div className={styles.numberWrapper}>
                <div className={styles.number}>02</div>
              </div>
              <h3 className={styles.stepTitle}>Get Matched Candidates</h3>
              <p className={styles.stepDescription}>
                AI surfaces best-fit profiles ranked by role compatibility.
              </p>
            </div>

            <div className={styles.step}>
              <div className={styles.numberWrapper}>
                <div className={styles.number}>03</div>
              </div>
              <h3 className={styles.stepTitle}>Hire with Confidence</h3>
              <p className={styles.stepDescription}>
                Structured process, scorecards, and tracked outcomes — every time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
