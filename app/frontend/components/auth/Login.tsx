'use client';

import React, { useState } from 'react';
import { Eye, EyeOff, LogIn, Mail, Lock } from 'lucide-react';
import Image from 'next/image';
import Button from '@/app/shared/components/Button';
import { APP_CONFIG } from '@/app/shared/utils/constants';
import styles from './Login.module.css';

/**
 * Componente Login unificado para SmartBeca
 * 
 * Maneja autenticación tanto para:
 * - Administradores → Redirige a adminview
 * - Usuarios → Redirige a userview
 */
const Login: React.FC = () => {
  // Estados del formulario
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  // Función para alternar visibilidad de contraseña
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Validación básica del formulario
  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Formato de email inválido';
    }

    if (!password) {
      newErrors.password = 'La contraseña es obligatoria';
    } else if (password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Función para manejar el submit del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // TODO: Implementar lógica de autenticación con Supabase
      console.log('Login attempt:', { email, password });

      // Simulación temporal
      await new Promise(resolve => setTimeout(resolve, 1500));

    } catch (error) {
      console.error('Error en login:', error);
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
              Bienvenido de vuelta
            </h2>
            <p className={styles.welcomeText}>
              Accede a tu cuenta para gestionar toda la información de Beca 18.
              Tu camino hacia la educación superior comienza aquí.
            </p>
          </div>

          <div className={styles.featuresList}>
            <div className={styles.featureItem}>
              <div className={styles.featureDot}></div>
              <span className={styles.featureText}>Información actualizada de convocatorias</span>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureDot}></div>
              <span className={styles.featureText}>Cronogramas y fechas importantes</span>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureDot}></div>
              <span className={styles.featureText}>Guías paso a paso del proceso</span>
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
                <LogIn className="w-8 h-8 text-white" />
              </div>
              <h2 className={styles.formTitle}>
                Iniciar Sesión
              </h2>
              <p className={styles.formSubtitle}>
                Ingresa tus credenciales para continuar
              </p>
            </div>

            {/* Formulario */}
            <form onSubmit={handleSubmit} className={styles.form}>

              {/* Campo Email */}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`${styles.fieldInput} ${errors.email ? styles.error : ''}`}
                    placeholder="tu@email.com"
                    disabled={isLoading}
                  />
                </div>
                {errors.email && (
                  <p className={styles.errorMessage}>{errors.email}</p>
                )}
              </div>

              {/* Campo Contraseña */}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`${styles.fieldInput} ${styles.passwordInput} ${errors.password ? styles.error : ''}`}
                    placeholder="••••••••"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
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

              {/* Botón de submit */}
              <div className={styles.submitContainer}>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  isLoading={isLoading}
                  loadingText="Iniciando sesión..."
                  icon={LogIn}
                  iconPosition="left"
                  className="py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-200"
                >
                  Iniciar Sesión
                </Button>
              </div>
            </form>

            {/* Footer */}
            <div className={styles.footer}>
              <p className={styles.footerText}>
                ¿No tienes cuenta?{' '}
                <button
                  className={styles.footerLink}
                  onClick={() => window.location.href = '/frontend/components/signup'}
                >
                  Regístrate aquí
                </button>

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Login;
