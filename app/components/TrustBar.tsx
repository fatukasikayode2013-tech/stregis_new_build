'use client';

import { Star, ShieldCheck, MapPin, Sparkles } from 'lucide-react';

const trustPoints = [
  { icon: Star, title: 'Guest Satisfaction', value: '4.9/5' },
  { icon: ShieldCheck, title: 'Secure Booking', value: '24/7 Concierge' },
  { icon: MapPin, title: 'Prime Location', value: 'Benin City' },
];

export default function TrustBar() {
  return (
    <section className="bg-navy-900 py-16 text-white">
      <div className="container mx-auto px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {trustPoints.map(({ icon: Icon, title, value }) => (
            <div key={title} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/60">{title}</p>
                <p className="mt-1 text-xl font-serif text-white">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
