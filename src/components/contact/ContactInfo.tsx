import { motion } from "framer-motion";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { Mail, Phone, Clock } from "lucide-react";
interface ContactInfoProps {
  onWhatsAppClick: () => void;
}
const ContactInfo = ({
  onWhatsAppClick
}: ContactInfoProps) => {
  return <MovingBorderButton borderRadius="1rem" className="bg-transparent p-0 h-auto w-full" containerClassName="rounded-xl" borderClassName="h-20 w-20 opacity-[0.8] bg-[radial-gradient(hsl(var(--primary))_40%,transparent_60%)]">
      <div className="p-8 space-y-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Fale Conosco
          </h3>
          <p className="text-muted-foreground">
            Entre em contato pelos canais abaixo
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-primary" />
            <span className="text-foreground">contato@mpassessoria.com</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-primary" />
            <span className="text-foreground">(11) 98765-4321</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <Clock className="h-5 w-5 text-primary" />
            <span className="text-foreground">Seg - Sex: 9h às 18h</span>
          </div>
        </div>
        
        <button
          onClick={onWhatsAppClick}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-xl font-medium transition-colors duration-300"
        >
          WhatsApp
        </button>
      </div>
    </MovingBorderButton>;
};
export default ContactInfo;