/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050B14',
        surface: {
          DEFAULT: '#0A1626',
          raised: '#0E1D31',
          hover: '#122540',
        },
        border: {
          DEFAULT: '#1B3050',
          trust: 'rgba(93, 224, 230, 0.6)',
        },
        brand: {
          navy: '#0B2E4A',
          teal: '#0F8B8D',
          cyan: '#5DE0E6',
        },
        decision: {
          allow: '#3BA0F5',
          review: '#F2B134',
          block: '#FF4D5E',
        },
        text: {
          primary: '#EAF2FA',
          secondary: '#9DB1C6',
          muted: '#6B819A',
        }
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
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
