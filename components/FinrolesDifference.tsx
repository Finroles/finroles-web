'use client';

import { useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import RevealText from './RevealText';
import revealStyles from './reveal.module.css';
import styles from './FinrolesDifference.module.css';

interface DifferenceItem {
  id: string;
  title: string;
  description: string;
}

const DIFFERENCES: DifferenceItem[] = [
  {
    id: 'talent-acquisition',
    title: 'Talent Acquisition',
    description:
      'Build fast, flexible pipelines that scale with your hiring needs and connect you to top finance talent.',
  },
  {
    id: 'strategic-guidance',
    title: 'Strategic Guidance',
    description:
      'Provide strategic, hands-on guidance that aligns with your business goals and adapts to your culture.',
  },
  {
    id: 'verification-trust',
    title: 'Verification & Trust',
    description:
      'Run thorough, structured verification that protects your hiring decisions and reduces risk at every stage.',
  },
];

function DiffItem({ item, index }: { item: DifferenceItem; index: number }) {
  const itemRef = useRef<HTMLDivElement>(null);
  const isVisible = useScrollReveal(itemRef);

  return (
    <div
      ref={itemRef}
      className={`${styles.item} ${isVisible ? revealStyles.visible : revealStyles.hidden}`}
      style={{
        transitionDelay: `${(index % 3) * 100}ms`
      }}
    >
      <h3 className={styles.itemTitle}>{item.title}</h3>
      <p className={styles.itemDescription}>{item.description}</p>
    </div>
  );
}

export default function FinrolesDifference() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderVisible = useScrollReveal(headerRef);

  return (
    <section id="finroles-difference" className={styles.differenceSection}>
      <div className={styles.container}>
        <div ref={headerRef} className={styles.header}>
          <RevealText
            text="The finroles Difference"
            tag="h2"
            className={styles.heading}
            isVisible={isHeaderVisible}
          />
        </div>

        <div className={styles.list}>
          {DIFFERENCES.map((item, index) => (
            <DiffItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
