import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Registro Remisiones</h3>
            <p className="text-gray-400">
              Sistema integral para la gestión y seguimiento de remisiones.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/acerca" className="text-gray-400 hover:text-white transition-colors">
                  Acerca de
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="text-gray-400 hover:text-white transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="text-gray-400 hover:text-white transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <p className="text-gray-400 mb-2">
              ¿Tienes preguntas? Escríbenos a:
            </p>
            <a href="mailto:info@remisiones.com" className="text-blue-400 hover:underline">
              info@remisiones.com
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Registro Remisiones. Desarrollado por Tu Nombre. Todos los derechos reservados.
          </p>
          <p className="mt-2 text-sm">
            Versión 1.0 - Creado en {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long' })}
          </p>
        </div>
      </div>
    </footer>
  );
} 