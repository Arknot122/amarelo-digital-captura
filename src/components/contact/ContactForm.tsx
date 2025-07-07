import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
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
    <motion.div
      className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-8 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Solicite uma Proposta
        </h3>
        <p className="text-muted-foreground">
          Preencha o formulário e nossa equipe entrará em contato
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
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
                className={`pl-10 ${errors.name ? 'border-destructive' : ''}`}
              />
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
          </div>
          
          <div>
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
                className={`pl-10 ${errors.email ? 'border-destructive' : ''}`}
              />
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
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
                className={`pl-10 ${errors.phone ? 'border-destructive' : ''}`}
              />
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
          </div>
          
          <div>
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
                className="pl-10"
              />
              <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
            Serviço de Interesse
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={onChange}
            className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-input"
          >
            <option value="">Selecione um serviço</option>
            <option value="gestao-trafego">Gestão de Tráfego</option>
            <option value="crm">CRM</option>
            <option value="treinamento">Treinamento Comercial</option>
            <option value="automacoes">Automações e IA</option>
            <option value="conteudo">Produção de Conteúdo</option>
            <option value="todos">Todos os Serviços</option>
          </select>
        </div>

        <div>
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
              className={`pl-10 pt-3 resize-none ${errors.message ? 'border-destructive' : ''}`}
            />
            <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          </div>
          {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full"
          size="lg"
        >
          <Send className="mr-2 h-4 w-4" />
          {isLoading ? "Enviando..." : "Enviar Proposta"}
        </Button>
      </form>
    </motion.div>
  );
};

export default ContactForm;