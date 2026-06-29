'use client';

import React, { useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './RevealText.module.css';

interface RevealTextProps {
  text: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  className?: string;
  isVisible?: boolean;
}

export default function RevealText({
  text,
  tag = 'h2',
  className = '',
  isVisible,
}: RevealTextProps) {
  const ref = useRef<HTMLElement>(null);
  const localIsVisible = useScrollReveal(ref);
  const activeVisible = isVisible !== undefined ? isVisible : localIsVisible;

  // Split text by space but preserve the word structure
  const words = text.split(' ');
  const Tag = tag;

  return (
    <Tag ref={ref as unknown as React.Ref<HTMLHeadingElement>} className={`${className} ${styles.textContainer}`}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className={`${styles.word} ${activeVisible ? styles.wordVisible : ''}`}
          style={{
            transitionDelay: `${index * 60}ms`,
          }}
        >
          {word}{index < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </Tag>
  );
}
