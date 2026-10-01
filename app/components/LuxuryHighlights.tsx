'use client';

import { Sparkles, UtensilsCrossed, Flower2, CalendarHeart } from 'lucide-react';

const highlights = [
  {
    icon: Sparkles,
    title: 'Curated Suites',
    text: 'Sophisticated rooms designed for comfort, privacy, and elevated city living.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Fine Dining',
    text: 'Signature culinary experiences crafted for memorable evenings and celebrations.',
  },
  {
    icon: Flower2,
    title: 'Spa & Wellness',
    text: 'Restorative rituals and calming spaces for a complete luxury escape.',
  },
  {
    icon: CalendarHeart,
    title: 'Events & Gatherings',
    text: 'Elegant venues for weddings, meetings, and private occasions with refined service.',
  },
];

export default function LuxuryHighlights() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="mb-14 text-center">
          <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.35em] text-gold">
            Signature Experience
          </span>
          <h2 className="font-serif text-4xl text-navy-900 md:text-5xl">
            Designed for the <span className="italic text-gold">modern luxury guest</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-3xl border border-navy-900/5 bg-cream p-7 shadow-[0_20px_40px_rgba(30,58,95,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(201,169,97,0.12)]"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-dark text-white shadow-lg shadow-gold/20">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="mb-3 font-serif text-2xl text-navy-900">{title}</h3>
              <p className="text-sm leading-7 text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
