import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import MobileMenu from "@/components/MobileMenu";
import ScrollProgress from "@/components/ScrollProgress";
const Header = () => {
  const {
    scrollY
  } = useScrollAnimation();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  const headerOpacity = Math.min(scrollY / 100, 0.95);
  const headerBlur = Math.min(scrollY / 10, 20);
  return <>
      <ScrollProgress />
      <motion.header className="fixed top-0 w-full border-b border-border z-50 transition-all duration-300" style={{
      backgroundColor: `hsla(var(--background) / ${headerOpacity})`,
      backdropFilter: `blur(${headerBlur}px)`
    }} initial={{
      y: -100
    }} animate={{
      y: 0
    }} transition={{
      duration: 0.6,
      ease: "easeOut"
    }}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.div className="flex items-center space-x-2" whileHover={{
            scale: 1.05
          }} transition={{
            duration: 0.2
          }}>
              <picture>
                <source srcSet="/mp-logo-center.webp" type="image/webp" />
                <motion.img 
                  src="/mp-logo-center.png"
                  alt="MIP Assessoria Digital"
                  className="h-12 w-auto object-contain"
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  onError={(e) => {
                    console.error('Erro ao carregar logo no header:', e);
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </picture>
            </motion.div>
            
            <nav className="hidden md:flex items-center space-x-8">
              {[{
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
            }].map((item, index) => <motion.button key={item.id} onClick={() => scrollToSection(item.id)} className="text-foreground hover:text-primary transition-colors relative" whileHover={{
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
            }}>
                  {item.label}
                  
                </motion.button>)}
            </nav>

            <div className="flex items-center space-x-4">
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <Button onClick={() => scrollToSection("contato")} variant="hero" size="lg" className="hidden md:flex shadow-glow">
                  Fale Conosco
                </Button>
              </motion.div>
              
              <MobileMenu onNavigate={scrollToSection} />
            </div>
          </div>
        </div>
      </motion.header>
    </>;
};
export default Header;