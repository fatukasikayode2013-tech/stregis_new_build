'use client'

import { ArrowRight, Star } from 'lucide-react';

export default function CTA() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-28 lg:py-40 bg-[#0A111F] overflow-hidden">
      {/* Sophisticated Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#c9a961]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Subtle Branding Accent */}
          <div className="flex justify-center items-center gap-3 mb-8">
            <div className="h-[1px] w-8 bg-[#c9a961]/40" />
            <Star className="w-4 h-4 text-[#c9a961] fill-[#c9a961]" />
            <div className="h-[1px] w-8 bg-[#c9a961]/40" />
          </div>

          <h2
            className="text-5xl lg:text-7xl text-white mb-8 leading-tight tracking-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Your Sanctuary <br />
            <span className="italic font-light text-[#c9a961]">Awaits You.</span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Step away from the ordinary and immerse yourself in the unparalleled 
            sophistication of St. Regis. Every detail is curated for your ultimate peace.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={scrollToContact}
              className="group relative flex items-center gap-3 bg-[#c9a961] text-white px-12 py-5 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 hover:shadow-[0_0_40px_rgba(201,169,97,0.3)] hover:-translate-y-1"
            >
              Begin Your Journey
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            
            <button
              onClick={() => {
                const element = document.getElementById('rooms');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-white text-[10px] font-bold uppercase tracking-[0.3em] py-4 px-8 border border-white/10 rounded-full hover:bg-white hover:text-[#0A111F] transition-all duration-500"
            >
              Explore Collections
            </button>
          </div>
          
          {/* Bottom Branding Tag */}
          <p className="mt-16 text-[9px] text-gray-500 uppercase tracking-[0.5em]">
            Benin City &bull; Nigeria
          </p>
        </div>
      </div>
    </section>
  );
}