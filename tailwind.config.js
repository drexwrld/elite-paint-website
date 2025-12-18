/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core Brand Identity
        brand: {
          primary: {
            DEFAULT: '#1E40AF',
            light: '#3B82F6',
            dark: '#1E3A8A',
          },
          secondary: {
            DEFAULT: '#334155',
            light: '#475569',
            dark: '#1E293B',
          },
          accent: {
            DEFAULT: '#065F46',
            light: '#059669',
            dark: '#064E3B',
          }
        },
        // Product-Specific Paint Pigments
        paint: {
          charcoal: '#334155',
          terracotta: '#9A3412',
          emerald: '#065F46',
          sand: '#FDE68A',
          slate: '#1E40AF',
          snow: '#F8FAFC',
          obsidian: '#111827',
        }
      },
      fontFamily: {
        // Setting Inter as the default sans font
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        // High-end luxury shadows for cards and modals
        'luxury': '0 25px 50px -12px rgba(0, 0, 0, 0.08)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
      letterSpacing: {
        'ultra-tight': '-0.05em',
        'super-wide': '0.2em',
      }
    },
  },
  plugins: [],
}