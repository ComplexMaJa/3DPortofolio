const config = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#000000',
        ember: '#f97316',
        frost: '#f5f5f5',
      },
      backgroundImage: {
        'grid-fade':
          'radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.085) 0, rgba(255, 255, 255, 0) 60%)',
      },
      boxShadow: {
        neon: '0 0 35px rgba(255, 255, 255, 0.3)',
        'neon-soft': '0 0 60px rgba(255, 255, 255, 0.12)',
      },
    },
  },
  plugins: [],
}

export default config

