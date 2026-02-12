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
            <span className={`text-2xl font-serif font-bold ${scrolled ? 'text-darkBg' : 'text-white'}`}>
              ST <span className="gold-text">REGIS</span>
            </span>
          </Link>

          {/* Menu Items */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#home"
              className={`text-sm font-semibold hover:transition-colors duration-300 ${
                scrolled ? 'text-darkBg hover:text-gold' : 'text-white hover:text-gold'
              }`}
            >
              HOME
            </Link>
            <Link
              href="#rooms"
              className={`text-sm font-semibold hover:transition-colors duration-300 ${
                scrolled ? 'text-darkBg hover:text-gold' : 'text-white hover:text-gold'
              }`}
            >
              ROOMS
            </Link>
            <Link
              href="#amenities"
              className={`text-sm font-semibold hover:transition-colors duration-300 ${
                scrolled ? 'text-darkBg hover:text-gold' : 'text-white hover:text-gold'
              }`}
            >
              AMENITIES
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            {/* Special Promo Badge */}
            <div className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-full ${
              scrolled ? 'bg-gradient-to-r from-gold to-darkGold' : 'bg-gold/20 border border-gold'
            }`}>
              <span className={`text-xs font-bold uppercase tracking-widest ${
                scrolled ? 'text-white' : 'text-gold'
              }`}>
                ✨ 20% OFF
              </span>
            </div>

            {/* Book Now Button */}
            <button className={`${
              scrolled
                ? 'bg-gold text-darkBg hover:bg-darkGold'
                : 'bg-transparent border border-gold text-gold hover:bg-gold hover:text-darkBg'
            } px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest transition-all duration-300`}>
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
