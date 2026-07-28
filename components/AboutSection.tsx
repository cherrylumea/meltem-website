import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';

import type { AboutSectionData } from '@/lib/types';

interface AboutSectionProps {
  data: AboutSectionData;
}

export default function AboutSection({ data }: AboutSectionProps) {
  return (
    <section id="about" className="py-24 bg-[#F5F0EB]">
      <div className="container mx-auto px-8 max-w-[1200px]">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] items-center">
          {data.image && (
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={urlFor(data.image).width(800).height(1067).url()}
                alt={data.heading || 'About'}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div>
            {data.heading && (
              <h2 className="font-display text-3xl md:text-5xl font-medium italic text-[#1A1A2E] mb-8">
                {data.heading}
              </h2>
            )}
            {data.body && (
              <div className="text-lg leading-[1.8] text-[#2D2D2D] [&>p]:mb-8">
                <PortableText value={data.body} />
              </div>
            )}
            {data.linkText && (
              <Link
                href={data.linkUrl || '#'}
                className="inline-block text-[#1A1A2E] underline underline-offset-4 hover:text-[#C9A96E] transition-colors"
              >
                {data.linkText} →
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
