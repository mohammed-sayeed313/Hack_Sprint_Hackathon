/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--color-bg) / <alpha-value>)',
        surface: {
          DEFAULT: 'rgb(var(--color-surface) / <alpha-value>)',
          raised: 'rgb(var(--color-surface-raised) / <alpha-value>)',
          hover: 'rgb(var(--color-surface-hover) / <alpha-value>)',
        },
        border: {
          DEFAULT: 'rgb(var(--color-border) / <alpha-value>)',
          trust: 'var(--color-border-trust)',
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
          primary: 'rgb(var(--color-text-primary) / <alpha-value>)',
          secondary: 'rgb(var(--color-text-secondary) / <alpha-value>)',
          muted: 'rgb(var(--color-text-muted) / <alpha-value>)',
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
