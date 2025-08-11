import React from 'react';
import type { Metadata } from 'next';
import Header from '@/app/frontend/components/index/Header';
import MainContent from '@/app/frontend/components/index/MainContent';
import Footer from '@/app/frontend/components/index/Footer';

// Metadata específica para la página principal
export const metadata: Metadata = {
  title: 'SmartBeca - Sistema de Gestión de Becas | Beca 18',
  description: 'Accede a toda la información necesaria para tu postulación a Beca 18. Requisitos, cronogramas, documentos y guías completas para cada etapa del proceso.',
  keywords: [
    'Beca 18',
    'SmartBeca',
    'becas',
    'educación',
    'postulación',
    'estudiantes',
    'Perú',
    'cronograma',
    'requisitos',
    'documentos'
  ],
  authors: [{ name: 'SmartBeca Team' }],
  creator: 'SmartBeca Team',
  publisher: 'SmartBeca',
  openGraph: {
    title: 'SmartBeca - Sistema de Gestión de Becas',
    description: 'Tu guía completa para la postulación a Beca 18. Información actualizada, cronogramas y documentos.',
    url: 'https://smartbeca.com',
    siteName: 'SmartBeca',
    images: [
      {
        url: '/smartbeca-og.png', // Imagen para redes sociales (crear después)
        width: 1200,
        height: 630,
        alt: 'SmartBeca - Sistema de Gestión de Becas',
      }
    ],
    locale: 'es_PE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmartBeca - Sistema de Gestión de Becas',
    description: 'Tu guía completa para la postulación a Beca 18.',
    images: ['/smartbeca-og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Agregar códigos de verificación cuando tengas el dominio
    // google: 'google-site-verification-code',
    // bing: 'bing-site-verification-code',
  },
};

/**
 * Página principal de SmartBeca (INDEX)
 * 
 * Esta es la página que se muestra cuando los usuarios visitan la raíz del sitio (/)
 * Integra todos los componentes del módulo INDEX:
 * 
 * - Header: Logo, navegación y botón de ingreso
 * - MainContent: Hero, características y beneficios
 * - Footer: Copyright, links legales y información adicional
 * 
 * @returns JSX.Element - Página principal completa
 */
export default function HomePage(): JSX.Element {
  return (
    <>
      {/* 
        ESTRUCTURA SEMÁNTICA DE LA PÁGINA:
        - Header: Navegación principal
        - Main: Contenido principal (Hero + Features + Benefits)
        - Footer: Información secundaria y legal
      */}
      
      {/* Header con navegación y CTA */}
      <Header />

      {/* Contenido principal de la página */}
      <MainContent />

      {/* Footer con información legal */}
      <Footer />
    </>
  );
}