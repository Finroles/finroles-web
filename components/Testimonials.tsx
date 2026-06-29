'use client';

import { useInView } from '@/hooks/useInView';
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

export default function Testimonials() {
  const [sectionRef, isVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="testimonials" className={styles.testimonialsSection} ref={sectionRef}>
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.heading}>What our clients say</h2>
        </div>

        <div className={`${styles.grid} ${isVisible ? styles.visible : ''}`}>
          {TESTIMONIALS.map((item, index) => (
            <div
              key={item.id}
              className={styles.card}
              style={{ '--index': index } as React.CSSProperties}
            >
              <p className={styles.quote}>{item.quote}</p>
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>{item.author}</span>
                <span className={styles.authorRole}>
                  {item.role} · <span className={styles.companyName}>{item.company}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
