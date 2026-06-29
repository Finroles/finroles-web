"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

// Safe check for window to register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedTextProps {
  children: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  className?: string;
  stagger?: number;
  duration?: number;
  delay?: number;
  startTrigger?: string; // custom start trigger, e.g., "top 90%"
}

/**
 * AnimatedText
 * Recreates the premium line-by-line / word-by-word reveal masks (like 8vc.com)
 * split with SplitType and animated with GSAP + ScrollTrigger.
 */
export function AnimatedText({
  children,
  tag = 'h2',
  className = '',
  stagger = 0.025,
  duration = 0.85,
  delay = 0,
  startTrigger = 'top 88%',
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLElement>(null);
  const Tag = tag;

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Instantiate SplitType to divide text into lines and words
      const split = new SplitType(containerRef.current, {
        types: 'lines,words',
        tagName: 'span',
      });

      // Apply failsafe inline style masking to the split line wrappers
      if (split.lines) {
        split.lines.forEach((line) => {
          line.style.display = 'block';
          line.style.overflow = 'hidden';
          line.style.verticalAlign = 'bottom';
        });
      }

      // Initialize the split words translated down out of their line masks
      if (split.words) {
        gsap.set(split.words, { y: '102%' });

        // Staggered reveal animation triggered by scroll
        gsap.to(split.words, {
          y: '0%',
          duration: duration,
          ease: 'power3.out',
          stagger: stagger,
          delay: delay,
          scrollTrigger: {
            trigger: containerRef.current,
            start: startTrigger,
            toggleActions: 'play none none none',
          },
        });
      }

      // Cleanup function to restore original text structure on component unmount
      return () => {
        split.revert();
      };
    },
    { scope: containerRef }
  );

  return (
    <Tag ref={containerRef as React.Ref<HTMLHeadingElement>} className={className}>
      {children}
    </Tag>
  );
}

interface ScrollScrubBoxProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'left' | 'right';
  scaleSpeed?: number; // scale multiplier based on scroll
}

/**
 * ScrollScrubBox
 * Tied directly to scroll progress (scrub: true).
 * Dynamically updates scale or horizontal translations.
 */
export function ScrollScrubBox({
  children,
  className = '',
  direction = 'right',
  scaleSpeed = 0.15,
}: ScrollScrubBoxProps) {
  const boxRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!boxRef.current) return;

      const xTranslation = direction === 'right' ? 80 : -80;

      gsap.fromTo(
        boxRef.current,
        {
          x: -xTranslation,
          scale: 0.95,
        },
        {
          x: xTranslation,
          scale: 1 + scaleSpeed,
          ease: 'none',
          scrollTrigger: {
            trigger: boxRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    },
    { scope: boxRef }
  );

  return (
    <div ref={boxRef} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
}
