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
        'neon-red': '#FF6B6B',
        'neon-blue': '#4ECDC4',
        'neon-purple': '#A78BFA',
        'dark-bg': '#0F0F1E',
        'dark-card': '#1A1625',
        'necrum-purple': '#8B5CF6',
        'necrum-yellow': '#EAB308',
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