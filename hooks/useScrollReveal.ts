import { useEffect, useState, RefObject } from 'react';

export function useScrollReveal<T extends HTMLElement>(
  ref: RefObject<T>,
  options?: IntersectionObserverInit
): boolean {
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (typeof window === 'undefined' || !element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setHasRevealed(entry.isIntersecting);
    }, {
      threshold: 0.05,
      ...options
    });

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref, options, ref.current]);

  return hasRevealed;
}
