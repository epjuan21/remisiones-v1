'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Icons } from '@/app/components/ui/Icons';

export default function Header({ user }) {
  const pathname = usePathname();
  
  // Función para obtener el título basado en la ruta actual
  const getPageTitle = () => {
    if (pathname === '/dashboard') return 'Dashboard';
    if (pathname.startsWith('/dashboard/remisiones')) return 'Remisiones';
    if (pathname.startsWith('/dashboard/ambulancias')) return 'Ambulancias';
    if (pathname.startsWith('/dashboard/personal')) return 'Personal';
    if (pathname.startsWith('/dashboard/entidades')) return 'Entidades';
    if (pathname.startsWith('/dashboard/reportes')) return 'Reportes';
    if (pathname.startsWith('/dashboard/admin')) return 'Administración';
    if (pathname === '/perfil') return 'Perfil';
    
    // Si no hay coincidencia, extraer el último segmento de la ruta
    const segments = pathname.split('/').filter(Boolean);
    return segments.length > 0 
      ? segments[segments.length - 1].charAt(0).toUpperCase() + segments[segments.length - 1].slice(1) 
      : 'Dashboard';
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold text-gray-800">{getPageTitle()}</h1>
        </div>
        <div className="flex items-center space-x-4">
          {/* Notificaciones */}
          <button className="p-1 rounded-full hover:bg-gray-100">
            {Icons.notification}
          </button>
          
          {/* Perfil del usuario */}
          <div className="relative">
            <Link href="/perfil" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-sm font-medium text-gray-700">
                  {user?.nombre?.charAt(0) || 'U'}
                </span>
              </div>
              <span className="hidden md:block text-sm font-medium">
                {user?.nombre || 'Usuario'}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}