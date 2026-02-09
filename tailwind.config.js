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
        // Phantom Aura - Spectral Cyan/Teal Theme
        'primary': '#050A0E',        // Deep void black
        'secondary': '#0A1628',      // Dark navy
        'accent': '#00FFD1',         // Phantom cyan (ghost energy)
        'highlight': '#00B4D8',      // Electric cyan
        'light': '#E0F7FA',          // Spectral white
        'dark': '#020508',           // Absolute void
        'dark-bg': '#050A0E',        // Main background
        'dark-card': '#0B1A2B',      // Card background
        'success': '#00FFD1',        // Phantom green
        'warning': '#FFB800',        // Amber warning
        'danger': '#FF3366',         // Hot pink danger
        'phantom': '#00FFD1',        // Ghost glow
        'phantom-dim': '#00997D',    // Dimmed phantom
        'electric': '#7B61FF',       // Electric purple
        'neon-blue': '#00F0FF',      // Neon blue
        'neon-pink': '#FF2E97',      // Neon pink
        'neon-purple': '#B026FF',    // Neon purple
        'neon-green': '#39FF14',     // Neon green
        'crypto-btc': '#F7931A',     // Bitcoin
        'crypto-eth': '#627EEA',     // Ethereum
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
        'phantom-pulse': 'phantom-pulse 2s ease-in-out infinite',
        'scan-line': 'scan-line 3s linear infinite',
        'glitch-text': 'glitch-text 3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 5px #00FFD1, 0 0 10px #00FFD1, 0 0 15px #00FFD1' },
          '100%': { textShadow: '0 0 10px #00FFD1, 0 0 20px #00FFD1, 0 0 40px #00FFD1' }
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
        'phantom-gradient': 'linear-gradient(135deg, #050A0E 0%, #0A1628 50%, #050A0E 100%)',
        'phantom-radial': 'radial-gradient(ellipse at center, rgba(0,255,209,0.15) 0%, transparent 70%)',
        'hero-gradient': 'linear-gradient(180deg, #050A0E 0%, #0A1628 40%, #050A0E 100%)',
      }
    },
  },
  plugins: [],
}
