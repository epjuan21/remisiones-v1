'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon, { Icons } from '@/app/components/ui/Icons';
import menuItems from './menuItems';

export default function Sidebar({ onLogout }) {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const pathname = usePathname();

    // Aplicar un delay a la justificación para que coincida con la transición
    useEffect(() => {
        let timeoutId;
        if (!sidebarOpen) {
            timeoutId = setTimeout(() => {
                setIsSidebarVisible(false);
            }, 300); // Este valor debe coincidir con la duración de la transición
        } else {
            setIsSidebarVisible(true);
        }

        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [sidebarOpen]);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const toggleSubmenu = (index) => {
        if (openSubmenu === index) {
            setOpenSubmenu(null);
        } else {
            setOpenSubmenu(index);
        }
    };

    // Verifica si un ítem del menú está activo
    const isActive = (href) => {
        return pathname === href || pathname.startsWith(`${href}/`);
    };

    return (
        <aside
            className={`bg-white shadow-md transition-all duration-300 ease-in-out 
                ${sidebarOpen ? 'w-64' : 'w-20'}`}
        >
            {/* Logo y botón de toggle */}
            <div className="flex items-center justify-between p-4 border-b text-slate-200">
                <Link href="/dashboard" className={`flex items-center ${!isSidebarVisible ? 'justify-center' : ''}`}>
                    {sidebarOpen ? (
                        <span className="text-xl font-bold text-blue-600 transition-opacity duration-300 ease-in-out">Remisiones</span>
                    ) : (
                        <span className="text-xl font-bold text-blue-600 transition-opacity duration-300 ease-in-out">R</span>
                    )}
                </Link>
                <button
                    onClick={toggleSidebar}
                    className="p-1 rounded-md hover:bg-gray-100 transition-colors duration-200"
                    aria-label={sidebarOpen ? "Colapsar sidebar" : "Expandir sidebar"}
                >
                    <div className="transform transition-transform duration-300 ease-in-out">
                        {sidebarOpen ? <Icon name="collapse" /> : <Icon name="expand" />}
                    </div>
                </button>
            </div>

            {/* Menú de navegación */}
            <nav className="p-4">
                <ul className="space-y-2">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <div className="group relative">
                                <Link
                                    href={item.href}
                                    className={`flex h-10 items-center p-2 rounded-md group transition-all duration-300 ease-in-out 
                                    ${isActive(item.href)
                                            ? 'bg-blue-100 text-blue-600'
                                            : 'hover:bg-gray-100 text-gray-600 hover:text-blue-600'
                                        } ${isSidebarVisible ? 'justify-start' : 'justify-center'}`}
                                    onClick={(e) => {
                                        if (item.submenu) {
                                            e.preventDefault();
                                            toggleSubmenu(index);
                                        }
                                    }}
                                >
                                    {/* Estructura con posicionamiento absoluto para el texto */}
                                    <div className="relative flex items-center">
                                        {/* Icono siempre visible con posición fija */}
                                        <div className="w-5 h-5 flex items-center z-10">
                                            <Icon name={item.icon} />
                                        </div>

                                        {/* Título del menú con transición */}
                                        <div
                                            className={`absolute left-0 ml-7 whitespace-nowrap transition-all duration-300 ease-in-out
                                                ${sidebarOpen
                                                    ? 'opacity-100 visible'
                                                    : 'opacity-0 invisible'
                                                }`}
                                        >
                                            {item.title}
                                        </div>
                                    </div>

                                    {/* Flecha para submenús - siempre a la derecha */}
                                    {item.submenu && (
                                        <div
                                            className={`transform transition-all duration-300 ease-in-out
                                                ${openSubmenu === index ? 'rotate-180' : 'rotate-0'}
                                                ${!isSidebarVisible ? 'opacity-0 w-0 overflow-hidden' : 'ml-auto'}`}
                                        >
                                            <Icon name="chevronDown" className={`${sidebarOpen ? '' : 'opacity-0'}`} />
                                        </div>
                                    )}
                                </Link>

                                {/* Tooltip para menú colapsado con delay */}
                                {!sidebarOpen && (
                                    <div
                                        className="absolute left-full rounded-md px-2 py-1 ml-6 bg-gray-800 text-white text-sm 
                                        opacity-0 group-hover:opacity-100 invisible group-hover:visible 
                                        transition-all duration-300 ease-in-out delay-150 z-50"
                                    >
                                        {item.title}
                                    </div>
                                )}
                            </div>

                            {/* Submenú con animación de altura */}
                            {item.submenu && (
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out
                                        ${sidebarOpen ? 'block' : 'hidden'}
                                        ${openSubmenu === index
                                            ? 'max-h-60 opacity-100'
                                            : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <ul className="pl-10 mt-1 space-y-1">
                                        {item.submenu.map((subItem, subIndex) => (
                                            <li key={subIndex}>
                                                <Link
                                                    href={subItem.href}
                                                    className={`block p-2 rounded-md transition-all duration-200 
                                                        ${pathname === subItem.href
                                                            ? 'bg-blue-50 text-blue-600'
                                                            : 'hover:bg-gray-50 text-gray-600'
                                                        }`}
                                                >
                                                    {subItem.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    ))}

                    {/* Separador */}
                    <li className="border-t my-4 text-slate-200 transition-all duration-300"></li>

                    {/* Perfil del usuario - usando la misma estructura */}
                    <li>
                        <Link
                            href="/perfil"
                            className={`flex h-10 items-center p-2 rounded-md hover:bg-gray-100 text-gray-600 transition-all duration-300 ease-in-out ${isSidebarVisible ? 'justify-start' : 'justify-center'}`}
                        >
                            <div className="relative flex items-center">
                                {/* Icono */}
                                <div className="w-5 h-5 flex items-center justify-center z-10">
                                    <Icon name="perfil" />
                                </div>

                                {/* Texto */}
                                <div
                                    className={`absolute left-0 ml-7 whitespace-nowrap transition-all duration-300 ease-in-out
                                        ${sidebarOpen
                                            ? 'opacity-100 visible'
                                            : 'opacity-0 invisible'
                                        }`}
                                >
                                    Perfil
                                </div>
                            </div>
                        </Link>
                    </li>

                    {/* Cerrar sesión - usando la misma estructura */}
                    <li>
                        <button
                            onClick={onLogout}
                            className={`flex h-10 items-center p-2 rounded-md hover:bg-gray-100 text-gray-600 transition-all duration-300 ease-in-out ${isSidebarVisible ? 'justify-start' : 'justify-center'} w-full text-left`}
                        >
                            <div className="relative flex items-center">
                                {/* Icono */}
                                <div className="w-5 h-5 flex items-center justify-center z-10">
                                    <Icon name="logout" />
                                </div>

                                {/* Texto */}
                                <div
                                    className={`absolute left-0 ml-7 whitespace-nowrap transition-all duration-300 ease-in-out
                                        ${sidebarOpen
                                            ? 'opacity-100 visible'
                                            : 'opacity-0 invisible'
                                        }`}
                                >
                                    Cerrar Sesión
                                </div>
                            </div>
                        </button>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}