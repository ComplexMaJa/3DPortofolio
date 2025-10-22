import Spline from '@splinetool/react-spline'

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
        <header className="flex items-center justify-between">
          <a className="group inline-flex items-center gap-3" href="#home" aria-label="Navigate to home">
            <div className="grid h-10 w-10 place-content-center rounded-full bg-white/10 transition group-hover:bg-white/20">
              <span className="text-lg font-bold tracking-widest text-white">MK</span>
            </div>
            <span className="text-sm uppercase tracking-[0.35em] text-white/60 group-hover:text-white">
              Mcode Portfolio
            </span>
          </a>

          <nav className="hidden items-center gap-10 text-sm font-medium text-white/70 md:flex">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                className="transition hover:text-white"
                href={href}
              >
                {label}
              </a>
            ))}
          </nav>

          <button className="relative hidden overflow-hidden rounded-full border border-white/20 bg-white/5 px-6 py-2 text-sm font-semibold tracking-wide text-white/90 transition hover:border-white/40 hover:bg-white/10 md:inline-flex">
            <span className="relative z-10">Download Résumé</span>
            <span className="absolute inset-0 -z-10 bg-gradient-to-r from-ember/70 to-amber-400 opacity-0 transition hover:opacity-100" />
          </button>
        </header>

        <main className="mt-20 flex flex-1 flex-col gap-16 lg:flex-row lg:items-stretch">
          <section className="z-10 flex max-w-xl flex-col gap-10">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Available for collaborations
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Designing interactive 3D experiences for ambitious products.
              </h1>
              <p className="text-base text-white/70 sm:text-lg">
                I’m Mico, a front-end engineer blending performant code, storytelling, and spatial interfaces. From product launches to immersive demos, I partner with teams to turn complex ideas into delightful, tactile web moments.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ember"
                href="#work"
              >
                View Selected Work
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
              <a
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
                href="#contact"
              >
                Book a discovery call
              </a>
            </div>

            <dl className="grid gap-6 sm:grid-cols-2">
              {highlightTiles.map(({ title, detail }) => (
                <div
                  key={title}
                  className="rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur"
                >
                  <dt className="text-sm font-semibold uppercase tracking-[0.25em] text-white/50">{title}</dt>
                  <dd className="mt-3 text-sm text-white/80">{detail}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="relative flex flex-1 items-center justify-center">
            <div className="absolute -top-10 -right-5 h-64 w-64 rounded-full bg-ember/30 blur-[140px]" aria-hidden />
            <div className="relative aspect-[4/5] w-full max-w-[420px] rounded-[36px] border border-white/10 bg-gradient-to-br from-white/5 to-white/0 shadow-neon backdrop-blur">
              <div className="absolute inset-2 rounded-[28px] bg-black/80 p-4">
                <Spline
                  aria-label="Interactive 3D scene preview"
                  className="h-full w-full"
                  scene="https://prod.spline.design/U21R4ViVUmBUKroo/scene.splinecode"
                />
              </div>

              <div className="pointer-events-none absolute inset-x-6 -bottom-12 grid gap-3 rounded-3xl border border-white/10 bg-black/80 p-5 text-xs uppercase tracking-[0.25em] text-white/60 shadow-neon">
                <span className="text-white/80">Signature Front-End & 3D Web</span>
                <span className="flex items-center justify-between text-white/50">
                  <span>Craft · Integrate · Iterate</span>
                  <span className="text-white/70">2025</span>
                </span>
              </div>
            </div>
          </section>
        </main>

        <footer className="mt-24 flex flex-wrap items-center justify-between gap-6 text-xs uppercase tracking-[0.35em] text-white/30">
          <p>© 2025 Mcode Studio · Based in Jakarta</p>
          <div className="flex gap-5">
            <a className="transition hover:text-white/60" href="mailto:hello@mcode.design">
              Email
            </a>
            <a className="transition hover:text-white/60" href="https://dribbble.com" target="_blank" rel="noreferrer">
              Dribbble
            </a>
            <a className="transition hover:text-white/60" href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="transition hover:text-white/60" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
