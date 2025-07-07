import { motion } from "framer-motion";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { Mail, Phone, Clock } from "lucide-react";
interface ContactInfoProps {
  onWhatsAppClick: () => void;
}
const ContactInfo = ({
  onWhatsAppClick
}: ContactInfoProps) => {
  return (
    <MovingBorderButton 
      borderRadius="1rem" 
      className="bg-transparent p-0 h-auto w-full" 
      containerClassName="rounded-xl" 
      borderClassName="h-20 w-20 opacity-[0.8] bg-[radial-gradient(hsl(var(--primary))_40%,transparent_60%)]"
    >
      <div className="p-8 space-y-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Fale Conosco
          </h3>
          <p className="text-muted-foreground">
            Entre em contato através dos canais abaixo
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Mail className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium text-foreground">E-mail</p>
              <p className="text-muted-foreground">contato@mpassessoria.com</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Phone className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium text-foreground">Telefone</p>
              <p className="text-muted-foreground">(11) 98765-4321</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Clock className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium text-foreground">Horário</p>
              <p className="text-muted-foreground">Seg - Sex: 9h às 18h</p>
            </div>
          </div>
        </div>

        <motion.button
          onClick={onWhatsAppClick}
          className="w-full bg-primary text-primary-foreground rounded-xl px-6 py-3 font-medium hover:shadow-glow transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Falar no WhatsApp
        </motion.button>
      </div>
    </MovingBorderButton>
  );
};
export default ContactInfo;