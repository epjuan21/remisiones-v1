import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function middleware(request) {
  // Obtener los tokens de las cookies
  const accessToken = request.cookies.get('sb-access-token')?.value;
  const refreshToken = request.cookies.get('sb-refresh-token')?.value;
  
  // URL actual y de destino
  const { pathname } = request.nextUrl;
  
  // Definir rutas protegidas y públicas
  const isAuthRoute = pathname.startsWith('/auth');
  const isProtectedRoute = pathname.startsWith('/dashboard') || 
                         pathname.startsWith('/perfil');
  
  // Si no hay tokens y la ruta es protegida, redirigir al login
  if (!accessToken && isProtectedRoute) {
    const redirectUrl = new URL('/auth/login', request.url);
    redirectUrl.searchParams.set('next', pathname);
    return NextResponse.redirect(redirectUrl);
  }
  
  // Si hay tokens y la ruta es una página de autenticación, verificar la validez del token
  if (accessToken && isAuthRoute) {
    try {
      // Crear cliente de Supabase
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        {
          auth: {
            autoRefreshToken: false,
            persistSession: false,
          },
        }
      );
      
      // Establecer la sesión
      const { data, error } = await supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken,
      });
      
      // Si la sesión es válida, redirigir al dashboard
      if (data?.session && !error) {
        // Redirigir al dashboard a menos que haya un parámetro "next"
        const nextUrl = request.nextUrl.searchParams.get('next') || '/dashboard';
        return NextResponse.redirect(new URL(nextUrl, request.url));
      }
      
      // Si hay error, continuar a la página de autenticación (los tokens expiraron)
      return NextResponse.next();
    } catch (error) {
      console.error('Error en middleware de autenticación:', error);
      return NextResponse.next();
    }
  }
  
  // Para todas las demás rutas, continuar con la solicitud
  return NextResponse.next();
}

// Configurar las rutas en las que se ejecutará el middleware
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/perfil/:path*',
    '/auth/:path*',
  ],
}; 