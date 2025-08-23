'use client';

import React, { useState } from 'react';
import { Eye, EyeOff, UserPlus, Mail, Lock, User } from 'lucide-react';
import Image from 'next/image';
import Button from '@/app/shared/components/Button';
import { APP_CONFIG } from '@/app/shared/utils/constants';
import styles from './SignUp.module.css';

/**
 * Componente SignUp para registro de usuarios en SmartBeca
 * 
 * Permite registro de nuevos postulantes con:
 * - Datos personales básicos
 * - Credenciales de acceso
 * - Validaciones en tiempo real
 */
const SignUp: React.FC = () => {
  // Estados del formulario
  const [formData, setFormData] = useState({
    nombres: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    dni: '',
    numeroCelular: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  // Función para manejar cambios en los inputs
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  // Función para alternar visibilidad de contraseñas
  const togglePasswordVisibility = (field: 'password' | 'confirmPassword') => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  // Validación del formulario
const validateForm = () => {
  const newErrors: {[key: string]: string} = {};

  // Validar nombres
  if (!formData.nombres.trim()) {
    newErrors.nombres = 'Los nombres son obligatorios';
  }

  // Validar apellido paterno
  if (!formData.apellidoPaterno.trim()) {
    newErrors.apellidoPaterno = 'El apellido paterno es obligatorio';
  }

  // Validar apellido materno
  if (!formData.apellidoMaterno.trim()) {
    newErrors.apellidoMaterno = 'El apellido materno es obligatorio';
  }

  // Validar email
  if (!formData.email.trim()) {
    newErrors.email = 'El email es obligatorio';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = 'Formato de email inválido';
  }

  // Validar contraseña
  if (!formData.password) {
    newErrors.password = 'La contraseña es obligatoria';
  } else if (formData.password.length < 6) {
    newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
  }

  // Validar confirmación de contraseña
  if (!formData.confirmPassword) {
    newErrors.confirmPassword = 'Confirma tu contraseña';
  } else if (formData.password !== formData.confirmPassword) {
    newErrors.confirmPassword = 'Las contraseñas no coinciden';
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};


  // Función para manejar el submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    try {
      // TODO: Implementar lógica de registro con Supabase
      console.log('Registro attempt:', formData);
      
      // Simulación temporal
      await new Promise(resolve => setTimeout(resolve, 2000));
      
    } catch (error) {
      console.error('Error en registro:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        
        {/* Panel izquierdo - Información */}
        <div className={styles.infoPanel}>
          <div className={styles.brandSection}>
            <div className={styles.brandHeader}>
              <div className={styles.brandLogo}>
                <Image
                  src="/smartbeca.png"
                  alt="SmartBeca Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <h1 className={styles.brandTitle}>
                {APP_CONFIG.name}
              </h1>
            </div>
            
            <h2 className={styles.welcomeTitle}>
              Únete a SmartBeca
            </h2>
            <p className={styles.welcomeText}>
              Crea tu cuenta y accede a toda la información necesaria para tu postulación a Beca 18. 
              Es rápido, fácil y completamente gratuito.
            </p>
          </div>

          <div className={styles.featuresList}>
            <div className={styles.featureItem}>
              <div className={styles.featureDot}></div>
              <span className={styles.featureText}>Acceso completo a convocatorias</span>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureDot}></div>
              <span className={styles.featureText}>Seguimiento de tu postulación</span>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureDot}></div>
              <span className={styles.featureText}>Notificaciones importantes</span>
            </div>
          </div>
        </div>

        {/* Panel derecho - Formulario */}
        <div className={styles.formPanel}>
          <div className={styles.formCard}>
            
            {/* Header móvil */}
            <div className={styles.mobileHeader}>
              <div className={styles.mobileBrand}>
                <div className={styles.mobileLogo}>
                  <Image
                    src="/smartbeca.png"
                    alt="SmartBeca Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <h1 className={styles.mobileTitle}>
                  {APP_CONFIG.name}
                </h1>
              </div>
            </div>

            {/* Título del formulario */}
            <div className={styles.formHeader}>
              <div className={styles.iconContainer}>
                <UserPlus className="w-8 h-8 text-white" />
              </div>
              <h2 className={styles.formTitle}>
                Crear Cuenta
              </h2>
              <p className={styles.formSubtitle}>
                Completa tus datos para registrarte
              </p>
            </div>

            {/* Formulario */}
            <form onSubmit={handleSubmit} className={styles.form}>
              
              {/* Nombres */}
              <div className={styles.fieldGroup}>
                <label htmlFor="nombres" className={styles.fieldLabel}>
                  Nombres
                </label>
                <div className={styles.fieldContainer}>
                  <div className={styles.fieldIcon}>
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="nombres"
                    type="text"
                    value={formData.nombres}
                    onChange={(e) => handleInputChange('nombres', e.target.value)}
                    className={`${styles.fieldInput} ${errors.nombres ? styles.error : ''}`}
                    placeholder="Tus nombres"
                    disabled={isLoading}
                  />
                </div>
                {errors.nombres && (
                  <p className={styles.errorMessage}>{errors.nombres}</p>
                )}
              </div>

              {/* Apellidos en una fila */}
              <div className={styles.fieldRow}>
                <div className={styles.fieldGroup}>
                  <label htmlFor="apellidoPaterno" className={styles.fieldLabel}>
                    Apellido Paterno
                  </label>
                  <div className={styles.fieldContainer}>
                    <input
                      id="apellidoPaterno"
                      type="text"
                      value={formData.apellidoPaterno}
                      onChange={(e) => handleInputChange('apellidoPaterno', e.target.value)}
                      className={`${styles.fieldInput} ${styles.fieldInputSmall} ${errors.apellidoPaterno ? styles.error : ''}`}
                      placeholder="Apellido paterno"
                      disabled={isLoading}
                    />
                  </div>
                  {errors.apellidoPaterno && (
                    <p className={styles.errorMessage}>{errors.apellidoPaterno}</p>
                  )}
                </div>

                <div className={styles.fieldGroup}>
                  <label htmlFor="apellidoMaterno" className={styles.fieldLabel}>
                    Apellido Materno
                  </label>
                  <div className={styles.fieldContainer}>
                    <input
                      id="apellidoMaterno"
                      type="text"
                      value={formData.apellidoMaterno}
                      onChange={(e) => handleInputChange('apellidoMaterno', e.target.value)}
                      className={`${styles.fieldInput} ${styles.fieldInputSmall} ${errors.apellidoMaterno ? styles.error : ''}`}
                      placeholder="Apellido materno"
                      disabled={isLoading}
                    />
                  </div>
                  {errors.apellidoMaterno && (
                    <p className={styles.errorMessage}>{errors.apellidoMaterno}</p>
                  )}
                </div>
              </div>


              {/* Email */}
              <div className={styles.fieldGroup}>
                <label htmlFor="email" className={styles.fieldLabel}>
                  Correo Electrónico
                </label>
                <div className={styles.fieldContainer}>
                  <div className={styles.fieldIcon}>
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`${styles.fieldInput} ${errors.email ? styles.error : ''}`}
                    placeholder="tu@email.com"
                    disabled={isLoading}
                  />
                </div>
                {errors.email && (
                  <p className={styles.errorMessage}>{errors.email}</p>
                )}
              </div>

              {/* Contraseña */}
              <div className={styles.fieldGroup}>
                <label htmlFor="password" className={styles.fieldLabel}>
                  Contraseña
                </label>
                <div className={styles.fieldContainer}>
                  <div className={styles.fieldIcon}>
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className={`${styles.fieldInput} ${styles.passwordInput} ${errors.password ? styles.error : ''}`}
                    placeholder="••••••••"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility('password')}
                    className={styles.passwordToggle}
                    disabled={isLoading}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className={styles.errorMessage}>{errors.password}</p>
                )}
              </div>

              {/* Confirmar Contraseña */}
              <div className={styles.fieldGroup}>
                <label htmlFor="confirmPassword" className={styles.fieldLabel}>
                  Confirmar Contraseña
                </label>
                <div className={styles.fieldContainer}>
                  <div className={styles.fieldIcon}>
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    className={`${styles.fieldInput} ${styles.passwordInput} ${errors.confirmPassword ? styles.error : ''}`}
                    placeholder="••••••••"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility('confirmPassword')}
                    className={styles.passwordToggle}
                    disabled={isLoading}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className={styles.errorMessage}>{errors.confirmPassword}</p>
                )}
              </div>

              {/* Botón de submit */}
              <div className={styles.submitContainer}>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  isLoading={isLoading}
                  loadingText="Creando cuenta..."
                  icon={UserPlus}
                  iconPosition="left"
                  className="py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-200"
                >
                  Crear Cuenta
                </Button>
              </div>
            </form>

            {/* Footer */}
            <div className={styles.footer}>
              <p className={styles.footerText}>
                ¿Ya tienes cuenta?{' '}
<button 
  className={styles.footerLink}
  onClick={() => window.location.href = '/frontend/components/auth'}
>
  Inicia sesión aquí
</button>

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
