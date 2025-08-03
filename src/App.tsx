import Layout from './shared/components/layout/Layout'
import Button from './shared/components/ui/Button'
import Input from './shared/components/ui/Input'
import { Mail, Lock } from 'lucide-react'

function App() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        {/* Título de prueba */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            SmartBeca - Sistema de Gestión
          </h1>
          <p className="text-gray-600">
            Plataforma web para optimizar la información de Beca 18
          </p>
        </div>

        {/* Card de prueba con nuestros componentes */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Prueba de Componentes
          </h2>
          
          {/* Inputs de prueba */}
          <div className="space-y-4 mb-6">
            <Input
              label="Email"
              type="email"
              placeholder="admin@smartbeca.com"
              leftIcon={<Mail size={18} />}
            />
            
            <Input
              label="Contraseña"
              type="password"
              placeholder="••••••••"
              leftIcon={<Lock size={18} />}
            />
            
            <Input
              label="Campo con error"
              placeholder="Ejemplo de error"
              error="Este campo es obligatorio"
            />
          </div>
          
          {/* Botones de prueba */}
          <div className="space-y-3">
            <Button fullWidth>
              Botón Primario
            </Button>
            
            <div className="grid grid-cols-2 gap-3">
              <Button variant="secondary">
                Secundario
              </Button>
              <Button variant="outline">
                Outline
              </Button>
            </div>
            
            <Button variant="danger" loading>
              Cargando...
            </Button>
          </div>
        </div>

        {/* Info del proyecto */}
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <p className="text-blue-800 text-sm">
            🚀 <strong>Fase de Desarrollo:</strong> Implementando componentes base
          </p>
          <p className="text-blue-600 text-xs mt-1">
            Próximo paso: Login de administrador
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default App