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
    quote: '“Finroles has completely transformed our recruitment cycle. We slashed our average time-to-hire from 45 to 22 days while improving candidates’ compatibility. The AI-matching tool is spookily accurate.”',
    author: 'Sarah Jenkins',
    role: 'VP of Talent',
    company: 'Vercel',
  },
  {
    id: 't2',
    quote: '“Structured interviewing used to be a documentation nightmare. With Finroles, the question kits and scorecards are built right in, and the team calibration is seamless. It is the tool I have always wanted.”',
    author: 'Marcus Chen',
    role: 'CTO & Co-founder',
    company: 'Linear',
  },
  {
    id: 't3',
    quote: '“The ability to build warm pipelines in the background has changed how we scale. Instead of starting search from scratch for every new open role, we have pre-calibrated candidate benches ready.”',
    author: 'Helena Rostova',
    role: 'Head of People',
    company: 'Retool',
  },
  {
    id: 't4',
    quote: '“Finroles integrates directly with our ATS and Slack, keeping our hiring team, founders, and recruiters perfectly aligned. Feedback loops are instant, and funnel analytics are incredibly sharp.”',
    author: 'David Kross',
    role: 'VP of Recruiting',
    company: 'Stripe',
  },
];

export default function Testimonials() {
  const [sectionRef, isVisible] = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section id="testimonials" className={styles.testimonialsSection} ref={sectionRef}>
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <span className="label-chip">Social Proof</span>
          <h2 className={styles.heading}>What hiring teams say</h2>
        </div>

        <div className={`${styles.grid} ${isVisible ? styles.visible : ''}`}>
          {TESTIMONIALS.map((item, index) => (
            <div key={item.id} className={styles.card} style={{ '--index': index } as React.CSSProperties}>
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
