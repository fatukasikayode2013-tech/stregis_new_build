'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from './Reveal';

const galleryImages = [
  {
    id: 1,
    src: '/images/presidential.jpeg',
    alt: 'Presidential Suite',
    category: 'Suites',
    title: 'Presidential Suite',
    description: 'The pinnacle of luxury with bespoke VIP services',
  },
  {
    id: 2,
    src: '/images/Royal Suite.jpeg',
    alt: 'Royal Suite',
    category: 'Suites',
    title: 'Royal Suite',
    description: 'Palatial living with separate parlour',
  },
  {
    id: 3,
    src: '/images/Executive deluxe.jpg.jpeg',
    alt: 'Executive Deluxe',
    category: 'Rooms',
    title: 'Executive Deluxe',
    description: 'Refined elegance with premium city views',
  },
  {
    id: 4,
    src: '/images/Executive Room.jpeg',
    alt: 'Executive Room',
    category: 'Rooms',
    title: 'Executive Room',
    description: 'Enhanced space for the modern traveler',
  },
  {
    id: 5,
    src: '/images/IMG-20260214-WA0277.jpg.jpeg',
    alt: 'Executive Suite',
    category: 'Suites',
    title: 'Executive Suite',
    description: 'Higher tier luxury with dedicated lounge',
  },
  {
    id: 6,
    src: '/images/Standard 1.jpg',
    alt: 'Standard Room',
    category: 'Rooms',
    title: 'Standard Room',
    description: 'Perfect blend of functionality and comfort',
  },
  {
    id: 7,
    src: '/images/IMG-20260206-WA0292.jpg.jpeg',
    alt: 'Pool Area',
    category: 'Amenities',
    title: 'Swimming Pool',
    description: 'Temperature-controlled outdoor pool',
  },
  {
    id: 8,
    src: '/images/IMG-20260206-WA0293.jpg.jpeg',
    alt: 'Restaurant',
    category: 'Dining',
    title: 'Fine Dining',
    description: 'World-class culinary experiences',
  },
  {
    id: 9,
    src: '/images/IMG-20260206-WA0286.jpg.jpeg',
    alt: 'Hotel Exterior',
    category: 'Amenities',
    title: 'Hotel Exterior',
    description: 'Architectural elegance',
  },
  {
    id: 10,
    src: '/images/IMG-20260206-WA0294.jpg.jpeg',
    alt: 'Lounge Area',
    category: 'Amenities',
    title: 'Lounge Area',
    description: 'Relaxing sophisticated spaces',
  },
  {
    id: 11,
    src: '/images/IMG-20260206-WA0296.jpg.jpeg',
    alt: 'Room Interior',
    category: 'Rooms',
    title: 'Room Interior',
    description: 'Meticulously designed spaces',
  },
  {
    id: 12,
    src: '/images/IMG-20260206-WA0297.jpg.jpeg',
    alt: 'Bathroom',
    category: 'Rooms',
    title: 'Luxury Bathroom',
    description: 'Spa-like bathroom amenities',
  },
  {
    id: 13,
    src: '/images/IMG-20260214-WA0260.jpg.jpeg',
    alt: 'Suite Living Area',
    category: 'Suites',
    title: 'Suite Living Area',
    description: 'Spacious elegant living spaces',
  },
  {
    id: 14,
    src: '/images/IMG-20260214-WA0272.jpg.jpeg',
    alt: 'Suite Bedroom',
    category: 'Suites',
    title: 'Suite Bedroom',
    description: 'Opulent sleeping quarters',
  },
  {
    id: 15,
    src: '/images/IMG-20260214-WA0275.jpg.jpeg',
    alt: 'Hotel Lobby',
    category: 'Amenities',
    title: 'Hotel Lobby',
    description: 'Grand welcoming entrance',
  },
  {
    id: 16,
    src: '/images/Apartment.jpeg',
    alt: 'The Apartment',
    category: 'Suites',
    title: 'The Apartment',
    description: 'Full suite with kitchen facilities',
  },
];

const categories = ['All', 'Suites', 'Rooms', 'Amenities', 'Dining'];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (id: number) => setSelectedImage(id);
  const closeLightbox = () => setSelectedImage(null);

  const currentIndex = selectedImage ? galleryImages.findIndex(img => img.id === selectedImage) : 0;

  const navigateLightbox = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next'
      ? (currentIndex + 1) % galleryImages.length
      : (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[newIndex].id);
  };

  return (
    <section id="gallery" className="py-32 bg-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-navy/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold block mb-6">
              Visual Journey
            </span>
            <h2 className="text-5xl lg:text-6xl font-serif text-navy-900 mb-8">
              Our{' '}
              <span className="italic text-gold">Gallery</span>
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Explore our world through these carefully curated moments that
              capture the essence of luxury and elegance.
            </p>
          </div>
        </Reveal>

        {/* Category Filter */}
        <Reveal>
          <div className="flex justify-center mb-16">
            <div className="inline-flex bg-white p-2 rounded-full shadow-lg border border-gray-100">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-gold to-gold-dark text-white shadow-lg'
                      : 'text-gray-600 hover:text-navy-900'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Results count */}
        <Reveal>
          <div className="text-center mb-12">
            <span className="text-sm text-gray-500">
              Showing {filteredImages.length} {filteredImages.length === 1 ? 'image' : 'images'}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </span>
          </div>
        </Reveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <Reveal key={image.id} delay={Math.min(index * 0.08, 0.5)}>
              <motion.div
                className="group cursor-pointer"
                whileHover={{ y: -8 }}
                onClick={() => openLightbox(image.id)}
              >
                {/* Image Container with professional hotel-compliant styling */}
                <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  
                  {/* Professional gradient overlay - always visible for hotel look */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 via-navy-900/10 to-transparent" />
                  
                  {/* Vignette effect for premium hotel aesthetic */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'radial-gradient(ellipse at center, transparent 30%, rgba(30, 58, 95, 0.4) 100%)',
                    }}
                  />
                  
                  {/* Hover overlay for better content visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-xs text-navy-900 font-medium">
                      {image.category}
                    </span>
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-lg font-serif font-medium">
                      {image.title}
                    </h3>
                    <p className="text-white/70 text-sm mt-1">
                      {image.description}
                    </p>
                  </div>

                  {/* View icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Empty state */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No images found in this category.</p>
          </div>
        )}

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation buttons */}
              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
                className="absolute left-6 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
                className="absolute right-6 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image container */}
              <motion.div
                className="relative max-w-5xl max-h-[85vh] w-full"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {galleryImages.map((image) => (
                  <div
                    key={image.id}
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      selectedImage === image.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={1200}
                        height={800}
                        className="w-full h-auto max-h-[80vh] object-contain mx-auto"
                      />
                    </div>
                    {/* Info bar */}
                    <div className="mt-6 text-center">
                      <h3 className="text-white text-2xl font-serif mb-2">
                        {image.title}
                      </h3>
                      <div className="flex items-center justify-center gap-4">
                        <span className="bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-white/80 text-sm">
                          {image.category}
                        </span>
                        <span className="text-white/60 text-sm">
                          {currentIndex + 1} of {galleryImages.length}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}