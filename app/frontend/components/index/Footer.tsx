'use client';

import React from 'react';
import Image from 'next/image';
import { APP_CONFIG, INDEX_CONTENT } from '@/app/shared/utils/constants';

/**
 * Componente Footer para la página principal de SmartBeca
 * 
 * Incluye:
 * - Logo y nombre de la marca
 * - Copyright con año dinámico
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white" style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
      <div className="smartbeca-container">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          
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
            <span className="text-xl font-bold text-white">
              {APP_CONFIG.name}
            </span>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm text-center md:text-right">
            {INDEX_CONTENT.FOOTER.COPYRIGHT}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;