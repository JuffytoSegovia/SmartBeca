const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Información del proyecto */}
          <div>
            <h3 className="text-white font-semibold mb-3">SmartBeca</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Sistema web para optimizar la gestión de información para 
              postulantes de Beca 18 en la etapa de selección.
            </p>
          </div>

          {/* Enlaces institucionales */}
          <div>
            <h3 className="text-white font-semibold mb-3">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://www.pronabec.gob.pe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  PRONABEC
                </a>
              </li>
              <li>
                <a 
                  href="https://www.gob.pe/beca18" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Beca 18 Oficial
                </a>
              </li>
              <li>
                <a 
                  href="https://www.minedu.gob.pe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  MINEDU
                </a>
              </li>
            </ul>
          </div>

          {/* Información académica */}
          <div>
            <h3 className="text-white font-semibold mb-3">Proyecto de Tesis</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Ingeniería de Sistemas Empresariales
            </p>
            <p className="text-sm text-gray-400">
              Universidad Peruana de Ciencias Aplicadas
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Investigación aplicada - {currentYear}
            </p>
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              © {currentYear} SmartBeca. Desarrollado para fines académicos.
            </p>
            <p className="mt-2 md:mt-0">
              Proyecto de tesis - Optimización de gestión de información Beca 18
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer