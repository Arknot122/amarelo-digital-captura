import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import MobileMenu from "@/components/MobileMenu";
import ScrollProgress from "@/components/ScrollProgress";
import { useEffect, useState } from "react";
import logoMp from "/lovable-uploads/98dbab30-f857-42b8-bb8c-fd6299b9718e.png";
const Header = () => {
  const {
    scrollY
  } = useScrollAnimation();
  const [logoLoaded, setLogoLoaded] = useState(false);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  const headerOpacity = Math.min(scrollY / 100, 0.95);
  const headerBlur = Math.min(scrollY / 10, 20);
  const navigationItems = [{
    id: "home",
    label: "Home"
  }, {
    id: "servicos",
    label: "Serviços"
  }, {
    id: "clientes",
    label: "Clientes"
  }, {
    id: "contato",
    label: "Contato"
  }];
  useEffect(() => {
    // Pré-carrega a imagem
    const img = new Image();
    img.src = logoMp;
    img.onload = () => setLogoLoaded(true);
    img.onerror = e => console.error('Erro ao carregar logo:', e);
  }, []);
  return <>
      <ScrollProgress />
      <motion.header className="fixed top-0 w-full border-b border-border bg-white z-50 transition-all duration-300" initial={{
      y: -100
    }} animate={{
      y: 0
    }} transition={{
      duration: 0.6,
      ease: "easeOut"
    }}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo - centered on mobile, left on desktop */}
            <div className="flex-1 md:flex-initial">
              <motion.div className="flex items-center justify-center md:justify-start" whileHover={{
              scale: 1.05
            }} transition={{
              duration: 0.2
            }}>
                <motion.img src={logoMp} alt="MIP Assessoria Digital" className={`h-18 sm:h-20 md:h-24 w-auto object-contain ${!logoLoaded ? 'opacity-0' : 'opacity-100'}`} whileHover={{
                rotate: 5
              }} transition={{
                duration: 0.3
              }} onLoad={() => {
                console.log('Logo carregada com sucesso');
                setLogoLoaded(true);
              }} onError={e => {
                console.error('Erro ao carregar logo no header:', e);
                const img = e.currentTarget;
                img.onerror = null; // previne loop infinito
                img.src = '/placeholder.svg'; // usa placeholder como fallback
              }} />
              </motion.div>
            </div>
            
            {/* Navigation - hidden on small screens, visible on medium+ */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item, index) => <motion.button key={item.id} onClick={() => scrollToSection(item.id)} whileHover={{
              scale: 1.1
            }} initial={{
              opacity: 0,
              y: -20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.3,
              delay: index * 0.1
            }} className="transition-colors relative text-sm lg:text-base font-medium text-black hover:text-gray-600">
                  {item.label}
                </motion.button>)}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Desktop CTA Button */}
              <motion.div className="hidden md:block" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <Button onClick={() => scrollToSection("contato")} variant="hero" size="lg" className="shadow-glow text-sm lg:text-base">
                  Fale Conosco
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.header>
    </>;
};
export default Header;