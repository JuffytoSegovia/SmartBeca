import React from 'react';
import type { Metadata } from 'next';
import SignUp from './SignUp';

// Metadata para la página de registro
export const metadata: Metadata = {
  title: 'Crear Cuenta - SmartBeca',
  description: 'Regístrate en SmartBeca para acceder a toda la información de Beca 18.',
};

/**
 * Página de registro de SmartBeca
 * 
 * Ruta: /frontend/components/signup
 * Componente: SignUp para registro de usuarios
 */
export default function SignUpPage() {
  return <SignUp />;
}
