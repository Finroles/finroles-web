import styles from './Marquee.module.css';

const COMPANIES = [
  'CK Birla Group',
  'Minimines',
  'Your Growth Labs',
  'Dot & Key',
  'Cofiser Consultants',
  'Ekvity',
  '8i Investments',
];

export default function Marquee() {
  // Duplicate list to achieve a seamless horizontal infinite scroll transition
  const extendedCompanies = [...COMPANIES, ...COMPANIES];

  return (
    <section className={styles.marqueeSection}>
      <div className={styles.container}>
        <p className={styles.label}>Trusted by teams at</p>
        
        <div className={styles.trackWrapper}>
          <div className={styles.track}>
            {extendedCompanies.map((company, index) => (
              <div key={index} className={styles.item}>
                <span className={styles.name}>{company}</span>
                <span className={styles.separator}>/</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
