'use client'

import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0f1f35] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img src="/logo.png" alt="St Regis Logo" className="h-12 w-auto" />
              <div>
                <h3 className="text-3xl font-serif" style={{ fontFamily: 'Playfair Display, serif' }}>
                  St. Regis
                </h3>
                <p className="text-[#c9a961] text-sm tracking-widest">HOTEL & RESORT</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Experience unparalleled luxury and sophistication at St Regis Hotel and Resort. Your destination for world-class hospitality.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#c9a961] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#c9a961] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/stregisHotelB"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#c9a961] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@st.regishotelsbenincity4482"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#c9a961] transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#c9a961] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-400 hover:text-[#c9a961] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-[#c9a961] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('rooms')}
                  className="text-gray-400 hover:text-[#c9a961] transition-colors"
                >
                  Rooms & Suites
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('amenities')}
                  className="text-gray-400 hover:text-[#c9a961] transition-colors"
                >
                  Amenities
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-400 hover:text-[#c9a961] transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('events')}
                  className="text-gray-400 hover:text-[#c9a961] transition-colors"
                >
                  Events
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-[#c9a961] transition-colors"
                >
                  Book A Stay
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-start-3">
            <h4 className="text-xl mb-6 text-white">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-[#c9a961] flex-shrink-0 mt-1" />
                <p className="text-gray-400 text-sm">
                  7 Osagiede Street, Oka, Benin City, Edo State, Nigeria
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-[#c9a961] flex-shrink-0" />
                <a href="tel:09060001732" className="text-gray-400 hover:text-[#c9a961] transition-colors">
                  0906 000 1732
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-[#c9a961] flex-shrink-0" />
                <div className="flex flex-col space-y-1">
                  <a href="mailto:info@stregishotelandresort.com" className="text-gray-400 text-sm sm:text-base hover:text-[#c9a961] transition-colors truncate max-w-[260px] sm:max-w-full">
                    info@stregishotelandresort.com
                  </a>
                  <a href="mailto:reservations@stregishotelandresort.com" className="text-gray-400 text-sm sm:text-base hover:text-[#c9a961] transition-colors truncate max-w-[260px] sm:max-w-full">
                    reservations@stregishotelandresort.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xl mb-6 text-white">Hours</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Reception: 24/7</li>
              <li>Restaurant: 6 AM - 11 PM</li>
              <li>Pool: 6 AM - 8 PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 St. Regis Hotel & Resort. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#c9a961] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#c9a961] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
