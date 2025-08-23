import React from 'react';
import type { Metadata } from 'next';
import Login from '@/app/frontend/components/auth/Login';

// Metadata para la página de login
export const metadata: Metadata = {
  title: 'Iniciar Sesión - SmartBeca',
  description: 'Accede a tu cuenta de SmartBeca para gestionar tu información de Beca 18.',
};

/**
 * Página de autenticación de SmartBeca
 * 
 * Ruta: /auth
 * Componente: Login unificado para admin y usuarios
 */
export default function AuthPage() {

  return <Login />;
}
