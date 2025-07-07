import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const AnimatedCard = ({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up' 
}: AnimatedCardProps) => {
  const { ref, inView } = useScrollAnimation();

  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: 50, x: 0 };
      case 'down': return { y: -50, x: 0 };
      case 'left': return { y: 0, x: 50 };
      case 'right': return { y: 0, x: -50 };
      default: return { y: 50, x: 0 };
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      ...getInitialPosition(),
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75] as const,
      },
    },
  };

  const hoverVariants = {
    scale: 1.05,
    y: -10,
    rotateX: 5,
    rotateY: 5,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.25, 0.25, 0.75] as const,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={hoverVariants}
      whileTap={{ scale: 0.98 }}
      variants={cardVariants}
      className={cn(
        "cursor-pointer transform-gpu perspective-1000",
        className
      )}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;