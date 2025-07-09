import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

// Lazy load components that are below the fold
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
      <Suspense fallback={<div className="h-20 bg-muted/50 animate-pulse" />}>
        <Services />
      </Suspense>
      <Suspense fallback={<div className="h-20 bg-muted/50 animate-pulse" />}>
        <Partners />
      </Suspense>
      <Suspense fallback={<div className="h-20 bg-muted/50 animate-pulse" />}>
        <Clients />
      </Suspense>
      <Suspense fallback={<div className="h-20 bg-muted/50 animate-pulse" />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<div className="h-20 bg-muted/50 animate-pulse" />}>
        <Footer />
      </Suspense>
      <Suspense fallback={null}>
        <WhatsAppButton />
      </Suspense>
    </div>
  );
};

export default Index;
