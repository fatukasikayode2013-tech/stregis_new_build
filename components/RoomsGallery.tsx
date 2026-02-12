'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function RoomsGallery() {
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);

  const rooms = [
    {
      id: 1,
      name: 'Deluxe Room',
      image: '/images/Exe Deluxe.jpeg',
      price: '$250',
      description: 'Spacious room with city view, king bed, and premium amenities',
      features: ['Free WiFi', 'Air Conditioning', 'Mini Bar', 'Work Desk']
    },
    {
      id: 2,
      name: 'Executive Suite',
      image: '/images/Exec Suite.jpeg',
      price: '$450',
      description: 'Luxurious suite with separate living area and marble bathroom',
      features: ['Butler Service', 'Spa Bath', 'Executive Lounge', 'Premium View']
    },
    {
      id: 3,
      name: 'Royal Suite',
      image: '/images/Royal Suite.jpeg',
      price: '$750',
      description: 'Ultra-luxury suite with panoramic views and personalized service',
      features: ['Concierge 24/7', 'Private Terrace', 'Jacuzzi', 'Personalized Menu']
    },
    {
      id: 4,
      name: 'Penthouse',
      image: '/images/Apartment.jpeg',
      price: '$1200',
      description: 'The crown jewel of luxury with exclusive amenities and views',
      features: ['Private Elevator', 'Full Kitchen', 'Home Theater', 'Rooftop Access']
    },
  ];

  return (
    <section id="rooms" className="py-20 md:py-32 px-4 bg-gradient-to-b from-darkBg to-darkBg/95">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              className="group cursor-pointer fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedRoom(selectedRoom === room.id ? null : room.id)}
            >
              {/* Room Card */}
              <div className="relative overflow-hidden bg-gray-900 rounded-lg hover:shadow-2xl hover:shadow-gold/30 transition-all duration-300">
                {/* Image Placeholder */}
              <div className="w-full h-64 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden relative">
                {/* Using actual room images */}
                <img 
                  src={room.image} 
                  alt={room.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="px-6 py-3 bg-gold text-darkBg font-bold hover:bg-darkGold transition-colors">
                    VIEW DETAILS
                  </button>
                </div>

                {/* Room Info */}
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-2">{room.name}</h3>
                  <p className="text-gold font-semibold mb-4">{room.price} / Night</p>
                  <p className="text-sm text-gray-400 line-clamp-2 mb-4">{room.description}</p>

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
          <button className="px-8 py-4 border-2 border-gold text-gold font-bold uppercase tracking-widest hover:bg-gold hover:text-darkBg transition-all duration-300">
            View All Rooms
          </button>
        </div>
      </div>
    </section>
  );
}
