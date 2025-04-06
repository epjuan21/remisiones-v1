// Opciones del menú para el sidebar
const menuItems = [
    {
        title: 'Dashboard',
        icon: 'dashboard',
        href: '/dashboard',
        permissions: ['dashboard:view']
    },
    {
        title: 'Remisiones',
        icon: 'remisiones',
        href: '/dashboard/remisiones',
        permissions: ['remisiones:view'],
        submenu: [
            { title: 'Todas las remisiones', href: '/dashboard/remisiones' },
            { title: 'Crear remisión', href: '/dashboard/remisiones/crear' }
        ]
    },
    {
        title: 'Ambulancias',
        icon: 'ambulancias',
        href: '/dashboard/ambulancias',
        permissions: ['ambulancias:view']
    },
    {
        title: 'Personal',
        icon: 'personal',
        href: '/dashboard/personal',
        permissions: ['personal:view']
    },
    {
        title: 'Entidades',
        icon: 'entidades',
        href: '/dashboard/entidades',
        permissions: ['entidades:view']
    },
    {
        title: 'Reportes',
        icon: 'reportes',
        href: '/dashboard/reportes',
        permissions: ['reportes:view']
    },
    {
        title: 'Configuración',
        icon: 'configuracion',
        href: '/dashboard/admin/settings',
        permissions: ['admin:view']
    }
];

export default menuItems; 