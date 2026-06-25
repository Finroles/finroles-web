'use client';

import Image from 'next/image';
import styles from './Marquee.module.css';

const LOGOS = [
  { src: '/CKBirlaGroup.png',     alt: 'CK Birla Group' },
  { src: '/cofiser.png',          alt: 'Cofiser' },
  { src: '/dot-key.png',          alt: 'Dot & Key' },
  { src: '/ekvity.png',           alt: 'Ekvity' },
  { src: '/minimines-bg.png',     alt: 'Minimines' },
  { src: '/yourgrowthlabs.webp',  alt: 'Your Growth Labs' },
];

export default function Marquee() {
  // Repeat the logos list to ensure seamless infinite scroll coverage
  const duplicatedLogos = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <section className={styles.marqueeSection}>
      <div className={styles.container}>
        <p className={styles.label}>Trusted by teams at</p>
        <div className={styles.marqueeWrapper}>
          <div className={styles.marqueeTrack}>
            {duplicatedLogos.map((logo, idx) => (
              <div
                key={`${logo.src}-${idx}`}
                className={styles.logoCell}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="(max-width: 768px) 260px, 360px"
                    className={styles.logoImg}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
