import { HashRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <App />
  </HashRouter>
)

const scheduleTetocatWarmup = () => {
  import('./utils/prefetch').then((module) => {
    module.preloadTetocat?.()
  })
}

if (typeof window !== 'undefined') {
  // Register Service Worker for asset caching
  if ('serviceWorker' in navigator && !import.meta.env.DEV) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch((error) => {
        console.error('SW registration failed:', error)
      })
    })
  }

  const globalWindow = window as Window &
    typeof globalThis & { requestIdleCallback?: (callback: IdleRequestCallback) => number }

  if (typeof globalWindow.requestIdleCallback === 'function') {
    globalWindow.requestIdleCallback(() => scheduleTetocatWarmup())
  } else {
    globalWindow.setTimeout(() => scheduleTetocatWarmup(), 200)
  }
}
