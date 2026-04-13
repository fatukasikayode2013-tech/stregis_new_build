'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface UseIntersectionObserverOptions {
  /**
   * The element that is used as the viewport for checking visibility of the target.
   * null means the browser viewport.
   */
  root?: Element | Document | null;

  /**
   * A margin around the root. Use pixels or percentages (e.g., "100px" or "10%").
   */
  rootMargin?: string;

  /**
   * A threshold value representing the percentage of the target's visibility.
   * Can be a single number or an array of numbers.
   */
  threshold?: number | number[];

  /**
   * If true, the observer will only trigger once.
   */
  freezeOnceVisible?: boolean;
}

interface UseIntersectionObserverReturn {
  /**
   * A ref to attach to the element you want to observe.
   */
  ref: React.RefObject<Element>;

  /**
   * Whether the element is currently intersecting with the viewport.
   */
  isIntersecting: boolean;

  /**
   * The IntersectionObserverEntry returned by the observer.
   */
  entry?: IntersectionObserverEntry;
}

/**
 * A custom hook that uses the Intersection Observer API to detect when an element
 * enters the viewport. Useful for scroll animations, lazy loading, and more.
 *
 * @example
 * ```tsx
 * const { ref, isIntersecting } = useIntersectionObserver({
 *   threshold: 0.1,
 *   rootMargin: '0px 0px -100px 0px'
 * });
 *
 * return (
 *   <div ref={ref} className={isIntersecting ? 'animate-in' : 'opacity-0'}>
 *     Content
 *   </div>
 * );
 * ```
 */
export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
): UseIntersectionObserverReturn {
  const {
    root = null,
    rootMargin = '0px',
    threshold = 0,
    freezeOnceVisible = false,
  } = options;

  const ref = useRef<Element>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const observerCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [firstEntry] = entries;

      if (!firstEntry) return;

      setEntry(firstEntry);

      if (freezeOnceVisible && firstEntry.isIntersecting) {
        setIsIntersecting(true);
        // Don't unobserve - just stop updating state
        return;
      }

      setIsIntersecting(firstEntry.isIntersecting);
    },
    [freezeOnceVisible]
  );

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(observerCallback, {
      root,
      rootMargin,
      threshold,
    });

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [ref, root, rootMargin, threshold, observerCallback]);

  return { ref, isIntersecting, entry };
}

/**
 * A simplified hook for scroll-triggered animations.
 * Returns a ref and a boolean indicating if the element has been seen.
 */
export function useScrollAnimation(
  options: Omit<UseIntersectionObserverOptions, 'freezeOnceVisible'> = {}
): UseIntersectionObserverReturn {
  return useIntersectionObserver({
    ...options,
    freezeOnceVisible: true,
  });
}