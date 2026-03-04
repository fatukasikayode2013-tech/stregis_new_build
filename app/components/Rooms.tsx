'use client'

import { Users, Maximize } from 'lucide-react';

export default function Rooms() {
  const rooms = [
    {
      name: 'Standard Room',
      images: ['/pics/Standard Deluxe.jpeg'],
      description: 'Standard Room (15×12ft)',
      size: '15×12 ft',
      occupancy: '2 Guests',
      price: '₦40,000',
    },
    {
      name: 'Executive Room',
      images: ['/pics/Executive Room.jpeg'],
      description: 'Executive Room (18×12ft)',
      size: '18×12 ft',
      occupancy: '2 Guests',
      price: '₦55,000',
    },
    {
      name: 'Executive Deluxe',
      images: ['/pics/Executive deluxe.jpg.jpeg'],
      description: 'Executive Deluxe (18×14ft)',
      size: '18×14 ft',
      occupancy: '2-3 Guests',
      price: '₦65,000',
    },
    {
      name: 'Executive Suite',
      images: ['/pics/IMG-20260214-WA0277.jpg.jpeg'],
      description: 'Executive Suite (20×15ft)',
      size: '20×15 ft',
      occupancy: '3 Guests',
      price: '₦90,000',
    },
    {
      name: 'Royal Suite',
      images: ['/pics/Royal Room.jpeg', '/pics/Royal Suite.jpeg'],
      description: 'Royal Suite (Room and Parlour)',
      size: 'spacious',
      occupancy: '4 Guests',
      price: '₦100,000',
    },
    {
      name: 'Apartment',
      images: ['/pics/Apartment.jpeg', '/pics/IMG-20260206-WA0292.jpg.jpeg'],
      description: 'Full apartment with kitchen, oven, microwave, washing machine, full house settings',
      size: 'full apartment',
      occupancy: '6 Guests',
      price: '₦160,000',
    },
    {
      name: 'Presidential Suite',
      images: ['/pics/IMG-20260206-WA0293.jpg.jpeg', '/pics/IMG-20260206-WA0294.jpg.jpeg', '/pics/IMG-20260206-WA0297.jpg.jpeg'],
      description: 'Presidential Suite (Full presidential setting)',
      size: 'luxury suite',
      occupancy: '6+ Guests',
      price: '₦350,000',
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="rooms" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a961] tracking-widest mb-4">ACCOMMODATIONS</p>
          <h2
            className="text-4xl lg:text-5xl text-[#1e3a5f] mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Our Rooms & Suites
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Choose from our selection of beautifully appointed rooms, each designed to provide the ultimate comfort and relaxation.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.images ? room.images[0] : room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#c9a961] text-white px-4 py-2 rounded-lg flex flex-col items-end">
                  <p className="text-sm">From</p>
                  <p className="text-xl font-semibold">{room.price}</p>
                  <p className="text-xs">per night</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-2xl text-[#1e3a5f] mb-3"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {room.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {room.description}
                </p>
                {room.images && room.images.length > 1 && (
                  <p className="text-xs text-gray-500">
                    {room.images.length} photos available
                  </p>
                )}
                </div>

                {/* Book Button */}
                <button
                  onClick={scrollToContact}
                  className="w-full bg-[#1e3a5f] text-white py-3 rounded-lg hover:bg-[#2d5080] transition-colors"
                >
                  Book Now
                </button>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}
