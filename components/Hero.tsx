'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

export default function Hero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState<number>(1);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fadeRef = useRef<number | null>(null);

  // Videos from public/videos folder - play sequentially
  // Provide both mp4 and mov as sources (mp4 first, mov fallback)
  const videos = [
    '/videos/St Regis Reel 1.mov',
    '/videos/ST REGIS-SWIMMING EXPERIENCE.mov',
    '/videos/St Regis The Lounge.mov',
    '/videos/St Regis- Restaurant.mov',
    '/videos/building.mov'
  ];
 
  useEffect(() => {
    const node = videoRef.current;
    if (!node) return;

    const handleEnded = () => setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    const handleError = () => {
      // if error occurs, advance after short delay
      if (fadeRef.current) window.clearTimeout(fadeRef.current);
      fadeRef.current = window.setTimeout(() => setCurrentVideoIndex((prev) => (prev + 1) % videos.length), 1500);
    };

    node.addEventListener('ended', handleEnded);
    node.addEventListener('error', handleError);

    return () => {
      node.removeEventListener('ended', handleEnded);
      node.removeEventListener('error', handleError);
      if (fadeRef.current) window.clearTimeout(fadeRef.current);
    };
  }, [videos.length]);

  useEffect(() => {
    const node = videoRef.current;
    if (!node) return;

    const mov = videos[currentVideoIndex];
    const mp4 = mov.replace('.mov', '.mp4');

    // replace sources
    while (node.firstChild) node.removeChild(node.firstChild);
    const srcMp4 = document.createElement('source');
    srcMp4.src = mp4;
    srcMp4.type = 'video/mp4';
    node.appendChild(srcMp4);
    const srcMov = document.createElement('source');
    srcMov.src = mov;
    srcMov.type = 'video/quicktime';
    node.appendChild(srcMov);

    // fade transition
    node.style.transition = 'opacity 0.8s ease';
    node.style.opacity = '0';
    setTimeout(() => {
      try {
        node.load();
        const p = node.play();
        if (p && typeof p.then === 'function') p.catch(() => {});
      } catch (e) {}
      node.style.opacity = '1';
    }, 100);
  }, [currentVideoIndex, videos]);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Video Container */}
      <div className="relative w-full h-full">
        <div className="absolute inset-0 bg-black/40 z-20"></div>
        
        {/* Video Elements */}
        <video
          ref={videoRef}
          className="hero-video video-fade bg-black"
          autoPlay
          muted
          playsInline
        >
          <source />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-30">
          <div className="text-center fade-in-up">
            {/* Hotel Name with Gold Glow Effect */}
            <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-wider mb-4 gold-glow">
              ST REGIS
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gold mb-2 font-light tracking-[3px] uppercase">
              Hotel & Resort
            </p>

            {/* Welcome Message */}
            <p className="text-sm md:text-lg text-gray-300 italic font-light max-w-2xl mx-auto mt-6">
              Welcome to Luxury
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-6 justify-center mt-12">
              <button className="px-8 py-4 bg-gold text-darkBg font-bold uppercase tracking-widest rounded-none hover:bg-darkGold transition-colors duration-300 hover:shadow-lg hover:shadow-gold/50">
                EXPLORE
              </button>
              <button className="px-8 py-4 border-2 border-gold text-gold font-bold uppercase tracking-widest rounded-none hover:bg-gold hover:text-darkBg transition-all duration-300">
                RESERVE
              </button>
              <Link
                href="/promo"
                className="px-6 py-4 bg-transparent border-2 border-white/30 text-white font-semibold uppercase tracking-wider rounded-none hover:bg-white/10 transition-all duration-200"
              >
                VIEW PROMO
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-20 animate-bounce">
              <svg
                className="w-6 h-6 mx-auto text-gold"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Video Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-40">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentVideoIndex(index)}
              className={`h-2 transition-all duration-300 rounded-full ${
                index === currentVideoIndex ? 'bg-gold w-8' : 'bg-gray-600 w-2'
              }`}
              aria-label={`Video ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
