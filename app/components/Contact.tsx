"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const router = useRouter();

  // Get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today.toISOString().split('T')[0];
  };
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: '7 Osagiede Street, Oka, Benin City, Edo State, Nigeria',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '0906 000 1732',
      link: 'tel:09060001732',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@stregishotelandresort.com',
      link: 'mailto:info@stregishotelandresort.com',
    },
    {
      icon: Clock,
      title: 'Front Desk',
      content: '24/7 Available',
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#f5f3ee]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a961] tracking-widest mb-4">GET IN TOUCH</p>
          <h2
            className="text-4xl lg:text-5xl text-[#1e3a5f] mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Location & Contact
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We're here to assist you. Reach out to us for reservations, inquiries, or any assistance you may need.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#c9a961] rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[#1e3a5f] mb-1">{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} className="text-gray-600 hover:text-[#c9a961] transition-colors">
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-[300px] bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7051623879647!2d5.612604073842114!3d6.302416293686743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d3cbf7670aef%3A0x267505a8f3c34362!2sSt.%20Regis%20Hotels%20%26%20Resorts!5e0!3m2!1sen!2sng!4v1772580276773!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allow="fullscreen;"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="St. Regis Hotel Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-xl">
            <h3
              className="text-3xl text-[#1e3a5f] mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Make a Reservation
            </h3>
            <form className="space-y-6" onSubmit={async (e) => {
              e.preventDefault();
              setStatus(null);
              setLoading(true);
              const form = e.currentTarget as HTMLFormElement;
              const fd = new FormData(form);
              const payload = Object.fromEntries(fd.entries());

              // client-side validation: email is required for verification
              const email = (form.querySelector('#email') as HTMLInputElement | null)?.value?.trim();
              if (!email) {
                setStatus('Please provide your email address for verification');
                setLoading(false);
                return;
              }
              try {
                const res = await fetch('/api/send-reservation', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(payload),
                });
                const json = await res.json();
                if (res.ok && json.ok) {
                  // we sent a verification email to the guest
                  setStatus('verification-sent');
                  form.reset();
                  // Redirect to confirmation page
                  router.push('/confirmation');
                } else {
                  setStatus(json.error || 'error');
                }
              } catch (err) {
                setStatus('error');
              } finally {
                setLoading(false);
              }
            }}>
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#c9a961] bg-white"
                  placeholder="Your name"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#c9a961] bg-white"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#c9a961] bg-white"
                    placeholder="0906 000 1732"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="checkin" className="block text-gray-700 mb-2">
                    Check-in
                  </label>
                  <input
                    type="date"
                    id="checkin"
                    name="checkin"
                    min={getTodayDate()}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#c9a961] bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="checkout" className="block text-gray-700 mb-2">
                    Check-out
                  </label>
                  <input
                    type="date"
                    id="checkout"
                    name="checkout"
                    min={getTodayDate()}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#c9a961] bg-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="roomType" className="block text-gray-700 mb-2">
                  Room Type
                </label>
                <select
                  id="roomType"
                  name="roomType"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#c9a961] bg-white"
                >
                  <option>Standard Room</option>
                  <option>Executive Room</option>
                  <option>Executive Deluxe</option>
                  <option>Executive Suite</option>
                  <option>Royal Suite</option>
                  <option>Apartment</option>
                  <option>Presidential Suite</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Special Requests
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#c9a961] bg-white resize-none"
                  placeholder="Any special requests or questions..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#c9a961] text-white py-4 rounded-lg hover:bg-[#b89851] transition-all hover:shadow-lg text-lg disabled:opacity-60"
              >
                {loading ? 'Sending...' : 'Submit Reservation Request'}
              </button>
              {status === 'verification-sent' && (
                <p className="text-green-600 mt-2">A verification email has been sent to your address. Please click the link to confirm.</p>
              )}
              {status && status !== 'verification-sent' && (
                <p className="text-red-600 mt-2">Error sending request: {status}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
