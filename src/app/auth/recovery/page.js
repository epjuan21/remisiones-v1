import Link from 'next/link';

export default function RecoveryPage() {
  async function recoveryPassword(formData) {
    'use server';
    // Implementar lógica de recuperación de contraseña
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">Recuperar Contraseña</h3>
        <p className="text-sm text-gray-500">
          Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
        </p>
      </div>
      
      <form className="space-y-4">
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
          />
        </div>
        
        <div className="pt-2">
          <button 
            formAction={recoveryPassword}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Enviar Instrucciones
          </button>
        </div>
      </form>
      
      <div className="text-center">
        <p className="text-sm text-gray-600">
          ¿Recordaste tu contraseña?{' '}
          <Link href="/auth/login" className="text-blue-600 hover:underline">
            Iniciar Sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
