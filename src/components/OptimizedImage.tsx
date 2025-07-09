import { useLazyImage } from '@/hooks/useLazyImage';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  fallback, 
  width, 
  height, 
  priority = false 
}: OptimizedImageProps) => {
  const { imageSrc, imageRef, isLoaded } = useLazyImage({ 
    src: priority ? src : src, 
    fallback 
  });

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-muted animate-pulse"
          style={{ width, height }}
        />
      )}
      <img
        ref={priority ? undefined : imageRef}
        src={priority ? src : imageSrc}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          "transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    </div>
  );
};

export default OptimizedImage;