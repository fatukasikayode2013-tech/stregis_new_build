'use client'

import React from 'react';
import { Heart, PartyPopper, Music, GlassWater, ChevronRight, Sparkles } from 'lucide-react';

export default function Events() {
  const eventHighlights = [
    {
      icon: Heart,
      title: 'Grand Weddings',
      description: 'Exchange vows in an atmosphere of timeless romance and gold-leaf elegance.',
    },
    {
      icon: PartyPopper,
      title: 'Social Galas',
      description: 'From milestone birthdays to elite social gatherings in our starlit ballrooms.',
    },
    {
      icon: Music,
      title: 'Private Concerts',
      description: 'Acoustically tuned spaces for intimate performances and sophisticated soirées.',
    },
    {
      icon: GlassWater,
      title: 'Exquisite Dining',
      description: 'Bespoke banquet menus crafted by world-class chefs for your private guests.',
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="events" className="py-24 lg:py-36 bg-[#fdfdfc] relative overflow-hidden">
      {/* Subtle Decorative Elements for a White Theme */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#c9a961] opacity-[0.05] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Content Side - Stays Left on Desktop */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-5 h-5 text-[#c9a961]" />
              <p className="text-[#c9a961] font-semibold tracking-[0.4em] text-xs uppercase">
                Grand Occasions
              </p>
            </div>

            <h2
              className="text-4xl lg:text-6xl text-[#1e3a5f] mb-8 leading-[1.1]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Celebrate Life's <br />
              <span className="italic text-[#c9a961]">Finest Moments</span>
            </h2>

            <p className="text-gray-600 mb-12 leading-relaxed text-lg max-w-xl font-light">
              At St. Regis, we don't just host events; we curate legacies. From grand weddings to intimate private celebrations, our versatile spaces transform to meet your every desire in an atmosphere of pure luxury.
            </p>

            {/* Event Types Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 mb-12">
              {eventHighlights.map((item, index) => (
                <div key={index} className="group cursor-default">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#f5f3ee] border border-[#c9a961]/20 flex items-center justify-center group-hover:bg-[#1e3a5f] transition-all duration-500">
                      <item.icon className="w-5 h-5 text-[#c9a961] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-[#1e3a5f] font-semibold text-lg group-hover:text-[#c9a961] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed pl-14">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToContact}
              className="group relative inline-flex items-center gap-3 bg-[#1e3a5f] text-white px-10 py-5 rounded-full font-bold overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1"
            >
              <span className="relative z-10">Reserve Your Date</span>
              <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-[#c9a961] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>

          {/* Visual Side - Stays Right on Desktop */}
          <div className="order-1 lg:order-2 relative">
            {/* Elegant Border Frame */}
            <div className="absolute -inset-4 border border-[#c9a961]/20 rounded-[2rem] hidden lg:block"></div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] bg-black">
              <video
                src="/video/events.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              
              {/* Premium Floating Card (White Theme) */}
              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/90 border border-white p-8 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-[#c9a961] text-xs font-bold tracking-widest uppercase">Venue Capacity</p>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c9a961]"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c9a961]/40"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c9a961]/20"></div>
                  </div>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-[#1e3a5f]" style={{ fontFamily: 'Playfair Display, serif' }}>1,000+</span>
                  <span className="text-gray-500 text-sm font-medium uppercase tracking-tighter">Honored Guests</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Bespoke Decor</span>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">VIP Entrance</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
