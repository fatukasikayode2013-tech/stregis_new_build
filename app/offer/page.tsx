import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Special Offer - St. Regis',
  description: 'Exclusive offers and promotions at St. Regis Hotel & Resort',
};

export default function OfferPage() {
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
          <div className="relative w-full">
            <img
              src="/images/offer.jpeg"
              alt="Special Offer"
              className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
            />
            <span className="absolute top-3 right-3 bg-[#c9a961] text-white px-3 py-1 rounded-full text-sm font-semibold">Active</span>
          </div>

          <div>
            <h2 className="text-2xl text-[#1e3a5f] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Limited Time: Bikini Pool Party Offer
            </h2>
            <p className="text-gray-700 mb-4">
              Enjoy exclusive discounts, complimentary welcome drinks, and priority booking when you reserve during our promotional period. This offer applies to room bookings and event packages booked through our reservations desk.
            </p>

            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Discounted room rates for single, couple, and group bookings</li>
              <li>Complimentary late checkout (subject to availability)</li>
              <li>Priority access to poolside events and VIP seating</li>
            </ul>

            <div className="mt-6">
              <a href="#contact" className="inline-block bg-[#c9a961] text-white px-6 py-3 rounded-lg hover:bg-[#b89851]">Book Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
      <Footer />
    </>
  );
}
