'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { createServerSupabaseClient } from './supabase';

// Acción para iniciar sesión
export async function loginAction(formData) {
  const email = formData.get('email');
  const password = formData.get('password');
  const remember = formData.get('remember') === 'on';

  try {
    // Validar datos de entrada
    if (!email || !password) {
      return {
        error: 'El correo electrónico y la contraseña son obligatorios'
      };
    }

    // Crear cliente de Supabase para el servidor
    const supabase = createServerSupabaseClient();
    
    // Iniciar sesión con credenciales
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return {
        error: error.message || 'Error al iniciar sesión'
      };
    }

    // Configurar cookies de sesión
    const { session } = data;
    if (session) {
      try {
        // Establecer cookies de sesión - usar await con cookies()
        const cookieStore = await cookies();
        
        cookieStore.set('sb-access-token', session.access_token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          maxAge: remember ? 60 * 60 * 24 * 7 : 60 * 60 * 24, // 7 días o 1 día
          path: '/',
        });
        
        cookieStore.set('sb-refresh-token', session.refresh_token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          maxAge: 60 * 60 * 24 * 7, // Refresh token dura 7 días
          path: '/',
        });
      } catch (cookieError) {
        console.error('Error al establecer cookies:', cookieError);
        return {
          error: 'Error al iniciar sesión. Por favor, inténtalo de nuevo.'
        };
      }
      
      // Redirigir al usuario al dashboard
      // No capturamos esta excepción, dejamos que Next.js la maneje
      redirect('/dashboard');
    }

    return { success: true };
  } catch (err) {
    // Solo capturar errores que no sean de redirección
    if (err && err.message === 'NEXT_REDIRECT') {
      // Este es un redireccionamiento normal, no un error
      throw err; // Re-lanzamos para que Next.js lo maneje
    }
    
    console.error('Error de autenticación:', err);
    return {
      error: 'Error en el servidor. Por favor, inténtalo de nuevo más tarde.'
    };
  }
}

// Acción para cerrar sesión
export async function logoutAction() {
  try {
    const supabase = createServerSupabaseClient();
    
    // Cerrar sesión en Supabase
    await supabase.auth.signOut();
    
    // Eliminar cookies - usar await con cookies()
    const cookieStore = await cookies();
    cookieStore.delete('sb-access-token');
    cookieStore.delete('sb-refresh-token');
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
    // Incluso si hay error, intentamos redirigir al inicio
  }
  
  // Redirigir a la página de inicio
  redirect('/');
} 