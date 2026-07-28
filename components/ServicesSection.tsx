import Link from 'next/link';

import type { ServicesSectionData } from '@/lib/types';

interface ServicesSectionProps {
  data: ServicesSectionData;
}

export default function ServicesSection({ data }: ServicesSectionProps) {
  return (
    <section className="py-24 bg-[#FDFBF7]">
      <div className="container mx-auto px-8 max-w-[1200px]">
        {data.sectionTitle && (
          <h2 className="sr-only">{data.sectionTitle}</h2>
        )}
        <div className="grid gap-8 md:grid-cols-3">
          {(data.services ?? []).map((service, index) => (
            <article 
              key={index} 
              className="p-12 bg-white border border-[#E8DCD0] hover:-translate-y-1 hover:shadow-xl hover:border-[#C9A96E] transition-all"
            >
              <h3 className="font-display text-2xl font-semibold text-[#1A1A2E] mb-4">
                {service.title}
              </h3>
              <p className="text-[#2D2D2D] leading-relaxed mb-6">
                {service.description}
              </p>
              {service.linkText && service.linkUrl && (
                <Link 
                  href={service.linkUrl || '#'} 
                  className="inline-block text-[#1A1A2E] underline underline-offset-4 hover:text-[#C9A96E] transition-colors"
                >
                  {service.linkText} →
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}