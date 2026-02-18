import { Link } from 'react-router-dom'
import { memo } from 'react'

import SplitText from './ui/SplitText'

export type HighlightTile = {
  title: string
  detail: string
}

interface HeroSectionProps {
  tiles: HighlightTile[]
}

const HeroSection = memo(function HeroSection({ tiles }: HeroSectionProps) {
  return (
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
          Web / App / Game Developer from Indonesia 🇮🇩
        </h1>
        <p className="text-base text-primary/70 sm:text-lg">
          Wsg! I'm MaJa / Bumi, i am a dev from Indonesia that is interested in web,app,and game development.
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

      <dl className="grid gap-6 sm:grid-cols-2">
        {tiles.map(({ title, detail }) => (
          <div key={title} className="rounded-3xl border border-primary/10 bg-primary/5 p-6 backdrop-blur">
            <dt className="text-sm font-semibold uppercase tracking-[0.25em] text-primary/50">{title}</dt>
            <dd className="mt-3 text-sm text-primary/80">{detail}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
})

export default HeroSection
