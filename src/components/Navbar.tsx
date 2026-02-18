import { Link, NavLink } from 'react-router-dom'
import { memo } from 'react'

import GooeyNav from './ui/GooeyNav'
import ThemeToggle from './ui/ThemeToggle'

export type NavLink = {
  label: string
  href: string
}

interface NavbarProps {
  links: NavLink[]
}

const Navbar = memo(function Navbar({ links }: NavbarProps) {
  return (
    <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <Link className="group inline-flex items-center gap-3" to="/" aria-label="Navigate to home">
        <div className="grid h-10 w-10 place-content-center overflow-hidden rounded-full bg-primary/10 transition group-hover:bg-primary/20">
          <img
            src="https://i.redd.it/7wqxmrey0ewe1.gif"
            alt="MJ Logo"
            className="h-10 w-10 object-cover"
            loading="eager"
            decoding="async"
            width="40"
            height="40"
          />
        </div>
        <span className="text-sm uppercase tracking-[0.35em] text-primary/50 group-hover:text-primary">
          Portfolio
        </span>
      </Link>

      <div className="hidden md:block">
        <GooeyNav items={links} />
      </div>
      <nav className="flex items-center gap-6 text-sm font-medium text-primary/60 md:hidden">
        {links.map(({ label, href }) => (
          <NavLink
            key={label}
            to={href}
            className={({ isActive }) =>
              `cursor-pointer transition hover:text-primary ${isActive ? 'text-primary' : ''}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="flex items-center gap-3 self-start md:self-auto">
        <ThemeToggle />
        <button className="rounded-full border border-primary/20 bg-primary px-6 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-surface transition hover:shadow-neon-hover md:inline-flex">
          Download Résumé
        </button>
      </div>
    </header>
  )
})

export default Navbar
