import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Transformamos seu
            <span className="bg-gradient-primary bg-clip-text text-transparent"> negócio digital</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Somos especialistas em gestão de tráfego, CRM, automações e IA para maximizar seus resultados online
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={() => scrollToSection("contato")}
              variant="hero" 
              size="xl"
              className="w-full sm:w-auto"
            >
              Solicitar Orçamento
            </Button>
            <Button 
              onClick={() => scrollToSection("servicos")}
              variant="outline" 
              size="xl"
              className="w-full sm:w-auto"
            >
              Conhecer Serviços
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Clientes Atendidos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Taxa de Sucesso</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Suporte</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5 Anos</div>
              <div className="text-sm text-muted-foreground">Experiência</div>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection("servicos")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-primary hover:text-primary/80 transition-colors"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;