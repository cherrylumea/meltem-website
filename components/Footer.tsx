import Link from 'next/link';

import type { SiteSettings } from '@/lib/types';

interface FooterProps {
  settings: SiteSettings;
}

export default function Footer({ settings }: FooterProps) {
  const navLinks = settings.navLinks || [];
  return (
    <footer className="bg-[#1A1A2E] text-[#FDFBF7] pt-24 pb-8">
      <div className="container mx-auto px-8 max-w-[1200px]">
        <div className="grid gap-16 md:grid-cols-[2fr_1fr_1fr] mb-16">
          <div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-2xl font-semibold text-[#FDFBF7]">
                {settings.logoName || 'Meltem Ersoy'}
              </span>
              {settings.logoTitle && (
                <span className="text-xs tracking-widest uppercase text-[#FDFBF7] opacity-70 mt-1">
                  {settings.logoTitle}
                </span>
              )}
            </div>
            {settings.footerTagline && (
              <p className="max-w-[400px] opacity-80 mt-4">{settings.footerTagline}</p>
            )}
          </div>

          <div>
            <h4 className="text-sm tracking-widest uppercase mb-4">Navigate</h4>
            <nav className="flex flex-col" aria-label="Footer">
              {navLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href || '#'}
                  className="py-1 opacity-80 hover:opacity-100 hover:text-[#C9A96E] transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm tracking-widest uppercase mb-4">Contact</h4>
            <div className="flex flex-col">
              {settings.contactPhone && (
                <a href={`tel:${settings.contactPhone}`} className="py-1 opacity-80 hover:opacity-100 hover:text-[#C9A96E] transition-all">
                  {settings.contactPhone}
                </a>
              )}
              {settings.contactEmail && (
                <a href={`mailto:${settings.contactEmail}`} className="py-1 opacity-80 hover:opacity-100 hover:text-[#C9A96E] transition-all">
                  {settings.contactEmail}
                </a>
              )}
              {settings.contactLocation && (
                <span className="py-1 opacity-80">{settings.contactLocation}</span>
              )}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#FDFBF7]/10 text-sm opacity-60">
          <span>{settings.footerText || `© ${new Date().getFullYear()} Meltem Ersoy. All rights reserved.`}</span>
        </div>
      </div>
    </footer>
  );
}
