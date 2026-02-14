'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-300 ${
        scrolled ? 'navbar-scrolled' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="St Regis Logo" width={56} height={56} className="object-contain rounded-md" />
            <span className={`text-2xl font-serif font-bold ${scrolled ? 'text-textPrimary' : 'text-textPrimary'}`}>
              ST <span className="gold-text">REGIS</span>
            </span>
          </Link>

          {/* Menu Items */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-semibold hover:transition-colors duration-300 ${
                scrolled ? 'text-textPrimary hover:text-gold' : 'text-textPrimary hover:text-gold'
              }`}
            >
              HOME
            </Link>
            <Link
              href="/rooms"
              className={`text-sm font-semibold hover:transition-colors duration-300 ${
                scrolled ? 'text-textPrimary hover:text-gold' : 'text-textPrimary hover:text-gold'
              }`}
            >
              ROOMS
            </Link>
            <Link
              href="/amenities"
              className={`text-sm font-semibold hover:transition-colors duration-300 ${
                scrolled ? 'text-textPrimary hover:text-gold' : 'text-textPrimary hover:text-gold'
              }`}
            >
              AMENITIES
            </Link>
            <Link
              href="/promo"
              className={`text-sm font-semibold hover:transition-colors duration-300 ${
                scrolled ? 'text-textPrimary hover:text-gold' : 'text-textPrimary hover:text-gold'
              }`}
            >
              OFFERS
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            {/* Book Now Button */}
            <Link
              href="/contact"
              className={`$${
                scrolled
                  ? 'bg-gold text-textPrimary hover:bg-darkGold'
                  : 'bg-transparent border border-gold text-gold hover:bg-gold hover:text-textPrimary'
              } px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest transition-all duration-300 text-center`}
            >
              BOOK NOW
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
