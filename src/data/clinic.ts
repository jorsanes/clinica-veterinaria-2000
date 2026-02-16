// ============================================================================
// CLINICA VETERINARIA 2000 - Configuracion Central
// ============================================================================
// Datos extraidos del sitio original para el proyecto Astro
// ============================================================================

export interface ClinicConfig {
  identity: {
    name: string;
    tagline: string;
    logo: string;
  };
  contact: {
    phones: {
      primary: string;
      primaryLink: string;
      emergency: string;
      emergencyLink: string;
    };
    email: string;
    whatsapp?: string;
  };
  location: {
    address: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
    googleMapsEmbed: string;
  };
  social: {
    facebook?: string;
  };
  team: {
    members: string[];
    description: string;
  };
  services: Array<{
    id: string;
    name: string;
    description: string;
    icon: string;
  }>;
  testimonials: Array<{
    text: string;
    author: string;
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
  design: {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      text: string;
      textMuted: string;
      background: string;
      surface: string;
    };
  };
}

export const clinic: ClinicConfig = {
  identity: {
    name: "Clinica Veterinaria 2000",
    tagline: "Tu veterinario de confianza en Tres Cantos",
    logo: "/images/logo.jpg",
  },

  contact: {
    phones: {
      primary: "91 803 45 19",
      primaryLink: "+34918034519",
      emergency: "686 06 49 02",
      emergencyLink: "+34686064902",
    },
    email: "clinica2000@gmail.com",
    whatsapp: "34686064902",
  },

  location: {
    address: "C. del Pico del Indio, 39",
    city: "Tres Cantos",
    province: "Madrid",
    postalCode: "28760",
    country: "Espana",
    googleMapsEmbed: "https://maps.google.com/maps?q=C.%20del%20Pico%20del%20Indio%2C%2039%2C%20Tres%20Cantos%2C%20Madrid&t=&z=16&ie=UTF8&iwloc=&output=embed",
  },

  social: {
    facebook: "https://www.facebook.com/profile.php?id=100028262517018&sk=photos",
  },

  team: {
    members: ["Manolo", "Lucia"],
    description: "En Clinica Veterinaria 2000, no eres un numero mas. Somos Manolo y Lucia, un equipo apasionado por la salud animal. Creemos en una veterinaria honesta, donde la prioridad es siempre el bienestar de tu companero de vida. Llevamos anos cuidando de las mascotas de Tres Cantos con un enfoque cercano y riguroso.",
  },

  services: [
    {
      id: "prevencion",
      name: "Medicina Preventiva y Vacunacion",
      description: "Campanas de Leishmaniosis, Filariosis y Rabia. Protegemos a tu peludo antes de que aparezca el problema.",
      icon: "syringe",
    },
    {
      id: "consultas",
      name: "Consultas Veterinarias",
      description: "Diagnostico preciso y tratamiento para perros, gatos y pequenas aves (agapornis).",
      icon: "stethoscope",
    },
    {
      id: "cirugia",
      name: "Cirugia y Cuidados Especificos",
      description: "Instalaciones preparadas y manos expertas para cuando tu mascota mas lo necesita.",
      icon: "scissors",
    },
    {
      id: "documentacion",
      name: "Registro y Documentacion",
      description: "Te ayudamos con el censo genetico (ADN Canino), pasaportes y microchips.",
      icon: "clipboard",
    },
  ],

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

  faq: [
    {
      question: "Necesito pedir cita previa?",
      answer: "Recomendamos pedir cita para garantizar una atencion personalizada y sin esperas. Puedes llamarnos al 91 803 45 19 para reservar tu cita. En casos de urgencia, atendemos sin cita previa.",
    },
    {
      question: "Que hago si mi mascota tiene una urgencia?",
      answer: "Para urgencias fuera de horario, llamanos al 686 06 49 02. Estamos disponibles para atender emergencias y orientarte sobre los pasos a seguir.",
    },
    {
      question: "Ofreceis servicio de peluqueria?",
      answer: "Actualmente nos centramos en servicios medicos veterinarios: consultas, vacunacion, cirugia y cuidados especificos. Te recomendamos consultar con peluquerias caninas de la zona para servicios de estetica.",
    },
  ],

  design: {
    colors: {
      primary: "#0096FF",
      secondary: "#DC2626",
      accent: "#0096FF",
      text: "#1f2937",
      textMuted: "#6b7280",
      background: "#ffffff",
      surface: "#f3f4f6",
    },
  },
};

// Helpers
export const getWhatsAppLink = (message?: string) => {
  if (!clinic.contact.whatsapp) return null;
  const base = `https://wa.me/${clinic.contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const getPhoneLink = () => `tel:${clinic.contact.phones.primaryLink}`;

export const getEmergencyLink = () => `tel:${clinic.contact.phones.emergencyLink}`;

export default clinic;
