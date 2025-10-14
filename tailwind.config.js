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
        // Paleta Japonesa Minimalista
        'sakura': '#E8B4B8',        // Rosa sakura suave
        'indigo': '#4A5568',         // Índigo japonés
        'charcoal': '#2D3748',       // Carbón oscuro
        'slate': '#1A202C',          // Pizarra profunda
        'gold': '#D4AF37',           // Oro apagado
        'crimson': '#DC143C',        // Carmesí elegante
        'jade': '#00A86B',           // Jade suave
        'ivory': '#F7FAFC',          // Marfil
        'ash': '#718096',            // Ceniza
        'midnight': '#0A0E1A',       // Medianoche
      },
      fontFamily: {
        'futuristic': ['Orbitron', 'Rajdhani', 'monospace'],
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