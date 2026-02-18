const config = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#000000',
        ember: '#f97316',
        frost: '#f5f5f5',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
      },
      backgroundImage: {
        'grid-fade':
          'radial-gradient(circle at 25% 25%, rgb(var(--color-primary) / 0.085) 0, rgb(var(--color-primary) / 0) 60%)',
      },
      boxShadow: {
        neon: '0 0 35px rgb(var(--color-primary) / 0.3)',
        'neon-soft': '0 0 60px rgb(var(--color-primary) / 0.12)',
        'neon-hover': '0 0 25px rgb(var(--color-primary) / 0.25)',
        'neon-cta': '0 0 25px rgb(var(--color-primary) / 0.35)',
        'neon-sm': '0 0 20px rgb(var(--color-primary) / 0.25)',
      },
    },
  },
  plugins: [],
}

export default config

