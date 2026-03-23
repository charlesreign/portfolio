export default {
  content: [
    "./src/**/*.{js,jsx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        dark: '#006663',
        'dark-secondary': '#1D2026',
        'dark-tertiary': '#1f2937',
        accent: '#CCEA8D',
        'accent-muted': '#0099cc'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#9ca3af',
            a: {
              color: '#00d9ff',
              '&:hover': {
                color: '#0099cc'
              }
            }
          }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
  darkMode: 'class'
}
