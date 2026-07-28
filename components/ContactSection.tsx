'use client';

import { useState } from 'react';

import type { ContactSectionData } from '@/lib/types';

interface ContactSectionProps {
  data: ContactSectionData;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactSection({ data }: ContactSectionProps) {
  const [status, setStatus] = useState<Status>('idle');

  const details: [string, string | undefined][] = [
    ['Phone', data.phone],
    ['Email', data.email],
    ['Location', data.location],
    ['Sessions', data.sessions],
    ['Fee', data.fee],
    ['Languages', data.languages],
  ];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    // Honeypot: bots fill hidden fields, humans never see them.
    if ((new FormData(form).get('_gotcha') as string)?.length) {
      setStatus('success');
      form.reset();
      return;
    }

    // No endpoint configured yet — just acknowledge without sending.
    if (!data.formEndpoint) {
      setStatus('success');
      form.reset();
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(data.formEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="py-24 bg-[#FDFBF7]">
      <div className="container mx-auto px-8 max-w-[1200px]">
        {data.heading && (
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-[#1A1A2E] mb-8">
            {data.heading}
          </h2>
        )}
        <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr]">
          <div>
            {data.subheading && (
              <h3 className="font-display text-2xl font-semibold text-[#1A1A2E] mb-4">
                {data.subheading}
              </h3>
            )}
            {data.introText && (
              <p className="text-[#2D2D2D] leading-relaxed mb-8">{data.introText}</p>
            )}
            <div className="space-y-2">
              {details
                .filter(([, value]) => value)
                .map(([label, value]) => (
                  <p key={label} className="text-[#2D2D2D]">
                    <strong className="text-[#1A1A2E]">{label}:</strong> {value}
                  </p>
                ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-12 border border-[#E8DCD0]">
            <div className="mb-8">
              <label htmlFor="name" className="block text-sm font-medium text-[#1A1A2E] mb-2">
                Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-3.5 bg-[#F5F0EB] border border-transparent focus:border-[#C9A96E] focus:bg-white outline-none transition-all"
              />
            </div>
            <div className="mb-8">
              <label htmlFor="email" className="block text-sm font-medium text-[#1A1A2E] mb-2">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-3.5 bg-[#F5F0EB] border border-transparent focus:border-[#C9A96E] focus:bg-white outline-none transition-all"
              />
            </div>
            <div className="mb-8">
              <label htmlFor="phone" className="block text-sm font-medium text-[#1A1A2E] mb-2">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full px-4 py-3.5 bg-[#F5F0EB] border border-transparent focus:border-[#C9A96E] focus:bg-white outline-none transition-all"
              />
            </div>
            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-[#1A1A2E] mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3.5 bg-[#F5F0EB] border border-transparent focus:border-[#C9A96E] focus:bg-white outline-none transition-all resize-y min-h-[120px]"
              />
            </div>
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ position: 'absolute', left: '-9999px', width: 1, height: 1 }}
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full inline-flex items-center justify-center px-8 py-3.5 bg-[#1A1A2E] text-[#FDFBF7] hover:bg-[#2D2D4E] transition-all disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
            <p role="status" aria-live="polite" className="mt-4 text-sm">
              {status === 'success' && (
                <span className="text-[#5F7A5F]">
                  Thank you for your message. I will be in touch soon.
                </span>
              )}
              {status === 'error' && (
                <span className="text-red-700">
                  Something went wrong. Please email {data.email || 'us'} directly.
                </span>
              )}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
