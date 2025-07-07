import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ContactInfo from "./contact/ContactInfo";
import ContactGuarantee from "./contact/ContactGuarantee";

const Contact = () => {
  const { ref, inView } = useScrollAnimation();

  const openWhatsApp = () => {
    const phone = "5511999999999"; // Replace with actual WhatsApp number
    const message = "Olá! Gostaria de saber mais sobre os serviços da MP Assessoria Digital.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section 
      id="contato" 
      className="relative py-24 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 50%, hsl(var(--yellow-bright) / 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, hsl(var(--yellow-warm) / 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, hsl(var(--yellow-soft) / 0.1) 0%, transparent 50%),
          linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--bg-secondary)) 100%)
        `
      }}
    >
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--yellow-bright) / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--yellow-bright) / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <motion.div 
        ref={ref}
        className="container mx-auto px-4 relative z-10"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            Entre em <span className="bg-gradient-primary bg-clip-text text-transparent">Contato</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Pronto para transformar seu negócio digital? Vamos conversar sobre como podemos ajudar!
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div variants={itemVariants}>
              <ContactInfo onWhatsAppClick={openWhatsApp} />
            </motion.div>
            <motion.div variants={itemVariants}>
              <ContactGuarantee />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;