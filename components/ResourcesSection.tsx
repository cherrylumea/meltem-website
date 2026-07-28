import Link from 'next/link';

import type { ResourcesSectionData } from '@/lib/types';

interface ResourcesSectionProps {
  data: ResourcesSectionData;
}

export default function ResourcesSection({ data }: ResourcesSectionProps) {
  const resources = data.resources || [];
  return (
    <section id="resources" className="py-24 bg-[#F5F0EB]">
      <div className="container mx-auto px-8 max-w-[1200px]">
        {data.title && (
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-[#1A1A2E] mb-8">
            {data.title}
          </h2>
        )}
        <div className="grid gap-8 md:grid-cols-3">
          {resources.map((item, index) => (
            <article
              key={index}
              className="p-12 bg-white text-center hover:-translate-y-1 hover:shadow-xl transition-all"
            >
              <h3 className="font-display text-2xl font-semibold text-[#1A1A2E] mb-2">
                {item.title}
              </h3>
              <p className="text-[#2D2D2D] opacity-80 mb-4">{item.description}</p>
              {item.linkText && (
                <Link
                  href={item.linkUrl || '#'}
                  className="inline-block text-[#1A1A2E] underline underline-offset-4 hover:text-[#C9A96E] transition-colors"
                >
                  {item.linkText} →
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
