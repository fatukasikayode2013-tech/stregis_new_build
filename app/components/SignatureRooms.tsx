'use client';

import { ArrowRight, BedDouble, Sparkles } from 'lucide-react';

const featuredRooms = [
  {
    title: 'Royal Suite',
    description: 'Palatial comfort with grand entertaining spaces, premium finishes, and elevated city views.',
    price: 'From ₦100,000 / night',
    image: '/images/Royal Suite.jpeg',
  },
  {
    title: 'Presidential Suite',
    description: 'The finest expression of privacy, service, and bespoke luxury for the discerning guest.',
    price: 'From ₦350,000 / night',
    image: '/images/presidential.jpeg',
  },
  {
    title: 'Executive Deluxe',
    description: 'Elegant living and refined convenience crafted for longer, more indulgent stays.',
    price: 'From ₦65,000 / night',
    image: '/images/Executive deluxe.jpg.jpeg',
  },
];

export default function SignatureRooms() {
  return (
    <section className="bg-cream py-24">
      <div className="container mx-auto px-6">
        <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.35em] text-gold">
              Signature Stays
            </span>
            <h2 className="font-serif text-4xl text-navy-900 md:text-5xl">
              A sanctuary of <span className="italic text-gold">refined comfort</span>
            </h2>
          </div>

          <a
            href="#rooms"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-navy-900 transition hover:text-gold"
          >
            Explore all rooms
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {featuredRooms.map((room) => (
            <article key={room.title} className="overflow-hidden rounded-[30px] bg-white shadow-[0_25px_50px_rgba(30,58,95,0.08)]">
              <div className="relative h-80 overflow-hidden">
                <img src={room.image} alt={room.title} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/10 to-transparent" />
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-navy-900">
                  <BedDouble className="h-3.5 w-3.5 text-gold" />
                  Featured
                </div>
              </div>

              <div className="p-7">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="font-serif text-3xl text-navy-900">{room.title}</h3>
                  <Sparkles className="h-5 w-5 text-gold" />
                </div>

                <p className="mb-6 text-sm leading-7 text-gray-600">{room.description}</p>

                <div className="flex items-center justify-between border-t border-navy-900/10 pt-5">
                  <span className="text-sm font-semibold text-gold">{room.price}</span>
                  <a href="#contact" className="rounded-full bg-gold px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-gold-dark">
                    Reserve
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
