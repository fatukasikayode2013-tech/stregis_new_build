'use client';

import React, { useState, useEffect } from 'react';
import { Check, Mail, Clock, Phone, Home, Bed, User, ChevronRight, MapPin, Printer } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ConfirmationPage() {
  const [details, setDetails] = useState({
    name: 'Valued Guest',
    email: 'guest@email.com',
    phone: '-',
    checkin: '-',
    checkout: '-',
    roomType: 'Luxury Suite',
    id: 'STR-RESERVING'
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setDetails({
      name: urlParams.get('name') || 'Valued Guest',
      email: urlParams.get('email') || 'guest@email.com',
      phone: urlParams.get('phone') || '-',
      checkin: urlParams.get('checkin') || '-',
      checkout: urlParams.get('checkout') || '-',
      roomType: urlParams.get('roomType') || 'Luxury Suite',
      id: `STR-${Math.random().toString(36).substr(2, 6).toUpperCase()}`
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FCFBF8]">
        {/* Header Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c9a961]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
            <div className="w-16 h-16 bg-[#c9a961] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl lg:text-7xl text-[#1e3a5f] font-serif mb-6">
              Awaiting Your <br />
              <span className="italic font-light text-[#c9a961]">Grand Arrival.</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Your reservation is confirmed. Our butler and concierge teams are already 
              preparing for your stay in Benin City.
            </p>
          </div>
        </section>

        <section className="pb-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">

              <div className="grid lg:grid-cols-12 gap-12 mb-16">
                
                {/* Main Itinerary Card */}
                <div className="lg:col-span-8 bg-white rounded-[2.5rem] shadow-[0_20px_80px_rgba(30,58,95,0.05)] border border-gray-100 p-10 lg:p-16">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 pb-10 border-b border-gray-50">
                    <div>
                      <h2 className="text-3xl text-[#1e3a5f] font-serif">Reservation Voucher</h2>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-[#c9a961] font-bold mt-2">Personal Stay Itinerary</p>
                    </div>
                    <button onClick={() => window.print()} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#c9a961] transition-colors">
                      <Printer className="w-4 h-4" /> Print Voucher
                    </button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-16">
                    {/* Guest Section */}
                    <div className="space-y-10">
                      <div>
                        <label className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold block mb-4">The Guest</label>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-[#f5f3ee] flex items-center justify-center text-[#c9a961]">
                            <User className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-xl text-[#1e3a5f] font-serif italic">{details.name}</p>
                            <p className="text-sm text-gray-500 mt-1">{details.email}</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold block mb-4">Stay Duration</label>
                        <div className="flex items-center justify-between bg-[#fcfbf8] p-6 rounded-2xl border border-gray-50">
                          <div className="text-center">
                            <p className="text-[9px] uppercase tracking-widest text-gray-400 mb-1">In</p>
                            <p className="text-[#1e3a5f] font-bold">{details.checkin}</p>
                          </div>
                          <div className="h-8 w-[1px] bg-gray-200"></div>
                          <div className="text-center">
                            <p className="text-[9px] uppercase tracking-widest text-gray-400 mb-1">Out</p>
                            <p className="text-[#1e3a5f] font-bold">{details.checkout}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Accommodation Section */}
                    <div className="space-y-10">
                      <div>
                        <label className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold block mb-4">Selected Residence</label>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-[#f5f3ee] flex items-center justify-center text-[#c9a961]">
                            <Bed className="w-5 h-5" />
                          </div>
                          <p className="text-xl text-[#1e3a5f] font-serif italic">{details.roomType}</p>
                        </div>
                      </div>

                      <div>
                        <label className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold block mb-4">Location</label>
                        <div className="flex items-start gap-4">
                          <MapPin className="w-5 h-5 text-[#c9a961] shrink-0" />
                          <p className="text-sm text-gray-500 leading-relaxed">
                            7 Osagiede Street, Oka, <br />
                            Benin City, Edo State, Nigeria
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar Info */}
                <div className="lg:col-span-4 space-y-8">
                  <div className="bg-[#1e3a5f] rounded-[2.5rem] p-10 text-white relative overflow-hidden">
                    <h3 className="text-xl font-serif mb-8 text-[#c9a961]">Concierge Assistance</h3>
                    <ul className="space-y-8">
                      <li className="flex gap-4 group">
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#c9a961] transition-colors">
                          <Clock className="w-4 h-4 text-[#c9a961]" />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest">Check-in</p>
                          <p className="text-sm text-gray-400">03:00 PM onwards</p>
                        </div>
                      </li>
                      <li className="flex gap-4 group">
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#c9a961] transition-colors">
                          <Phone className="w-4 h-4 text-[#c9a961]" />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest">Front Desk</p>
                          <p className="text-sm text-gray-400">+234 906 000 1732</p>
                        </div>
                      </li>
                    </ul>

                    <div className="mt-12 pt-8 border-t border-white/5">
                      <p className="text-[9px] uppercase tracking-[0.4em] text-gray-500">Registration ID</p>
                      <p className="text-2xl font-serif tracking-widest text-[#c9a961] mt-2 italic">{details.id}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Immersive Footer Action */}
              <div className="bg-[#1e3a5f] rounded-[3rem] overflow-hidden relative min-h-[400px] flex items-center">
                <video
                  src="/videos/pool.mp4"
                  className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale-[0.2]"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="relative z-10 p-12 lg:p-20 max-w-3xl">
                  <h2 className="text-4xl lg:text-5xl text-white font-serif mb-6 leading-tight">
                    Relaxation is <span className="italic font-light text-[#c9a961]">Our Specialty.</span>
                  </h2>
                  <p className="text-gray-300 mb-10 text-lg font-light leading-relaxed">
                    Our infinity pool and wellness spa are ready for you. If you require airport shuttle 
                    services or local tour arrangements, simply notify our concierge.
                  </p>
                  <div className="flex flex-wrap gap-6">
                    <a href="/" className="bg-[#c9a961] text-white px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#1e3a5f] transition-all">
                      Return Home
                    </a>
                    <a href="/amenities" className="flex items-center gap-3 text-white text-xs font-bold uppercase tracking-widest hover:text-[#c9a961] transition-colors">
                      Explore Services <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}