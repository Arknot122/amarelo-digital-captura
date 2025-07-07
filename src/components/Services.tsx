import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedCard from "@/components/AnimatedCard";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Services = () => {
  const { ref, inView } = useScrollAnimation();
  
  const services = [
    {
      title: "Gestão de Tráfego",
      description: "Campanhas otimizadas no Google Ads, Facebook e Instagram para maximizar seu ROI",
      features: ["Google Ads", "Facebook Ads", "Instagram Ads", "Otimização de Campanhas"],
      icon: "📊"
    },
    {
      title: "CRM",
      description: "Implementação e gestão de sistemas CRM para organizar e converter seus leads",
      features: ["Configuração de CRM", "Automação de Vendas", "Pipeline de Vendas", "Relatórios"],
      icon: "💼"
    },
    {
      title: "Treinamento Comercial",
      description: "Capacitação da sua equipe de vendas com técnicas modernas e eficazes",
      features: ["Técnicas de Vendas", "Abordagem Digital", "Scripts de Vendas", "Acompanhamento"],
      icon: "🎯"
    },
    {
      title: "Automações e IA",
      description: "Implementação de chatbots e automações inteligentes para otimizar processos",
      features: ["Chatbots", "Automação WhatsApp", "IA Conversacional", "Workflows"],
      icon: "🤖"
    },
    {
      title: "Produção de Conteúdo",
      description: "Criação de conteúdo estratégico para redes sociais e marketing digital",
      features: ["Posts para Redes Sociais", "Copy para Anúncios", "E-mail Marketing", "Blog Posts"],
      icon: "✨"
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
              <Card className="h-full group border-border/50 hover:border-primary/30 backdrop-blur-sm bg-card/95 hover:bg-card transition-all duration-500 hover:shadow-glow">
                <CardHeader className="text-center">
                  <motion.div 
                    className="text-6xl mb-4"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    {service.icon}
                  </motion.div>
                  <CardTitle className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <ul className="space-y-2 mb-6 flex-grow">
                    {service.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-center text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.2) + (idx * 0.1) + 0.5 }}
                      >
                        <motion.span 
                          className="w-2 h-2 bg-primary rounded-full mr-3"
                          whileHover={{ scale: 1.5 }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      onClick={() => scrollToSection("contato")}
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    >
                      Saiba Mais
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
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