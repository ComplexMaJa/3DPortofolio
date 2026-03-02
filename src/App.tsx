import { lazy } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import Navbar from './components/Navbar'
import SiteFooter from './components/SiteFooter'
import SuspenseLoader from './components/ui/SuspenseLoader'
import { pageMotion, pageTransition } from './constants/animation'

// ── Synchronous page imports ──────────────────────────────────────
// These page components are small (1–5 KB gzip each).  Loading them
// eagerly eliminates the Suspense fallback ("loading" screen) when
// navigating, making every route transition instant.
import AboutMe from './components/pages/AboutMe'
import Contact from './components/pages/Contact'
import Playground from './components/pages/Playground'
import Work from './components/pages/Work'

// ── Lazy-loaded heavy component ───────────────────────────────────
// HeroSection pulls in the entire Three.js / R3F stack (~700 KB).
// It stays lazy so it doesn't block initial page paint.
const HeroSection = lazy(() => import('./components/HeroSection'))

const navLinks = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Playground', href: '/playground' },
  { label: 'Contact', href: '/contact' },
]

function App() {
  const location = useLocation()

  return (
    <div className="app-bg relative isolate min-h-screen overflow-hidden text-primary">
      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-24 pt-10 sm:px-10 lg:px-16">
        <Navbar links={navLinks} />

        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.main
                  className="flex flex-1 flex-col"
                  initial={pageMotion.initial}
                  animate={pageMotion.animate}
                  exit={pageMotion.exit}
                  transition={pageTransition}
                >
                  <SuspenseLoader className="mt-32">
                    <HeroSection />
                  </SuspenseLoader>
                </motion.main>
              }
            />
            <Route
              path="/work"
              element={
                <motion.main
                  className="flex flex-1 flex-col"
                  initial={pageMotion.initial}
                  animate={pageMotion.animate}
                  exit={pageMotion.exit}
                  transition={pageTransition}
                >
                  <Work />
                </motion.main>
              }
            />
            <Route
              path="/about"
              element={
                <motion.main
                  className="flex flex-1 flex-col"
                  initial={pageMotion.initial}
                  animate={pageMotion.animate}
                  exit={pageMotion.exit}
                  transition={pageTransition}
                >
                  <AboutMe />
                </motion.main>
              }
            />
            <Route
              path="/playground"
              element={
                <motion.main
                  className="flex flex-1 flex-col"
                  initial={pageMotion.initial}
                  animate={pageMotion.animate}
                  exit={pageMotion.exit}
                  transition={pageTransition}
                >
                  <Playground />
                </motion.main>
              }
            />
            <Route
              path="/contact"
              element={
                <motion.main
                  className="flex flex-1 flex-col"
                  initial={pageMotion.initial}
                  animate={pageMotion.animate}
                  exit={pageMotion.exit}
                  transition={pageTransition}
                >
                  <Contact />
                </motion.main>
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
