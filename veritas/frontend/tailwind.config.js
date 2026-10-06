/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050E1B',
        surface: {
          DEFAULT: '#0A1A30',
          raised: '#0D2038',
          hover: '#132A4A',
        },
        border: {
          DEFAULT: '#16314F',
          trust: 'rgba(34, 211, 238, 0.4)',
        },
        brand: {
          blue: '#2F6BFF',
          cyan: '#22D3EE',
          navy: '#07142A',
        },
        decision: {
          allow: '#22C55E', // success green
          review: '#F5A524', // warning amber
          block: '#EF4444', // danger red
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#9FB0C7',
          muted: '#6B819A',
        }
      },
      fontFamily: {
        heading: ['Inter', 'Geist', 'sans-serif'],
        body: ['Inter', 'Geist', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        card: '14px',
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'glow-top-right': 'radial-gradient(circle at top right, rgba(15,139,141,0.18), transparent 40%)',
        'glow-bottom-left': 'radial-gradient(circle at bottom left, rgba(31,111,178,0.14), transparent 40%)',
      }
    },
  },
  plugins: [],
}
