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
    window.location.href = ROUTES.AUTH;
  };

  return (
    <main className="flex-1">
      
      {/* HERO SECTION */}
      <section className="py-16 lg:py-24 smartbeca-gradient text-white">
        <div className="smartbeca-container">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Título principal */}
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 smartbeca-fade-in">
              {INDEX_CONTENT.HERO.TITLE}{' '}
              <span className="text-[var(--smartbeca-primary-light)] drop-shadow-lg">
                {INDEX_CONTENT.HERO.TITLE_HIGHLIGHT}
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="text-lg lg:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed smartbeca-fade-in">
              {INDEX_CONTENT.HERO.SUBTITLE}
            </p>

            {/* Botón principal */}
            <div className="smartbeca-fade-in">
              <Button
                variant="secondary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                onClick={handleMainCTA}
                className="bg-white text-[var(--smartbeca-primary)] hover:bg-blue-50 shadow-2xl hover:shadow-3xl transform hover:scale-105"
              >
                {INDEX_CONTENT.HERO.CTA_BUTTON}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-16 lg:py-20 bg-[var(--smartbeca-gray-50)]">
        <div className="smartbeca-container">
          
          {/* Título de la sección */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--smartbeca-gray-900)] mb-4 smartbeca-heading">
              {INDEX_CONTENT.FEATURES.SECTION_TITLE}
            </h2>
            <div className="w-24 h-1 bg-[var(--smartbeca-primary)] mx-auto rounded-full"></div>
          </div>

          {/* Grid de características */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDEX_CONTENT.FEATURES.ITEMS.map((feature, index) => {
              const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
              
              return (
                <div
                  key={index}
                  className="smartbeca-card group hover:border-[var(--smartbeca-primary-light)] smartbeca-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icono */}
                  <div className="flex items-center justify-center w-12 h-12 bg-[var(--smartbeca-primary-light)]/10 rounded-lg mb-4 group-hover:bg-[var(--smartbeca-primary-light)]/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-[var(--smartbeca-primary)]" />
                  </div>

                  {/* Título */}
                  <h3 className="text-xl font-semibold text-[var(--smartbeca-gray-900)] mb-3 group-hover:text-[var(--smartbeca-primary)] transition-colors">
                    {feature.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-[var(--smartbeca-gray-600)] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section id="benefits" className="py-16 lg:py-20 bg-white">
        <div className="smartbeca-container">
          
          {/* Título de la sección */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--smartbeca-gray-900)] mb-4 smartbeca-heading">
              {INDEX_CONTENT.BENEFITS.SECTION_TITLE}
            </h2>
            <div className="w-24 h-1 bg-[var(--smartbeca-primary)] mx-auto rounded-full"></div>
          </div>

          {/* Contenido de beneficios */}
          <div className="max-w-4xl mx-auto">
            
            {/* Lista de beneficios */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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