import { Card, CardContent } from "@/components/ui/card";
import { Button as MovingButton } from "@/components/ui/moving-border";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Clients = () => {
  const { ref, inView } = useScrollAnimation();
  
  const clients = [
    { name: "TechCorp", sector: "Tecnologia", result: "+150% conversões", gradient: "from-yellow-bright/20 to-yellow-warm/20" },
    { name: "BeautyBrand", sector: "Beleza", result: "+200% vendas online", gradient: "from-yellow-soft/20 to-yellow-light/20" },
    { name: "FitLife", sector: "Fitness", result: "+300% leads qualificados", gradient: "from-yellow-gold/20 to-yellow-bright/20" },
    { name: "EduPlatform", sector: "Educação", result: "+180% matrículas", gradient: "from-yellow-amber/20 to-primary/20" },
    { name: "FoodChain", sector: "Alimentício", result: "+120% delivery", gradient: "from-yellow-warm/20 to-yellow-soft/20" },
    { name: "HealthCare", sector: "Saúde", result: "+90% agendamentos", gradient: "from-yellow-light/20 to-yellow-gold/20" }
  ];

  const testimonials = [
    {
      name: "Isabela Teles",
      company: "Master Carnes",
      text: "A MP Assessoria transformou completamente nossa estratégia digital. Resultados incríveis em apenas 3 meses!",
      image: "👩‍💼"
    },
    {
      name: "Nilton César",
      company: "Motel Solarium", 
      text: "Profissionais excepcionais! Dobrou nossa receita online com campanhas muito bem estruturadas.",
      image: "👨‍💼"
    },
    {
      name: "Henrique Sá",
      company: "Hotel Areião",
      text: "O CRM implementado pela equipe organizou todo nosso processo de vendas. Recomendo fortemente!",
      image: "👨‍🏫"
    }
  ];

  return (
    <section id="clientes" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos <span className="bg-gradient-primary bg-clip-text text-transparent">Clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empresas que confiam em nosso trabalho e obtêm resultados extraordinários
          </p>
        </div>

        {/* Resultados dos Clientes - Holographic Cards */}
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, rotateY: 45 }}
              animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.9, rotateY: 45 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <MovingButton
                borderRadius="1.5rem"
                className="h-full w-full bg-background/5 backdrop-blur-xl border-0 text-center relative overflow-hidden"
                containerClassName="h-48 w-full"
                duration={3000 + index * 500}
                borderClassName={`h-20 w-20 opacity-70 bg-gradient-to-r ${client.gradient}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-background/30 via-card/20 to-background/30 backdrop-blur-xl" />
                <div className={`absolute inset-0 bg-gradient-to-br ${client.gradient} opacity-0 hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10 h-full flex flex-col justify-center items-center p-6">
                  <motion.h3 
                    className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    {client.name}
                  </motion.h3>
                  <p className="text-muted-foreground mb-4 text-sm">{client.sector}</p>
                  <motion.div 
                    className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {client.result}
                  </motion.div>
                  
                  {/* Tech decoration */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-primary rounded-full animate-pulse" />
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-primary rounded-full animate-pulse delay-300" />
                </div>
              </MovingButton>
            </motion.div>
          ))}
        </motion.div>

        {/* Depoimentos - Floating Testimonial Bubbles */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.h3 
            className="text-3xl font-bold text-center text-foreground mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Experiências <span className="bg-gradient-primary bg-clip-text text-transparent">Transformadoras</span>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 60, rotateX: 30 }}
                animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 60, rotateX: 30 }}
                transition={{ delay: 1.2 + index * 0.2, duration: 0.8 }}
                whileHover={{ 
                  y: -10,
                  rotateZ: 2,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Floating bubble effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-yellow-warm/10 rounded-3xl blur-xl scale-110" />
                
                <Card className="relative z-10 bg-background/20 backdrop-blur-xl border border-primary/20 hover:border-primary/40 transition-all duration-500 rounded-3xl overflow-hidden shadow-glow hover:shadow-glow">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <motion.div 
                        className="text-6xl mb-4"
                        whileHover={{ 
                          scale: 1.3,
                          rotate: 360,
                          transition: { duration: 0.6 }
                        }}
                      >
                        {testimonial.image}
                      </motion.div>
                      <h4 className="font-bold text-foreground text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                    </div>
                    
                    <p className="text-muted-foreground italic leading-relaxed mb-6">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="flex justify-center">
                      {[...Array(5)].map((_, i) => (
                        <motion.span 
                          key={i} 
                          className="text-primary text-xl mx-1"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.5 + index * 0.2 + i * 0.1, duration: 0.3 }}
                          whileHover={{ scale: 1.5, rotate: 180 }}
                        >
                          ★
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Logos dos Clientes */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Empresas que confiam em nosso trabalho
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="w-32 h-20 bg-muted/30 border-2 border-dashed border-muted-foreground/30 rounded-lg flex items-center justify-center hover:border-primary/50 transition-colors p-2">
              <img 
                src="/lovable-uploads/ed4b9472-da25-44b3-b69c-51c673e9db24.png" 
                alt="Solarium Logo" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
            {Array.from({ length: 5 }, (_, index) => {
              if (index === 0) {
                return (
                  <div 
                    key={index + 1} 
                    className="w-32 h-20 bg-muted/30 border-2 border-dashed border-muted-foreground/30 rounded-lg flex items-center justify-center hover:border-primary/50 transition-colors p-2"
                  >
                    <img 
                      src="/lovable-uploads/4bd90961-4491-46f6-a557-d80faf467070.png" 
                      alt="Client Logo" 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                );
              }
              if (index === 1) {
                return (
                  <div 
                    key={index + 1} 
                    className="w-32 h-20 bg-muted/30 border-2 border-dashed border-muted-foreground/30 rounded-lg flex items-center justify-center hover:border-primary/50 transition-colors p-2"
                  >
                    <img 
                      src="/lovable-uploads/c419b960-e482-47db-8646-1c304f1bc7ed.png" 
                      alt="Pacheco Logo" 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                );
              }
              if (index === 2) {
                return (
                  <div 
                    key={index + 1} 
                    className="w-32 h-20 bg-muted/30 border-2 border-dashed border-muted-foreground/30 rounded-lg flex items-center justify-center hover:border-primary/50 transition-colors p-2"
                  >
                    <img 
                      src="/lovable-uploads/423d3c30-5ea8-432d-a367-618a70407c3d.png" 
                      alt="Client Logo" 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                );
              }
              return (
                <div 
                  key={index + 1} 
                  className="w-32 h-20 bg-muted/30 border-2 border-dashed border-muted-foreground/30 rounded-lg flex items-center justify-center hover:border-primary/50 transition-colors"
                >
                  <span className="text-xs text-muted-foreground/60 font-medium">LOGO</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;