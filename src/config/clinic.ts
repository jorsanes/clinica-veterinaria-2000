// ============================================================================
// KYBERSITES - Configuracion Central de Clinica
// ============================================================================
// Este archivo es la FUENTE UNICA DE VERDAD para toda la web.
// Edita SOLO aqui los datos del cliente. Los componentes leen de este archivo.
// ============================================================================

// ----------------------------------------------------------------------------
// TIPOS E INTERFACES
// ----------------------------------------------------------------------------

export interface PhoneConfig {
  primary: string;
  primaryLink: string; // formato: +34XXXXXXXXX
  secondary?: string;
  secondaryLink?: string;
  emergency?: string;
  emergencyLink?: string;
}

export interface SocialConfig {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
  tiktok?: string;
}

export interface LocationConfig {
  name: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  googleMapsEmbed: string;
  googleMapsLink: string;
}

export interface ScheduleConfig {
  weekdays: string;
  saturday: string;
  sunday: string;
  holidays?: string;
  notes?: string;
}

export interface ServiceConfig {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription?: string;
  icon: string; // nombre del icono Lucide
  image?: string;
  featured: boolean;
}

export interface TeamMemberConfig {
  id: string;
  name: string;
  role: string;
  specialty?: string;
  bio: string;
  photo: string;
  collegiateNumber?: string;
  order: number;
}

export interface FAQConfig {
  question: string;
  answer: string;
}

export interface TestimonialConfig {
  text: string;
  author: string;
}

// Sistema de diseno flexible
export interface DesignConfig {
  // Preset base: define la "personalidad" visual
  style: 'modern' | 'classic' | 'warm' | 'minimal' | 'bold';

  // Paleta de colores (sobrescribe el preset si se define)
  colors: {
    primary: string;    // Color principal (botones, enlaces, acentos)
    secondary: string;  // Color secundario (fondos alternativos)
    accent: string;     // Color de acento (CTAs, highlights)
    background: string; // Fondo principal
    surface: string;    // Fondo de cards/secciones
    text: string;       // Texto principal
    textMuted: string;  // Texto secundario
  };

  // Tipografia
  fonts: {
    heading: string; // Google Font para titulos
    body: string;    // Google Font para cuerpo
  };

  // Bordes redondeados
  borderRadius: 'none' | 'sm' | 'md' | 'lg' | 'full';

  // Estilo del hero
  heroStyle: 'image-overlay' | 'image-side' | 'gradient' | 'video' | 'minimal';

  // Sombras
  shadows: 'none' | 'subtle' | 'medium' | 'dramatic';
}

export interface LegalConfig {
  companyName: string;      // Razon social completa
  cif: string;              // CIF/NIF
  registroMercantil?: string;
  collegiateNumber?: string; // Num colegiado veterinario
  dpo?: {                   // Delegado Proteccion Datos (si aplica)
    name: string;
    email: string;
  };
}

export interface SeoConfig {
  defaultTitle: string;
  titleTemplate: string; // ej: "%s | Clinica Veterinaria Nombre"
  description: string;
  keywords: string[];
  ogImage: string;
  locale: string;
  siteUrl: string;
}

export interface IntegrationsConfig {
  googleAnalyticsId?: string;
  googleTagManagerId?: string;
  googleReviewsPlaceId?: string;
  makeWebhookContact?: string;
  makeWebhookAppointment?: string;
  widgetClara: boolean;
  widgetClaraApiKey?: string;
}

export interface ClinicConfig {
  identity: {
    name: string;
    tagline: string;
    logo: string;
    logoAlt?: string; // version alternativa (blanco, etc)
    favicon: string;
  };
  contact: {
    phones: PhoneConfig;
    email: string;
    whatsapp?: string; // formato: 34XXXXXXXXX (sin +)
    social: SocialConfig;
  };
  location: LocationConfig;
  schedule: ScheduleConfig;
  services: ServiceConfig[];
  team: TeamMemberConfig[];
  faq: FAQConfig[];
  testimonials: TestimonialConfig[];
  design: DesignConfig;
  legal: LegalConfig;
  seo: SeoConfig;
  integrations: IntegrationsConfig;
}

// ----------------------------------------------------------------------------
// CONFIGURACION DE LA CLINICA - CLINICA VETERINARIA 2000
// ----------------------------------------------------------------------------

export const clinic: ClinicConfig = {

  // ==========================================================================
  // IDENTIDAD
  // ==========================================================================
  identity: {
    name: "Clinica Veterinaria 2000",
    tagline: "Cuidamos de tu mascota como si fuera nuestra",
    logo: "/images/logo.webp",
    logoAlt: "/images/logo-white.webp",
    favicon: "/favicon.svg",
  },

  // ==========================================================================
  // CONTACTO
  // ==========================================================================
  contact: {
    phones: {
      primary: "91 803 45 19",
      primaryLink: "+34918034519",
      emergency: "686 06 49 02",
      emergencyLink: "+34686064902",
    },
    email: "clinica2000@gmail.com",
    whatsapp: "34686064902",
    social: {
      facebook: "https://www.facebook.com/profile.php?id=100028262517018",
    },
  },

  // ==========================================================================
  // UBICACION
  // ==========================================================================
  location: {
    name: "Sede Principal",
    address: "C. del Pico del Indio, 39",
    city: "Tres Cantos",
    province: "Madrid",
    postalCode: "28760",
    country: "Espana",
    coordinates: {
      lat: 40.6031,
      lng: -3.7125,
    },
    googleMapsEmbed: "https://maps.google.com/maps?q=C.%20del%20Pico%20del%20Indio%2C%2039%2C%20Tres%20Cantos%2C%20Madrid&t=&z=16&ie=UTF8&iwloc=&output=embed",
    googleMapsLink: "https://www.google.com/maps/search/?api=1&query=C.+del+Pico+del+Indio,+39,+28760+Tres+Cantos,+Madrid",
  },

  // ==========================================================================
  // HORARIOS (del schema.org)
  // ==========================================================================
  schedule: {
    weekdays: "10:00 - 20:00",
    saturday: "Cerrado",
    sunday: "Cerrado",
    notes: "Urgencias disponibles: 686 06 49 02",
  },

  // ==========================================================================
  // SERVICIOS
  // ==========================================================================
  services: [
    {
      id: "vacunacion",
      name: "Medicina Preventiva y Vacunacion",
      slug: "vacunacion",
      shortDescription: "Campanas de Leishmaniosis, Filariosis y Rabia. Protegemos a tu peludo antes de que aparezca el problema.",
      icon: "Syringe",
      featured: true,
    },
    {
      id: "consultas",
      name: "Consultas Veterinarias",
      slug: "consultas",
      shortDescription: "Diagnostico preciso y tratamiento para perros, gatos y pequenas aves (agapornis).",
      icon: "Stethoscope",
      featured: true,
    },
    {
      id: "cirugia",
      name: "Cirugia y Cuidados Especificos",
      slug: "cirugia",
      shortDescription: "Instalaciones preparadas y manos expertas para cuando tu mascota mas lo necesita.",
      icon: "Scissors",
      featured: true,
    },
    {
      id: "documentacion",
      name: "Registro y Documentacion",
      slug: "documentacion",
      shortDescription: "Te ayudamos con el censo genetico (ADN Canino), pasaportes y microchips.",
      icon: "ClipboardList",
      featured: true,
    },
  ],

  // ==========================================================================
  // EQUIPO
  // ==========================================================================
  team: [
    {
      id: "manolo",
      name: "Manolo",
      role: "Veterinario",
      specialty: "Medicina general y cirugia",
      bio: "Gran profesional con anos de experiencia cuidando de las mascotas de Tres Cantos. Siempre atento en el cuidado de los animalitos con dedicacion y amor.",
      photo: "/images/team/manolo.webp",
      order: 1,
    },
    {
      id: "lucia",
      name: "Lucia",
      role: "Veterinaria",
      specialty: "Medicina preventiva y aves",
      bio: "Apasionada por la salud animal, con experiencia en perros, gatos y pequenas aves. Cree en una veterinaria honesta donde la prioridad es siempre el bienestar del animal.",
      photo: "/images/team/lucia.webp",
      order: 2,
    },
  ],

  // ==========================================================================
  // PREGUNTAS FRECUENTES
  // ==========================================================================
  faq: [
    {
      question: "Atendeis urgencias?",
      answer: "Nuestro horario es limitado actualmente por cierre cercano, pero para urgencias fuera de hora, llamanos al 686 06 49 02.",
    },
    {
      question: "Tratais animales exoticos o aves?",
      answer: "Si, tenemos experiencia cuidando aves como agapornis y otros pequenos animales. Consultanos por tu caso especifico.",
    },
    {
      question: "Teneis planes de salud o campanas?",
      answer: "Si, realizamos campanas anuales (como la de Leishmaniosis en abril). Llamanos para saber que campana esta activa ahora mismo.",
    },
  ],

  // ==========================================================================
  // TESTIMONIOS
  // ==========================================================================
  testimonials: [
    {
      text: "La mejor clinica con las mejores personalidades de Tres Cantos. Confianza total.",
      author: "Adri DG",
    },
    {
      text: "Manolo es un gran profesional. Siempre atento en el cuidado de nuestros animalitos.",
      author: "Titina Sanchez",
    },
    {
      text: "Su profesionalidad, dedicacion y amor por las mascotas es increible.",
      author: "Javier Jordan",
    },
  ],

  // ==========================================================================
  // DISENO
  // ==========================================================================
  design: {
    style: "modern",

    colors: {
      primary: "#0096FF",     // Azul principal (del original)
      secondary: "#DC2626",   // Rojo secundario (del original)
      accent: "#DC2626",      // Rojo como acento
      background: "#FFFFFF",  // Blanco puro
      surface: "#F8FAFC",     // Gris muy claro (fondos)
      text: "#1E293B",        // Casi negro (legibilidad)
      textMuted: "#64748B",   // Gris medio (texto secundario)
    },

    fonts: {
      heading: "Outfit",
      body: "Outfit",
    },

    borderRadius: "md",
    heroStyle: "gradient",
    shadows: "subtle",
  },

  // ==========================================================================
  // LEGAL (RGPD)
  // ==========================================================================
  legal: {
    companyName: "Clinica Veterinaria 2000",
    cif: "[Pendiente]",
    collegiateNumber: "[Pendiente]",
  },

  // ==========================================================================
  // SEO
  // ==========================================================================
  seo: {
    defaultTitle: "Clinica Veterinaria 2000 | Tu Veterinario en Tres Cantos",
    titleTemplate: "%s | Clinica Veterinaria 2000",
    description: "Buscas veterinario de confianza en Tres Cantos? En Clinica Veterinaria 2000 cuidamos de tu perro, gato o ave con experiencia y carino. Urgencias y trato familiar. Pide cita hoy!",
    keywords: [
      "veterinario Tres Cantos",
      "clinica veterinaria",
      "urgencias veterinarias",
      "salud animal",
      "vacunas perros",
      "cirugia mascotas",
      "Lucia y Manolo veterinarios",
    ],
    ogImage: "/images/og-image.jpg",
    locale: "es_ES",
    siteUrl: "https://veterinaria2000.es",
  },

  // ==========================================================================
  // INTEGRACIONES
  // ==========================================================================
  integrations: {
    // googleAnalyticsId: "G-XXXXXXXXXX",
    // googleTagManagerId: "GTM-XXXXXXX",
    // googleReviewsPlaceId: "",
    // makeWebhookContact: "",
    // makeWebhookAppointment: "",
    widgetClara: false,
    // widgetClaraApiKey: "",
  },
};

// ----------------------------------------------------------------------------
// HELPERS Y EXPORTS UTILES
// ----------------------------------------------------------------------------

/** Obtiene el telefono principal formateado para mostrar */
export const getDisplayPhone = () => clinic.contact.phones.primary;

/** Obtiene el link tel: para llamadas */
export const getPhoneLink = () => `tel:${clinic.contact.phones.primaryLink}`;

/** Obtiene el telefono de emergencias */
export const getEmergencyPhone = () => clinic.contact.phones.emergency;

/** Obtiene el link tel: para emergencias */
export const getEmergencyPhoneLink = () => `tel:${clinic.contact.phones.emergencyLink}`;

/** Obtiene el link de WhatsApp */
export const getWhatsAppLink = (message?: string) => {
  const base = `https://wa.me/${clinic.contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

/** Obtiene servicios destacados (para home) */
export const getFeaturedServices = () =>
  clinic.services.filter(s => s.featured);

/** Obtiene equipo ordenado */
export const getOrderedTeam = () =>
  [...clinic.team].sort((a, b) => a.order - b.order);

/** Obtiene direccion completa formateada */
export const getFullAddress = () =>
  `${clinic.location.address}, ${clinic.location.postalCode} ${clinic.location.city}, ${clinic.location.province}`;

/** Obtiene el link de email */
export const getEmailLink = () => `mailto:${clinic.contact.email}`;

/** Ano actual para copyright */
export const getCurrentYear = () => new Date().getFullYear();

// Export por defecto
export default clinic;
