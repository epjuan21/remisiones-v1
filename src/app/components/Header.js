import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-white text-2xl font-bold hover:text-blue-100 transition-colors">
            Registro Remisiones
          </Link>
        </div>
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          <Link 
            href="/auth/login" 
            className="px-4 py-2 text-blue-600 bg-white rounded-md shadow hover:bg-gray-100 transition-colors"
          >
            Iniciar Sesión
          </Link>
          <Link 
            href="/auth/registro" 
            className="px-4 py-2 text-white border border-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Registrarse
          </Link>
        </div>
      </div>
    </header>
  );
} 