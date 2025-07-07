import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import MobileMenu from "@/components/MobileMenu";
import ScrollProgress from "@/components/ScrollProgress";
import { removeBackground, loadImage } from "@/utils/backgroundRemoval";
import { useEffect, useState } from "react";

const Header = () => {
  const { scrollY } = useScrollAnimation();
  const [logoWithoutBg, setLogoWithoutBg] = useState<string | null>(null);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const processLogo = async () => {
      try {
        // Load the original logo
        const response = await fetch('/mp-logo-center.png');
        const blob = await response.blob();
        const img = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(img);
        const processedUrl = URL.createObjectURL(processedBlob);
        setLogoWithoutBg(processedUrl);
      } catch (error) {
        console.error('Error processing logo:', error);
      }
    };

    processLogo();
  }, []);

  const headerOpacity = Math.min(scrollY / 100, 0.95);
  const headerBlur = Math.min(scrollY / 10, 20);

  return (
    <>
      <ScrollProgress />
      <motion.header 
        className="fixed top-0 w-full border-b border-gray-200 z-50 transition-all duration-300"
        style={{
          backgroundColor: `rgba(255, 255, 255, ${headerOpacity})`,
          backdropFilter: `blur(${headerBlur}px)`,
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Espaço vazio para manter layout */}
            <div className="flex-1"></div>
            
            {/* Logo centralizada */}
            <motion.div 
              className="flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.img 
                src={logoWithoutBg || "/mp-logo-center.png"}
                alt="MP Assessoria Digital"
                className="h-12 w-auto object-contain"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
                onError={(e) => {
                  console.error('Erro ao carregar logo:', e);
                  e.currentTarget.style.display = 'none';
                }}
              />
            </motion.div>
            
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { id: "home", label: "Home" },
                { id: "servicos", label: "Serviços" },
                { id: "clientes", label: "Clientes" },
                { id: "contato", label: "Contato" },
              ].map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-primary transition-colors relative"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item.label}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              ))}
            </nav>

            <div className="flex items-center space-x-4 flex-1 justify-end">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => scrollToSection("contato")}
                  variant="hero" 
                  size="lg"
                  className="hidden md:flex shadow-glow"
                >
                  Fale Conosco
                </Button>
              </motion.div>
              
              <MobileMenu onNavigate={scrollToSection} />
            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
};

export default Header;