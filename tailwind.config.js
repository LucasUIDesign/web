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
        // Paleta Premium Cyberpunk 2.0
        'primary': '#0A0118',        // Negro profundo
        'secondary': '#1A0B2E',      // Púrpura muy oscuro
        'accent': '#7B2CBF',         // Púrpura vibrante
        'highlight': '#C77DFF',      // Lavanda brillante
        'light': '#E0AAFF',          // Lavanda claro
        'dark': '#05000D',           // Negro absoluto
        'dark-bg': '#0A0118',        // Background principal
        'dark-card': '#1a1625',      // Cards oscuras
        'success': '#10b981',        // Verde éxito
        'warning': '#f59e0b',        // Naranja advertencia
        'danger': '#ef4444',         // Rojo peligro
        'neon-blue': '#00F0FF',      // Azul neón
        'neon-pink': '#FF2E97',      // Rosa neón
        'neon-purple': '#B026FF',    // Púrpura neón
        'neon-green': '#39FF14',     // Verde neón
        'crypto-btc': '#F7931A',     // Bitcoin naranja
        'crypto-eth': '#627EEA',     // Ethereum azul
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
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'neon-glow': 'neon-glow 1.5s ease-in-out infinite alternate',
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
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'neon-glow': {
          '0%': {
            boxShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 20px currentColor',
            filter: 'brightness(1)'
          },
          '100%': {
            boxShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 40px currentColor',
            filter: 'brightness(1.2)'
          }
        }
      }
    },
  },
  plugins: [],
}