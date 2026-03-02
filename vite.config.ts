import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      // Compress existing PNG files
      png: { quality: 75 },
      // Compress existing JPEG files
      jpeg: { quality: 75 },
      // Convert eligible assets to WebP
      webp: { quality: 80, lossless: false },
    }),
  ],
  base: '/',

  build: {
    // ── Target modern browsers for smaller output ──────────────
    target: 'es2020',

    // ── Source maps off for prod (faster build, smaller deploy) ─
    sourcemap: false,

    // ── CSS code-splitting so each lazy route only loads its CSS ─
    cssCodeSplit: true,

    // ── Minify with esbuild (default since Vite 5) ─────────────
    minify: 'esbuild',

    rollupOptions: {
      output: {
        // ── Aggressive vendor chunking ────────────────────────────
        // Split heavy libraries into dedicated chunks so they are
        // cached independently and don't re-download on app updates.
        manualChunks(id: string) {
          // Three.js core – ~690 KB minified
          if (id.includes('node_modules/three/')) {
            return 'three-core'
          }

          // React-Three ecosystem (fiber + drei) – ~490 KB
          if (
            id.includes('node_modules/@react-three/fiber') ||
            id.includes('node_modules/@react-three/drei')
          ) {
            return 'three-addons'
          }

          // Animation libs (framer-motion, gsap) – ~185 KB
          if (
            id.includes('node_modules/framer-motion') ||
            id.includes('node_modules/motion') ||
            id.includes('node_modules/gsap') ||
            id.includes('node_modules/@gsap')
          ) {
            return 'animation-libs'
          }

          // React ecosystem – ~33 KB
          if (
            id.includes('node_modules/react/') ||
            id.includes('node_modules/react-dom/') ||
            id.includes('node_modules/react-router-dom/') ||
            id.includes('node_modules/react-router/') ||
            id.includes('node_modules/react-scroll/')
          ) {
            return 'react-vendor'
          }

          // Catch-all remaining node_modules into a shared vendor
          // chunk so app code stays tiny.
          if (id.includes('node_modules/')) {
            return 'vendor-misc'
          }
        },

        // ── Hashed filenames for aggressive caching ──────────────
        chunkFileNames: 'assets/[name]-[hash:8].js',
        entryFileNames: 'assets/[name]-[hash:8].js',
        assetFileNames: 'assets/[name]-[hash:8].[ext]',
      },
    },

    // Three.js alone is ~690 KB – raise the warning to avoid noise
    chunkSizeWarningLimit: 800,

    // ── Asset inlining threshold ─────────────────────────────────
    // Inline assets < 8 KB as base64 to cut HTTP requests.
    assetsInlineLimit: 8192,
  },

  // ── Dependency pre-bundling hints ────────────────────────────────
  // Tell Vite to pre-bundle heavy deps on dev-server startup so
  // first page load in dev is faster.
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'three',
      '@react-three/fiber',
      '@react-three/drei',
    ],
  },
})
