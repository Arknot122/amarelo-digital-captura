import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useParallax } from '@/hooks/useScrollAnimation';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

const ParallaxSection = ({ children, speed = 0.5, className = '' }: ParallaxSectionProps) => {
  const offsetY = useParallax(speed);

  return (
    <motion.div
      className={className}
      style={{
        transform: `translateY(${offsetY}px)`,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 40 }}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxSection;