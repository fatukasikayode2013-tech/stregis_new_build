'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

const slides = [
  {
    video: '/videos/pool.mp4',
    title: 'Experience Class',
    subtitle: 'in Benin City',
    tagline: 'A New Standard of Luxury',
  },
];

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          src="/videos/pool.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-cream" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      </div>

      {/* Animated mesh gradient overlay */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, rgba(201, 169, 97, 0.3) 0%, transparent 50%)`,
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-gold/40 rounded-full"
            initial={{
              x: (typeof window !== 'undefined') ? Math.random() * window.innerWidth : Math.random() * 1024,
              y: (typeof window !== 'undefined') ? Math.random() * window.innerHeight : Math.random() * 768,
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * -200 - 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 py-20">
        <motion.div
          className="text-center max-w-6xl mx-auto flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Luxury badge */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="flex items-center gap-3 px-5 py-2 border border-gold/30 rounded-full backdrop-blur-sm bg-black/20">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span className="text-[9px] uppercase tracking-[0.25em] text-gold font-medium">
                World-Class Hospitality
              </span>
              <Sparkles className="w-3.5 h-3.5 text-gold" />
            </div>
          </motion.div>

          {/* Main title */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-serif mb-5"
            initial={{ opacity: 0, y: 50 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ delay: 1, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="block font-light text-white">Experience</span>
            <span className="block italic text-gold relative inline-block mt-1">
              Class
              <motion.svg
                className="absolute -bottom-2.5 left-0 w-full"
                viewBox="0 0 200 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 2, duration: 0.8 }}
              >
                <path
                  d="M2 7C50 2 150 2 198 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>
            <span className="block font-light text-white">in Benin City</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-base md:text-lg text-white/80 max-w-xl mx-auto mb-8 font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            Where heritage meets modern elegance. Discover a sanctuary of
            refined hospitality designed for the discerning traveler.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 bg-gold text-white rounded-full overflow-hidden shadow-2xl"
            >
              <span className="relative z-10 text-xs font-bold uppercase tracking-[0.2em]">
                Reserve Your Stay
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-dark via-gold to-gold-dark opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute -inset-1 bg-gold/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('rooms')}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-4 border border-white/30 backdrop-blur-sm text-white rounded-full hover:bg-white/10 transition-all duration-300"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em]">
                View Suites
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        whileHover={{ y: 5 }}
      >
        <span className="text-[8px] uppercase tracking-[0.4em] text-white/50">
          Scroll to Explore
        </span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold/60 via-gold to-transparent relative overflow-hidden rounded-full">
          <motion.div
            className="absolute top-0 left-0 w-full h-[30%] bg-gold"
            animate={{ y: ['-100%', '400%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>

      {/* Side decorative elements */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col gap-4">
          <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
          <span className="text-[8px] uppercase tracking-[0.3em] text-white/30 rotate-90 origin-left">
            Est. 2024
          </span>
          <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
        </div>
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col gap-4 items-center">
          <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
          <span className="text-[8px] uppercase tracking-[0.3em] text-white/30 -rotate-90 origin-right">
            Nigeria
          </span>
          <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}