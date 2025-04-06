import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-blue-600 to-blue-500 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Sistema de Registro de Remisiones</h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          Gestiona de manera eficiente tus remisiones con nuestra plataforma integral y segura.
        </p>
        <Link 
          href="/auth/login" 
          className="px-6 py-3 bg-white text-blue-600 font-medium rounded-md shadow-md hover:bg-gray-100 transition-colors inline-block"
        >
          Comenzar Ahora
        </Link>
      </div>
    </section>
  );
} 