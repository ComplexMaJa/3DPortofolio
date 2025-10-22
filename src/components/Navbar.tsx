export type NavLink = {
  label: string
  href: string
}

interface NavbarProps {
  links: NavLink[]
}

function Navbar({ links }: NavbarProps) {
  return (
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
        {links.map(({ label, href }) => (
          <a key={label} className="transition hover:text-white" href={href}>
            {label}
          </a>
        ))}
      </nav>

      <button className="relative hidden overflow-hidden rounded-full border border-white/20 bg-white/5 px-6 py-2 text-sm font-semibold tracking-wide text-white/90 transition hover:border-white/40 hover:bg-white/10 md:inline-flex">
        <span className="relative z-10">Download Résumé</span>
        <span className="absolute inset-0 -z-10 bg-gradient-to-r from-ember/70 to-amber-400 opacity-0 transition hover:opacity-100" />
      </button>
    </header>
  )
}

export default Navbar
