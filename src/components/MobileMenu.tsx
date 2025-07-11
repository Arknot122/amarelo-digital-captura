
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useViewport } from '@/hooks/useViewport';

interface MobileMenuProps {
  onNavigate: (section: string) => void;
}

const MobileMenu = ({ onNavigate }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = useViewport();

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'clientes', label: 'Clientes' },
    { id: 'contato', label: 'Contato' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
        ease: [0.25, 0.25, 0.25, 0.75] as const,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.25, 0.25, 0.75] as const,
      },
    },
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  const handleItemClick = (section: string) => {
    onNavigate(section);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button - visible on all screen sizes for better accessibility */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-[80] md:hidden p-2 text-foreground hover:text-primary border-border/50 hover:border-primary/50"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <X size={20} className="text-foreground" /> : <Menu size={20} className="text-foreground" />}
        </motion.div>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-md z-[60] md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 h-full w-72 sm:w-80 bg-card/95 backdrop-blur-xl border-l border-border z-[70] md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full pt-20 px-6">
                <motion.div
                  initial="closed"
                  animate="open"
                  exit="closed"
                  transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
                  className="space-y-4"
                >
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      variants={itemVariants}
                      onClick={() => handleItemClick(item.id)}
                      className="block w-full text-left py-4 px-4 text-lg font-semibold text-foreground hover:text-primary transition-colors border-b border-border/30 hover:border-primary/50 rounded-lg hover:bg-primary/5"
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="mt-8"
                >
                  <Button
                    onClick={() => handleItemClick('contato')}
                    variant="hero"
                    size="lg"
                    className="w-full text-base font-semibold"
                  >
                    Fale Conosco
                  </Button>
                </motion.div>

                {/* Decorative gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
