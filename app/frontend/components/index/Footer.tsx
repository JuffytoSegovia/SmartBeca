'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { APP_CONFIG, INDEX_CONTENT } from '@/app/shared/utils/constants';

/**
 * Componente Footer para la página principal de SmartBeca
 * 
 * Incluye:
 * - Logo y nombre de la marca
 * - Copyright con año dinámico
 * - Links legales (términos, privacidad, contacto)
 * - Diseño minimalista y responsive
 */
const Footer: React.FC = () => {
  
  // Obtener el año actual para el copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--smartbeca-gray-900)] text-white">
      <div className="smartbeca-container">
        
        {/* Contenido principal del footer */}
        <div className="py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
            
            {/* Logo y marca */}
            <div className="flex items-center space-x-3">
              <div className="relative w-8 h-8">
                <Image
                  src="/smartbeca.png"
                  alt={INDEX_CONTENT.HEADER.LOGO_ALT}
                  fill
                  className="object-contain"
                  sizes="32px"
                />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {APP_CONFIG.name}
              </span>
            </div>

            {/* Descripción breve */}
            <div className="text-center lg:text-left max-w-md">
              <p className="text-[var(--smartbeca-gray-400)] leading-relaxed">
                {APP_CONFIG.description}
              </p>
            </div>

            {/* Enlaces legales */}
            <nav className="flex flex-wrap items-center justify-center lg:justify-end space-x-6 lg:space-x-8">
              {INDEX_CONTENT.FOOTER.LINKS.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-[var(--smartbeca-gray-400)] hover:text-white transition-colors duration-200 font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-[var(--smartbeca-gray-800)]"></div>

        {/* Sección de copyright */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-[var(--smartbeca-gray-400)] text-sm">
              {INDEX_CONTENT.FOOTER.COPYRIGHT}
            </div>

            {/* Mensaje adicional */}
            <div className="flex items-center space-x-2 text-[var(--smartbeca-gray-400)] text-sm">
              <span>Desarrollado con</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>para estudiantes peruanos</span>
            </div>
          </div>
        </div>

        {/* Información adicional en mobile */}
        <div className="md:hidden py-4 border-t border-[var(--smartbeca-gray-800)]">
          <div className="text-center space-y-2">
            <p className="text-[var(--smartbeca-gray-500)] text-xs">
              Versión {APP_CONFIG.version}
            </p>
            <p className="text-[var(--smartbeca-gray-500)] text-xs">
              Sistema oficial de información para Beca 18
            </p>
          </div>
        </div>
      </div>

      {/* Patrón decorativo sutil (opcional) */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--smartbeca-primary)]/5 via-transparent to-[var(--smartbeca-primary)]/5"></div>
        <div className="relative h-1 bg-[var(--smartbeca-primary)]/20"></div>
      </div>
    </footer>
  );
};

export default Footer;