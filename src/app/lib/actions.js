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
      // Establecer cookies de sesión
      cookies().set('sb-access-token', session.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: remember ? 60 * 60 * 24 * 7 : 60 * 60 * 24, // 7 días o 1 día
        path: '/',
      });
      
      cookies().set('sb-refresh-token', session.refresh_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // Refresh token dura 7 días
        path: '/',
      });
      
      // Redirigir al usuario al dashboard
      redirect('/dashboard');
    }

    return { success: true };
  } catch (err) {
    console.error('Error de autenticación:', err);
    return {
      error: 'Error en el servidor. Por favor, inténtalo de nuevo más tarde.'
    };
  }
}

// Acción para cerrar sesión
export async function logoutAction() {
  const supabase = createServerSupabaseClient();
  
  // Cerrar sesión en Supabase
  await supabase.auth.signOut();
  
  // Eliminar cookies
  cookies().delete('sb-access-token');
  cookies().delete('sb-refresh-token');
  
  // Redirigir a la página de inicio
  redirect('/');
} 