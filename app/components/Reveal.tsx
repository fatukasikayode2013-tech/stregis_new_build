'use client';

import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  once?: boolean;
}

const variants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
};

/**
 * Reveal component for scroll-triggered animations using Framer Motion.
 * Provides smooth entrance animations when elements come into view.
 */
export function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.8,
  once = true,
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    margin: '-80px',
    amount: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {
          opacity: 0,
          ...(direction === 'up' && { y: 60 }),
          ...(direction === 'down' && { y: -60 }),
          ...(direction === 'left' && { x: -60 }),
          ...(direction === 'right' && { x: 60 }),
        },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: {
            duration,
            delay,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggeredReveal component for animating multiple children with staggered delays.
 */
interface StaggeredRevealProps {
  children: React.ReactNode[];
  className?: string;
  delayBetween?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
}

export function StaggeredReveal({
  children,
  className = '',
  delayBetween = 0.1,
  direction = 'up',
  duration = 0.6,
}: StaggeredRevealProps) {
  return (
    <>
      {children.map((child, index) => (
        <Reveal
          key={index}
          delay={index * delayBetween}
          direction={direction}
          duration={duration}
          className={className}
        >
          {child}
        </Reveal>
      ))}
    </>
  );
}