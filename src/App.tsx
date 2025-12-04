import type { CSSProperties } from 'react'
import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import SiteFooter from './components/SiteFooter'

// Lazy load heavy components
const SplineShowcase = lazy(() => import('./components/3DTeto'))
const AboutMe = lazy(() => import('./components/pages/AboutMe'))
const Contact = lazy(() => import('./components/pages/Contact'))
const Playground = lazy(() => import('./components/pages/Playground'))
const Work = lazy(() => import('./components/pages/Work'))

const navLinks = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Playground', href: '/playground' },
  { label: 'Contact', href: '/contact' },
]

const highlightTiles = [
  {
    title: 'Experience',
    detail: '2+ years of building web apps and mobile apps.',
  },
  {
    title: 'Stack',
    detail: 'React · TypeScript · Three.js · Spline · Tailwind · HTML · CSS',
  },
]

const backgroundStyles: CSSProperties = {
  backgroundColor: '#000',
  backgroundImage:
    'radial-gradient(circle at top, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 65%), linear-gradient(115deg, rgba(255,255,255,0.036) 0%, rgba(255,255,255,0.012) 45%, rgba(0,0,0,0) 70%)',
  backgroundBlendMode: 'screen, screen',
  backgroundRepeat: 'no-repeat, no-repeat',
}

function App() {
  const location = useLocation()

  const pageMotion = {
    initial: { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -24 },
  }

  const pageTransition = { duration: 0.55, ease: [0.22, 0.61, 0.36, 1] as const }

  return (
    <div className="relative isolate min-h-screen overflow-hidden text-white" style={backgroundStyles}>
      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-24 pt-10 sm:px-10 lg:px-16">
        <Navbar links={navLinks} />

        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.main
                  className="mt-20 flex flex-1 flex-col gap-16 lg:flex-row lg:items-stretch"
                  initial={pageMotion.initial}
                  animate={pageMotion.animate}
                  exit={pageMotion.exit}
                  transition={pageTransition}
                >
                  <HeroSection tiles={highlightTiles} />
                  <Suspense fallback={<div className="flex items-center justify-center flex-1 text-sm text-white/50">Loading...</div>}>
                    <SplineShowcase />
                  </Suspense>
                </motion.main>
              }
            />
            <Route
              path="/work"
              element={
                <Suspense fallback={<div className="mt-20 flex items-center justify-center flex-1 text-sm text-white/50">Loading...</div>}>
                  <Work />
                </Suspense>
              }
            />
            <Route
              path="/about"
              element={
                <Suspense fallback={<div className="mt-20 flex items-center justify-center flex-1 text-sm text-white/50">Loading...</div>}>
                  <AboutMe />
                </Suspense>
              }
            />
            <Route
              path="/playground"
              element={
                <Suspense fallback={<div className="mt-20 flex items-center justify-center flex-1 text-sm text-white/50">Loading...</div>}>
                  <Playground />
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={<div className="mt-20 flex items-center justify-center flex-1 text-sm text-white/50">Loading...</div>}>
                  <Contact />
                </Suspense>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>

        <SiteFooter />
      </div>
    </div>
  )
}

export default App
