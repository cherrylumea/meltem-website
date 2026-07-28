import type { TestimonialsSectionData } from '@/lib/types';

interface TestimonialsSectionProps {
  data: TestimonialsSectionData;
}

export default function TestimonialsSection({ data }: TestimonialsSectionProps) {
  const testimonials = data.testimonials || [];
  return (
    <section className="py-24 bg-[#F5F0EB]">
      <div className="container mx-auto px-8 max-w-[1200px]">
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <figure
              key={index}
              className="p-12 bg-white border-l-[3px] border-[#C9A96E]"
            >
              <blockquote className="font-display text-xl italic leading-relaxed text-[#1A1A2E] mb-4">
                {item.quote}
              </blockquote>
              <cite className="not-italic text-sm text-[#2D2D2D] opacity-70">
                {item.author}
              </cite>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
