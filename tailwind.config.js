/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta ColorMagic - Profesional y Sofisticada
        'primary': '#1a1625',        // Púrpura oscuro profundo
        'secondary': '#2d1b3d',      // Púrpura medio
        'accent': '#8b5cf6',         // Violeta vibrante
        'highlight': '#a78bfa',      // Lavanda suave
        'dark': '#0f0a1a',           // Negro púrpura
        'light': '#e9d5ff',          // Lavanda muy claro
        'success': '#10b981',        // Verde éxito
        'warning': '#f59e0b',        // Naranja advertencia
        'danger': '#ef4444',         // Rojo peligro
      },
      fontFamily: {
        'futuristic': ['Orbitron', 'Rajdhani', 'monospace'],
        'japanese': ['Noto Sans JP', 'Inter', 'sans-serif'],
        'display': ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'matrix': 'matrix 20s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 5px #FF2E2E, 0 0 10px #FF2E2E, 0 0 15px #FF2E2E' },
          '100%': { textShadow: '0 0 10px #FF2E2E, 0 0 20px #FF2E2E, 0 0 30px #FF2E2E' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        matrix: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' }
        }
      }
    },
  },
  plugins: [],
}