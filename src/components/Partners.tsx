import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button as MovingButton } from "@/components/ui/moving-border";
import kommoLogo from "@/assets/kommo-logo.png";
import metaLogo from "@/assets/meta-logo.png";
import shopifyLogo from "@/assets/shopify-logo.png";

const Partners = () => {
  const { ref, inView } = useScrollAnimation();
  
  const partners = [
    {
      name: "Kommo",
      logo: kommoLogo,
      description: "CRM e Automação"
    },
    {
      name: "Meta Ads",
      logo: metaLogo,
      description: "Publicidade Digital"
    },
    {
      name: "Shopify",
      logo: shopifyLogo,
      description: "E-commerce"
    }
  ];

  return (
    <section id="parceiros" className="relative py-24 overflow-hidden" style={{
      background: `
        radial-gradient(circle at 20% 50%, hsl(var(--yellow-bright) / 0.15) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, hsl(var(--yellow-warm) / 0.1) 0%, transparent 50%),
        radial-gradient(circle at 40% 80%, hsl(var(--yellow-soft) / 0.1) 0%, transparent 50%),
        linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--bg-secondary)) 100%)
      `
    }}>
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(hsl(var(--yellow-bright) / 0.1) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--yellow-bright) / 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }} />
      </div>
      
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
              className="group h-full"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div
                className="h-full relative"
                whileHover={{ 
                  rotateX: 2,
                  rotateY: 2,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <MovingButton
                  borderRadius="1.5rem"
                  className="h-full w-full bg-background/10 backdrop-blur-xl border-0 text-foreground relative overflow-hidden"
                  containerClassName="h-full w-full"
                  duration={3000 + index * 800}
                  borderClassName="h-20 w-20 opacity-[0.8] bg-[radial-gradient(hsl(var(--primary))_40%,transparent_60%)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-background/30 via-card/40 to-background/30 backdrop-blur-xl" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
                    <motion.div 
                      className="mb-4 flex justify-center"
                      whileHover={{ 
                        scale: 1.1,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <div className="h-16 w-auto flex items-center justify-center">
                        <img 
                          src={partner.logo} 
                          alt={`${partner.name} logo`}
                          className="max-h-12 max-w-full object-contain filter group-hover:brightness-110 transition-all duration-300"
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
                </MovingButton>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;