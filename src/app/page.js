import Header from '@/app/componets/Header';
import Footer from '@/app/componets/Footer';
import CallToAction from '@/app/componets/CallToAction';
import Features from '@/app/componets/Features';
import HeroSection from '@/app/componets/HeroSection';

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
