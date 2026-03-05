'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Users, Maximize, ArrowRight } from 'lucide-react';

export default function Rooms() {
  type Room = {
    name: string;
    images: string[];
    description: string;
    size: string;
    occupancy: string;
    price: string;
  };

  const rooms: Room[] = [
    {
      name: 'Standard Room',
      images: ['/images/Standard 1.jpg', '/images/Standard 2.jpg', '/images/Standard 3.jpg', '/images/Standard 4.jpg'],
      description: 'The perfect blend of functionality and classic comfort, featuring premium bedding.',
      size: '15×12 ft',
      occupancy: '2 Guests',
      price: '₦40,000',
    },
    {
      name: 'Executive Room',
      images: ['/images/Executive Room.jpeg'],
      description: 'Enhanced space designed for the modern business traveler requiring extra workspace.',
      size: '18×12 ft',
      occupancy: '2 Guests',
      price: '₦55,000',
    },
    {
      name: 'Executive Deluxe',
      images: ['/images/Executive deluxe.jpg.jpeg'],
      description: 'Executive Deluxe (18×14ft)',
      size: '18×14 ft',
      occupancy: '2 Guests',
      price: '₦65,000',
    },
    {
      name: 'Executive Suite',
      images: ['/images/IMG-20260214-WA0277.jpg.jpeg'],
      description: 'A higher tier of luxury featuring a dedicated lounge area and premium finishes.',
      size: '20×15 ft',
      occupancy: '2 Guests',
      price: '₦90,000',
    },
    {
      name: 'Royal Suite',
      images: ['/images/Royal Room.jpeg', '/images/Royal Suite.jpeg'],
      description: 'Royal Suite (Room and Parlour)',
      size: 'spacious',
      occupancy: '2 Guests',
      price: '₦100,000',
    },
    {
      name: 'Apartment',
      images: ['/images/Apartment.jpeg', '/images/IMG-20260206-WA0292.jpg.jpeg'],
      description: 'Full apartment with kitchen, oven, microwave, washing machine, full house settings',
      size: 'full apartment',
      occupancy: '2-3 Guests',
      price: '₦160,000',
    },
    {
      name: 'Presidential Suite',
      images: ['/images/Presidential bed.jpeg','/images/IMG-20260206-WA0297.jpg.jpeg','/images/presidential.jpeg'],
      description: 'The pinnacle of St. Regis luxury. Unparalleled space with bespoke VIP services.',
      size: 'luxury suite',
      occupancy: '2-3 Guests',
      price: '₦350,000',
    },
  ];

  function RoomCard({ room }: { room: Room }) {
    const [idx, setIdx] = useState(0);

    useEffect(() => {
      if (!room.images || room.images.length <= 1) return;
      const t = setInterval(() => setIdx((i) => (i + 1) % room.images.length), 4000);
      return () => clearInterval(t);
    }, [room.images]);

    const prev = () => setIdx((i) => (i - 1 + room.images.length) % room.images.length);
    const next = () => setIdx((i) => (i + 1) % room.images.length);

    return (
      <div className="relative aspect-[4/5] overflow-hidden rounded-t-2xl group">
        <Image
          src={room.images[idx]}
          alt={`${room.name} image ${idx + 1}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
          {room.images.slice(0, 3).map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full ${i === (idx % 3) ? 'w-6 bg-[#c9a961]' : 'w-2 bg-white/50'}`}
            />
          ))}
        </div>
        {room.images.length > 1 && (
          <>
            <div className="absolute inset-y-0 left-2 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={prev} className="bg-black/30 text-white p-2 rounded-full hover:bg-black/50 nav-btn">
                ‹
              </button>
            </div>
            <div className="absolute inset-y-0 right-2 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={next} className="bg-black/30 text-white p-2 rounded-full hover:bg-black/50 nav-btn">
                ›
              </button>
            </div>
          </>
        )}
      </div>
    );
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="rooms" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[1px] bg-[#c9a961]"></div>
              <p className="text-[#c9a961] font-semibold tracking-[0.2em] text-xs uppercase">Accommodations</p>
            </div>
            <h2
              className="text-4xl lg:text-6xl text-[#1e3a5f] mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Exquisite Rooms <br />& Luxury Suites
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-lg leading-relaxed">
            Every room at St. Regis is a sanctuary of refined elegance, crafted to provide an unparalleled sleep experience.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="group flex flex-col bg-white border border-gray-100 rounded-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(30,58,95,0.1)] room-card"
            >
              {/* Image */}
              <RoomCard room={room} />

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3
                  className="text-2xl text-[#1e3a5f] mb-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {room.name}
                </h3>
                <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed">
                  {room.description}
                </p>
                <div className="flex items-center gap-4 py-4 border-y border-gray-50 mb-6 text-xs text-gray-400 font-medium">
                  <div className="flex items-center gap-1">
                    <Maximize className="w-3 h-3" />
                    <span>{room.size}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    <span>{room.occupancy}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-gray-400 block mb-1">Per Night</span>
                    <span className="text-2xl font-bold text-[#1e3a5f]">{room.price}</span>
                  </div>
                  <button
                    onClick={scrollToContact}
                    className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white transition-all"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
