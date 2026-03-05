'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function OfferPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['/images/offer.jpeg', '/images/offer_a.jpeg'];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      <Navbar />
      <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#c9a961] tracking-widest mb-2">SPECIAL</p>
          <h1 className="text-4xl lg:text-5xl text-[#1e3a5f] font-serif" style={{ fontFamily: 'Playfair Display, serif' }}>
            Current Offer
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative w-full aspect-[4/3] group">
            <Image
              src={images[currentImage]}
              alt="Special Offer"
              fill
              className="object-cover rounded-2xl shadow-lg transition-opacity duration-500"
            />
            <span className="absolute top-3 right-3 bg-[#c9a961] text-white px-3 py-1 rounded-full text-sm font-semibold">Active</span>
            
            {/* Navigation buttons */}
            <button 
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              ‹
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              ›
            </button>
            
            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImage ? 'bg-[#c9a961] w-6' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl text-[#1e3a5f] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Limited Time: Bikini Pool Party Offer
            </h2>
            <p className="text-gray-700 mb-4">
              Enjoy exclusive discounts, complimentary welcome drinks, and priority booking when you reserve during our promotional period. This offer applies to room bookings and event packages booked through our reservations desk.
            </p>
            <p className="text-gray-500 text-sm">
              <strong>Offer date:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Discounted room rates for single, couple, and group bookings</li>
              <li>Complimentary late checkout (subject to availability)</li>
              <li>Priority access to poolside events and VIP seating</li>
            </ul>

            <div className="mt-6">
              <a href="/#contact" className="inline-block bg-[#c9a961] text-white px-6 py-3 rounded-lg hover:bg-[#b89851]">Book Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
      <Footer />
    </>
  );
}
