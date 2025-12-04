import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split Three.js into separate chunks
          'three-core': ['three'],
          'three-addons': ['@react-three/fiber', '@react-three/drei'],
          // Split large animation libraries
          'animation-libs': ['framer-motion', 'gsap'],
          // Split React and routing
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    // Increase chunk size warning limit for unavoidable large chunks
    chunkSizeWarningLimit: 1000,
  },
})
