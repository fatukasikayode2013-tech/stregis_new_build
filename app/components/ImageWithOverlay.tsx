'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ImageWithOverlayProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
  overlayOpacity?: number;
  hoverScale?: number;
}

export default function ImageWithOverlay({
  src,
  alt,
  width,
  height,
  fill = false,
  className = '',
  priority = false,
  sizes,
  overlayOpacity = 0.15,
  hoverScale = 1.05,
}: ImageWithOverlayProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <motion.div
        className="relative"
        style={{ width: fill ? '100%' : width, height: fill ? '100%' : height }}
        animate={{ scale: isHovered ? hoverScale : 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Image
          src={src}
          alt={alt}
          fill={fill}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          className={`object-cover transition-all duration-700 ${
            !isLoaded ? 'blur-sm' : 'blur-0'
          }`}
          priority={priority}
          sizes={sizes}
          onLoad={() => setIsLoaded(true)}
        />
      </motion.div>

      {/* Professional overlay for consistent tone */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(
            135deg,
            rgba(30, 58, 95, ${overlayOpacity}) 0%,
            rgba(201, 169, 97, ${overlayOpacity * 0.5}) 50%,
            rgba(30, 58, 95, ${overlayOpacity}) 100%
          )`,
          opacity: isHovered ? 0.8 : 1,
          transition: 'opacity 0.5s ease',
        }}
      />

      {/* Subtle vignette effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.3) 100%)',
        }}
      />

      {/* Loading placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  );
}