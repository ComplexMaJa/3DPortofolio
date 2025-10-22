/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#080808',
        ember: '#f97316',
      },
      backgroundImage: {
        'grid-fade':
          'radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.08) 0, rgba(255, 255, 255, 0) 60%)',
      },
      boxShadow: {
        neon: '0 0 30px rgba(249, 115, 22, 0.45)',
      },
    },
  },
  plugins: [],
}

