import type { TrustSignalsData } from '@/lib/types';

interface TrustSignalsProps {
  data: TrustSignalsData;
}

export default function TrustSignals({ data }: TrustSignalsProps) {
  const credentials = data.credentials || [];
  return (
    <section className="py-24 bg-[#FDFBF7]">
      <div className="container mx-auto px-8 max-w-[1200px]">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {credentials.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-white border-l-[3px] border-[#C9A96E]"
            >
              <strong className="block text-[#1A1A2E] mb-1">{item.label}</strong>
              <span className="text-sm text-[#2D2D2D] opacity-80">{item.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
