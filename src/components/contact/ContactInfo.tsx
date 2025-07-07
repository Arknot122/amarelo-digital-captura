import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Clock } from "lucide-react";

interface ContactInfoProps {
  onWhatsAppClick: () => void;
}

const ContactInfo = ({ onWhatsAppClick }: ContactInfoProps) => {
  return (
    <motion.div
      className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-8 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <h3 className="text-2xl font-bold text-foreground mb-6">
        Fale Conosco Agora
      </h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="font-semibold text-foreground mb-3 flex items-center">
            <Phone className="mr-2 h-4 w-4 text-primary" />
            WhatsApp
          </h4>
          <Button
            onClick={onWhatsAppClick}
            className="w-full justify-start"
            variant="outline"
          >
            <Phone className="mr-2 h-4 w-4" />
            (11) 98765-4321
          </Button>
        </div>
        
        <div>
          <h4 className="font-semibold text-foreground mb-2 flex items-center">
            <Mail className="mr-2 h-4 w-4 text-primary" />
            E-mail
          </h4>
          <p className="text-muted-foreground bg-muted/50 rounded-lg p-3 border border-border">
            contato@mpassessoria.com.br
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold text-foreground mb-2 flex items-center">
            <Clock className="mr-2 h-4 w-4 text-primary" />
            Horário de Atendimento
          </h4>
          <div className="text-muted-foreground bg-muted/50 rounded-lg p-3 border border-border">
            Segunda a Sexta: 9h às 18h<br />
            Sábado: 9h às 12h
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;