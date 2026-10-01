'use client';

import { CalendarDays, Phone } from 'lucide-react';

export default function StickyBookBar() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-50 px-4">
      <div className="mx-auto flex max-w-md items-center justify-between gap-3 rounded-full border border-gold/30 bg-white/90 p-2 shadow-2xl shadow-gold/10 backdrop-blur-lg">
        <div className="flex items-center gap-2 px-2 text-navy-900">
          <CalendarDays className="h-4 w-4 text-gold" />
          <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
            Book now
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="rounded-full bg-gold px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-gold-dark"
          >
            Reserve
          </a>
          <a
            href="tel:09060001732"
            className="flex items-center gap-2 rounded-full border border-navy-900/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-navy-900 transition hover:border-gold hover:text-gold"
          >
            <Phone className="h-3.5 w-3.5" />
            Call
          </a>
        </div>
      </div>
    </div>
  );
}
