import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Button as MovingButton } from "@/components/ui/moving-border";
import AnimatedCard from "@/components/AnimatedCard";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TrendingUp, Users, Target, Bot, Sparkles } from "lucide-react";

const Services = () => {
  const { ref, inView } = useScrollAnimation();
  
  const services = [
    {
      title: "Gestão de Tráfego",
      description: "Campanhas otimizadas no Google Ads, Facebook e Instagram para maximizar seu ROI",
      features: ["Google Ads", "Facebook Ads", "Instagram Ads", "Otimização de Campanhas"],
      icon: TrendingUp,
      gradient: "from-primary/20 to-accent/20"
    },
    {
      title: "CRM",
      description: "Implementação e gestão de sistemas CRM para organizar e converter seus leads",
      features: ["Configuração de CRM", "Automação de Vendas", "Pipeline de Vendas", "Relatórios"],
      icon: Users,
      gradient: "from-blue-500/20 to-primary/20"
    },
    {
      title: "Treinamento Comercial",
      description: "Capacitação da sua equipe de vendas com técnicas modernas e eficazes",
      features: ["Técnicas de Vendas", "Abordagem Digital", "Scripts de Vendas", "Acompanhamento"],
      icon: Target,
      gradient: "from-green-500/20 to-primary/20"
    },
    {
      title: "Automações e IA",
      description: "Implementação de chatbots e automações inteligentes para otimizar processos",
      features: ["Chatbots", "Automação WhatsApp", "IA Conversacional", "Workflows"],
      icon: Bot,
      gradient: "from-purple-500/20 to-primary/20"
    },
    {
      title: "Produção de Conteúdo",
      description: "Criação de conteúdo estratégico para redes sociais e marketing digital",
      features: ["Posts para Redes Sociais", "Copy para Anúncios", "E-mail Marketing", "Blog Posts"],
      icon: Sparkles,
      gradient: "from-pink-500/20 to-primary/20"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="servicos" className="py-24 bg-background relative overflow-hidden">
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
            Nossos <span className="bg-gradient-primary bg-clip-text text-transparent">Serviços</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Soluções completas para transformar sua presença digital e acelerar seus resultados
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedCard 
              key={index}
              delay={index * 0.2}
              className="h-full"
            >
              <motion.div
                className="h-full relative group"
                whileHover={{ 
                  rotateX: 5,
                  rotateY: 5,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <MovingButton
                  borderRadius="2rem"
                  className="h-full w-full bg-background/10 backdrop-blur-xl border-0 text-foreground relative overflow-hidden"
                  containerClassName="h-full w-full"
                  duration={4000 + index * 1000}
                  borderClassName="h-24 w-24 opacity-60 bg-[radial-gradient(hsl(var(--primary))_40%,hsl(var(--neon-cyan))_60%,transparent_80%)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-background/20 via-card/30 to-background/20 backdrop-blur-xl" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Glassmorphism card content */}
                  <div className="relative z-10 h-full flex flex-col p-6">
                    <div className="text-center mb-6">
                      <motion.div 
                        className="mb-4 flex justify-center"
                        whileHover={{ 
                          scale: 1.3,
                          rotateZ: 360,
                          transition: { duration: 0.8 }
                        }}
                      >
                        <div className="p-4 rounded-3xl bg-gradient-neon/20 backdrop-blur-sm border border-primary/20 shadow-neon group-hover:shadow-cyber transition-all duration-500">
                          <service.icon 
                            size={32} 
                            className="text-primary group-hover:text-foreground drop-shadow-glow transition-all duration-300" 
                          />
                        </div>
                      </motion.div>
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    
                    <ul className="space-y-3 mb-6 flex-grow">
                      {service.features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-center text-sm text-muted-foreground"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (index * 0.2) + (idx * 0.1) + 0.5 }}
                        >
                          <motion.div 
                            className="w-2 h-2 rounded-full mr-3 bg-gradient-tech shadow-neon"
                            whileHover={{ scale: 1.8, rotate: 180 }}
                            transition={{ duration: 0.3 }}
                          />
                          <span className="group-hover:text-foreground transition-colors duration-300">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <button 
                        onClick={() => scrollToSection("contato")}
          className="w-full py-3 px-6 rounded-xl bg-primary text-primary-foreground font-medium border border-primary/30 backdrop-blur-sm hover:shadow-glow hover:border-primary/60 transition-all duration-300 text-sm"
                      >
                        Explorar Serviço
                      </button>
                    </motion.div>
                  </div>
                </MovingButton>
              </motion.div>
            </AnimatedCard>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={() => scrollToSection("contato")}
              variant="cta" 
              size="xl"
              className="shadow-glow hover:shadow-2xl transition-all duration-300"
            >
              Solicitar Proposta Personalizada
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;