import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top Footer Section */}
        <div className={styles.topBar}>
          <div className={styles.logo}>
            <span>Finroles</span>
          </div>

          <nav className={styles.nav}>
            <a href="#features" className={styles.navLink}>Features</a>
            <a href="#how-it-works" className={styles.navLink}>How It Works</a>
            <a href="#testimonials" className={styles.navLink}>Testimonials</a>
            <Link href="/vision-mission" className={styles.navLink}>Vision & Mission</Link>
            <a href="#contact" className={styles.navLink}>Contact</a>
          </nav>

          <div className={styles.socials}>
            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/company/finroles/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={styles.socialLink}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className={styles.divider} />

        {/* Bottom Footer Section */}
        <div className={styles.bottomBar}>
          <span className={styles.copyright}>
            © 2025 Finroles. All rights reserved.
          </span>
          <div className={styles.legalLinks}>
            <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
            <span className={styles.separator}>·</span>
            <Link href="/terms" className={styles.legalLink}>Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
