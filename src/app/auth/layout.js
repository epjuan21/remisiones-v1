import Image from 'next/image';
import Link from 'next/link';

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Panel lateral con imagen */}
      <div className="hidden md:flex md:w-1/2 bg-blue-600 justify-center items-center p-8">
        <div className="max-w-md">
          <div className="mb-8">
            <h1 className="text-white text-3xl font-bold mb-4">Sistema de Remisiones</h1>
            <p className="text-blue-100">
              Gestiona todas tus remisiones de manera eficiente y segura con nuestra plataforma integral.
            </p>
          </div>
          <div className="relative w-full rounded-md h-64 overflow-hidden"> {/* Contenedor principal con redondeo y overflow */}
            <Image
              src="/images/ImageLogin.jpg"
              alt="Imagen representativa del sistema de remisiones médicas"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain rounded-md" // Controla cómo se ajusta la imagen dentro de su contenedor
              priority
            />
          </div>
        </div>
      </div>

      {/* Contenido de autenticación */}
      <div className="flex-1 flex flex-col justify-center items-center p-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link href="/" className="inline-block">
              <h2 className="text-2xl font-bold">Remisiones</h2>
            </Link>
            <p className="text-gray-500 mt-2">Accede a tu cuenta para continuar</p>
          </div>

          {/* Aquí se renderiza el contenido de cada página */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            {children}
          </div>

          {/* Enlaces de ayuda */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              ¿Necesitas ayuda? <Link href="/contacto" className="text-blue-600 hover:underline">Contáctanos</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
