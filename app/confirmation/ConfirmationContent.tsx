'use client';

import { useSearchParams } from 'next/navigation';

export default function ConfirmationContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || '[Guest Name]';
  const email = searchParams.get('email') || '[guest@email.com]';
  const phone = searchParams.get('phone') || '[Phone Number]';
  const checkin = searchParams.get('checkin') || '[Check-in Date]';
  const checkout = searchParams.get('checkout') || '[Check-out Date]';
  const roomType = searchParams.get('roomType') || '[Room Type]';
  const guests = '2'; // Default since not in form

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-[#c9a961] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-[#c9a961] tracking-widest mb-2">CONFIRMED</p>
          <h1 className="text-4xl lg:text-5xl text-[#1e3a5f] font-serif" style={{ fontFamily: 'Playfair Display, serif' }}>
            Booking Confirmed
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
            Thank you for choosing St. Regis Hotel & Resort. Your reservation has been successfully confirmed.
            We look forward to welcoming you to an unforgettable experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl text-[#1e3a5f] mb-6 font-serif" style={{ fontFamily: 'Playfair Display, serif' }}>
              Reservation Details
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-3">Guest Information</h3>
                <p className="text-gray-700 mb-2"><strong>Name:</strong> {name}</p>
                <p className="text-gray-700 mb-2"><strong>Email:</strong> {email}</p>
                <p className="text-gray-700 mb-2"><strong>Phone:</strong> {phone}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-3">Stay Details</h3>
                <p className="text-gray-700 mb-2"><strong>Check-in:</strong> {checkin}</p>
                <p className="text-gray-700 mb-2"><strong>Check-out:</strong> {checkout}</p>
                <p className="text-gray-700 mb-2"><strong>Room Type:</strong> {roomType}</p>
                <p className="text-gray-700 mb-2"><strong>Guests:</strong> {guests}</p>
              </div>
            </div>
          </div>

          <div className="bg-[#1e3a5f] text-white rounded-2xl p-8 mb-8">
            <h2 className="text-2xl mb-6 font-serif" style={{ fontFamily: 'Playfair Display, serif' }}>
              What's Next?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#c9a961] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Confirmation Email</h3>
                <p className="text-gray-300">You'll receive a detailed confirmation email within the next few minutes.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#c9a961] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Check-in Instructions</h3>
                <p className="text-gray-300">Arrive at 3:00 PM. Present ID and confirmation number at reception.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#c9a961] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
                <p className="text-gray-300">Contact our reservations team at +234 906 000 1732</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl text-[#1e3a5f] mb-4 font-serif" style={{ fontFamily: 'Playfair Display, serif' }}>
              We Can't Wait to Welcome You
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Prepare for an exceptional stay at St. Regis Hotel & Resort. If you need to modify your reservation
              or have any questions, please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/" className="inline-block bg-[#c9a961] text-white px-6 py-3 rounded-lg hover:bg-[#b89851] transition-colors">
                Return to Home
              </a>
              <a href="/rooms" className="inline-block border-2 border-[#c9a961] text-[#c9a961] px-6 py-3 rounded-lg hover:bg-[#c9a961] hover:text-white transition-colors">
                View Our Rooms
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}