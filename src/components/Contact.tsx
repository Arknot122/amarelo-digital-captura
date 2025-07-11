import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ContactForm from "./contact/ContactForm";
import ContactInfo from "./contact/ContactInfo";
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
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  }>({});
  const {
    toast
  } = useToast();
  const {
    ref,
    inView
  } = useScrollAnimation();
  const validateForm = () => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    }
    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "E-mail inválido";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Telefone é obrigatório";
    } else if (!/^[\d\s\(\)\-\+]+$/.test(formData.phone)) {
      newErrors.phone = "Telefone inválido";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Mensagem é obrigatória";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Mensagem deve ter pelo menos 10 caracteres";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      toast({
        title: "Erro no formulário",
        description: "Por favor, corrija os erros antes de enviar.",
        variant: "destructive"
      });
      return;
    }
    setIsLoading(true);
    try {
      // Envia os dados para o webhook do Make
      await fetch("https://hook.us2.make.com/ioh725tn9ssv38ct9n24rxuhkvs5m5m2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Nossa equipe entrará em contato em até 24 horas."
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: ""
      });
      setErrors({});
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  const openWhatsApp = () => {
    const phone = "5562992672577"; // Número atualizado
    const message = "Olá! Gostaria de saber mais sobre os serviços da MIP Assessoria Digital.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 50,
      opacity: 0
    },
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
  return <section id="contato" className="relative py-24 overflow-hidden" style={{
    background: `
          radial-gradient(circle at 20% 50%, hsl(var(--yellow-bright) / 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, hsl(var(--yellow-warm) / 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, hsl(var(--yellow-soft) / 0.1) 0%, transparent 50%),
          linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--bg-secondary)) 100%)
        `
  }}>
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
        backgroundImage: `
              linear-gradient(hsl(var(--yellow-bright) / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--yellow-bright) / 0.1) 1px, transparent 1px)
            `,
        backgroundSize: '50px 50px'
      }} />
      </div>

      <motion.div ref={ref} className="container mx-auto px-4 relative z-10" initial="hidden" animate={inView ? "visible" : "hidden"} variants={containerVariants}>
        {/* About Us Section */}
        <motion.div className="mb-16" variants={itemVariants}>
          <div className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-3xl p-8 lg:p-12 hover:border-primary/30 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Photo Placeholders */}
              <motion.div className="order-2 lg:order-1" whileHover={{
              scale: 1.02
            }} transition={{
              duration: 0.3
            }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Fundador 1 */}
                  <div className="aspect-square bg-card/50 rounded-2xl border border-border/50 overflow-hidden group hover:border-primary/50 transition-all duration-300">
                    <img 
                      src="/lovable-uploads/e24c5353-73a9-465a-9939-4c67ee2c2434.png"
                      alt="Fundador 1"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Fundador 2 */}
                  <div className="aspect-square bg-card/50 rounded-2xl border border-border/50 overflow-hidden group hover:border-primary/50 transition-all duration-300">
                    <img 
                      src="/lovable-uploads/958b2758-10df-47d8-ba75-eab1eeb14584.png"
                      alt="Fundador 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              {/* About Content */}
              <div className="order-1 lg:order-2">
                <motion.h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6" whileHover={{
                scale: 1.02
              }} transition={{
                duration: 0.3
              }}>
                  Quem <span className="bg-gradient-primary bg-clip-text text-transparent">Somos</span>
                </motion.h3>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    A <strong className="text-foreground">MIP Assessoria Digital</strong> foi fundada com a missão de transformar negócios através de estratégias digitais inovadoras e eficazes.
                  </p>
                  <p className="leading-relaxed">
                    Nossos fundadores trazem anos de experiência em marketing digital, gestão de tráfego e automação, combinando conhecimento técnico com uma visão estratégica para entregar resultados excepcionais aos nossos clientes.
                  </p>
                  <p className="leading-relaxed">
                    Acreditamos que cada negócio é único e merece uma abordagem personalizada. Por isso, trabalhamos lado a lado com nossos clientes para entender suas necessidades e desenvolver soluções que realmente fazem a diferença.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" whileHover={{
          scale: 1.02
        }} transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}>
            Entre em <span className="bg-gradient-primary bg-clip-text text-transparent">Contato</span>
          </motion.h2>
          <motion.p className="text-xl text-muted-foreground max-w-2xl mx-auto" variants={itemVariants}>
            Pronto para transformar seu negócio digital? Vamos conversar sobre como podemos ajudar!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <ContactForm formData={formData} isLoading={isLoading} onSubmit={handleSubmit} onChange={handleChange} errors={errors} />
          </motion.div>

          {/* Contact Information */}
          
        </div>
      </motion.div>
    </section>;
};
export default Contact;