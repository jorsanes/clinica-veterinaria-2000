/** @type {import('tailwindcss').Config} */
import { clinic } from './src/config/clinic';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Colores dinamicos desde clinic.ts
        primary: clinic.design.colors.primary,
        secondary: clinic.design.colors.secondary,
        accent: clinic.design.colors.accent,
        background: clinic.design.colors.background,
        surface: clinic.design.colors.surface,
        text: clinic.design.colors.text,
        'text-muted': clinic.design.colors.textMuted,
      },
      fontFamily: {
        heading: [clinic.design.fonts.heading, 'system-ui', 'sans-serif'],
        body: [clinic.design.fonts.body, 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
