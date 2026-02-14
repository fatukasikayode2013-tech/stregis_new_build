"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { rooms as roomList, formatPrice } from '@/lib/rooms';

export default function RoomsGallery() {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  return (
    <section id="rooms" className="py-20 md:py-32 px-4 bg-gradient-to-b from-lightBg to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-6xl font-serif tracking-wider mb-4">
            OUR <span className="gold-text">ROOMS</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience unparalleled comfort in our meticulously designed accommodations
          </p>
        </div>

        {/* Room Grid */}
        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roomList.map((room, index) => (
            <div
              key={room.id}
              className="group cursor-pointer fade-in-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {/* Room Card */}
              <div className="relative overflow-hidden bg-white rounded-lg hover:shadow-2xl hover:shadow-gold/10 transition-all duration-300">
                <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-white flex items-center justify-center overflow-hidden relative">
                  <Image
                    src={`/images/${room.image}`}
                    alt={room.name}
                    width={1200}
                    height={720}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link href={`/rooms/${room.slug}`} className="px-6 py-3 bg-gold text-textPrimary font-bold hover:bg-darkGold transition-colors">
                    VIEW DETAILS
                  </Link>
                </div>

                {/* Room Info */}
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-2">{room.name}</h3>
                  <p className="text-gold font-semibold mb-4">{formatPrice(room.price)} / Night</p>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4">{room.description}</p>
                  {/* Expandable Details */}
                  {selectedRoom === room.id && (
                    <div className="mt-4 pt-4 border-t border-gray-700 space-y-2">
                      {room.features.map((feature, idx) => (
                        <p key={idx} className="text-xs text-gray-300 flex items-center gap-2">
                          <span className="text-gold">✓</span>
                          {feature}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Link href="/rooms" className="px-8 py-4 border-2 border-gold text-gold font-bold uppercase tracking-widest hover:bg-gold hover:text-textPrimary transition-all duration-300 inline-block hover:scale-105 hover:shadow-lg hover:shadow-gold/50">
            View All Rooms
          </Link>
        </div>
      </div>
    </section>
  );
}
