import React from 'react';
import { LucideIcon, Loader2 } from 'lucide-react';

// TIPOS PARA LAS VARIANTES DEL BOTÓN
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

// INTERFAZ PARA LAS PROPS DEL BOTÓN
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  loadingText?: string;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  children: React.ReactNode;
}

// CLASES CSS PARA CADA VARIANTE
const variantClasses: Record<ButtonVariant, string> = {
  primary: `
    bg-[var(--smartbeca-primary)] 
    text-white 
    border-[var(--smartbeca-primary)]
    hover:bg-[var(--smartbeca-primary-dark)] 
    hover:border-[var(--smartbeca-primary-dark)]
    focus:ring-[var(--smartbeca-primary-light)]
    active:bg-[var(--smartbeca-primary-dark)]
  `,
  secondary: `
    bg-white 
    text-[var(--smartbeca-primary)] 
    border-[var(--smartbeca-primary)]
    hover:bg-[var(--smartbeca-primary)] 
    hover:text-white
    focus:ring-[var(--smartbeca-primary-light)]
    active:bg-[var(--smartbeca-primary-dark)]
  `,
  outline: `
    bg-transparent 
    text-[var(--smartbeca-gray-700)] 
    border-[var(--smartbeca-gray-300)]
    hover:bg-[var(--smartbeca-gray-50)] 
    hover:border-[var(--smartbeca-gray-400)]
    focus:ring-[var(--smartbeca-gray-300)]
    active:bg-[var(--smartbeca-gray-100)]
  `,
  ghost: `
    bg-transparent 
    text-[var(--smartbeca-gray-700)] 
    border-transparent
    hover:bg-[var(--smartbeca-gray-100)]
    focus:ring-[var(--smartbeca-gray-300)]
    active:bg-[var(--smartbeca-gray-200)]
  `
};

// CLASES CSS PARA CADA TAMAÑO
const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm font-medium min-h-[32px]',
  md: 'px-4 py-2 text-base font-medium min-h-[40px]',
  lg: 'px-6 py-3 text-lg font-medium min-h-[48px]',
};

// CLASES PARA ICONOS SEGÚN TAMAÑO
const iconSizeClasses: Record<ButtonSize, string> = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
};

/**
 * Componente Button reutilizable para SmartBeca
 * 
 * @param variant - Estilo visual del botón (primary, secondary, outline, ghost)
 * @param size - Tamaño del botón (sm, md, lg)
 * @param isLoading - Si muestra estado de carga
 * @param loadingText - Texto alternativo durante la carga
 * @param icon - Icono de Lucide React para mostrar
 * @param iconPosition - Posición del icono (left, right)
 * @param fullWidth - Si ocupa todo el ancho disponible
 * @param children - Contenido del botón
 * @param disabled - Si el botón está deshabilitado
 * @param className - Clases CSS adicionales
 * @param onClick - Función a ejecutar al hacer clic
 */
const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  loadingText = 'Cargando...',
  icon: Icon,
  iconPosition = 'left',
  fullWidth = false,
  children,
  disabled = false,
  className = '',
  onClick,
  ...props
}) => {
  
  // CLASES BASE COMUNES PARA TODOS LOS BOTONES
  const baseClasses = `
    inline-flex items-center justify-center
    border-2 rounded-lg
    font-medium
    transition-all duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    transform hover:scale-[1.02] active:scale-[0.98]
    shadow-sm hover:shadow-md
  `;

  // COMBINAR TODAS LAS CLASES
  const buttonClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();

  // DETERMINAR QUE CONTENIDO MOSTRAR
  const buttonContent = isLoading ? loadingText : children;

  // DETERMINAR QUE ICONO MOSTRAR
  const DisplayIcon = isLoading ? Loader2 : Icon;

  // MANEJAR CLICK DEL BOTÓN
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!isLoading && !disabled && onClick) {
      onClick(event);
    }
  };

  return (
    <button
      className={buttonClasses}
      disabled={disabled || isLoading}
      onClick={handleClick}
      aria-disabled={disabled || isLoading}
      aria-label={isLoading ? loadingText : undefined}
      {...props}
    >
      {/* ICONO IZQUIERDO */}
      {DisplayIcon && iconPosition === 'left' && (
        <DisplayIcon 
          className={`
            ${iconSizeClasses[size]} 
            ${buttonContent ? 'mr-2' : ''} 
            ${isLoading ? 'animate-spin' : ''}
          `}
        />
      )}

      {/* CONTENIDO DEL BOTÓN */}
      {buttonContent && (
        <span className="truncate">
          {buttonContent}
        </span>
      )}

      {/* ICONO DERECHO */}
      {DisplayIcon && iconPosition === 'right' && (
        <DisplayIcon 
          className={`
            ${iconSizeClasses[size]} 
            ${buttonContent ? 'ml-2' : ''} 
            ${isLoading ? 'animate-spin' : ''}
          `}
        />
      )}
    </button>
  );
};

export default Button;