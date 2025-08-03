import { LogOut, User } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false) // Temporal, después será del store

  const handleLogout = () => {
    // Lógica de logout después
    setIsLoggedIn(false)
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo y título */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B18</span>
            </div>
            <h1 className="text-xl font-semibold text-gray-800">
              SmartBeca
            </h1>
          </div>

          {/* Navegación derecha */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                {/* Usuario logueado */}
                <div className="flex items-center space-x-2 text-gray-600">
                  <User size={18} />
                  <span className="text-sm">Admin</span>
                </div>
                
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <LogOut size={18} />
                  <span className="text-sm">Salir</span>
                </button>
              </>
            ) : (
              /* Usuario no logueado */
              <div className="text-sm text-gray-500">
                Beca 18 - Sistema de Información
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header