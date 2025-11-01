import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import SiteFooter from './components/SiteFooter'
import SplineShowcase from './components/SplineShowcase'
import AboutMe from './components/pages/AboutMe'
import Contact from './components/pages/Contact'
import Playground from './components/pages/Playground'
import Work from './components/pages/Work'

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
    detail: 'React · TypeScript · Three.js · Spline · Tailwind',
  },
]

function App() {
  const location = useLocation()

  const pageMotion = {
    initial: { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -24 },
  }

  const pageTransition = { duration: 0.55, ease: [0.22, 0.61, 0.36, 1] as const }

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-ink text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_65%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 mix-blend-screen"
        style={{ backgroundImage: 'linear-gradient(115deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 45%, transparent 70%)' }}
      />

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
                  <SplineShowcase />
                </motion.main>
              }
            />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>

        <SiteFooter />
      </div>
    </div>
  )
}

export default App
