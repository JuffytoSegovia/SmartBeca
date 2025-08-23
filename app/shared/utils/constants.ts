// CONFIGURACIÓN GENERAL DE LA APLICACIÓN
export const APP_CONFIG = {
  name: 'SmartBeca',
  version: '1.0.0',
  description: 'Sistema de Gestión de Becas - Beca 18',
  author: 'SmartBeca Team',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL || '',

} as const;

// RUTAS PRINCIPALES DEL SISTEMA
export const ROUTES = {
  // Rutas públicas
  HOME: '/',
  AUTH: '/auth',
  
  // Rutas de usuario (postulante)
  USER_DASHBOARD: '/usuario',
  USER_CONVOCATORIAS: '/usuario/convocatorias',
  USER_POSTULACIONES: '/usuario/postulaciones',
  USER_PERFIL: '/usuario/perfil',
  USER_DOCUMENTOS: '/usuario/documentos',
  
  // Rutas de administrador
  ADMIN_DASHBOARD: '/admin',
  ADMIN_CONVOCATORIAS: '/admin/convocatorias',
  ADMIN_ETAPAS: '/admin/etapas',
  ADMIN_CONTENIDO: '/admin/contenido',
  ADMIN_USUARIOS: '/admin/usuarios',
  ADMIN_REPORTES: '/admin/reportes',
} as const;

// ROLES DEL SISTEMA
export const USER_ROLES = {
  POSTULANTE: 'postulante',
  ADMINISTRADOR: 'administrador',
} as const;

// LABELS PARA ROLES (para mostrar en UI)
export const ROLE_LABELS = {
  [USER_ROLES.POSTULANTE]: 'Postulante',
  [USER_ROLES.ADMINISTRADOR]: 'Administrador',
} as const;

// TEXTOS PRINCIPALES DEL INDEX
export const INDEX_CONTENT = {
  // Header
  HEADER: {
    LOGO_ALT: 'Logo SmartBeca',
    LOGIN_BUTTON: 'Ingresar',
  },
  
  // Hero Section
  HERO: {
    TITLE: 'Bienvenido a',
    TITLE_HIGHLIGHT: 'Smart Beca',
    SUBTITLE: 'Accede a toda la información necesaria para tu postulación a Beca 18. Tu guía completa con requisitos, cronogramas y consejos para cada etapa del proceso.',
    CTA_BUTTON: 'Ingresar al Sistema',
  },
  
  // Sección de características
  FEATURES: {
    SECTION_TITLE: '¿Qué encontrarás en Smart Beca?',
    ITEMS: [
      {
        title: 'Información de Convocatorias',
        description: 'Consulta todas las convocatorias disponibles, requisitos específicos y detalles importantes para tu postulación.',
        icon: 'FileText',
      },
      {
        title: 'Cronograma de Etapas',
        description: 'Mantente informado sobre todas las fechas importantes, etapas del proceso y plazos que debes cumplir.',
        icon: 'Calendar',
      },
      {
        title: 'Lista de Documentos',
        description: 'Revisa qué documentos necesitas preparar y los formatos requeridos para tu postulación.',
        icon: 'Upload',
      },
      {
        title: 'Preguntas Frecuentes',
        description: 'Encuentra respuestas a las dudas más comunes sobre Beca 18 y el proceso de postulación.',
        icon: 'HelpCircle',
      },
      {
        title: 'Guía del Proceso',
        description: 'Conoce paso a paso todo el proceso de postulación desde el inicio hasta la adjudicación de la beca.',
        icon: 'BookOpen',
      },
      {
        title: 'Consejos y Tips',
        description: 'Recomendaciones útiles para preparar mejor tu postulación y aumentar tus posibilidades de éxito.',
        icon: 'Star',
      },
    ],
  },
  
  // Sección de beneficios
  BENEFITS: {
    SECTION_TITLE: '¿Por qué usar Smart Beca para informarte?',
    ITEMS: [
      'Información actualizada y oficial de Beca 18',
      'Acceso fácil a todos los requisitos y documentos',
      'Cronogramas claros y fechas importantes',
      'Consulta desde cualquier dispositivo las 24 horas',
      'Guías paso a paso del proceso completo',
      'Tips y consejos para una postulación exitosa',
    ],
    CTA: {
      TITLE: '¡Infórmate sobre Beca 18!',
      SUBTITLE: 'Accede ahora a toda la información que necesitas para preparar tu postulación de manera exitosa.',
      BUTTON: 'Acceder a la Información',
    },
  },
  
  // Footer
  FOOTER: {
    COPYRIGHT: `© ${new Date().getFullYear()} Smart Beca. Todos los derechos reservados.`,
    LINKS: [
      { label: 'Términos de Uso', href: '/terminos' },
      { label: 'Política de Privacidad', href: '/privacidad' },
      { label: 'Contacto', href: '/contacto' },
    ],
  },
} as const;

// ESTADOS DE CONVOCATORIAS (para usar más adelante)
export const CONVOCATORIA_STATUS = {
  DRAFT: 'borrador',
  ACTIVE: 'activa',
  CLOSED: 'cerrada',
  CANCELLED: 'cancelada',
} as const;

// TIPOS DE DOCUMENTOS (para usar más adelante)
export const DOCUMENT_TYPES = {
  PDF: 'application/pdf',
  DOC: 'application/msword',
  DOCX: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  JPG: 'image/jpeg',
  PNG: 'image/png',
} as const;

// CONFIGURACIÓN DE ARCHIVOS
export const FILE_CONFIG = {
  MAX_SIZE: 5 * 1024 * 1024, // 5MB en bytes
  ALLOWED_TYPES: Object.values(DOCUMENT_TYPES),
  MAX_FILES_PER_UPLOAD: 3,
} as const;

// MENSAJES DE ERROR COMUNES
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Error de conexión. Por favor, intenta nuevamente.',
  UNAUTHORIZED: 'No tienes permisos para acceder a esta sección.',
  FILE_TOO_LARGE: 'El archivo es demasiado grande. Tamaño máximo: 5MB.',
  INVALID_FILE_TYPE: 'Tipo de archivo no permitido.',
  REQUIRED_FIELD: 'Este campo es obligatorio.',
  INVALID_EMAIL: 'Formato de email inválido.',
  PASSWORDS_DONT_MATCH: 'Las contraseñas no coinciden.',
} as const;

// MENSAJES DE ÉXITO
export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: 'Inicio de sesión exitoso',
  LOGOUT_SUCCESS: 'Sesión cerrada correctamente',
  DATA_SAVED: 'Información guardada exitosamente',
  FILE_UPLOADED: 'Archivo subido correctamente',
  PROFILE_UPDATED: 'Perfil actualizado exitosamente',
} as const;

// CONFIGURACIÓN DE PAGINACIÓN
export const PAGINATION_CONFIG = {
  DEFAULT_PAGE_SIZE: 10,
  PAGE_SIZE_OPTIONS: [5, 10, 20, 50],
  MAX_VISIBLE_PAGES: 5,
} as const;

// BREAKPOINTS RESPONSIVE (para usar con JavaScript)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;