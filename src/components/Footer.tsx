const Footer = () => {
  const openWhatsApp = () => {
    const phone = "5511999999999";
    const message = "Olá! Gostaria de saber mais sobre os serviços da MP Assessoria Digital.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">MP</span>
              </div>
              <span className="text-xl font-bold">MP Assessoria Digital</span>
            </div>
            <p className="text-secondary-foreground/80 mb-6 max-w-md">
              Transformamos negócios através de estratégias digitais eficazes. 
              Especializados em gestão de tráfego, CRM e automações inteligentes.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                📧
              </div>
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                📱
              </div>
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                💼
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("home")}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("servicos")}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("clientes")}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Clientes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contato")}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span>📧</span>
                <span className="text-sm text-secondary-foreground/80">contato@mpassessoria.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📱</span>
                <button 
                  onClick={openWhatsApp}
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  (11) 99999-9999
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <span>🕒</span>
                <span className="text-sm text-secondary-foreground/80">Seg-Sex: 9h-18h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-secondary-foreground/60">
              © 2024 MP Assessoria Digital. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;