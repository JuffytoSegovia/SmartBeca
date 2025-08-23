import React from 'react';
import { LucideIcon, Loader2 } from 'lucide-react';

// TIPOS PARA LAS VARIANTES DEL BOTÓN
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
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

// CLASES CSS PARA CADA VARIANTE - ESTILO BECAYACHAY
const variantClasses: Record<ButtonVariant, string> = {
  primary: `
    smartbeca-btn-primary
    border-none
  `,
  secondary: `
    smartbeca-btn-secondary
  `,
  outline: `
    bg-transparent 
    text-[#6b7280] 
    border-[#e5e7eb]
    hover:bg-[#f3f4f6] 
    hover:border-[#9ca3af]
    focus:ring-[#e5e7eb]
    active:bg-[#f3f4f6]
  `,
  ghost: `
    bg-transparent 
    text-[#6b7280] 
    border-transparent
    hover:bg-[#f3f4f6]
    focus:ring-[#e5e7eb]
    active:bg-[#e5e7eb]
  `,
  white: `
    bg-white 
    text-[#2c5aa0] 
    border-white
    hover:transform hover:-translate-y-1
    hover:shadow-[0_15px_35px_rgba(255,255,255,0.3)]
    focus:ring-white
  `
};

// CLASES CSS PARA CADA TAMAÑO - ESTILO BECAYACHAY
const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm font-semibold min-h-[32px]',
  md: 'px-4 py-2 text-base font-semibold min-h-[40px]',
  lg: 'px-6 py-3 text-lg font-semibold min-h-[48px]',
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
 * @param variant - Estilo visual del botón (primary, secondary, outline, ghost, white)
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
  
  // CLASES BASE COMUNES PARA TODOS LOS BOTONES - ESTILO BECAYACHAY
  const baseClasses = `
    inline-flex items-center justify-center
    border-2 rounded-[25px]
    font-semibold
    transition-all duration-300 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    cursor-pointer
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