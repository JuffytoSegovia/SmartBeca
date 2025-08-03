import { createClient } from '@supabase/supabase-js'

// Obtener variables de entorno
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Validar que las variables existan
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

// Crear cliente Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Funciones útiles para auth
export const auth = {
  // Obtener sesión actual
  getSession: () => supabase.auth.getSession(),
  
  // Obtener usuario actual
  getUser: () => supabase.auth.getUser(),
  
  // Login con email y password
  signIn: (email: string, password: string) => 
    supabase.auth.signInWithPassword({ email, password }),
  
  // Registro
  signUp: (email: string, password: string) =>
    supabase.auth.signUp({ email, password }),
  
  // Logout
  signOut: () => supabase.auth.signOut(),
}

export default supabase