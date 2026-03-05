'use client'

import Image from 'next/image';
import { MapPin, Users, Award, Briefcase } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: MapPin,
      title: 'Prime Location',
      description: 'Strategically located in the heart of Benin City',
    },
    {
      icon: Award,
      title: 'Comfortable Rooms',
      description: 'Elegantly designed rooms with modern amenities',
    },
    {
      icon: Users,
      title: 'Professional Service',
      description: 'Dedicated team committed to excellence',
    },
    {
      icon: Briefcase,
      title: 'Business & Leisure',
      description: 'Perfect for both corporate and vacation stays',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#f5f3ee] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#c9a961] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#1e3a5f] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative w-full h-[500px]">
              {/* Floating Badge */}
              <div className="absolute top-4 left-4 bg-[#c9a961] text-white px-4 py-2 rounded-lg shadow-lg z-20">
                <span className="text-sm font-semibold">15+ Years</span>
              </div>
              {/* Thick white border */}
              <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl p-2">
                <Image
                  src="/images/IMG-20260214-WA0260.jpg.jpeg"
                  alt="Hotel Lobby"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-[#c9a961] tracking-widest mb-4">WELCOME TO ST. REGIS</p>
            <h2
              className="text-5xl lg:text-6xl text-[#1e3a5f] mb-6 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Where Luxury Meets <span className="text-[#c9a961] italic">Nigerian Hospitality</span>
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              Nestled in the vibrant city of Benin, St. Regis Hotel & Resort offers a perfect blend of elegance and comfort. Our commitment to excellence ensures every guest experiences the finest in Nigerian hospitality.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              Whether you're visiting for business or leisure, our carefully curated amenities, exceptional service, and prime location make us the ideal choice for discerning travelers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#c9a961] group-hover:bg-[#1e3a5f] rounded-lg flex items-center justify-center transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[#1e3a5f] mb-1 font-semibold">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="bg-[#c9a961] hover:bg-[#1e3a5f] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
