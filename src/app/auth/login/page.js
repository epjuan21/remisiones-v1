import Link from 'next/link';
import LoginForm from '@/app/components/auth/LoginForm';

export default function LoginPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">Iniciar Sesión</h3>
        <p className="text-sm text-gray-500">Ingresa tus credenciales para acceder al sistema</p>
      </div>
      
      <LoginForm />
      
      <div className="text-center">
        <p className="text-sm text-gray-600">
          ¿No tienes una cuenta?{' '}
          <Link href="/auth/registro" className="text-blue-600 hover:underline">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
}