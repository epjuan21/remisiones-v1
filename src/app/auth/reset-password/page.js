import Link from 'next/link';

export default function ResetPasswordPage() {
  async function resetPassword(formData) {
    'use server';
    // Implementar lógica de restablecimiento de contraseña
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">Restablecer Contraseña</h3>
        <p className="text-sm text-gray-500">
          Crea una nueva contraseña para tu cuenta.
        </p>
      </div>
      
      <form className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium">
            Nueva Contraseña
          </label>
          <input 
            id="password" 
            name="password" 
            type="password" 
            required 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-xs text-gray-500">
            La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, un número y un carácter especial.
          </p>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="confirmPassword" className="block text-sm font-medium">
            Confirmar Contraseña
          </label>
          <input 
            id="confirmPassword" 
            name="confirmPassword" 
            type="password" 
            required 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="pt-2">
          <button 
            formAction={resetPassword}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Restablecer Contraseña
          </button>
        </div>
      </form>
      
      <div className="text-center">
        <p className="text-sm text-gray-600">
          ¿Ya tienes una contraseña?{' '}
          <Link href="/auth/login" className="text-blue-600 hover:underline">
            Iniciar Sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
