 'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gold/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 text-textPrimary">
          {/* About Section */}
          <div className="fade-in-up">
            <div className="flex items-center gap-4 mb-4">
              <img src="/logo.png" alt="St Regis Logo" className="w-14 h-14 object-contain rounded-md" />
              <h3 className="text-2xl font-serif font-bold">
                ST<span className="gold-text"> REGIS</span>
              </h3>
            </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Experience unparalleled luxury and sophistication at St Regis Hotel and Resort. Your destination for world-class hospitality.
            </p>
            {/* Social Media Links */}
              <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gold hover:text-textPrimary transition-all duration-300 text-gold"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gold hover:text-textPrimary transition-all duration-300 text-gold"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gold hover:text-textPrimary transition-all duration-300 text-gold"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gold hover:text-textPrimary transition-all duration-300 text-gold"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gold hover:text-textPrimary transition-all duration-300 text-gold"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-lg font-serif font-bold mb-6 gold-text">QUICK LINKS</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#home" className="hover:text-gold transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-gold transition-colors duration-300">
                  Rooms & Suites
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-gold transition-colors duration-300">
                  Amenities
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold transition-colors duration-300">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors duration-300">
                  Book A Stay
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-serif font-bold mb-6 gold-text">CONTACT</h4>
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex gap-3">
                <i className="fas fa-map-marker-alt text-gold mt-1"></i>
                <div>
                  <p className="text-white font-semibold mb-1">Address</p>
                  <p className="leading-relaxed">
                    7 Osagiede St, Oka<br />
                    Benin City 300102, Edo
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <i className="fas fa-phone text-gold mt-1"></i>
                <div>
                  <p className="text-white font-semibold mb-1">Phone</p>
                  <a href="tel:+234906000173" className="hover:text-gold transition-colors">
                    +234 906 000 1732
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <i className="fas fa-envelope text-gold mt-1"></i>
                <div>
                  <p className="text-white font-semibold mb-1">Email</p>
                  <div className="space-y-1">
                    <a href="mailto:info@stregishotelandresort.com" className="hover:text-gold transition-colors block">
                      info@stregishotelandresort.com
                    </a>
                    <a href="mailto:reservations@stregishotelandresort.com" className="hover:text-gold transition-colors block">
                      reservations@stregishotelandresort.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-lg font-serif font-bold mb-6 gold-text">HOURS</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex justify-between items-center">
                <span>Reception</span>
                <span className="text-gold">24/7</span>
              </div>
              <div className="h-px bg-gray-700"></div>
              <div className="flex justify-between items-center">
                <span>Restaurant</span>
                <span className="text-gold">6 AM - 11 PM</span>
              </div>
              <div className="h-px bg-gray-700"></div>
              {/* Spa removed per request */}
              <div className="flex justify-between items-center">
                <span>Pool</span>
                <span className="text-gold">6 AM - 8 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-8"></div>

        {/* Bottom Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left text-sm text-gray-500">
          <div>
            <p>© {currentYear} St Regis Hotel and Resort. All rights reserved.</p>
          </div>

          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Cookie Policy
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-end gap-2">
            <span>Designed with</span>
            <i className="fas fa-heart text-gold"></i>
            <span>for luxury</span>
          </div>
        </div>
      </div>

      {/* Top Footer Bar */}
      <div className="border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-xs text-gray-600">
          <p>Luxury Experience Since 2024</p>
          <p>Domain: stregishotelandresort.com</p>
        </div>
      </div>
    </footer>
  );
}
