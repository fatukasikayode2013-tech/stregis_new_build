'use client'

import { Wifi, Car, Clock, UtensilsCrossed, Users, ShoppingBag, Shield, Coffee } from 'lucide-react';

export default function Amenities() {
  const amenities = [
    {
      icon: Wifi,
      title: 'Free Wi-Fi',
      description: 'High-speed internet throughout the property',
    },
    {
      icon: Car,
      title: 'Free Parking',
      description: 'Secure parking facility for all guests',
    },
    {
      icon: Clock,
      title: '24/7 Front Desk',
      description: 'Round-the-clock assistance and support',
    },
    {
      icon: UtensilsCrossed,
      title: 'Restaurant & Bar',
      description: 'Fine dining and refreshing beverages',
    },
    {
      icon: Users,
      title: 'Event Hall',
      description: 'Perfect venue for special occasions',
    },
    {
      icon: ShoppingBag,
      title: 'Room Service',
      description: 'In-room dining available 24/7',
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Professional security services',
    },
    {
      icon: Coffee,
      title: 'Breakfast',
      description: 'Complimentary breakfast buffet',
    },
  ];

  return (
    <section id="amenities" className="py-20 lg:py-28 bg-[#1e3a5f]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a961] tracking-widest mb-4">FACILITIES & SERVICES</p>
          <h2
            className="text-4xl lg:text-5xl text-white mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            World-Class Amenities
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Experience exceptional comfort with our comprehensive range of facilities and services designed for your convenience.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-[#c9a961] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <amenity.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl text-white mb-3">{amenity.title}</h3>
              <p className="text-gray-300 text-sm">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
