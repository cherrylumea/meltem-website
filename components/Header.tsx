'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

import type { SiteSettings } from '@/lib/types';

interface HeaderProps {
  settings: SiteSettings;
}

export default function Header({ settings }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = settings.navLinks || [];
  const ctaText = settings.ctaText;
  const ctaLink = settings.ctaLink || '#contact';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 h-[80px] z-[1000] bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#1A1A2E]/[0.08] transition-all ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="container mx-auto px-8 max-w-[1200px] h-full flex items-center justify-between">
        <Link href="#home" className="flex flex-col leading-none" aria-label="Home">
          <span className="font-display text-2xl font-semibold text-[#1A1A2E]">
            {settings.logoName || 'Meltem Ersoy'}
          </span>
          {settings.logoTitle && (
            <span className="text-xs tracking-widest uppercase text-[#2D2D2D] opacity-70 mt-1">
              {settings.logoTitle}
            </span>
          )}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-16" aria-label="Primary">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href || '#'}
              className="text-[15px] text-[#2D2D2D] hover:text-[#C9A96E] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          {ctaText && (
            <Link
              href={ctaLink}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#1A1A2E] text-[#FDFBF7] hover:bg-[#2D2D4E] transition-all"
            >
              {ctaText}
            </Link>
          )}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="lg:hidden flex items-center justify-center w-12 h-12 text-[#1A1A2E]"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
            <path
              d={menuOpen ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16'}
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav
          className="lg:hidden fixed top-[80px] left-0 right-0 bottom-0 bg-[#FDFBF7] p-8 overflow-y-auto"
          aria-label="Mobile"
        >
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href || '#'}
              onClick={() => setMenuOpen(false)}
              className="block py-4 text-lg text-[#2D2D2D] border-b border-[#E8DCD0]"
            >
              {link.label}
            </Link>
          ))}
          {ctaText && (
            <Link
              href={ctaLink}
              onClick={() => setMenuOpen(false)}
              className="mt-8 w-full inline-flex items-center justify-center px-8 py-3.5 bg-[#1A1A2E] text-[#FDFBF7]"
            >
              {ctaText}
            </Link>
          )}
        </nav>
      )}
    </header>
  );
}
