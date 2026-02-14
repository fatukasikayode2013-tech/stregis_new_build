"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from 'next/image';

const images = [
  "Apartment.jpeg",
  "Exe Deluxe.jpeg",
  "Exec Suite.jpeg",
  "Executive Room.jpeg",
  "Royal Room.jpeg",
  "Standard Deluxe.jpeg",
  "bar.jpeg",
  "rep1.jpeg",
  "rep2.jpeg"
];

const amenities = [
  { icon: "fa-wifi", label: "Free Wi-Fi" },
  { icon: "fa-coffee", label: "Paid breakfast" },
  { icon: "fa-car", label: "Free parking" },
  { icon: "fa-wheelchair", label: "Accessible" },
  { icon: "fa-swimming-pool", label: "Outdoor pool" },
  { icon: "fa-snowflake", label: "Air-conditioned" },
  { icon: "fa-soap", label: "Laundry service" },
  { icon: "fa-briefcase", label: "Business center" },
  { icon: "fa-dog", label: "Pet-friendly" },
  { icon: "fa-bell-concierge", label: "Room service" },
  { icon: "fa-child", label: "Kid-friendly" },
  { icon: "fa-utensils", label: "Restaurant" },
  { icon: "fa-kitchen-set", label: "Kitchens in some rooms" },
  { icon: "fa-shuttle-van", label: "Airport shuttle" },
  { icon: "fa-dumbbell", label: "Fitness center" },
  { icon: "fa-glass-martini-alt", label: "Bar" },
  { icon: "fa-smoking-ban", label: "Smoke-free" }
];

export default function AmenitiesPage() {
  const [current, setCurrent] = useState(0);

  const nextImage = () => setCurrent((c) => (c + 1) % images.length);
  const prevImage = () => setCurrent((c) => (c - 1 + images.length) % images.length);

  return (
    <>
      <Navbar />
      <main
        className="relative min-h-screen flex items-center justify-center pt-24 pb-16"
        style={{
          backgroundImage: "url('https://pin.it/2gaHbh3Ul')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Top overlay to ensure navbar contrast + subtle luxury vignette */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-36 bg-gradient-to-b from-black/70 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.25),transparent_40%)] opacity-60 mix-blend-overlay" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(212,175,55,0.06),transparent)]" />
        </div>
        <div className="flex w-full max-w-6xl h-[440px] rounded-2xl shadow-xl overflow-hidden border border-gold/20 bg-white/70 backdrop-blur-sm">
          {/* Left: Image Slider */}
          <div className="w-[60%] h-full relative flex items-center justify-center bg-gray-100">
            <div className="relative w-full h-full">
              <Image
                src={`/images/${images[current]}`}
                alt="Amenity"
                fill
                className="object-cover w-full h-full transition-all duration-500"
                sizes="(min-width:1024px) 60vw, 100vw"
              />
            </div>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 text-xl hover:bg-gold transition"
              onClick={prevImage}
              aria-label="Previous"
            >
              &#8592;
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 text-xl hover:bg-gold transition"
              onClick={nextImage}
              aria-label="Next"
            >
              &#8594;
            </button>
          </div>
          {/* Right: Amenities List */}
          <div className="w-[40%] h-full flex flex-col items-center justify-center bg-white p-4">
            <h2 className="text-2xl font-serif font-bold mb-4 gold-text text-center">Amenities</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full text-base leading-snug overflow-y-auto max-h-[360px]">
              {amenities.map((a, i) => (
                <li key={i} className="flex items-center gap-3 py-1">
                  <span className="text-xl text-gold">
                    <i className={`fas ${a.icon}`}></i>
                  </span>
                  <span className="text-black font-medium">{a.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
