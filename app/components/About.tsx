'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Reveal } from './Reveal';

export default function About() {
  return (
    <section id="about" className="py-32 bg-cream relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image Side */}
          <Reveal direction="left">
            <div className="relative">
              {/* Main image with frame */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/presidential.jpeg"
                  alt="St. Regis Hotel Interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Decorative frame */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-r-2 border-b-2 border-gold/30 rounded-br-3xl" />
              <div className="absolute -top-6 -left-6 w-48 h-48 border-l-2 border-t-2 border-gold/30 rounded-tl-3xl" />

              {/* Experience badge */}
              <div className="absolute -bottom-4 -right-4 bg-white p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <span className="block text-4xl font-serif text-gold">20+</span>
                  <span className="text-xs uppercase tracking-widest text-navy-900">
                    Years of Excellence
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Content Side */}
          <Reveal direction="right">
            <div className="lg:pl-12">
              {/* Section label */}
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold block mb-6">
                Our Story
              </span>

              {/* Title */}
              <h2 className="text-5xl lg:text-6xl font-serif text-navy-900 mb-8 leading-tight">
                A Legacy of{' '}
                <span className="italic text-gold">Excellence</span>
              </h2>

              {/* Divider */}
              <div className="w-20 h-0.5 bg-gold mb-8" />

              {/* Description paragraphs */}
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Nestled in the heart of Benin City, St. Regis Hotel and Resort
                  stands as a beacon of luxury and sophistication. Our
                  establishment combines timeless elegance with modern amenities
                  to create an unparalleled hospitality experience.
                </p>
                <p>
                  Every corner of our hotel tells a story of refined taste and
                  attention to detail. From the moment you step through our
                  doors, you&apos;ll be enveloped in an atmosphere of grace and
                  tranquility, where every need is anticipated and every desire
                  is catered to with discretion and care.
                </p>
                <p>
                  Our commitment to excellence extends beyond luxurious
                  accommodations. We pride ourselves on offering world-class
                  dining experiences, rejuvenating spa treatments, and
                  impeccable service that has become the hallmark of the St.
                  Regis name.
                </p>
              </div>

              {/* Features list */}
              <div className="mt-12 grid grid-cols-2 gap-6">
                {[
                  '24/7 Concierge Service',
                  'Fine Dining Restaurant',
                  'Luxury Spa & Wellness',
                  'Event & Conference Facilities',
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-gold rounded-full" />
                    <span className="text-sm text-navy-900 font-medium">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                className="mt-12"
                whileHover={{ x: 5 }}
              >
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 text-gold font-medium uppercase tracking-widest text-sm hover:text-navy-900 transition-colors"
                >
                  Discover More
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
                </a>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}