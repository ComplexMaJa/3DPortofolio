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
        // ── Safe vendor chunking ──────────────────────────────────
        // Only split packages that have NO shared React internals.
        // React 19 uses shared internal references (e.g. Activity,
        // ReactCurrentActQueue) across react, react-dom, and any
        // library that accesses React internals. All such packages
        // MUST remain in the same chunk to avoid undefined-reference
        // crashes at runtime.
        manualChunks(id: string) {
          // Three.js core has zero React dependency – safe to isolate
          if (id.includes('node_modules/three/')) {
            return 'three-core'
          }

          // GSAP has no React dependency either – safe to isolate
          if (
            id.includes('node_modules/gsap') ||
            id.includes('node_modules/@gsap')
          ) {
            return 'gsap'
          }

          // Everything else from node_modules (React, React-DOM,
          // react-router, framer-motion, @react-three/*, etc.)
          // stays in one shared vendor chunk so React internals
          // are always resolved correctly.
          if (id.includes('node_modules/')) {
            return 'vendor'
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
