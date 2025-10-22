export type HighlightTile = {
  title: string
  detail: string
}

interface HeroSectionProps {
  tiles: HighlightTile[]
}

function HeroSection({ tiles }: HeroSectionProps) {
  return (
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
        {tiles.map(({ title, detail }) => (
          <div key={title} className="rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur">
            <dt className="text-sm font-semibold uppercase tracking-[0.25em] text-white/50">{title}</dt>
            <dd className="mt-3 text-sm text-white/80">{detail}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default HeroSection
