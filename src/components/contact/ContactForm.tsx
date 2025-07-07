import { motion } from "framer-motion";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, User, Building, MessageSquare, Send } from "lucide-react";

interface ContactFormProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    company: string;
    service: string;
    message: string;
  };
  isLoading: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  errors: {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  };
}

const ContactForm = ({ formData, isLoading, onSubmit, onChange, errors }: ContactFormProps) => {
  return (
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

          <form onSubmit={onSubmit} className="space-y-6">
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
                    onChange={onChange}
                    required
                    placeholder="Seu nome completo"
                    className={`backdrop-blur-sm bg-background/50 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:shadow-lg pl-10 ${errors.name ? 'border-destructive' : ''}`}
                  />
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
                {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
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
                    onChange={onChange}
                    required
                    placeholder="seu@email.com"
                    className={`backdrop-blur-sm bg-background/50 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:shadow-lg pl-10 ${errors.email ? 'border-destructive' : ''}`}
                  />
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
                {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
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
                    onChange={onChange}
                    required
                    placeholder="(11) 99999-9999"
                    className={`backdrop-blur-sm bg-background/50 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:shadow-lg pl-10 ${errors.phone ? 'border-destructive' : ''}`}
                  />
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
                {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Empresa
                </label>
                <div className="relative">
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={onChange}
                    placeholder="Nome da sua empresa"
                    className="backdrop-blur-sm bg-background/50 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:shadow-lg pl-10"
                  />
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
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
                onChange={onChange}
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
                Mensagem *
              </label>
              <div className="relative">
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={onChange}
                  required
                  rows={4}
                  placeholder="Conte-nos mais sobre seu projeto..."
                  className={`backdrop-blur-sm bg-background/50 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:shadow-lg resize-none pl-10 pt-3 ${errors.message ? 'border-destructive' : ''}`}
                />
                <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              </div>
              {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
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
                <Send className="mr-2 h-4 w-4" />
                {isLoading ? "Enviando..." : "Enviar Proposta"}
              </motion.div>
            </MovingBorderButton>
          </form>
        </div>
      </motion.div>
    </MovingBorderButton>
  );
};

export default ContactForm;