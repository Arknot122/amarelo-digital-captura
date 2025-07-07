import { motion } from "framer-motion";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { Shield, Headphones } from "lucide-react";

const ContactGuarantee = () => {
  return (
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
  );
};

export default ContactGuarantee;