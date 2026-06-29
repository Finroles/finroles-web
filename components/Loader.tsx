'use client';

import React, { useEffect, useState } from 'react';
import styles from './Loader.module.css';

export default function Loader() {
  const [mounted, setMounted] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    if (typeof window !== 'undefined') {
      const hasLoaded = sessionStorage.getItem('loader-completed');
      if (!hasLoaded) {
        setShouldRender(true);
        // Lock body scroll
        document.body.style.overflow = 'hidden';

        // Trigger exit animation after progress bar sweeps (~1.2s - 1.5s)
        const exitTimer = setTimeout(() => {
          setIsExiting(true);
        }, 1500);

        // Remove from DOM and unlock scroll after slide-up exit completes (0.6s)
        const finishTimer = setTimeout(() => {
          setShouldRender(false);
          document.body.style.overflow = '';
          sessionStorage.setItem('loader-completed', 'true');
        }, 2100);

        return () => {
          clearTimeout(exitTimer);
          clearTimeout(finishTimer);
          document.body.style.overflow = '';
        };
      }
    }
  }, []);

  if (!mounted || !shouldRender) return null;

  return (
    <div className={`${styles.overlay} ${isExiting ? styles.exit : ''}`}>
      <div className={styles.content}>
        <div className={styles.logo}>Finroles</div>
        <div className={styles.progressBarWrapper}>
          <div className={styles.progressBar} />
        </div>
      </div>
    </div>
  );
}
