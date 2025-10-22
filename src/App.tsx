import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import SiteFooter from './components/SiteFooter'
import SplineShowcase from './components/SplineShowcase'

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Playground', href: '#playground' },
  { label: 'Contact', href: '#contact' },
]

const highlightTiles = [
  {
    title: 'Experience',
    detail: '6+ years crafting reactive interfaces and immersive product demos.',
  },
  {
    title: 'Stack',
    detail: 'React · TypeScript · Three.js · Spline · Tailwind · WebGL',
  },
]

function App() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent"
      />

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-24 pt-10 sm:px-10 lg:px-16">
        <Navbar links={navLinks} />

        <main className="mt-20 flex flex-1 flex-col gap-16 lg:flex-row lg:items-stretch">
          <HeroSection tiles={highlightTiles} />
          <SplineShowcase />
        </main>

        <SiteFooter />
      </div>
    </div>
  )
}

export default App
