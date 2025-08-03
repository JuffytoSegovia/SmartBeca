import { LogOut, User } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false) // Temporal, después será del store

  const handleLogout = () => {
    // Lógica de logout después
    setIsLoggedIn(false)
  }

  return (
    <header className="bg-blue-600 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo y título */}
          <div className="flex items-center space-x-3">
            <h1 className="text-xl font-bold text-white">
              Beca 18 - Programa Nacional de Becas
            </h1>
            <span className="text-blue-200 text-sm hidden md:block">
              Sistema de Información para Postulantes
            </span>
          </div>

          {/* Navegación derecha */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                {/* Usuario logueado */}
                <div className="flex items-center space-x-2 text-white">
                  <User size={18} />
                  <span className="text-sm">Admin</span>
                </div>
                
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-3 py-2 text-white hover:bg-blue-700 rounded-lg transition-colors"
                >
                  <LogOut size={18} />
                  <span className="text-sm">Salir</span>
                </button>
              </>
            ) : (
              /* Botón acceder como admin */
              <button className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Acceder como Admin
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header