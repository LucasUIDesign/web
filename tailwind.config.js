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
        // Crimson Protocol - Valorant Red & Gold Theme
        'primary': '#0A0A0F',        // Deep void black
        'secondary': '#141420',      // Dark navy
        'accent': '#FF4655',         // Valorant crimson (brand red)
        'highlight': '#FFD700',      // Premium gold
        'light': '#F0EBE3',          // Warm off-white
        'dark': '#030308',           // Absolute void
        'dark-bg': '#0A0A0F',        // Main background
        'dark-card': '#12121E',      // Card background
        'success': '#00FF87',        // Neon green (safe/active)
        'warning': '#FFB800',        // Amber warning
        'danger': '#FF2E4D',         // Hot pink danger
        'phantom': '#FF4655',        // Ghost glow
        'phantom-dim': '#992233',    // Dimmed phantom
        'electric': '#C850C0',       // Electric magenta
        'neon-blue': '#00F0FF',      // Neon blue
        'neon-pink': '#FF2E97',      // Neon pink
        'neon-purple': '#B026FF',    // Neon purple
        'neon-green': '#39FF14',     // Neon green
        'crypto-btc': '#F7931A',     // Bitcoin
        'crypto-eth': '#627EEA',     // Ethereum
      },
      fontFamily: {
        'display': ['Rajdhani', 'Lexend', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Consolas', 'monospace'],
        'body': ['Lexend', 'system-ui', 'sans-serif'],
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
        'phantom-pulse': 'phantom-pulse 2s ease-in-out infinite',
        'scan-line': 'scan-line 3s linear infinite',
        'glitch-text': 'glitch-text 3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 5px #FF4655, 0 0 10px #FF4655, 0 0 15px #FF4655' },
          '100%': { textShadow: '0 0 10px #FF4655, 0 0 20px #FF4655, 0 0 40px #FF4655' }
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
        },
        'phantom-pulse': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' }
        },
        'scan-line': {
          '0%': { top: '-5%' },
          '100%': { top: '105%' }
        },
        'glitch-text': {
          '0%, 90%, 100%': { transform: 'translate(0)' },
          '92%': { transform: 'translate(-2px, 2px)' },
          '94%': { transform: 'translate(2px, -2px)' },
          '96%': { transform: 'translate(-1px, -1px)' },
          '98%': { transform: 'translate(1px, 1px)' }
        }
      },
      backgroundImage: {
        'phantom-gradient': 'linear-gradient(135deg, #0A0A0F 0%, #141420 50%, #0A0A0F 100%)',
        'phantom-radial': 'radial-gradient(ellipse at center, rgba(255,70,85,0.15) 0%, transparent 70%)',
        'hero-gradient': 'linear-gradient(180deg, #0A0A0F 0%, #141420 40%, #0A0A0F 100%)',
      }
    },
  },
  plugins: [],
}
