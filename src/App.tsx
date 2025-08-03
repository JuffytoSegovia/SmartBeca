import Layout from './shared/components/layout/Layout'

function App() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        {/* Contenido temporal - se reemplazará por módulos */}
        <div className="text-center py-16">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Bienvenido al Sistema de Información Beca 18
          </h1>
          <p className="text-gray-600">
            Selecciona una sección del menú lateral para comenzar a explorar la información de la convocatoria.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default App