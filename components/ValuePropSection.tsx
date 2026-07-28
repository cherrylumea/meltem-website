import { PortableText } from '@portabletext/react';

import type { ValuePropSectionData } from '@/lib/types';

interface ValuePropSectionProps {
  data: ValuePropSectionData;
}

export default function ValuePropSection({ data }: ValuePropSectionProps) {
  return (
    <section className="py-24 bg-[#F5F0EB]">
      <div className="container mx-auto px-8 max-w-[1200px]">
        <div className="max-w-[800px] mx-auto text-center">
          {data.heading && (
            <h2 className="font-display text-3xl md:text-5xl font-medium italic text-[#1A1A2E] mb-8">
              {data.heading}
            </h2>
          )}
          {data.bodyText && (
            <div className="text-xl leading-[1.8] text-[#2D2D2D] [&>p]:mb-4">
              <PortableText value={data.bodyText} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
