'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, LogIn } from 'lucide-react';
import Button from '@/app/shared/components/Button';
import { APP_CONFIG, ROUTES, INDEX_CONTENT } from '@/app/shared/utils/constants';

/**
 * Componente Header para la página principal de SmartBeca
 * 
 * Incluye:
 * - Logo de SmartBeca
 * - Navegación responsive
 * - Botón de acceso al sistema
 * - Menu hamburguesa para móvil
 */
const Header: React.FC = () => {
  // Estado para controlar el menú móvil
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Función para alternar el menú móvil
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Función para cerrar el menú móvil
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--smartbeca-gray-200)] shadow-sm">
      <div className="smartbeca-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* LOGO Y NOMBRE DE LA MARCA */}
          <Link 
            href={ROUTES.HOME}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            onClick={closeMobileMenu}
          >
            {/* Logo */}
            <div className="relative w-8 h-8 lg:w-10 lg:h-10">
              <Image
                src="/smartbeca.png"
                alt={INDEX_CONTENT.HEADER.LOGO_ALT}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 1024px) 32px, 40px"
              />
            </div>
            
            {/* Nombre de la marca */}
            <span className="text-xl lg:text-2xl font-bold text-[var(--smartbeca-primary)] tracking-tight">
              {APP_CONFIG.name}
            </span>
          </Link>

          {/* NAVEGACIÓN DESKTOP */}
          <nav className="hidden md:flex items-center space-x-6">
            
            {/* Enlaces de navegación (para futuras secciones) */}
            <div className="flex items-center space-x-6 text-[var(--smartbeca-gray-600)]">
              <Link 
                href="#features"
                className="hover:text-[var(--smartbeca-primary)] transition-colors font-medium"
              >
                Características
              </Link>
              <Link 
                href="#benefits"
                className="hover:text-[var(--smartbeca-primary)] transition-colors font-medium"
              >
                Beneficios
              </Link>
            </div>

            {/* Botón de ingreso */}
            <Button
              variant="primary"
              size="md"
              icon={LogIn}
              iconPosition="left"
             onClick={() => window.location.href = '/frontend/components/auth'
}

              className="shadow-lg hover:shadow-xl"
            >
              {INDEX_CONTENT.HEADER.LOGIN_BUTTON}
            </Button>
          </nav>

          {/* BOTÓN MENÚ MÓVIL */}
          <button
            className="md:hidden p-2 rounded-lg text-[var(--smartbeca-gray-600)] hover:text-[var(--smartbeca-primary)] hover:bg-[var(--smartbeca-gray-100)] transition-colors"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* MENÚ MÓVIL */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[var(--smartbeca-gray-200)] bg-white">
            <nav className="py-4 space-y-4">
              
              {/* Enlaces de navegación móvil */}
              <div className="space-y-3">
                <Link
                  href="#features"
                  className="block px-4 py-2 text-[var(--smartbeca-gray-600)] hover:text-[var(--smartbeca-primary)] hover:bg-[var(--smartbeca-gray-50)] rounded-lg transition-colors font-medium"
                  onClick={closeMobileMenu}
                >
                  Características
                </Link>
                <Link
                  href="#benefits"
                  className="block px-4 py-2 text-[var(--smartbeca-gray-600)] hover:text-[var(--smartbeca-primary)] hover:bg-[var(--smartbeca-gray-50)] rounded-lg transition-colors font-medium"
                  onClick={closeMobileMenu}
                >
                  Beneficios
                </Link>
              </div>

              {/* Botón de ingreso móvil */}
              <div className="px-4 pt-3 border-t border-[var(--smartbeca-gray-200)]">
                <Button
                  variant="primary"
                  size="md"
                  icon={LogIn}
                  iconPosition="left"
                  fullWidth
onClick={() => window.location.href = '/frontend/components/auth'}

                  className="shadow-lg"
                >
                  {INDEX_CONTENT.HEADER.LOGIN_BUTTON}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;