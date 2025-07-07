import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

interface ParticleSystemProps {
  count?: number;
  className?: string;
}

const ParticleSystem = ({ count = 20, className = '' }: ParticleSystemProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particlesRef.current = Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1,
      }));
    };

    const updateParticles = () => {
      particlesRef.current.forEach((particle) => {
        // Mouse attraction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100 && distance > 0) {
          const force = (100 - distance) / 100;
          particle.vx += (dx / distance) * force * 0.01;
          particle.vy += (dy / distance) * force * 0.01;
        }

        particle.x += particle.vx;
        particle.y += particle.vy;

        // Boundary conditions with finite value checks
        if (!isFinite(particle.x) || particle.x < 0 || particle.x > canvas.width) {
          particle.x = Math.max(0, Math.min(canvas.width, Math.random() * canvas.width));
          particle.vx *= -1;
        }
        if (!isFinite(particle.y) || particle.y < 0 || particle.y > canvas.height) {
          particle.y = Math.max(0, Math.min(canvas.height, Math.random() * canvas.height));
          particle.vy *= -1;
        }

        // Damping with finite checks
        if (isFinite(particle.vx)) particle.vx *= 0.99;
        if (isFinite(particle.vy)) particle.vy *= 0.99;
      });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach((particle) => {
        // Ensure finite values for gradient
        if (!isFinite(particle.x) || !isFinite(particle.y) || !isFinite(particle.size)) {
          return;
        }
        
        // Create gradient for particle
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, Math.max(1, particle.size * 2)
        );
        gradient.addColorStop(0, `hsla(55, 100%, 58%, ${particle.opacity})`);
        gradient.addColorStop(1, `hsla(45, 100%, 65%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections
      particlesRef.current.forEach((particle, i) => {
        particlesRef.current.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const opacity = (100 - distance) / 100 * 0.2;
            ctx.strokeStyle = `hsla(55, 100%, 58%, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default ParticleSystem;
