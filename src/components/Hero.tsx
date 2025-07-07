import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen">
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(0, 0, 0)"
        gradientBackgroundEnd="rgb(15, 17, 21)"
        firstColor="255, 237, 36"
        secondColor="255, 193, 7"
        thirdColor="255, 235, 59"
        fourthColor="255, 241, 118"
        fifthColor="255, 238, 88"
        pointerColor="255, 237, 36"
        size="80%"
        blendingValue="multiply"
        containerClassName="absolute inset-0"
        interactive={true}
      />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl text-center break-words">
              Pare de perder tempo com Agências de Marketing,<br className="hidden sm:block" /> sua 
              <span className="bg-gradient-to-r from-primary to-yellow-300 bg-clip-text text-transparent"> EMPRESA</span><br className="sm:hidden" /> precisa de uma 
              <span className="bg-gradient-to-r from-primary to-yellow-300 bg-clip-text text-transparent"> ASSESSORIA</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-white/80 mb-8 max-w-2xl mx-auto drop-shadow-lg">
              Somos especialistas em gestão de tráfego, CRM, automações e IA para maximizar seus resultados online
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                onClick={() => scrollToSection("contato")}
                variant="hero" 
                size="xl"
                className="w-full sm:w-auto shadow-2xl"
              >
                Solicitar Orçamento
              </Button>
              <Button 
                onClick={() => scrollToSection("servicos")}
                variant="outline" 
                size="xl"
                className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white hover:text-black backdrop-blur-md shadow-2xl"
              >
                Conhecer Serviços
              </Button>
            </div>
          </div>
        </div>
        
        <button 
          onClick={() => scrollToSection("servicos")}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-primary hover:text-primary/80 transition-colors drop-shadow-lg"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;