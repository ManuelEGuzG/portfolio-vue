/** @type {import('tailwindcss').Config} */
// -----------------------------------------------------------------------------
// Configuración de Tailwind CSS
// -----------------------------------------------------------------------------
// Aquí se define el "sistema de diseño" del sitio: colores, tipografías y
// utilidades personalizadas. Si quieres cambiar la paleta de colores o las
// fuentes de TODO el sitio, este es el único lugar que necesitas tocar.
// -----------------------------------------------------------------------------
export default {
  // 'content' le dice a Tailwind en qué archivos buscar clases usadas,
  // para incluir solo el CSS necesario en el build final.
  content: ['./index.html', './codigo/**/*.{vue,js,ts,jsx,tsx}'],

  theme: {
    extend: {
      // Familias tipográficas. Se usan así en las clases: font-display, font-sans, font-mono
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'], // Títulos grandes
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'], // Texto normal / párrafos
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'] // Etiquetas, tags, datos técnicos
      },

      // Paleta de colores personalizada (tema "plano técnico / sistemas").
      // Uso: bg-ink, text-signal, border-line, etc.
      colors: {
        ink: '#0B1220', // Fondo principal (casi negro azulado)
        surface: '#121B2E', // Fondo de tarjetas y paneles
        surface2: '#0E1728', // Fondo secundario (tags, chips)
        line: '#1E293B', // Bordes y líneas divisorias
        paper: '#EDF1F7', // Texto principal (blanco hueso)
        muted: '#8B98AD', // Texto secundario / descripciones
        signal: '#4CC9F0', // Acento principal (cian eléctrico)
        signalWarm: '#F4A261' // Acento secundario (ámbar), uso mínimo
      },

      // Fondo tipo "cuadrícula de plano técnico", usado en Hero y Contacto.
      backgroundImage: {
        blueprint:
          'linear-gradient(to right, #ffffff0a 1px, transparent 1px), linear-gradient(to bottom, #ffffff0a 1px, transparent 1px)'
      },
      backgroundSize: {
        blueprint: '40px 40px'
      },

      // Sombra de resplandor (glow) usada en botones y elementos destacados.
      boxShadow: {
        glow: '0 0 0 1px rgba(76,201,240,0.25), 0 0 40px -8px rgba(76,201,240,0.35)'
      }
    }
  },
  plugins: []
}
