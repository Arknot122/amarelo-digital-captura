import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ScrollProgress = () => {
  const { scrollProgress } = useScrollAnimation();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-1 bg-gradient-primary origin-left"
      style={{
        scaleX: scrollProgress,
      }}
      initial={{ scaleX: 0 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
    />
  );
};

export default ScrollProgress;