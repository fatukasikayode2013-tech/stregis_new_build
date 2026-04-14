'use client'

import React from 'react';
import { ChevronRight, Sparkles, MapPin, Users } from 'lucide-react';

export default function Events() {
  const highlights = [
    { title: 'Grand Weddings', meta: 'Timeless Romance' },
    { title: 'Social Galas', meta: 'Elite Gatherings' },
    { title: 'Private Concerts', meta: 'Acoustic Excellence' },
    { title: 'Exquisite Dining', meta: 'Bespoke Banquets' },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="events" className="py-24 lg:py-40 bg-white relative overflow-hidden">
      {/* Decorative Branding Watermark */}
      <div className="absolute top-10 -right-20 hidden lg:block opacity-[0.03] select-none pointer-events-none">
        <h2 className="text-[200px] font-serif italic text-[#1e3a5f]">St. Regis</h2>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Visual Side - Editorial Framing */}
          <div className="lg:col-span-7 relative order-2 lg:order-1">
            <div className="relative aspect-[16/10] group">
              {/* The "Frame" */}
              <div className="absolute -inset-4 border border-gray-100 rounded-[2rem] -z-10 transition-transform duration-700 group-hover:scale-105" />
              
              <div className="h-full w-full rounded-2xl overflow-hidden shadow-2xl relative">
                <video
                  src="/video/events.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
                />
                
                {/* Minimal Overlay Data */}
                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-5 py-3 rounded-full shadow-sm flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#c9a961] animate-pulse" />
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#1e3a5f] uppercase">The Grand Ballroom</span>
                </div>
              </div>

              {/* Stats Floating Element */}
              <div className="absolute -bottom-10 -right-6 md:right-10 bg-[#1e3a5f] p-8 rounded-2xl shadow-2xl max-w-[240px]">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-4 h-4 text-[#c9a961]" />
                  <span className="text-[9px] font-bold tracking-[0.3em] text-white/50 uppercase italic">Capacity</span>
                </div>
                <p className="text-3xl text-white font-serif mb-2">1,000+</p>
                <p className="text-white/40 text-[10px] uppercase tracking-widest leading-relaxed">
                  Versatile configurations for elite celebrations.
                </p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="inline-flex items-center gap-3 mb-6">
              <Sparkles className="w-4 h-4 text-[#c9a961]" />
              <span className="text-[10px] font-bold tracking-[0.5em] text-[#c9a961] uppercase">Curated Legacy</span>
            </div>

            <h2 className="text-5xl lg:text-7xl text-[#1e3a5f] font-serif leading-[1.1] mb-8">
              Celebrate <br />
              <span className="italic font-light">The Sublime.</span>
            </h2>

            <p className="text-gray-500 text-lg font-light leading-relaxed mb-12">
              Transforming your milestones into masterpieces. Our bespoke approach to events ensures that every moment is draped in the signature St. Regis elegance.
            </p>

            {/* List-Style Highlights */}
            <div className="space-y-8 mb-12">
              {highlights.map((item, idx) => (
                <div key={idx} className="group flex items-center justify-between border-b border-gray-100 pb-4 hover:border-[#c9a961] transition-colors duration-500">
                  <div>
                    <h3 className="text-[#1e3a5f] font-serif text-xl italic group-hover:text-[#c9a961] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">{item.meta}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#c9a961] transition-all transform group-hover:translate-x-1" />
                </div>
              ))}
            </div>

            <button
              onClick={scrollToContact}
              className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#1e3a5f] border-b-2 border-[#c9a961] pb-2 hover:text-[#c9a961] transition-all"
            >
              Inquire About Availabilty
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}