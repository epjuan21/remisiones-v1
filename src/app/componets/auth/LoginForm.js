'use client'

import Link from 'next/link';
import { useState } from 'react';
import { loginAction } from '@/app/lib/actions';

export default function LoginForm() {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(formData) {
    setIsLoading(true);
    setError('');
    
    try {
      // Llamar a la acción del servidor para el login
      const result = await loginAction(formData);
      
      // Manejar errores devueltos por la acción del servidor
      if (result?.error) {
        setError(result.error);
      }
      // Si todo sale bien, la acción del servidor redirigirá al usuario
    } catch (err) {
      setError('Error inesperado. Por favor, inténtalo de nuevo.');
      console.error('Error en login:', err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form className="space-y-4" action={handleLogin}>
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative" role="alert">
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium">
          Correo electrónico
        </label>
        <input 
          id="email" 
          name="email" 
          type="email" 
          required 
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="tu@correo.com"
          disabled={isLoading}
        />
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium">
            Contraseña
          </label>
          <Link href="/auth/recovery" className="text-sm text-blue-600 hover:underline">
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
        <input 
          id="password" 
          name="password" 
          type="password" 
          required 
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isLoading}
        />
      </div>
      
      <div className="flex items-center space-x-2">
        <input 
          id="remember" 
          name="remember" 
          type="checkbox" 
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          disabled={isLoading}
        />
        <label htmlFor="remember" className="text-sm text-gray-600">
          Recordar mis datos
        </label>
      </div>
      
      <div className="pt-2">
        <button 
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
        </button>
      </div>
    </form>
  );
}
