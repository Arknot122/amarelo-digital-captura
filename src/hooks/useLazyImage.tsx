import { useState, useEffect, useRef } from 'react';

interface UseLazyImageProps {
  src: string;
  fallback?: string;
  threshold?: number;
}

export const useLazyImage = ({ src, fallback, threshold = 0.1 }: UseLazyImageProps) => {
  const [imageSrc, setImageSrc] = useState<string | undefined>(fallback);
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver;
    
    if (imageRef && src) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting && !isInView) {
                setIsInView(true);
                setImageSrc(src);
              }
            });
          },
          { threshold }
        );
        observer.observe(imageRef);
      } else {
        // Fallback for browsers without IntersectionObserver
        setImageSrc(src);
        setIsInView(true);
      }
    }

    return () => {
      if (observer && observer.disconnect) {
        observer.disconnect();
      }
    };
  }, [imageRef, src, threshold, isInView]);

  useEffect(() => {
    if (imageSrc && imageSrc !== fallback) {
      const img = new Image();
      img.onload = () => setIsLoaded(true);
      img.onerror = () => {
        if (fallback) {
          setImageSrc(fallback);
          setIsLoaded(true);
        }
      };
      img.src = imageSrc;
    }
  }, [imageSrc, fallback]);

  return { 
    imageSrc, 
    imageRef: setImageRef, 
    isLoaded, 
    isInView 
  };
};