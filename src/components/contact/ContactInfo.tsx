import { motion } from "framer-motion";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { Mail, Phone, Clock } from "lucide-react";

interface ContactInfoProps {
  onWhatsAppClick: () => void;
}

const ContactInfo = ({ onWhatsAppClick }: ContactInfoProps) => {
  return (
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
                onClick={onWhatsAppClick}
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
  );
};

export default ContactInfo;