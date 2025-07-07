import { motion } from "framer-motion";
import { Button as MovingButton } from "@/components/ui/moving-border";
import { Mail, Phone, Clock, Home, Users, Target, MessageCircle } from "lucide-react";

const Footer = () => {
  const openWhatsApp = () => {
    const phone = "5562992672577";
    const message = "Olá! Gostaria de saber mais sobre os serviços da MP Assessoria Digital.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const socialIcons = [
    { icon: Mail, label: "Email" },
    { icon: Phone, label: "Telefone" },
    { icon: MessageCircle, label: "LinkedIn" }
  ];

  const quickLinks = [
    { name: "Home", section: "home", icon: Home },
    { name: "Serviços", section: "servicos", icon: Target },
    { name: "Clientes", section: "clientes", icon: Users },
    { name: "Contato", section: "contato", icon: MessageCircle }
  ];

  return (
    <footer className="relative bg-background py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-bright/5 via-transparent to-yellow-warm/10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--yellow-bright)/0.1)_0%,transparent_70%)] pointer-events-none" />
      
      {/* Cyber grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,hsl(var(--yellow-bright)/0.1)_25px,hsl(var(--yellow-bright)/0.1)_26px,transparent_27px,transparent_74px,hsl(var(--yellow-bright)/0.1)_75px,hsl(var(--yellow-bright)/0.1)_76px,transparent_77px)] bg-[length:75px_1px]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24px,hsl(var(--yellow-bright)/0.1)_25px,hsl(var(--yellow-bright)/0.1)_26px,transparent_27px,transparent_74px,hsl(var(--yellow-bright)/0.1)_75px,hsl(var(--yellow-bright)/0.1)_76px,transparent_77px)] bg-[length:1px_75px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição - 3D Card */}
          <motion.div 
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <MovingButton
              borderRadius="2rem"
              className="h-full w-full bg-background/10 backdrop-blur-xl border-0 text-foreground p-8"
              containerClassName="h-full w-full"
              duration={5000}
              borderClassName="h-24 w-24 opacity-60 bg-[radial-gradient(hsl(var(--yellow-bright))_40%,hsl(var(--yellow-warm))_60%,transparent_80%)]"
            >
              <motion.div 
                className="relative h-full"
                whileHover={{ 
                  rotateX: 5,
                  rotateY: 5,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-background/20 via-card/30 to-background/20 backdrop-blur-xl rounded-3xl" />
                <div className="relative z-10">
                  <motion.div 
                    className="flex items-center space-x-3 mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.img 
                      src="/mp-logo.png"
                      alt="MP Assessoria Digital"
                      className="h-16 w-auto object-contain"
                      whileHover={{ rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      onError={(e) => {
                        console.error('Erro ao carregar logo no footer:', e);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </motion.div>
                  <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
                    Transformamos negócios através de estratégias digitais eficazes. 
                    Especializados em gestão de tráfego, CRM e automações inteligentes.
                  </p>
                  <div className="flex space-x-4">
                    {socialIcons.map((social, index) => (
                      <motion.div
                        key={index}
                        className="w-12 h-12 bg-yellow-bright/10 rounded-xl flex items-center justify-center hover:bg-yellow-bright/20 transition-all duration-300 cursor-pointer shadow-lg"
                        whileHover={{ 
                          scale: 1.2, 
                          rotateZ: 360,
                          boxShadow: "0 0 30px hsl(var(--yellow-bright) / 0.5)"
                        }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                      >
                        <social.icon size={20} className="text-yellow-bright" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </MovingButton>
          </motion.div>

          {/* Links Rápidos - 3D Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <MovingButton
              borderRadius="2rem"
              className="h-full w-full bg-background/10 backdrop-blur-xl border-0 text-foreground p-8"
              containerClassName="h-full w-full"
              duration={6000}
              borderClassName="h-24 w-24 opacity-60 bg-[radial-gradient(hsl(var(--yellow-bright))_40%,hsl(var(--yellow-warm))_60%,transparent_80%)]"
            >
              <motion.div 
                className="relative h-full"
                whileHover={{ 
                  rotateX: 5,
                  rotateY: -5,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-background/20 via-card/30 to-background/20 backdrop-blur-xl rounded-3xl" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-6 text-foreground">Links Rápidos</h3>
                  <ul className="space-y-4">
                    {quickLinks.map((link, index) => (
                      <motion.li key={index}>
                        <motion.button 
                          onClick={() => scrollToSection(link.section)}
                          className="flex items-center space-x-3 text-muted-foreground hover:text-yellow-bright transition-all duration-300 group w-full text-left"
                          whileHover={{ 
                            x: 10,
                            scale: 1.05
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.div
                            className="p-2 rounded-lg bg-yellow-bright/10 group-hover:bg-yellow-bright/20 transition-all duration-300"
                          whileHover={{ 
                            rotate: 360
                          }}
                            transition={{ duration: 0.5 }}
                          >
                            <link.icon size={16} className="text-yellow-bright" />
                          </motion.div>
                          <span className="group-hover:text-foreground transition-colors duration-300">
                            {link.name}
                          </span>
                        </motion.button>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </MovingButton>
          </motion.div>

          {/* Contato - 3D Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <MovingButton
              borderRadius="2rem"
              className="h-full w-full bg-background/10 backdrop-blur-xl border-0 text-foreground p-8"
              containerClassName="h-full w-full"
              duration={7000}
              borderClassName="h-24 w-24 opacity-60 bg-[radial-gradient(hsl(var(--yellow-bright))_40%,hsl(var(--yellow-warm))_60%,transparent_80%)]"
            >
              <motion.div 
                className="relative h-full"
                whileHover={{ 
                  rotateX: -5,
                  rotateY: 5,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-background/20 via-card/30 to-background/20 backdrop-blur-xl rounded-3xl" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-6 text-foreground">Contato</h3>
                  <div className="space-y-4">
                    <motion.div 
                      className="flex items-center space-x-3 group"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="p-2 rounded-lg bg-yellow-bright/10 group-hover:bg-yellow-bright/20 transition-all duration-300"
                        whileHover={{ 
                          rotate: 360
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <Mail size={16} className="text-yellow-bright" />
                      </motion.div>
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        contato@mpassessoria.com.br
                      </span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-3 group cursor-pointer"
                      onClick={openWhatsApp}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="p-2 rounded-lg bg-yellow-bright/10 group-hover:bg-yellow-bright/20 transition-all duration-300"
                        whileHover={{ 
                          rotate: 360
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <Phone size={16} className="text-yellow-bright" />
                      </motion.div>
                       <span className="text-sm text-muted-foreground group-hover:text-yellow-bright transition-colors duration-300">
                         (62) 99267-2577
                       </span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-3 group"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="p-2 rounded-lg bg-yellow-bright/10 group-hover:bg-yellow-bright/20 transition-all duration-300"
                        whileHover={{ 
                          rotate: 360
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <Clock size={16} className="text-yellow-bright" />
                      </motion.div>
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        Seg-Sex: 9h-18h
                      </span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </MovingButton>
          </motion.div>
        </div>

        {/* Copyright Section com efeitos futuristas */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Linha divisória animada */}
          <div className="relative mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-bright/50 to-transparent" />
            <motion.div 
              className="absolute top-0 left-0 h-px bg-gradient-to-r from-yellow-bright via-yellow-warm to-yellow-bright"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p 
              className="text-sm text-muted-foreground"
              whileHover={{ scale: 1.05, color: "hsl(var(--yellow-bright))" }}
              transition={{ duration: 0.3 }}
            >
              © 2024 MP Assessoria Digital. Todos os direitos reservados.
            </motion.p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <motion.a 
                href="#" 
                className="text-sm text-muted-foreground hover:text-yellow-bright transition-all duration-300"
                whileHover={{ 
                  scale: 1.1, 
                  y: -2,
                  textShadow: "0 0 10px hsl(var(--yellow-bright) / 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Política de Privacidade
              </motion.a>
              <motion.a 
                href="#" 
                className="text-sm text-muted-foreground hover:text-yellow-bright transition-all duration-300"
                whileHover={{ 
                  scale: 1.1, 
                  y: -2,
                  textShadow: "0 0 10px hsl(var(--yellow-bright) / 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Termos de Uso
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;