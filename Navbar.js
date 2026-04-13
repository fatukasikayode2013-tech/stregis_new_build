import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  const navLinks = [
    { name: 'Rooms', path: '/rooms' },
    { name: 'Dining', path: '/dining' },
    { name: 'Experience', path: '/experience' },
    { name: 'Offers', path: '/offers' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setIsOpen(false), [router.asPath]);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        {/* Logo - Serif font for luxury feel */}
        <div className="text-2xl font-serif tracking-[0.3em] uppercase">
          <Link href="/" aria-label="Home">ST. REGIS</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-12 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path}
              className={`text-[11px] uppercase tracking-[0.2em] transition-all duration-300 relative group ${
                router.pathname === link.path ? 'text-stone-900' : 'text-stone-500 hover:text-stone-900'
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-stone-900 transition-all duration-500 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* CTA and Mobile Toggle */}
        <div className="flex items-center space-x-8">
          <Link 
            href="/booking"
            className="hidden sm:block px-8 py-3 bg-stone-900 text-white text-[10px] uppercase tracking-[0.3em] hover:bg-stone-800 transition-all duration-500"
          >
            Reserve Now
          </Link>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-stone-900 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-px bg-current mb-1.5"></div>
            <div className="w-6 h-px bg-current"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-700 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path}
              className="text-xl font-serif uppercase tracking-widest text-stone-800"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/booking" className="mt-4 text-sm tracking-[0.2em] underline">Reserve Now</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;