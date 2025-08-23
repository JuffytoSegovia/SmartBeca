'use client';

import React from 'react';
import {
  FileText,
  Calendar,
  Upload,
  HelpCircle,
  BookOpen,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Button from '@/app/shared/components/Button';
import { ROUTES, INDEX_CONTENT } from '@/app/shared/utils/constants';

/**
 * Componente MainContent para la página principal de SmartBeca
 * 
 * Incluye tres secciones principales:
 * - Hero: Título principal y llamada a la acción
 * - Features: Características del sistema (6 cards)
 * - Benefits: Beneficios de usar SmartBeca
 */
const MainContent: React.FC = () => {

  // Mapeo de iconos para las características
  const iconMap = {
    FileText,
    Calendar,
    Upload,
    HelpCircle,
    BookOpen,
    Star,
  };

  // Función para manejar el click del botón principal
const handleMainCTA = () => {
  window.location.href = '/frontend/components/auth';
};



  return (
    <main className="flex-1">

      {/* HERO SECTION */}
      <section className="hero-becayachay flex items-center pt-20 pb-16">
        <div className="smartbeca-container relative z-10">
          <div className="max-w-4xl text-center flex flex-col gap-4">

            {/* Título principal */}
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 smartbeca-fade-in leading-tight">
              {INDEX_CONTENT.HERO.TITLE}{' '}
              <span className="hero-title-gradient">
                {INDEX_CONTENT.HERO.TITLE_HIGHLIGHT}
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed smartbeca-fade-in">
              {INDEX_CONTENT.HERO.SUBTITLE}
            </p>

            {/* Botón principal */}
            <div className="smartbeca-fade-in">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                onClick={handleMainCTA}
              >
                {INDEX_CONTENT.HERO.CTA_BUTTON}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="bg-white" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>

        <div className="smartbeca-container flex flex-col gap-16">

          {/* Título de la sección */}
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              {INDEX_CONTENT.FEATURES.SECTION_TITLE}
            </h2>
          </div>

          {/* Grid de características */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDEX_CONTENT.FEATURES.ITEMS.map((feature, index) => {
              const IconComponent = iconMap[feature.icon as keyof typeof iconMap];

              return (
                <div
                  key={index}
                  className="smartbeca-card text-center smartbeca-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icono */}
                  <div className="flex items-center justify-center mb-6">
                    <IconComponent className="w-12 h-12 text-[#2c5aa0]" />
                  </div>

                  {/* Título */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section id="benefits" className="bg-gray-50 " style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="smartbeca-container flex flex-col gap-16">

          {/* Título de la sección */}
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--smartbeca-gray-900)] smartbeca-heading">
              {INDEX_CONTENT.BENEFITS.SECTION_TITLE}
            </h2>
          </div>

          {/* Contenido de beneficios */}
          <div className="flex flex-col gap-12 items-center">

            {/* Lista de beneficios */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {INDEX_CONTENT.BENEFITS.ITEMS.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 smartbeca-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icono de check */}
                  <div className="flex-shrink-0 w-6 h-6 bg-[var(--smartbeca-success)]/10 rounded-full flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-4 h-4 text-[var(--smartbeca-success)]" />
                  </div>

                  {/* Texto del beneficio */}
                  <p className="text-[var(--smartbeca-gray-700)] font-medium">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA final */}
            <div className="text-center smartbeca-card bg-gradient-to-br from-[var(--smartbeca-primary-light)]/5 to-[var(--smartbeca-primary)]/5 border-[var(--smartbeca-primary-light)]/20">

              {/* Título del CTA */}
              <h3 className="text-2xl lg:text-3xl font-bold text-[var(--smartbeca-gray-900)] mb-4">
                {INDEX_CONTENT.BENEFITS.CTA.TITLE}
              </h3>

              {/* Subtítulo del CTA */}
              <p className="text-[var(--smartbeca-gray-600)] mb-8 text-lg max-w-2xl mx-auto">
                {INDEX_CONTENT.BENEFITS.CTA.SUBTITLE}
              </p>

              {/* Botón final */}
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                onClick={handleMainCTA}
                className="shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {INDEX_CONTENT.BENEFITS.CTA.BUTTON}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;