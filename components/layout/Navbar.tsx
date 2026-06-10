'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavLink {
  label: string;
  href: string;
  isSecondary?: boolean;
}

const navLinks: NavLink[] = [
  { label: 'About', href: '#about', isSecondary: false },
  { label: 'Services', href: '#services', isSecondary: false },
  { label: 'Work', href: '#work', isSecondary: true },
];

const mobileLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scrolled down past 60px and scrolling down -> compress
      if (currentScrollY > 60 && currentScrollY > lastScrollY) {
        setIsScrolled(true);
      } 
      // Scrolling up OR near the top -> expand
      else if (currentScrollY < lastScrollY || currentScrollY <= 60) {
        setIsScrolled(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetPosition = targetElement.offsetTop - 80; // height of navbar
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      <header
        className={cn(
          'floating-nav flex items-center justify-between transition-all duration-300',
          isScrolled ? 'scrolled' : ''
        )}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => handleScrollTo(e, '#')}
          className="text-xl sm:text-2xl font-bold font-display text-text hover:text-accent transition-colors"
        >
          Finroles
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className={cn(
                'text-sm font-medium text-text/80 hover:text-accent transition-colors relative group',
                link.isSecondary ? 'nav-link-secondary' : ''
              )}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="px-4 py-1.5 rounded-full bg-accent text-bg text-sm font-semibold hover:opacity-90 transition-all duration-300 shadow-md shadow-accent/10 hover:shadow-accent/25 whitespace-nowrap"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-text hover:text-accent transition-colors p-2"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-surface border-l border-muted/10 z-45 p-6 pt-24 flex flex-col gap-6 md:hidden shadow-2xl"
            >
              <nav className="flex flex-col gap-6">
                {mobileLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="text-lg font-medium text-text/80 hover:text-accent transition-colors border-b border-muted/5 pb-2"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
