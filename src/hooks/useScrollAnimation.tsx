import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const { ref, inView, entry } = useInView({
    threshold,
    rootMargin,
    triggerOnce,
  });

  useEffect(() => {
    const updateScroll = () => {
      const scroll = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scroll / maxScroll, 1);
      
      setScrollY(scroll);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScroll, { passive: true });
    updateScroll();

    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return {
    ref,
    inView,
    entry,
    scrollY,
    scrollProgress,
  };
};

export const useParallax = (speed: number = 0.5) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * speed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return offsetY;
};

export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};