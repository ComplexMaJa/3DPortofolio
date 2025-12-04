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
  import('./components/preload3D.ts').then((module) => {
    module.preloadTetocat?.()
  })
}

if (typeof window !== 'undefined') {
  const globalWindow = window as Window &
    typeof globalThis & { requestIdleCallback?: (callback: IdleRequestCallback) => number }

  if (typeof globalWindow.requestIdleCallback === 'function') {
    globalWindow.requestIdleCallback(() => scheduleTetocatWarmup())
  } else {
    globalWindow.setTimeout(() => scheduleTetocatWarmup(), 200)
  }
}
