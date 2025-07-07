import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Building2, Facebook, Chrome, ShoppingBag } from "lucide-react";

const Partners = () => {
  const { ref, inView } = useScrollAnimation();
  
  const partners = [
    {
      name: "Kommo",
      icon: Building2,
      description: "CRM e Automação"
    },
    {
      name: "Meta Ads",
      icon: Facebook,
      description: "Publicidade Digital"
    },
    {
      name: "Google Partner",
      icon: Chrome,
      description: "Parceiro Certificado"
    },
    {
      name: "Shopify",
      icon: ShoppingBag,
      description: "E-commerce"
    }
  ];

  return (
    <section id="parceiros" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Nossos <span className="bg-gradient-primary bg-clip-text text-transparent">Parceiros</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Trabalhamos com as melhores plataformas para oferecer resultados excepcionais
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl p-6 text-center h-full transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg group-hover:bg-card/70">
                <motion.div 
                  className="mb-4 flex justify-center"
                  whileHover={{ 
                    scale: 1.2,
                    rotateZ: 360,
                    transition: { duration: 0.6 }
                  }}
                >
                  <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-all duration-300">
                    <partner.icon 
                      size={32} 
                      className="text-primary group-hover:text-foreground transition-colors duration-300" 
                    />
                  </div>
                </motion.div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {partner.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {partner.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;