import Link from 'next/link';

import type { FinalCtaData } from '@/lib/types';

interface FinalCtaProps {
  data: FinalCtaData;
}

export default function FinalCta({ data }: FinalCtaProps) {
  return (
    <section className="py-24 bg-[#1A1A2E] text-center">
      <div className="container mx-auto px-8 max-w-[1200px]">
        {data.heading && (
          <h2 className="font-display text-3xl md:text-5xl font-medium italic text-[#FDFBF7] mb-8">
            {data.heading}
          </h2>
        )}
        {data.text && (
          <p className="text-xl max-w-[600px] mx-auto mb-8 text-[#FDFBF7] opacity-90">
            {data.text}
          </p>
        )}
        {data.buttonText && (
          <Link
            href={data.buttonLink || '#'}
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#C9A96E] text-[#1A1A2E] font-medium hover:bg-[#D4B87A] transition-all"
          >
            {data.buttonText}
          </Link>
        )}
      </div>
    </section>
  );
}
