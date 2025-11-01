import GooeyNav from './ui/GooeyNav'

export type NavLink = {
  label: string
  href: string
}

interface NavbarProps {
  links: NavLink[]
}

function Navbar({ links }: NavbarProps) {
  return (
    <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <a className="group inline-flex items-center gap-3" href="#home" aria-label="Navigate to home">
        <div className="grid h-10 w-10 place-content-center rounded-full bg-white/10 transition group-hover:bg-white/20">
          <span className="text-lg font-bold tracking-widest text-white">MJ</span>
        </div>
        <span className="text-sm uppercase tracking-[0.35em] text-white/50 group-hover:text-white">
          Portfolio
        </span>
      </a>

      <div className="hidden md:block">
        <GooeyNav items={links} />
      </div>
      <nav className="flex items-center gap-6 text-sm font-medium text-white/60 md:hidden">
        {links.map(({ label, href }) => (
          <a key={label} className="transition hover:text-white" href={href}>
            {label}
          </a>
        ))}
      </nav>

      <button className="self-start rounded-full border border-white/20 bg-white px-6 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-black transition hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] md:self-auto md:inline-flex">
        Download Résumé
      </button>
    </header>
  )
}

export default Navbar
