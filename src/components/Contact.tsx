import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Phone, Mail, Clock, Shield, Headphones } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { ref, inView } = useScrollAnimation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Nossa equipe entrará em contato em breve.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: ""
    });
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulário 3D */}
          <motion.div variants={itemVariants}>
            <MovingBorderButton
              borderRadius="1rem"
              className="bg-transparent p-0 h-auto w-full"
              containerClassName="rounded-xl"
              borderClassName="h-20 w-20 opacity-[0.8] bg-[radial-gradient(hsl(var(--primary))_40%,transparent_60%)]"
            >
              <motion.div
                className="relative bg-gradient-to-br from-background/80 via-card/50 to-background/80 backdrop-blur-xl border border-border/50 rounded-xl p-8 h-full w-full"
                whileHover={{
                  rotateX: 2,
                  rotateY: 2,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-xl" />
                
                <div className="relative z-10">
                  <motion.h3 
                    className="text-2xl font-bold text-foreground mb-2"
                    whileHover={{ color: "hsl(var(--primary))" }}
                  >
                    Solicite uma Proposta
                  </motion.h3>
                  <p className="text-muted-foreground mb-8">
                    Preencha o formulário e nossa equipe entrará em contato
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Nome *
                        </label>
                        <div className="relative">
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Seu nome completo"
                            className="backdrop-blur-sm bg-background/50 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:shadow-lg"
                          />
                        </div>
                      </motion.div>
                      
                      <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          E-mail *
                        </label>
                        <div className="relative">
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="seu@email.com"
                            className="backdrop-blur-sm bg-background/50 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:shadow-lg"
                          />
                          <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Telefone *
                        </label>
                        <div className="relative">
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="(11) 99999-9999"
                            className="backdrop-blur-sm bg-background/50 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:shadow-lg"
                          />
                          <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                      </motion.div>
                      
                      <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                          Empresa
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Nome da sua empresa"
                          className="backdrop-blur-sm bg-background/50 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:shadow-lg"
                        />
                      </motion.div>
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
                      <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                        Serviço de Interesse
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-border/50 rounded-md backdrop-blur-sm bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 hover:shadow-lg"
                      >
                        <option value="">Selecione um serviço</option>
                        <option value="gestao-trafego">Gestão de Tráfego</option>
                        <option value="crm">CRM</option>
                        <option value="treinamento">Treinamento Comercial</option>
                        <option value="automacoes">Automações e IA</option>
                        <option value="conteudo">Produção de Conteúdo</option>
                        <option value="todos">Todos os Serviços</option>
                      </select>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Mensagem
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Conte-nos mais sobre seu projeto..."
                        className="backdrop-blur-sm bg-background/50 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:shadow-lg resize-none"
                      />
                    </motion.div>

                    <MovingBorderButton
                      borderRadius="0.5rem"
                      className="bg-transparent p-0 h-auto w-full"
                      containerClassName="rounded-lg"
                      borderClassName="h-16 w-16 opacity-[0.8] bg-[radial-gradient(hsl(var(--primary))_40%,transparent_60%)]"
                      type="submit"
                      disabled={isLoading}
                    >
                      <motion.div
                        className="bg-gradient-primary text-primary-foreground font-semibold py-3 px-6 rounded-lg w-full h-full flex items-center justify-center transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {isLoading ? "Enviando..." : "Enviar Proposta"}
                      </motion.div>
                    </MovingBorderButton>
                  </form>
                </div>
              </motion.div>
            </MovingBorderButton>
          </motion.div>

          {/* Informações de Contato 3D */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Card Principal de Contato */}
            <MovingBorderButton
              borderRadius="1rem"
              className="bg-transparent p-0 h-auto w-full"
              containerClassName="rounded-xl"
              borderClassName="h-20 w-20 opacity-[0.8] bg-[radial-gradient(hsl(var(--primary))_40%,transparent_60%)]"
            >
              <motion.div
                className="bg-gradient-to-br from-background/80 via-card/50 to-background/80 backdrop-blur-xl border border-border/50 rounded-xl p-8 h-full w-full"
                whileHover={{
                  rotateX: -2,
                  rotateY: -2,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-xl" />
                
                <div className="relative z-10">
                  <motion.h3 
                    className="text-2xl font-bold text-foreground mb-6"
                    whileHover={{ color: "hsl(var(--primary))" }}
                  >
                    Fale Conosco Agora
                  </motion.h3>
                  
                  <div className="space-y-6">
                    <motion.div whileHover={{ x: 10 }}>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center">
                        <Phone className="mr-2 h-4 w-4 text-primary" />
                        WhatsApp
                      </h4>
                      <MovingBorderButton
                        borderRadius="0.5rem"
                        className="bg-transparent p-0 h-auto w-full"
                        containerClassName="rounded-lg"
                        borderClassName="h-14 w-14 opacity-[0.6] bg-[radial-gradient(hsl(var(--primary))_40%,transparent_60%)]"
                        onClick={openWhatsApp}
                      >
                        <motion.div
                          className="bg-gradient-primary text-primary-foreground font-medium py-3 px-4 rounded-lg w-full h-full flex items-center justify-start transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Phone className="mr-2 h-4 w-4" />
                          (11) 99999-9999
                        </motion.div>
                      </MovingBorderButton>
                    </motion.div>
                    
                    <motion.div whileHover={{ x: 10 }}>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center">
                        <Mail className="mr-2 h-4 w-4 text-primary" />
                        E-mail
                      </h4>
                      <p className="text-muted-foreground bg-background/30 backdrop-blur-sm rounded-lg p-3 border border-border/30">
                        contato@mpassessoria.com.br
                      </p>
                    </motion.div>
                    
                    <motion.div whileHover={{ x: 10 }}>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center">
                        <Clock className="mr-2 h-4 w-4 text-primary" />
                        Horário de Atendimento
                      </h4>
                      <div className="text-muted-foreground bg-background/30 backdrop-blur-sm rounded-lg p-3 border border-border/30">
                        Segunda a Sexta: 9h às 18h<br />
                        Sábado: 9h às 12h
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </MovingBorderButton>

            {/* Card de Garantia */}
            <MovingBorderButton
              borderRadius="1rem"
              className="bg-transparent p-0 h-auto w-full"
              containerClassName="rounded-xl"
              borderClassName="h-20 w-20 opacity-[0.8] bg-[radial-gradient(hsl(var(--primary))_40%,transparent_60%)]"
            >
               <motion.div
                className="bg-gradient-primary text-primary-foreground rounded-xl p-8 h-full w-full shadow-lg relative overflow-hidden"
                whileHover={{
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-bright/20 to-yellow-warm/10 rounded-xl" />
                
                <div className="relative z-10 text-center">
                  <motion.div
                    className="flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Shield className="h-8 w-8 mr-2" />
                    <h3 className="text-2xl font-bold">Resultado Garantido</h3>
                  </motion.div>
                  
                  <motion.p 
                    className="mb-6 opacity-90"
                    whileHover={{ scale: 1.05 }}
                  >
                    Não cobramos pelos resultados, cobramos pelos resultados que entregamos!
                  </motion.p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      className="bg-background/20 backdrop-blur-sm rounded-lg p-4"
                      whileHover={{ scale: 1.1, rotateY: 10 }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <div className="text-3xl font-bold flex items-center justify-center">
                        <Shield className="h-6 w-6 mr-2" />
                        30 dias
                      </div>
                      <div className="text-sm opacity-90">Garantia</div>
                    </motion.div>
                    
                    <motion.div
                      className="bg-background/20 backdrop-blur-sm rounded-lg p-4"
                      whileHover={{ scale: 1.1, rotateY: -10 }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <div className="text-3xl font-bold flex items-center justify-center">
                        <Headphones className="h-6 w-6 mr-2" />
                        24/7
                      </div>
                      <div className="text-sm opacity-90">Suporte</div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </MovingBorderButton>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;