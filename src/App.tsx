import { lazy } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import SiteFooter from './components/SiteFooter'
import SuspenseLoader from './components/ui/SuspenseLoader'
import { pageMotion, pageTransition } from './constants/animation'

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
                  <HeroSection />
                </motion.main>
              }
            />
            <Route
              path="/work"
              element={
                <SuspenseLoader>
                  <Work />
                </SuspenseLoader>
              }
            />
            <Route
              path="/about"
              element={
                <SuspenseLoader>
                  <AboutMe />
                </SuspenseLoader>
              }
            />
            <Route
              path="/playground"
              element={
                <SuspenseLoader>
                  <Playground />
                </SuspenseLoader>
              }
            />
            <Route
              path="/contact"
              element={
                <SuspenseLoader>
                  <Contact />
                </SuspenseLoader>
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
