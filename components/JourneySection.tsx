import type { JourneySectionData } from '@/lib/types';

interface JourneySectionProps {
  data: JourneySectionData;
}

export default function JourneySection({ data }: JourneySectionProps) {
  const steps = data.steps || [];
  return (
    <section className="py-24 bg-[#FDFBF7]">
      <div className="container mx-auto px-8 max-w-[1200px]">
        <div className="grid gap-16 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center p-8">
              <div className="inline-flex items-center justify-center w-[60px] h-[60px] bg-[#C9A96E] text-white font-display text-2xl font-semibold rounded-full mb-4">
                {step.number}
              </div>
              <h3 className="font-display text-2xl font-semibold text-[#1A1A2E] mb-2">
                {step.title}
              </h3>
              <p className="text-[#2D2D2D] opacity-80">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
