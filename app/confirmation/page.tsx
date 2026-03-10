'use client';

import React, { useState, useEffect } from 'react';
import { Check, Mail, Clock, Phone, Home, Bed, Calendar as CalendarIcon, User, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ConfirmationPage() {
  const [name, setName] = useState('[Guest Name]');
  const [email, setEmail] = useState('[guest@email.com]');
  const [phone, setPhone] = useState('[Phone Number]');
  const [checkin, setCheckin] = useState('[Check-in Date]');
  const [checkout, setCheckout] = useState('[Check-out Date]');
  const [roomType, setRoomType] = useState('[Room Type]');
  const guests = '2'; // Default since not in form

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setName(urlParams.get('name') || '[Guest Name]');
    setEmail(urlParams.get('email') || '[guest@email.com]');
    setPhone(urlParams.get('phone') || '[Phone Number]');
    setCheckin(urlParams.get('checkin') || '[Check-in Date]');
    setCheckout(urlParams.get('checkout') || '[Check-out Date]');
    setRoomType(urlParams.get('roomType') || '[Room Type]');
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#fdfdfc]">
        {/* Hero Section */}
        <section className="pt-20 pb-12 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a961] opacity-[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

          <div className="container mx-auto px-4 lg:px-12 relative z-10 text-center">
            <div className="w-20 h-20 bg-[#c9a961] rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-[#c9a961]/20">
              <Check className="w-10 h-10 text-white" />
            </div>
            <p className="text-[#c9a961] font-semibold tracking-[0.4em] text-xs uppercase mb-4">
              Reservation Secured
            </p>
            <h1
              className="text-4xl lg:text-6xl text-[#1e3a5f] mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Welcome to <span className="italic">the St. Regis</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Your reservation has been successfully confirmed. We are preparing every detail
              to ensure your stay in Benin City is nothing short of exceptional.
            </p>
          </div>
        </section>

        <section className="pb-24">
          <div className="container mx-auto px-4 lg:px-12">
            <div className="max-w-5xl mx-auto">

              {/* Summary Grid */}
              <div className="grid lg:grid-cols-3 gap-8 mb-12">

                {/* Guest Card */}
                <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-100 shadow-sm p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-8 border-b border-gray-50 pb-6">
                    <div className="w-10 h-10 bg-[#f5f3ee] rounded-xl flex items-center justify-center">
                      <User className="w-5 h-5 text-[#c9a961]" />
                    </div>
                    <h2 className="text-2xl text-[#1e3a5f] serif" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Reservation Details
                    </h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-6">
                      <div>
                        <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block mb-2">Guest Name</label>
                        <p className="text-[#1e3a5f] font-semibold text-lg">{name}</p>
                      </div>
                      <div>
                        <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block mb-2">Contact</label>
                        <p className="text-gray-700">{email}</p>
                        <p className="text-gray-700">{phone}</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="flex gap-8">
                        <div>
                          <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block mb-2">Check-In</label>
                          <p className="text-[#1e3a5f] font-semibold">{checkin}</p>
                        </div>
                        <div>
                          <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block mb-2">Check-Out</label>
                          <p className="text-[#1e3a5f] font-semibold">{checkout}</p>
                        </div>
                      </div>
                      <div>
                        <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block mb-2">Room Assigned</label>
                        <div className="flex items-center gap-2">
                          <Bed className="w-4 h-4 text-[#c9a961]" />
                          <p className="text-[#1e3a5f] font-semibold">{roomType}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions / Highlights */}
                <div className="bg-[#1e3a5f] rounded-3xl p-8 lg:p-10 text-white flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#c9a961] opacity-10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl serif mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Important Information</h3>
                    <ul className="space-y-6">
                      <li className="flex gap-4">
                        <Clock className="w-5 h-5 text-[#c9a961] shrink-0" />
                        <div>
                          <p className="text-sm font-bold">Standard Check-in</p>
                          <p className="text-xs text-blue-100/70">3:00 PM onwards</p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <Phone className="w-5 h-5 text-[#c9a961] shrink-0" />
                        <div>
                          <p className="text-sm font-bold">Concierge Desk</p>
                          <p className="text-xs text-blue-100/70">+234 906 000 1732</p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <Mail className="w-5 h-5 text-[#c9a961] shrink-0" />
                        <div>
                          <p className="text-sm font-bold">Electronic Voucher</p>
                          <p className="text-xs text-blue-100/70">Sent to your inbox</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 text-center">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#c9a961] font-bold">Reservation ID</p>
                    <p className="text-xl font-mono tracking-widest mt-1">STR-{Math.random().toString(36).substr(2, 6).toUpperCase()}</p>
                  </div>
                </div>
              </div>

              {/* Next Steps Section */}
              <div className="grid md:grid-cols-2 gap-8 items-center bg-[#f5f3ee] rounded-[2.5rem] p-4">
                <div className="relative h-[300px] w-full overflow-hidden rounded-[2rem]">
                  <video
                    src="/videos/pool.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <h2 className="text-3xl text-[#1e3a5f] serif mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Prepare for your stay
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Our team is dedicated to personalizing your visit. If you have any special requirements
                    or would like to book a private event during your stay, please let us know.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="/"
                      className="inline-flex items-center justify-center gap-2 bg-[#1e3a5f] text-white px-8 py-4 rounded-full font-bold transition-all hover:bg-[#2a5286] group"
                    >
                      Return Home
                      <Home className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                    <a
                      href="/rooms"
                      className="inline-flex items-center justify-center gap-2 border border-[#1e3a5f] text-[#1e3a5f] px-8 py-4 rounded-full font-bold transition-all hover:bg-white"
                    >
                      View Amenities
                      <ChevronRight className="w-4 h-4" />
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