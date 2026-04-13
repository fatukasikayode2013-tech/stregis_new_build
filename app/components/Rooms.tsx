'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Users, Maximize, ArrowRight, ChevronLeft, ChevronRight, Wifi, Coffee, Tv, Wind, Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from './Reveal';

type Room = {
  name: string;
  images: string[];
  description: string;
  fullDescription: string;
  size: string;
  occupancy: string;
  price: string;
  amenities: string[];
};

const rooms: Room[] = [
  {
    name: 'Standard Room',
    images: ['/images/Standard 1.jpg', '/images/Standard 2.jpg'],
    description: 'The perfect blend of functionality and classic comfort, featuring premium bedding.',
    fullDescription: 'Our Standard Room offers a serene retreat with carefully curated amenities. Featuring plush bedding with premium linens, a spacious work desk, and modern bathroom with rain shower. Perfect for both business and leisure travelers seeking comfort and value.',
    size: '15×12 ft',
    occupancy: '2 Guests',
    price: '₦40,000',
    amenities: ['King or Twin Beds', 'City View', 'Work Desk', 'Rain Shower', 'Smart TV', 'Mini Bar'],
  },
  {
    name: 'Executive Room',
    images: ['/images/Executive Room.jpeg'],
    description: 'Enhanced space designed for the modern business traveler requiring extra workspace.',
    fullDescription: 'The Executive Room provides additional space and premium amenities for the discerning business traveler. Features include an expanded work area, ergonomic chair, high-speed internet, and complimentary access to our Executive Lounge.',
    size: '18×12 ft',
    occupancy: '2 Guests',
    price: '₦55,000',
    amenities: ['King Bed', 'City View', 'Executive Lounge Access', 'Nespresso Machine', 'Bathtub', 'Bathrobes'],
  },
  {
    name: 'Executive Deluxe',
    images: ['/images/Executive deluxe.jpg.jpeg'],
    description: 'Refined elegance with expanded living quarters and premium city views.',
    fullDescription: 'Experience elevated luxury in our Executive Deluxe room. This spacious accommodation features a separate sitting area, floor-to-ceiling windows with stunning city views, and premium amenities including a marble bathroom with soaking tub.',
    size: '18×14 ft',
    occupancy: '2 Guests',
    price: '₦65,000',
    amenities: ['King Bed', 'Sitting Area', 'City View', 'Marble Bathroom', 'Soaking Tub', 'Premium Toiletries'],
  },
  {
    name: 'Executive Suite',
    images: ['/images/IMG-20260214-WA0277.jpg.jpeg'],
    description: 'A higher tier of luxury featuring a dedicated lounge area and premium finishes.',
    fullDescription: 'The Executive Suite redefines luxury with a separate living room, premium furnishings, and panoramic city views. Enjoy exclusive amenities including butler service, complimentary breakfast, and evening cocktails in our Executive Lounge.',
    size: '20×15 ft',
    occupancy: '2 Guests',
    price: '₦90,000',
    amenities: ['King Bed', 'Separate Living Room', 'Butler Service', 'Breakfast Included', 'Panoramic View', 'Walk-in Closet'],
  },
  {
    name: 'Royal Suite',
    images: ['/images/Royal Room.jpeg', '/images/Royal Suite.jpeg'],
    description: 'Palatial living featuring a separate parlour for entertaining guests.',
    fullDescription: 'The Royal Suite offers an unparalleled experience with expansive living spaces, elegant décor, and premium amenities. Features include a grand parlour perfect for entertaining, a luxurious bedroom with king-size bed, and a spa-inspired bathroom.',
    size: 'Spacious',
    occupancy: '2 Guests',
    price: '₦100,000',
    amenities: ['King Bed', 'Grand Parlour', 'Dining Area', 'Jacuzzi', 'Double Vanity', 'Premium Bar'],
  },
  {
    name: 'The Apartment',
    images: ['/images/Apartment.jpeg'],
    description: 'Fully equipped kitchen and laundry facilities for extended luxury stays.',
    fullDescription: 'Perfect for extended stays, The Apartment combines the comfort of home with the luxury of a five-star hotel. Features a fully equipped kitchen, separate bedroom, living area, and in-unit laundry facilities. Ideal for families or long-term guests.',
    size: 'Full Suite',
    occupancy: '2-3 Guests',
    price: '₦160,000',
    amenities: ['King Bed', 'Full Kitchen', 'Washer/Dryer', 'Living Room', 'Dining Area', 'Weekly Housekeeping'],
  },
  {
    name: 'Presidential Suite',
    images: ['/images/Presidential bed.jpeg', '/images/presidential.jpeg'],
    description: 'The pinnacle of luxury. Unparalleled space with bespoke VIP services.',
    fullDescription: 'The Presidential Suite represents the ultimate in luxury accommodation. This magnificent suite features multiple rooms including a grand living area, formal dining room, private office, and sumptuous bedroom. Enjoy 24/7 butler service, private check-in, and exclusive access to our rooftop terrace.',
    size: 'Luxury Wing',
    occupancy: '2-4 Guests',
    price: '₦350,000',
    amenities: ['King Bed', 'Multiple Rooms', '24/7 Butler', 'Private Terrace', 'Chauffeur Service', 'Champagne on Arrival'],
  },
];

const amenityIcons = [Wifi, Coffee, Tv, Wind];

function RoomImageSlider({
  images,
  name,
  price,
  occupancy,
  onOpenDetails,
}: {
  images: string[];
  name: string;
  price: string;
  occupancy: string;
  onOpenDetails: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIdx((i) => (i + 1) % images.length);
  };
  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIdx((i) => (i - 1 + images.length) % images.length);
  };

  return (
    <div
      className="relative aspect-[3/4] overflow-hidden group/img cursor-pointer"
      onClick={onOpenDetails}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image with smooth transition and professional overlay */}
      <motion.div
        className="absolute inset-0"
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={images[idx]}
          alt={name}
          fill
          className="object-cover transition-transform duration-1000 group-hover/img:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </motion.div>

      {/* Professional gradient overlay - always visible but subtle */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-navy-900/10 to-transparent" />
      
      {/* Vignette effect for hotel-compliant look */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(30, 58, 95, 0.3) 100%)',
        }}
      />
      
      {/* Hover overlay for better text readability */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-70'
        }`}
      />

      {/* Price Badge Overlay */}
      <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-lg transform transition-transform duration-300 group-hover/img:scale-105">
        <span className="text-xs font-bold text-navy-900 tracking-tight">
          {price}
        </span>
        <span className="text-[10px] text-gray-500 ml-1 uppercase">/ Night</span>
      </div>

      {/* Hover Quick Info */}
      <motion.div
        className="absolute inset-x-4 bottom-14 rounded-xl bg-white/90 backdrop-blur-md p-3 hidden md:block"
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 8,
        }}
        transition={{ duration: 0.25 }}
      >
        <p className="text-[10px] font-semibold uppercase tracking-wider text-navy-900">
          {occupancy} • Click for details
        </p>
      </motion.div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <div
          className={`absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between transition-all duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <motion.button
            onClick={prev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-navy-900 rounded-full transition-all duration-300"
          >
            <ChevronLeft className="w-4 h-4" />
          </motion.button>
          <motion.button
            onClick={next}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-navy-900 rounded-full transition-all duration-300"
          >
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>
      )}

      {/* Indicator dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <motion.div
            key={i}
            className="h-1 rounded-full"
            animate={{
              width: i === idx ? 24 : 6,
              backgroundColor: i === idx ? '#ffffff' : 'rgba(255,255,255,0.4)',
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  useEffect(() => {
    if (!selectedRoom) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedRoom(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedRoom]);

  const openRoomDetails = (room: Room) => {
    setSelectedRoom(room);
  };

  const closeRoomDetails = () => {
    setSelectedRoom(null);
  };

  const reserveSelectedRoom = () => {
    setSelectedRoom(null);
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section id="rooms" className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        {/* Header */}
        <Reveal>
          <div className="max-w-3xl mb-20">
            <span className="text-[10px] font-bold tracking-[0.4em] text-gold uppercase mb-4 block">
              Refined Living
            </span>
            <h2 className="text-5xl lg:text-7xl text-navy-900 font-serif mb-8 leading-[1.1]">
              Our{' '}
              <span className="italic text-gold">Accommodations</span>
            </h2>
            <div className="h-[1px] w-24 bg-gold mb-8" />
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-16 gap-x-8">
          {rooms.map((room, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <article
                className="group cursor-pointer"
                onClick={() => openRoomDetails(room)}
              >
                {/* Image Container */}
                <div className="rounded-2xl overflow-hidden shadow-xl shadow-gray-200/50 mb-6 transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-gold/20">
                  <RoomImageSlider
                    images={room.images}
                    name={room.name}
                    price={room.price}
                    occupancy={room.occupancy}
                    onOpenDetails={() => openRoomDetails(room)}
                  />
                </div>

                {/* Text Content */}
                <div className="px-1">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl text-navy-900 font-serif group-hover:text-gold transition-colors duration-300">
                      {room.name}
                    </h3>
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                      <span className="flex items-center gap-1 whitespace-nowrap">
                        <Maximize className="w-3 h-3" />
                        {room.size}
                      </span>
                      <span className="hidden lg:flex items-center gap-1 whitespace-nowrap">
                        <Users className="w-3 h-3" />
                        {room.occupancy}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6 font-light line-clamp-2">
                    {room.description}
                  </p>

                  <motion.button
                    onClick={(event) => {
                      event.stopPropagation();
                      openRoomDetails(room);
                    }}
                    className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-navy-900 group-hover:gap-4 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    Explore Suite{' '}
                    <ArrowRight className="w-4 h-4 text-gold" />
                  </motion.button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedRoom && (
          <motion.div
            className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm p-4 md:p-8 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeRoomDetails}
          >
            <motion.div
              className="relative max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                onClick={closeRoomDetails}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 text-navy-900 shadow-md flex items-center justify-center hover:bg-white"
                aria-label="Close room details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="relative min-h-[320px] md:min-h-[520px]">
                  <Image
                    src={selectedRoom.images[0]}
                    alt={selectedRoom.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/20 to-transparent" />
                  <div className="absolute left-6 right-6 bottom-6 text-white">
                    <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">From</p>
                    <p className="text-3xl font-serif leading-none">{selectedRoom.price}</p>
                    <p className="text-xs uppercase tracking-widest text-white/80 mt-1">Per Night</p>
                  </div>
                </div>

                <div className="p-6 md:p-10">
                  <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-gold block mb-4">
                    Room Information
                  </span>
                  <h3 className="text-3xl md:text-4xl font-serif text-navy-900 mb-4">
                    {selectedRoom.name}
                  </h3>
                  <div className="h-px w-16 bg-gold/70 mb-6" />

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {selectedRoom.fullDescription}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="rounded-xl bg-cream p-4">
                      <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Room Size</p>
                      <div className="flex items-center gap-2 text-navy-900">
                        <Maximize className="w-4 h-4 text-gold" />
                        <span className="text-sm font-semibold">{selectedRoom.size}</span>
                      </div>
                    </div>
                    <div className="rounded-xl bg-cream p-4">
                      <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Occupancy</p>
                      <div className="flex items-center gap-2 text-navy-900">
                        <Users className="w-4 h-4 text-gold" />
                        <span className="text-sm font-semibold">{selectedRoom.occupancy}</span>
                      </div>
                    </div>
                  </div>

                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gold mb-3">
                    Included Amenities
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {selectedRoom.amenities.map((amenity, index) => {
                      const AmenityIcon = amenityIcons[index % amenityIcons.length];
                      return (
                        <div key={amenity} className="flex items-center gap-2.5 text-sm text-gray-600">
                          <span className="w-7 h-7 rounded-full bg-cream flex items-center justify-center text-gold">
                            <AmenityIcon className="w-4 h-4" />
                          </span>
                          <span>{amenity}</span>
                          <Check className="w-3.5 h-3.5 text-green-500 ml-auto" />
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={reserveSelectedRoom}
                      className="px-6 py-3 bg-gold text-white rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold-dark transition-colors"
                    >
                      Reserve this Room
                    </button>
                    <button
                      onClick={closeRoomDetails}
                      className="px-6 py-3 border border-navy-900/20 text-navy-900 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-navy-900 hover:text-white transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}