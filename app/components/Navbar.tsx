'use client'

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-md py-4'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="cursor-pointer flex items-center gap-2" onClick={() => scrollToSection('hero')}>
            <img src="/logo.png" alt="St Regis Logo" className="h-8 w-auto" />
            <div>
              <h1 className="text-2xl lg:text-3xl font-serif text-[#1e3a5f]" style={{ fontFamily: 'Playfair Display, serif' }}>
                St. Regis
              </h1>
              <p className="text-xs text-[#c9a961] tracking-widest">HOTEL & RESORT</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="text-[#1e3a5f] hover:text-[#c9a961] transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('rooms')} className="text-[#1e3a5f] hover:text-[#c9a961] transition-colors">
              Rooms
            </button>
            <button onClick={() => scrollToSection('amenities')} className="text-[#1e3a5f] hover:text-[#c9a961] transition-colors">
              Amenities
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-[#1e3a5f] hover:text-[#c9a961] transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection('events')} className="text-[#1e3a5f] hover:text-[#c9a961] transition-colors">
              Events
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-[#1e3a5f] hover:text-[#c9a961] transition-colors">
              Contact
            </button>
          </nav>

          {/* Phone Number & Book Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:09060001732" className="flex items-center gap-2 text-[#1e3a5f]">
              <Phone className="w-4 h-4" />
              <span>0906 000 1732</span>
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#c9a961] text-white px-6 py-2.5 rounded-lg hover:bg-[#b89851] transition-all hover:shadow-lg"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[#1e3a5f]"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <nav className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('about')} className="text-left text-[#1e3a5f] hover:text-[#c9a961]">
                About
              </button>
              <button onClick={() => scrollToSection('rooms')} className="text-left text-[#1e3a5f] hover:text-[#c9a961]">
                Rooms
              </button>
              <button onClick={() => scrollToSection('amenities')} className="text-left text-[#1e3a5f] hover:text-[#c9a961]">
                Amenities
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-left text-[#1e3a5f] hover:text-[#c9a961]">
                Gallery
              </button>
              <button onClick={() => scrollToSection('events')} className="text-left text-[#1e3a5f] hover:text-[#c9a961]">
                Events
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-[#1e3a5f] hover:text-[#c9a961]">
                Contact
              </button>
              <a href="tel:09060001732" className="flex items-center gap-2 text-[#1e3a5f]">
                <Phone className="w-4 h-4" />
                <span>0906 000 1732</span>
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-[#c9a961] text-white px-6 py-2.5 rounded-lg hover:bg-[#b89851] transition-all text-left"
              >
                Book Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
