import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import CallToAction from '@/app/components/CallToAction';
import Features from '@/app/components/Features';
import HeroSection from '@/app/components/HeroSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Contenido principal */}
      <main className="flex-grow">
        {/* Hero section */}
        <HeroSection />

        {/* Características */}
        <Features />

        {/* Llamada a la acción */}
        <CallToAction />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
