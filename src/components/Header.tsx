
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import MobileMenu from "@/components/MobileMenu";
import ScrollProgress from "@/components/ScrollProgress";

const Header = () => {
  const { scrollY } = useScrollAnimation();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  
  const headerOpacity = Math.min(scrollY / 100, 0.95);
  const headerBlur = Math.min(scrollY / 10, 20);
  
  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "servicos", label: "Serviços" },
    { id: "clientes", label: "Clientes" },
    { id: "contato", label: "Contato" }
  ];

  return (
    <>
      <ScrollProgress />
      <motion.header 
        className="fixed top-0 w-full border-b border-border bg-background/95 backdrop-blur-md z-50 transition-all duration-300"
        initial={{ y: -100 }} 
        animate={{ y: 0 }} 
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo - centered on mobile, left on desktop */}
            <div className="flex-shrink-0">
              <motion.div 
                className="flex items-center" 
                whileHover={{ scale: 1.05 }} 
                transition={{ duration: 0.2 }}
              >
                <picture>
                  <source srcSet="/mp-logo-center.webp" type="image/webp" />
                  <motion.img 
                    src="/mp-logo-center.png"
                    alt="MIP Assessoria Digital"
                    className="h-8 sm:h-10 md:h-12 w-auto object-contain"
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    onError={(e) => {
                      console.error('Erro ao carregar logo no header:', e);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </picture>
              </motion.div>
            </div>
            
            {/* Navigation - hidden on small screens, visible on medium+ */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-black hover:text-primary transition-colors relative text-sm lg:text-base font-medium"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Desktop CTA Button */}
              <motion.div 
                className="hidden md:block"
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => scrollToSection("contato")} 
                  variant="hero" 
                  size="lg" 
                  className="shadow-glow text-sm lg:text-base"
                >
                  Fale Conosco
                </Button>
              </motion.div>
              
              {/* Mobile Menu */}
              <MobileMenu onNavigate={scrollToSection} />
            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
