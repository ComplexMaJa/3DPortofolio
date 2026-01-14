import { Cache } from 'three'
import type { CSSProperties } from 'react'

// Enable Three.js internal cache for resources
Cache.enabled = true

import { lazy } from 'react'
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import SiteFooter from './components/SiteFooter'
import SuspenseLoader from './components/ui/SuspenseLoader'
import useIsMobileDevice from './hooks/useIsMobileDevice'
import fallbackPreview from './assets/fatahh.png'
import { pageMotion, pageTransition } from './constants/animation'

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
  const isMobile = useIsMobileDevice()

  return (
    <div className="relative isolate min-h-screen overflow-hidden text-white" style={backgroundStyles}>
      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-24 pt-10 sm:px-10 lg:px-16">
        <Navbar links={navLinks} />

        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                isMobile ? (
                  <motion.main
                    className="mt-14 flex flex-1 flex-col gap-6"
                    initial={pageMotion.initial}
                    animate={pageMotion.animate}
                    exit={pageMotion.exit}
                    transition={pageTransition}
                  >
                    <div className="flex flex-col gap-4">
                      <h1 className="text-4xl font-bold leading-tight text-white">
                        Web / App / Game Developer from Indonesia 🇮🇩
                      </h1>

                      <p className="text-sm text-white/60 leading-relaxed">
                        Wsg! I'm MaJa / Bumi, i am a dev from Indonesia that is interested in web, app, and game development.
                      </p>
                    </div>

                    <div className="flex justify-center py-6">
                      <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-white/5 shadow-2xl shadow-emerald-500/10">
                        <img
                          src={fallbackPreview}
                          alt="Teto"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>

                    <nav className="grid grid-cols-2 gap-3">
                      {navLinks.map(({ label, href }) => (
                        <Link
                          key={label}
                          to={href}
                          className="group flex flex-col justify-between rounded-2xl bg-white/5 p-5 transition active:scale-95 active:bg-white/10 border border-white/5 hover:border-white/10"
                        >
                          <span className="text-2xl mb-2 opacity-80 group-hover:scale-110 transition-transform duration-300 origin-left">
                            {label === 'Work' ? '💼' : label === 'About' ? '👤' : label === 'Playground' ? '🎮' : '✉️'}
                          </span>
                          <span className="font-semibold text-white/90">{label}</span>
                        </Link>
                      ))}
                    </nav>

                    <section className="space-y-3 pt-4">
                      <h2 className="text-xs font-bold uppercase tracking-widest text-white/30">Highlights</h2>
                      <div className="grid gap-3">
                        {highlightTiles.map(({ title, detail }) => (
                          <div key={title} className="rounded-2xl bg-white/5 p-5 border border-white/5">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-white/50">{title}</h3>
                            <p className="mt-2 text-sm font-medium text-white/80 leading-relaxed">{detail}</p>
                          </div>
                        ))}
                      </div>
                    </section>
                  </motion.main>
                ) : (
                  <motion.main
                    className="mt-20 flex flex-1 flex-col gap-16 lg:flex-row lg:items-stretch"
                    initial={pageMotion.initial}
                    animate={pageMotion.animate}
                    exit={pageMotion.exit}
                    transition={pageTransition}
                  >
                    <HeroSection tiles={highlightTiles} />
                    <SuspenseLoader className="">
                      <SplineShowcase />
                    </SuspenseLoader>
                  </motion.main>
                )
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
