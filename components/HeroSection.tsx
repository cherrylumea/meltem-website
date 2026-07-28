import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';

import type { HeroSectionData } from '@/lib/types';

interface HeroSectionProps {
  data: HeroSectionData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center pt-[80px] pb-16 bg-gradient-to-br from-[#FDFBF7] to-[#F5F0EB]">
      <div className="container mx-auto px-8 max-w-[1200px]">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] items-center">
          <div>
            <h1 className="font-display text-4xl md:text-6xl font-semibold leading-tight text-[#1A1A2E] mb-8">
              {data.heading || 'Welcome'}
            </h1>
            <p className="text-xl text-[#2D2D2D] mb-8 leading-relaxed">
              {data.subtitle || ''}
            </p>
            <div className="flex flex-wrap gap-4">
              {/* Safe href fallback prevents undefined errors */}
              <Link 
                href={data.ctaPrimaryLink || '#'} 
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#1A1A2E] text-[#FDFBF7] hover:bg-[#2D2D4E] transition-all"
              >
                {data.ctaPrimaryText || 'Learn More'}
              </Link>
            </div>
          </div>
          {data.image && (
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl hidden lg:block">
              <Image 
                src={urlFor(data.image).width(800).height(1000).url()} 
                alt={data.heading || 'Hero Image'} 
                fill 
                className="object-cover" 
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}