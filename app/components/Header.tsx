'use client'

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';

export default function Header() {
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

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Rooms', id: 'rooms' },
    { name: 'Amenities', id: 'amenities' },
    { name: 'Events', id: 'events' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm border-b border-gray-100' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            
            {/* Logo Group */}
            <div
              onClick={() => scrollToSection('hero')}
              className="cursor-pointer group"
            >
              <h1 
                className={`text-2xl lg:text-3xl font-serif transition-colors duration-500 ${
                  isScrolled ? 'text-[#1e3a5f]' : 'text-white'
                }`}
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                St. Regis
              </h1>
              <p className="text-[10px] text-[#c9a961] tracking-[0.3em] font-bold uppercase">
                Hotel & Resort
              </p>
            </div>

            {/* Centered Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 relative py-2 group ${
                    isScrolled ? 'text-[#1e3a5f]' : 'text-white'
                  }`}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#c9a961] transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </button>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-6">
              <a 
                href="tel:09060001732" 
                className={`hidden xl:flex items-center gap-2 text-[11px] font-bold tracking-widest transition-colors duration-500 ${
                  isScrolled ? 'text-[#1e3a5f]' : 'text-white'
                }`}
              >
                <Phone className="w-3.5 h-3.5 text-[#c9a961]" />
                0906 000 1732
              </a>
              
              <button
                onClick={() => scrollToSection('contact')}
                className={`hidden sm:flex items-center gap-2 px-8 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-500 border ${
                  isScrolled 
                    ? 'bg-[#1e3a5f] border-[#1e3a5f] text-white hover:bg-transparent hover:text-[#1e3a5f]' 
                    : 'bg-white border-white text-[#1e3a5f] hover:bg-transparent hover:text-white'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                Reserve
              </button>

              {/* Mobile Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden transition-colors ${isScrolled ? 'text-[#1e3a5f]' : 'text-white'}`}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Luxury Full-Screen Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[110] bg-[#1e3a5f] transition-transform duration-700 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-16">
            <span className="text-white font-serif text-xl italic">St. Regis</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2">
              <X size={32} />
            </button>
          </div>
          <nav className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left text-white text-4xl font-serif hover:text-[#c9a961] transition-colors"
              >
                {link.name}
              </button>
            ))}
          </nav>
          <div className="mt-auto pt-12 border-t border-white/10">
            <p className="text-[#c9a961] text-xs tracking-widest uppercase mb-4 font-bold">Inquiries</p>
            <a href="tel:09060001732" className="text-white text-2xl">0906 000 1732</a>
          </div>
        </div>
      </div>
    </>
  );
}