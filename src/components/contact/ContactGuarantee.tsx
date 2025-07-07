import { motion } from "framer-motion";
import { Shield, Headphones } from "lucide-react";

const ContactGuarantee = () => {
  return (
    <motion.div
      className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <Shield className="h-8 w-8 mr-2 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Resultado Garantido</h3>
        </div>
        
        <p className="mb-6 text-muted-foreground">
          Não cobramos pelos resultados, cobramos pelos resultados que entregamos!
        </p>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-background/50 backdrop-blur-sm rounded-lg p-4 border border-border">
            <div className="text-3xl font-bold flex items-center justify-center text-primary">
              <Shield className="h-6 w-6 mr-2" />
              30 dias
            </div>
            <div className="text-sm text-muted-foreground">Garantia</div>
          </div>
          
          <div className="bg-background/50 backdrop-blur-sm rounded-lg p-4 border border-border">
            <div className="text-3xl font-bold flex items-center justify-center text-primary">
              <Headphones className="h-6 w-6 mr-2" />
              24/7
            </div>
            <div className="text-sm text-muted-foreground">Suporte</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactGuarantee;