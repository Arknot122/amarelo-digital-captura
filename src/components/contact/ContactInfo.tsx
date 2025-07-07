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
      
    </MovingBorderButton>;
};
export default ContactInfo;