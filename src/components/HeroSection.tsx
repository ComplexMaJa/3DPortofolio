import { Link } from 'react-router-dom'
import { lazy, memo } from 'react'

import SplitText from './ui/SplitText'
import LogoLoop from './ui/LogoLoop'
import type { LogoItem } from './ui/LogoLoop'
import SuspenseLoader from './ui/SuspenseLoader'
import useIsMobileDevice from '../hooks/useIsMobileDevice'
import fallbackPreview from '../assets/fatahh.png'

const techStackLogos: LogoItem[] = [
  {
    node: (
      <span className="inline-flex items-center gap-2">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="h-5 w-5" draggable={false} />
        <span className="text-sm font-medium text-primary/70">HTML5</span>
      </span>
    ),
  },
  {
    node: (
      <span className="inline-flex items-center gap-2">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="h-5 w-5" draggable={false} />
        <span className="text-sm font-medium text-primary/70">CSS3</span>
      </span>
    ),
  },
  {
    node: (
      <span className="inline-flex items-center gap-2">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="h-5 w-5" draggable={false} />
        <span className="text-sm font-medium text-primary/70">React</span>
      </span>
    ),
  },
  {
    node: (
      <span className="inline-flex items-center gap-2">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="h-5 w-5" draggable={false} />
        <span className="text-sm font-medium text-primary/70">TypeScript</span>
      </span>
    ),
  },
  {
    node: (
      <span className="inline-flex items-center gap-2">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" className="h-5 w-5" draggable={false} />
        <span className="text-sm font-medium text-primary/70">Tailwind</span>
      </span>
    ),
  },
  {
    node: (
      <span className="inline-flex items-center gap-2">
        <img src="https://d3nu5unxfaytln.cloudfront.net/prod/image-storage/assets/technologies/0dff1ae0-692a-11ef-bb17-b5004ee5bd7baafe2c3c-92a3-4cbb-abda-f3f16f4685d0Three.js.png" alt="Three.js" className="h-5 w-5 invert dark:invert-0" draggable={false} />
        <span className="text-sm font-medium text-primary/70">Three.js</span>
      </span>
    ),
  },
  {
    node: (
      <span className="inline-flex items-center gap-2">
        <img src="https://spline.design/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fspline_logo.54f4e584.png&w=128&q=75" alt="Spline" className="h-5 w-5" draggable={false} />
        <span className="text-sm font-medium text-primary/70">Spline</span>
      </span>
    ),
  },
  {
    node: (
      <span className="inline-flex items-center gap-2">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="h-5 w-5" draggable={false} />
        <span className="text-sm font-medium text-primary/70">JavaScript</span>
      </span>
    ),
  },
  {
    node: (
      <span className="inline-flex items-center gap-2">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="h-5 w-5" draggable={false} />
        <span className="text-sm font-medium text-primary/70">Node.js</span>
      </span>
    ),
  },
  {
    node: (
      <span className="inline-flex items-center gap-2">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="h-5 w-5 invert dark:invert-0" draggable={false} />
        <span className="text-sm font-medium text-primary/70">Next.js</span>
      </span>
    ),
  },
]

const SplineShowcase = lazy(() => import('./3DTeto'))

const navLinks = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Playground', href: '/playground' },
  { label: 'Contact', href: '/contact' },
]

const HeroSection = memo(function HeroSection() {
  const isMobile = useIsMobileDevice()

  if (isMobile) {
    return (
      <div className="mt-14 flex flex-1 flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold leading-tight text-primary">
            Web / App Developer from Indonesia 🇮🇩
          </h1>
          <p className="text-sm leading-relaxed text-primary/60">
            Wsg! I'm MaJa / Bumi, I am a dev from Indonesia that is interested in Software Development Focused on Real Applications.
          </p>
        </div>

        <div className="flex justify-center py-6">
          <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary/5 shadow-2xl shadow-emerald-500/10">
            <img src={fallbackPreview} alt="Teto" className="h-full w-full object-cover" />
          </div>
        </div>

        <nav className="grid grid-cols-2 gap-3">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              to={href}
              className="group flex flex-col justify-between rounded-2xl border border-primary/5 bg-primary/5 p-5 transition hover:border-primary/10 active:scale-95 active:bg-primary/10"
            >
              <span className="mb-2 origin-left text-2xl opacity-80 transition-transform duration-300 group-hover:scale-110">
                {label === 'Work' ? '💼' : label === 'About' ? '👤' : label === 'Playground' ? '🎮' : '✉️'}
              </span>
              <span className="font-semibold text-primary/90">{label}</span>
            </Link>
          ))}
        </nav>

        <section className="space-y-3 pt-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary/30">Highlights</h2>
          <div className="grid gap-3">
            <div className="rounded-2xl border border-primary/5 bg-primary/5 p-5">
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary/50">Experience</h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-primary/80">2+ years of building web apps and mobile apps.</p>
            </div>
            <div className="rounded-2xl border border-primary/5 bg-primary/5 p-5">
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary/50">Stack</h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-primary/80">React · TypeScript · Three.js · Spline · Tailwind · HTML · CSS</p>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="mt-20 flex flex-1 flex-col gap-16 lg:flex-row lg:items-stretch">
      <section className="z-10 flex max-w-xl flex-col gap-10">
      <SplitText
        text="Welcome!"
        tag="h2"
        splitType="chars"
        delay={45}
        textAlign="left"
        className="text-xs font-semibold uppercase tracking-[0.8em] text-primary/35"
      />

      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary/55">
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        Available for collaborations
      </div>

      <div className="space-y-6">
        <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-primary sm:text-5xl lg:text-6xl">
          Web / App Developer from Indonesia 🇮🇩
        </h1>
        <p className="text-base text-primary/70 sm:text-lg">
          Wsg! I'm MaJa / Bumi, I am a dev from Indonesia that is interested in Software Development Focused on Real Applications.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Link
          className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-surface transition hover:shadow-neon-cta focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
          to="/work"
        >
          View My Work
          <span className="transition group-hover:translate-x-1">→</span>
        </Link>
        <Link
          className="inline-flex cursor-pointer items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary transition hover:bg-primary/20"
          to="/contact"
        >
          Shoot me an email!
        </Link>
      </div>

      {/* Experience card – redesigned */}
      <div className="flex items-center gap-4 rounded-2xl border border-primary/10 bg-primary/5 p-5 backdrop-blur">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/15 bg-primary/10">
          <svg className="h-6 w-6 text-primary/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" />
          </svg>
        </div>
        <div>
          <p className="text-2xl font-bold tracking-tight text-primary">2+ <span className="text-base font-semibold text-primary/50">years</span></p>
          <p className="text-xs uppercase tracking-[0.25em] text-primary/40">Building web &amp; mobile apps</p>
        </div>
      </div>

      {/* Tech stack logo loop */}
      <div className="overflow-hidden rounded-2xl border border-primary/10 bg-primary/5 p-4 backdrop-blur">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary/40">Tech Stack</p>
        <LogoLoop
          logos={techStackLogos}
          speed={60}
          direction="left"
          logoHeight={20}
          gap={40}
          pauseOnHover
          fadeOut
          ariaLabel="Tech stack logos"
          className="[--logoloop-fadeColorAuto:rgb(var(--color-surface))]"
        />
      </div>
      </section>

      <SuspenseLoader>
        <SplineShowcase />
      </SuspenseLoader>
    </div>
  )
})

export default HeroSection
