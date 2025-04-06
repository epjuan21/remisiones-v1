import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">¿Listo para empezar?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Regístrate hoy y comienza a gestionar tus remisiones de manera eficiente con nuestra plataforma.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href="/auth/login" 
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Iniciar Sesión
          </Link>
          <Link 
            href="/auth/registro" 
            className="px-6 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
          >
            Crear Cuenta
          </Link>
        </div>
      </div>
    </section>
  );
} 