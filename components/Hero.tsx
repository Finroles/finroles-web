'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';

const WORDS = ['CFO', 'Plant Head', 'CMO', 'VP Finance', 'Marketing Lead', 'Operations Head'];
const TYPE_SPEED = 80;
const DELETE_SPEED = 40;
const HOLD_DURATION = 1800;
const PAUSE_AFTER_DELETE = 400;

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [isCursorActive, setIsCursorActive] = useState(true);

  // All mutable animation state in refs — never triggers re-renders
  const wordIndexRef  = useRef(0);
  const textRef       = useRef('');
  const isDeletingRef = useRef(false);
  const timerRef      = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const tick = () => {
      const target = WORDS[wordIndexRef.current];
      const current = textRef.current;

      if (!isDeletingRef.current) {
        // ── TYPING ──
        if (current.length < target.length) {
          const next = target.slice(0, current.length + 1);
          textRef.current = next;
          setDisplayText(next);
          setIsCursorActive(true);
          timerRef.current = setTimeout(tick, TYPE_SPEED);
        } else {
          // Word complete → hold, then switch to deleting
          setIsCursorActive(false); // cursor blinks while holding
          timerRef.current = setTimeout(() => {
            isDeletingRef.current = true;
            tick();
          }, HOLD_DURATION);
        }
      } else {
        // ── DELETING ──
        if (current.length > 0) {
          const next = current.slice(0, -1);
          textRef.current = next;
          setDisplayText(next);
          setIsCursorActive(true);
          timerRef.current = setTimeout(tick, DELETE_SPEED);
        } else {
          // Fully deleted → pause, then next word
          isDeletingRef.current = false;
          wordIndexRef.current = (wordIndexRef.current + 1) % WORDS.length;
          setIsCursorActive(false); // blink in the pause gap
          timerRef.current = setTimeout(tick, PAUSE_AFTER_DELETE);
        }
      }
    };

    // Kick off after a short initial delay
    timerRef.current = setTimeout(tick, 600);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []); // runs once on mount — loop is self-contained via refs

  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        <h1 className={styles.headline}>
          <span className={styles.staticTop}>Your Next</span>
          <span className={styles.animatedLine}>
            <span className={styles.animatedWord}>{displayText}</span>
            <span className={`${styles.cursor} ${isCursorActive ? styles.cursorActive : styles.cursorBlink}`}>
              |
            </span>
          </span>
          <span className={styles.staticBottom}>Starts Here.</span>
        </h1>

        <p className={styles.subheadline}>
          Finroles helps companies hire smarter using AI-driven candidate matching,
          role intelligence, and structured hiring workflows, all in one platform.
        </p>

        <div className={styles.ctaGroup}>
          <a href="#contact" className={styles.primaryCta}>Request Demo</a>
          <a href="#how-it-works" className={styles.secondaryCta}>See How It Works</a>
        </div>

        <div className={styles.trustRow}>
          <span>50+ Companies</span>
          <span className={styles.dot}>·</span>
          <span>AI-Matched Candidates</span>
          <span className={styles.dot}>·</span>
          <span>Secure &amp; Compliant</span>
        </div>
      </div>
    </section>
  );
}
