import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Gestão de Tráfego",
      description: "Campanhas otimizadas no Google Ads, Facebook e Instagram para maximizar seu ROI",
      features: ["Google Ads", "Facebook Ads", "Instagram Ads", "Otimização de Campanhas"],
      icon: "📊"
    },
    {
      title: "CRM",
      description: "Implementação e gestão de sistemas CRM para organizar e converter seus leads",
      features: ["Configuração de CRM", "Automação de Vendas", "Pipeline de Vendas", "Relatórios"],
      icon: "💼"
    },
    {
      title: "Treinamento Comercial",
      description: "Capacitação da sua equipe de vendas com técnicas modernas e eficazes",
      features: ["Técnicas de Vendas", "Abordagem Digital", "Scripts de Vendas", "Acompanhamento"],
      icon: "🎯"
    },
    {
      title: "Automações e IA",
      description: "Implementação de chatbots e automações inteligentes para otimizar processos",
      features: ["Chatbots", "Automação WhatsApp", "IA Conversacional", "Workflows"],
      icon: "🤖"
    },
    {
      title: "Produção de Conteúdo",
      description: "Criação de conteúdo estratégico para redes sociais e marketing digital",
      features: ["Posts para Redes Sociais", "Copy para Anúncios", "E-mail Marketing", "Blog Posts"],
      icon: "✨"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos <span className="bg-gradient-primary bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para transformar sua presença digital e acelerar seus resultados
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 hover:transform hover:-translate-y-2 border-border/50 hover:border-primary/30"
            >
              <CardHeader className="text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={() => scrollToSection("contato")}
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button 
            onClick={() => scrollToSection("contato")}
            variant="cta" 
            size="xl"
          >
            Solicitar Proposta Personalizada
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;