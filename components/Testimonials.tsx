'use client';

import { useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import RevealText from './RevealText';
import revealStyles from './reveal.module.css';
import styles from './Testimonials.module.css';

interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    quote:
      '"We trusted Finroles with a very strategic hiring for CFO. We were so impressed with the services that we outsourced our entire recruitment function to them. 70-80% of our employees have been referred by Finroles and they are playing a strategic role in our growth."',
    author: 'Anupam Kumar',
    role: 'Founder',
    company: 'Minimines',
  },
  {
    id: 't2',
    quote:
      '"What stood out about FinRoles was their responsiveness and understanding of our business needs. Rather than forwarding resumes, they took the time to understand the role, company culture, and long-term objectives. The quality of shortlisted candidates was consistently impressive."',
    author: 'Sameer Gupta',
    role: 'Founder',
    company: 'Cofiser Consultants',
  },
  {
    id: 't3',
    quote:
      '"One of the challenges for growing VC funds is finding talent that combines capability with ownership. Finroles brought a structured, founder-friendly approach to hiring and consistently maintained a high bar for candidate quality."',
    author: 'Muskaan Khilnani',
    role: 'Investment Team',
    company: '8i Ventures',
  },
];

function TestimonialCard({ item, index }: { item: TestimonialItem; index: number }) {
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
      <p className={styles.quote}>{item.quote}</p>
      <div className={styles.authorInfo}>
        <span className={styles.authorName}>{item.author}</span>
        <span className={styles.authorRole}>
          {item.role} · <span className={styles.companyName}>{item.company}</span>
        </span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderVisible = useScrollReveal(headerRef);

  return (
    <section id="testimonials" className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div ref={headerRef} className={styles.header}>
          <RevealText
            text="What our clients say"
            tag="h2"
            className={styles.heading}
            isVisible={isHeaderVisible}
          />
        </div>

        <div className={styles.grid}>
          {TESTIMONIALS.map((item, index) => (
            <TestimonialCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
