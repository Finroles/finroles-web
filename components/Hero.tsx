import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.chipWrapper}>
          <span className="label-chip">AI-Powered Hiring Intelligence</span>
        </div>
        
        <h1 className={styles.headline}>
          Find the Right Talent.<br />
          At the Right Time.<br />
          Every Time.
        </h1>
        
        <p className={styles.subheadline}>
          Finroles helps companies hire smarter using AI-driven candidate matching,
          role intelligence, and structured hiring workflows — all in one platform.
        </p>
        
        <div className={styles.ctaGroup}>
          <a href="#contact" className={styles.primaryCta}>
            Request Demo
          </a>
          <a href="#how-it-works" className={styles.secondaryCta}>
            See How It Works
          </a>
        </div>
        
        <div className={styles.trustRow}>
          <span>500+ Companies</span>
          <span className={styles.dot}>·</span>
          <span>AI-Matched Candidates</span>
          <span className={styles.dot}>·</span>
          <span>Secure & Compliant</span>
        </div>
      </div>
    </section>
  );
}
