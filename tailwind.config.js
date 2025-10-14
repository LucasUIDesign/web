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
        // Paleta ColorMagic - https://colormagic.app/palette/67170ec21fc5d72248a38433
        'primary': '#0A0118',        // Negro profundo
        'secondary': '#1A0B2E',      // Púrpura muy oscuro
        'accent': '#7B2CBF',         // Púrpura vibrante
        'highlight': '#C77DFF',      // Lavanda brillante
        'light': '#E0AAFF',          // Lavanda claro
        'dark': '#05000D',           // Negro absoluto
        'success': '#10b981',        // Verde éxito
        'warning': '#f59e0b',        // Naranja advertencia
        'danger': '#ef4444',         // Rojo peligro
      },
      fontFamily: {
        'display': ['Space Grotesk', 'Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Consolas', 'monospace'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
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