'use client';

import { useState, useEffect } from 'react';
import { logoutAction } from '@/app/lib/actions';
import Sidebar from '../components/dashboard/Sidebar';
import Header from '../components/dashboard/Header';

export default function DashboardLayout({ children }) {
    const [user, setUser] = useState(null);

    // Simulación de carga de datos de usuario
    // En producción, esto se conectaría a Supabase para obtener los datos del usuario
    useEffect(() => {
        // Aquí normalmente obtendrías los datos del usuario actual
        // Ejemplo: const fetchUserData = async () => { ... }

        // Por ahora usamos datos de ejemplo
        setUser({
            nombre: 'Usuario',
            apellido: 'Ejemplo',
            email: 'usuario@ejemplo.com',
            cargo: 'Administrador'
        });
    }, []);

    // Función para manejar el cierre de sesión
    const handleLogout = async () => {
        try {
            await logoutAction();
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar Component */}
            <Sidebar onLogout={handleLogout} />

            {/* Contenido principal */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header Component */}
                <Header user={user} />

                {/* Contenido principal */}
                <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
                    {children}
                </main>
            </div>
        </div>
    );
}