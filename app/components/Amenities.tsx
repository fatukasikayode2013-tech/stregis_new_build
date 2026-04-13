'use client';

import { motion } from 'framer-motion';
import {
  Wifi,
  Coffee,
  Dumbbell,
  Car,
  UtensilsCrossed,
  Waves,
  Shield,
  Clock,
} from 'lucide-react';
import { Reveal } from './Reveal';

const amenities = [
  {
    icon: Wifi,
    title: 'High-Speed WiFi',
    description: 'Complimentary high-speed internet throughout the property',
  },
  {
    icon: UtensilsCrossed,
    title: 'Fine Dining',
    description: 'World-class restaurant with international cuisine',
  },
  {
    icon: Dumbbell,
    title: 'Fitness Center',
    description: 'State-of-the-art gym with modern equipment',
  },
  {
    icon: Waves,
    title: 'Swimming Pool',
    description: 'Temperature-controlled outdoor pool',
  },
  {
    icon: Car,
    title: 'Valet Parking',
    description: '24/7 secure valet parking service',
  },
  {
    icon: Shield,
    title: '24/7 Security',
    description: 'Round-the-clock security for your peace of mind',
  },
  {
    icon: Clock,
    title: 'Room Service',
    description: '24-hour in-room dining available',
  },
  {
    icon: Coffee,
    title: 'Lounge Bar',
    description: 'Premium selection of wines and spirits',
  },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-32 bg-white relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #c9a961 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold block mb-6">
              Premium Features
            </span>
            <h2 className="text-5xl lg:text-6xl font-serif text-navy-900 mb-8">
              World-Class{' '}
              <span className="italic text-gold">Amenities</span>
            </h2>
            <div className="w-24 h-0.5 bg-gold mx-auto mb-8" />
            <p className="text-gray-600 text-lg leading-relaxed">
              Every detail has been carefully curated to ensure your stay is
              nothing short of extraordinary. From premium facilities to
              personalized services, we offer everything you need for a
              luxurious experience.
            </p>
          </div>
        </Reveal>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <motion.div
                className="group relative p-8 bg-cream rounded-2xl border border-transparent hover:border-gold/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                whileHover={{ y: -8 }}
              >
                {/* Icon container */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold/10 to-gold/5 flex items-center justify-center group-hover:from-gold/20 group-hover:to-gold/10 transition-all duration-500">
                    <amenity.icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
                  </div>
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-full bg-gold/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-serif text-navy-900 mb-3 group-hover:text-gold transition-colors">
                  {amenity.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {amenity.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path
                      d="M50 0 L100 0 L100 50"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className="text-gold"
                    />
                  </svg>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal>
          <div className="mt-20 text-center">
            <motion.div
              className="inline-flex items-center gap-4 px-8 py-4 bg-navy-900 text-white rounded-full"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-sm uppercase tracking-widest">
                Experience All Amenities
              </span>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}