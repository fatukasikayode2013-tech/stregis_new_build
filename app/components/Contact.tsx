 'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Loader2, Calendar, User, AtSign, MessageSquare } from 'lucide-react';
import { Reveal } from './Reveal';

const contactDetails = [
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: ['7 Osagiede Street, Oka', 'Benin City, Edo State', 'Nigeria'],
    link: 'https://maps.google.com',
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['0906 000 1732', 'Available 24/7'],
    link: 'tel:09060001732',
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['info@stregishotelandresort.com'],
    link: 'mailto:info@stregishotelandresort.com',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    lines: ['Check-in: 2:00 PM', 'Check-out: 12:00 PM'],
    link: null,
  },
];

const roomTypes = [
  'Standard Room',
  'Executive Room',
  'Executive Deluxe',
  'Executive Suite',
  'Royal Suite',
  'Apartment',
  'Presidential Suite',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkin: '',
    checkout: '',
    roomType: roomTypes[0],
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/send-reservation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          checkin: '',
          checkout: '',
          roomType: roomTypes[0],
          message: '',
        });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-32 bg-cream relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-gold/5 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold block mb-6">
              The Concierge
            </span>
            <h2 className="text-5xl lg:text-6xl font-serif text-navy-900 mb-8">
              Begin Your{' '}
              <span className="italic text-gold">Journey</span>
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Ready to experience unparalleled luxury? Contact us to make your
              reservation or inquire about our exclusive offerings.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Contact Info & Map */}
          <Reveal direction="left">
            <div className="space-y-10">
              {/* Contact Cards */}
              <div className="grid gap-6">
                {contactDetails.map((detail, index) => (
                  <motion.div
                    key={index}
                    className="group flex items-start gap-5 p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gold/20"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <detail.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gold mb-2">
                        {detail.title}
                      </h4>
                      {detail.link ? (
                        <a
                          href={detail.link}
                          className="text-lg text-navy-900 font-serif hover:text-gold transition-colors"
                        >
                          {detail.lines.map((line, i) => (
                            <span key={i}>
                              {i > 0 && <br />}
                              {line}
                            </span>
                          ))}
                        </a>
                      ) : (
                        <p className="text-lg text-navy-900 font-serif">
                          {detail.lines.map((line, i) => (
                            <span key={i}>
                              {i > 0 && <br />}
                              {line}
                            </span>
                          ))}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Container */}
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-gold/20 to-gold-dark/20 rounded-3xl blur-sm" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <div className="relative h-80 bg-gray-200">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.705162339704!2d5.6151789999999995!3d6.3024163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d3cbf7670aef%3A0x267505a8f3c34362!2sSt.%20Regis%20Hotels%20%26%20Resorts!5e0!3m2!1sen!2sng!4v1773705598394!5m2!1sen!2sng"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="St. Regis Hotel Location"
                      className="absolute inset-0 w-full h-full"
                    />
                    {/* Map overlay with info */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm text-navy-900 font-medium">
                          St. Regis Hotels & Resorts
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Side - Reservation Form */}
          <Reveal direction="right">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-gold/10 via-transparent to-navy/5 rounded-3xl" />
              
              <div className="relative bg-white rounded-3xl shadow-2xl p-10 lg:p-12 border border-gray-100">
                {/* Form Header */}
                <div className="mb-10 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl text-navy-900 font-serif">
                        Request a Reservation
                      </h3>
                      <p className="text-sm text-gray-500">
                        Our concierge will confirm your booking within 24 hours
                      </p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative group">
                      <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                        <User className="w-4 h-4 text-gold" />
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-gray-50 px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-gold focus:bg-white outline-none transition-all duration-300 text-navy-900 placeholder:text-gray-400"
                        placeholder="Alexander Morgan"
                      />
                    </div>
                    <div className="relative group">
                      <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                        <AtSign className="w-4 h-4 text-gold" />
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-gray-50 px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-gold focus:bg-white outline-none transition-all duration-300 text-navy-900 placeholder:text-gray-400"
                        placeholder="alexander@prestige.com"
                      />
                    </div>
                  </div>

                  {/* Phone & Room Type Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative group">
                      <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                        <Phone className="w-4 h-4 text-gold" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-gray-50 px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-gold focus:bg-white outline-none transition-all duration-300 text-navy-900 placeholder:text-gray-400"
                        placeholder="+234 800 000 0000"
                      />
                    </div>
                    <div className="relative group">
                      <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                        <Calendar className="w-4 h-4 text-gold" />
                        Room Selection
                      </label>
                      <select
                        name="roomType"
                        value={formData.roomType}
                        onChange={handleChange}
                        className="w-full bg-gray-50 px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-gold focus:bg-white outline-none transition-all duration-300 text-navy-900 appearance-none cursor-pointer"
                      >
                        {roomTypes.map((room) => (
                          <option key={room} value={room}>
                            {room}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Dates Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative group">
                      <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                        <Calendar className="w-4 h-4 text-gold" />
                        Check-in Date
                      </label>
                      <input
                        required
                        type="date"
                        name="checkin"
                        value={formData.checkin}
                        onChange={handleChange}
                        min={getTodayDate()}
                        className="w-full bg-gray-50 px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-gold focus:bg-white outline-none transition-all duration-300 text-navy-900"
                      />
                    </div>
                    <div className="relative group">
                      <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                        <Calendar className="w-4 h-4 text-gold" />
                        Check-out Date
                      </label>
                      <input
                        required
                        type="date"
                        name="checkout"
                        value={formData.checkout}
                        onChange={handleChange}
                        min={formData.checkin || getTodayDate()}
                        className="w-full bg-gray-50 px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-gold focus:bg-white outline-none transition-all duration-300 text-navy-900"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative group">
                    <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                      <MessageSquare className="w-4 h-4 text-gold" />
                      Special Requests
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-gray-50 px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-gold focus:bg-white outline-none transition-all duration-300 text-navy-900 placeholder:text-gray-400 resize-none"
                      placeholder="Dietary preferences, airport pickup, special occasions..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-5 bg-gradient-to-r from-gold via-gold-dark to-gold text-white rounded-xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gold-dark via-gold to-gold-dark opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processing Your Request...
                      </>
                    ) : status === 'success' ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Request Sent Successfully!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Reservation Request
                      </>
                    )}
                  </motion.button>

                  {status === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                      <p className="text-red-600 text-sm text-center">
                        Something went wrong. Please try again or contact us directly at 0906 000 1732.
                      </p>
                    </div>
                  )}

                  {status === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                      <p className="text-green-600 text-sm text-center">
                        Thank you! Our concierge will contact you within 24 hours to confirm your reservation.
                      </p>
                    </div>
                  )}
                </form>

                {/* Trust badges */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <div className="flex items-center justify-center gap-6 text-gray-400 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span>Secure Booking</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span>Best Rate Guarantee</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span>24/7 Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}