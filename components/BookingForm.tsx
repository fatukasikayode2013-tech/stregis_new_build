'use client';

import { useState, useMemo } from 'react';

export default function BookingForm() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState<number>(1);

  // Today's date in YYYY-MM-DD format to prevent selecting past dates
  const todayStr = useMemo(() => {
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }, []);

  return (
    <section id="booking" className="py-12 px-4 -mt-12 z-50 relative">
      <div className="max-w-4xl mx-auto bg-black/70 backdrop-blur-md border border-gold/20 rounded-lg p-6 shadow-lg">
        <h3 className="text-2xl font-serif font-bold text-white mb-4">Reserve Your Stay</h3>
        <p className="text-sm text-gray-300 mb-6">Select your dates and number of guests, then check availability.</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!checkIn || !checkOut) {
              alert('Please select check-in and check-out dates.');
              return;
            }
            if (checkOut < checkIn) {
              alert('Check-out date cannot be before check-in date.');
              return;
            }
            console.log({ checkIn, checkOut, adults });
            // Temporary behaviour: navigate to rooms
            window.location.hash = '#rooms';
          }}
          className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-end"
        >
          <div>
            <label className="text-xs text-gray-300 block mb-1">Check In</label>
            <input
              type="date"
              value={checkIn}
              min={todayStr}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-700"
              required
            />
          </div>

          <div>
            <label className="text-xs text-gray-300 block mb-1">Check Out</label>
            <input
              type="date"
              value={checkOut}
              min={checkIn || todayStr}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-700"
              required
            />
          </div>

          <div>
            <label className="text-xs text-gray-300 block mb-1">Adults</label>
            <select
              value={adults}
              onChange={(e) => setAdults(Number(e.target.value))}
              className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-700"
            >
              <option value={1}>1 Adult</option>
              <option value={2}>2 Adults</option>
            </select>
          </div>

          <div>
            <button type="submit" className="w-full px-4 py-2 bg-gold text-darkBg font-bold rounded hover:bg-darkGold transition-colors">Check Availability</button>
          </div>
        </form>
      </div>
    </section>
  );
}
