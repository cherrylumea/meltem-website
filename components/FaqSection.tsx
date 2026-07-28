'use client';

import { useState } from 'react';

import type { FaqSectionData } from '@/lib/types';

interface FaqSectionProps {
  data: FaqSectionData;
}

export default function FaqSection({ data }: FaqSectionProps) {
  const items = data.items || [];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[#FDFBF7]">
      <div className="container mx-auto px-8 max-w-[1200px]">
        {data.title && (
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-[#1A1A2E] mb-8">
            {data.title}
          </h2>
        )}
        <div className="max-w-[800px] mx-auto">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-[#E8DCD0] py-8">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left font-display text-xl font-medium text-[#1A1A2E]"
                >
                  <span>{item.question}</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className={`w-5 h-5 flex-shrink-0 text-[#C9A96E] transition-transform ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                    aria-hidden="true"
                  >
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                  </svg>
                </button>
                {isOpen && (
                  <p className="pt-4 text-[#2D2D2D] leading-relaxed">{item.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
