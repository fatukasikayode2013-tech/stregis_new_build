'use client'

import { Music, GlassWater, ArrowRight } from 'lucide-react';

export default function Club() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="club" className="relative h-[90vh] md:h-screen flex items-center bg-[#050505] overflow-hidden">
      {/* Background Video with a deeper, noir-style filter */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale-[0.3]"
        src="/video/club.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      
      {/* Dynamic Overlays: Deep vignette for that "Midnight" feel */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      {/* Decorative Large Watermark */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 rotate-90 opacity-[0.03] pointer-events-none select-none">
        <h2 className="text-[250px] font-serif text-white tracking-tighter">NIGHTLIFE</h2>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-2xl">
          {/* Tagline */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#c9a961]" />
            <span className="text-[10px] font-bold tracking-[0.5em] text-[#c9a961] uppercase">
              Exclusive Lounge & Club
            </span>
          </div>

          {/* Title */}
          <h2 
            className="text-6xl md:text-8xl text-white mb-8 leading-none"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            The <span className="italic font-light text-[#c9a961]">After</span> Hours
          </h2>

          {/* Description with better line-height */}
          <p className="text-gray-400 text-lg md:text-xl mb-12 font-light leading-relaxed max-w-lg">
            Where the rhythm of Benin City meets the pinnacle of luxury. 
            Immerse yourself in a curated soundscape with premium mixology 
            and an electric atmosphere.
          </p>

          {/* Feature List (Subtle Icons) */}
          <div className="flex flex-wrap gap-8 mb-12">
            <div className="flex items-center gap-3">
              <Music className="w-4 h-4 text-[#c9a961]" />
              <span className="text-[10px] uppercase tracking-widest text-white/70">Live Curation</span>
            </div>
            <div className="flex items-center gap-3">
              <GlassWater className="w-4 h-4 text-[#c9a961]" />
              <span className="text-[10px] uppercase tracking-widest text-white/70">Master Mixology</span>
            </div>
          </div>

          {/* CTA: Modern Nightlife Button */}
          <button
            onClick={scrollToContact}
            className="group relative inline-flex items-center gap-6 bg-white/5 backdrop-blur-xl border border-white/10 px-10 py-5 rounded-full text-white transition-all duration-500 hover:bg-[#c9a961] hover:border-[#c9a961]"
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em]">Secure a Table</span>
            <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>

      {/* Aesthetic Bottom Detail */}
      <div className="absolute bottom-12 right-12 hidden md:block">
        <div className="flex flex-col items-end gap-2">
            <span className="text-[9px] text-white/30 tracking-[0.4em] uppercase">Dress Code</span>
            <span className="text-[11px] text-[#c9a961] tracking-widest uppercase font-bold">Smart Sophisticated</span>
        </div>
      </div>
    </section>
  );
}