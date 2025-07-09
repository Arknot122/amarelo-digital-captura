import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import FullTypewriter from "@/components/FullTypewriter";
import ParticleSystem from "@/components/ParticleSystem";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";

const Hero = () => {
  const { scrollProgress } = useScrollAnimation();
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(0, 0, 0)"
        gradientBackgroundEnd="rgb(15, 17, 21)"
        firstColor="255, 237, 36"
        secondColor="255, 193, 7"
        thirdColor="255, 235, 59"
        fourthColor="255, 241, 118"
        fifthColor="255, 238, 88"
        pointerColor="255, 237, 36"
        size={isMobile ? "60%" : "80%"}
        blendingValue="multiply"
        containerClassName="absolute inset-0"
        interactive={!isMobile}
      />
      
      <ParticleSystem count={isMobile ? 15 : 30} className="opacity-60" />
      
      <motion.div 
        className="relative z-10 min-h-screen flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div 
            className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.h1 
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl text-center break-words"
              style={{
                filter: `brightness(${1 + scrollProgress * 0.2})`,
              }}
            >
            <FullTypewriter 
              fullText="Pare de perder tempo com Agências de Marketing, sua EMPRESA precisa de uma ASSESSORIA DIGITAL!"
              highlightWords={[
                { word: "EMPRESA", className: "bg-gradient-to-r from-primary to-yellow-300 bg-clip-text text-transparent" },
                { word: "ASSESSORIA", className: "bg-gradient-to-r from-primary to-yellow-300 bg-clip-text text-transparent" },
                { word: "DIGITAL!", className: "bg-gradient-to-r from-primary to-yellow-300 bg-clip-text text-transparent" }
              ]}
                speed={isMobile ? 120 : 100}
              />
            </motion.h1>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: isMobile ? 14.5 : 10.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => scrollToSection("contato")}
                  variant="hero" 
                  size="xl"
                  className="w-full sm:w-auto shadow-2xl hover:shadow-glow"
                >
                  Solicitar Orçamento
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => scrollToSection("servicos")}
                  variant="outline" 
                  size="xl"
                  className="w-full sm:w-auto bg-white/10 border-primary/50 text-white hover:bg-primary hover:text-primary-foreground backdrop-blur-md shadow-2xl"
                >
                  Conhecer Serviços
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.button 
          onClick={() => scrollToSection("servicos")}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary hover:text-primary/80 transition-colors drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 4, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
          whileHover={{ scale: 1.2, y: -5 }}
        >
          <ArrowDown size={32} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;