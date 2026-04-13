'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#rooms', label: 'Rooms' },
  { href: '#amenities', label: 'Amenities' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#events', label: 'Events' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = useCallback((href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  }, []);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section
      const sections = navLinks.map((link) => link.href.substring(1));
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
            break;
          }
        }
      }
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-gradient-to-b from-black/60 to-transparent py-6'
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('#hero')}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="St Regis Hotel and Resort"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div
            className={`hidden md:block transition-all duration-300 ${
              isScrolled ? 'text-navy-900' : 'text-white'
            }`}
          >
            <span className="block text-xs font-bold uppercase tracking-widest">
              St. Regis
            </span>
            <span className="block text-[10px] uppercase tracking-wider opacity-80">
              Hotel & Resort
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className={`text-sm font-medium uppercase tracking-wide transition-all duration-300 relative group ${
                isScrolled ? 'text-navy-900' : 'text-white/90'
              } ${
                activeSection === link.href.substring(1)
                  ? 'text-gold font-semibold'
                  : 'hover:text-gold'
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-2 left-0 h-0.5 bg-gold transition-all duration-300 ${
                  activeSection === link.href.substring(1)
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                }`}
              />
            </button>
          ))}
          <button
            onClick={() => scrollToSection('#contact')}
            className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 transform hover:scale-105 ${
              isScrolled
                ? 'bg-navy-900 text-white hover:bg-gold hover:shadow-gold'
                : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-gold hover:border-gold'
            }`}
          >
            Book Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 rounded-full transition-all duration-300 ${
            isScrolled
              ? 'text-navy-900 hover:bg-gray-100'
              : 'text-white hover:bg-white/20'
          }`}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-white transition-all duration-500 ${
          isMobileMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full px-6">
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link, index) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-2xl font-serif font-medium text-navy-900 transition-all duration-500 hover:text-gold ${
                  isMobileMenuOpen
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 50 + 200}ms`,
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="mt-8 px-8 py-4 bg-gold text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-navy-900 transition-colors duration-300 shadow-lg hover:shadow-gold"
            >
              Book Your Stay
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}