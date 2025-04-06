export default function DashboardPage() {
    return (
        <div className="grid gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Bienvenido al Sistema de Remisiones</h2>
                <p className="text-gray-600">
                    Selecciona una opción del menú lateral para comenzar a gestionar tus remisiones,
                    personal, ambulancias y más.
                </p>

                <div className="mt-6 grid md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <h3 className="font-medium text-blue-700 mb-2">Gestión de Remisiones</h3>
                        <p className="text-sm text-gray-600">
                            Crea, consulta y actualiza remisiones médicas.
                        </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                        <h3 className="font-medium text-green-700 mb-2">Control de Personal</h3>
                        <p className="text-sm text-gray-600">
                            Administra el personal médico y conductores.
                        </p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                        <h3 className="font-medium text-purple-700 mb-2">Reportes y Estadísticas</h3>
                        <p className="text-sm text-gray-600">
                            Visualiza informes sobre las remisiones.
                        </p>
                    </div>
                </div>
            </div>

            {/* Espacio para futuros componentes */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Actividad Reciente</h3>
                    <p className="text-gray-500 text-sm">
                        La información de actividad reciente se mostrará aquí.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Estadísticas Generales</h3>
                    <p className="text-gray-500 text-sm">
                        Las estadísticas generales se mostrarán aquí.
                    </p>
                </div>
            </div>
        </div>
    );
}