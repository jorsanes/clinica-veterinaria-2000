/**
 * Astro Configuration - Clinica Veterinaria 2000
 *
 * Documentacion: https://docs.astro.build/en/reference/configuration-reference/
 */
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Importar dominio desde clinic.ts para sitemap
import { clinic } from './src/config/clinic.ts';

// Obtener URL valida o usar placeholder
const getSiteUrl = () => {
  const url = clinic.seo?.siteUrl || '';
  // Verificar si es una URL valida
  if (url && url.startsWith('http') && !url.includes('[COMPLETAR')) {
    return url;
  }
  return 'https://placeholder.kybersites.com';
};

export default defineConfig({
  // URL del sitio (importante para sitemap y canonical URLs)
  site: getSiteUrl(),

  // Vite plugins
  vite: {
    plugins: [tailwindcss()],
  },

  // Integraciones
  integrations: [
    sitemap({
      // Excluir paginas que no queremos en el sitemap
      filter: (page) => !page.includes('/404'),
    }),
  ],

  // Opciones de build
  build: {
    // Generar HTML estatico (default)
    format: 'file',
  },

  // Opciones de desarrollo
  server: {
    port: 4321,
  },

  // Optimizacion de imagenes
  image: {
    // Usar servicio de imagenes de Astro
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
