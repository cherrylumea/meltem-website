import type { WhySectionData } from '@/lib/types';

interface WhySectionProps {
  data: WhySectionData;
}

export default function WhySection({ data }: WhySectionProps) {
  return (
    <section className="py-24 bg-[#F5F0EB]">
      <div className="container mx-auto px-8 max-w-[1200px]">
        <div className="max-w-[800px] mx-auto">
          {data.heading && (
            <h2 className="font-display text-3xl md:text-5xl font-medium italic text-center text-[#1A1A2E] mb-16">
              {data.heading}
            </h2>
          )}
          {data.body && (
            <p className="text-lg leading-[1.8] text-center text-[#2D2D2D]">
              {data.body}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
