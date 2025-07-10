import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

// Lazy load components that are not immediately visible
const Services = lazy(() => import("@/components/Services"));
const Partners = lazy(() => import("@/components/Partners"));
const Clients = lazy(() => import("@/components/Clients"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));
const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Suspense fallback={<div className="h-screen flex items-center justify-center">Carregando...</div>}>
        <Services />
      </Suspense>
      <Suspense fallback={<div className="h-screen flex items-center justify-center">Carregando...</div>}>
        <Partners />
      </Suspense>
      <Suspense fallback={<div className="h-screen flex items-center justify-center">Carregando...</div>}>
        <Clients />
      </Suspense>
      <Suspense fallback={<div className="h-screen flex items-center justify-center">Carregando...</div>}>
        <Contact />
      </Suspense>
      <Suspense fallback={<div className="min-h-[200px]">Carregando...</div>}>
        <Footer />
      </Suspense>
      <Suspense fallback={null}>
        <WhatsAppButton />
      </Suspense>
    </div>
  );
};

export default Index;
