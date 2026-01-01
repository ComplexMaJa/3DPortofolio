import type { CSSProperties } from 'react'
import { lazy, Suspense } from 'react'
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import SiteFooter from './components/SiteFooter'
import useIsMobileDevice from './hooks/useIsMobileDevice'
import fallbackPreview from './assets/fatahh.png'

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
                isMobile ? (
                  <motion.main
                    className="mt-14 flex flex-1 flex-col gap-8"
                    initial={pageMotion.initial}
                    animate={pageMotion.animate}
                    exit={pageMotion.exit}
                    transition={pageTransition}
                  >
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-emerald-500/10">
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.4em] text-white/50">Mobile-first</p>
                      <h1 className="mt-3 text-3xl font-semibold leading-[1.1] text-white">
                        Fast, touch-friendly portfolio for Android &amp; mobile.
                      </h1>
                      <p className="mt-3 text-sm text-white/70">
                        Optimized navigation, lightweight media, and instant content—no heavy 3D on phones.
                      </p>
                    </div>

                    <section className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {navLinks.map(({ label, href }) => (
                        <Link
                          key={label}
                          className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-left text-base font-semibold text-white/90 transition hover:border-white/30 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                          to={href}
                        >
                          <span className="uppercase tracking-[0.28em] text-xs">{label}</span>
                          <span aria-hidden className="text-lg">→</span>
                        </Link>
                      ))}
                    </section>

                    <section className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-gradient-to-r from-white/10 to-transparent p-5 backdrop-blur">
                      <div className="flex items-center gap-3">
                        <div className="grid h-12 w-12 place-content-center rounded-2xl bg-white/15 text-xl">🎯</div>
                        <div className="space-y-1">
                          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">3D disabled on mobile</p>
                          <p className="text-sm text-white/80">Smooth scrolling &amp; low battery usage guaranteed.</p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-black/40 p-4 sm:flex-row sm:items-center">
                        <img
                          src={fallbackPreview}
                          alt="Static preview placeholder"
                          className="h-20 w-20 rounded-xl object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="text-sm text-white/75">
                          Enjoy a lightweight snapshot here. For the full interactive Tetocat, open this site on desktop.
                        </div>
                      </div>
                    </section>

                    <section className="space-y-4">
                      <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-white/50">Highlights</h2>
                      <dl className="grid gap-4 sm:grid-cols-2">
                        {highlightTiles.map(({ title, detail }) => (
                          <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                            <dt className="text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-white/60">{title}</dt>
                            <dd className="mt-2 text-sm text-white/80">{detail}</dd>
                          </div>
                        ))}
                      </dl>
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
                    <Suspense fallback={<div className="flex items-center justify-center flex-1 text-sm text-white/50">Loading...</div>}>
                      <SplineShowcase />
                    </Suspense>
                  </motion.main>
                )
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
