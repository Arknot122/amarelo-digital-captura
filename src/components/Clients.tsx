import { Card, CardContent } from "@/components/ui/card";

const Clients = () => {
  const clients = [
    { name: "TechCorp", sector: "Tecnologia", result: "+150% conversões" },
    { name: "BeautyBrand", sector: "Beleza", result: "+200% vendas online" },
    { name: "FitLife", sector: "Fitness", result: "+300% leads qualificados" },
    { name: "EduPlatform", sector: "Educação", result: "+180% matrículas" },
    { name: "FoodChain", sector: "Alimentício", result: "+120% delivery" },
    { name: "HealthCare", sector: "Saúde", result: "+90% agendamentos" }
  ];

  const testimonials = [
    {
      name: "João Silva",
      company: "TechCorp",
      text: "A MP Assessoria transformou completamente nossa estratégia digital. Resultados incríveis em apenas 3 meses!",
      image: "👨‍💼"
    },
    {
      name: "Maria Santos",
      company: "BeautyBrand", 
      text: "Profissionais excepcionais! Dobrou nossa receita online com campanhas muito bem estruturadas.",
      image: "👩‍💼"
    },
    {
      name: "Carlos Lima",
      company: "FitLife",
      text: "O CRM implementado pela equipe organizou todo nosso processo de vendas. Recomendo fortemente!",
      image: "👨‍🏫"
    }
  ];

  return (
    <section id="clientes" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos <span className="bg-gradient-primary bg-clip-text text-transparent">Clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empresas que confiam em nosso trabalho e obtêm resultados extraordinários
          </p>
        </div>

        {/* Resultados dos Clientes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {clients.map((client, index) => (
            <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:transform hover:scale-105">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{client.name}</h3>
                <p className="text-muted-foreground mb-3">{client.sector}</p>
                <div className="text-2xl font-bold text-primary">{client.result}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Depoimentos */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            O que nossos clientes dizem
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-5xl mb-3">{testimonial.image}</div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  <div className="flex justify-center mt-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-primary text-lg">★</span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Logos dos Clientes */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Empresas que confiam em nosso trabalho
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['TechCorp', 'BeautyBrand', 'FitLife', 'EduPlatform', 'FoodChain', 'HealthCare'].map((client, index) => (
              <div key={index} className="text-lg font-semibold text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;