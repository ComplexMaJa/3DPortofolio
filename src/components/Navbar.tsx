import { Link, NavLink } from 'react-router-dom'
import { memo } from 'react'

import GooeyNav from './ui/GooeyNav'
import { prefetchRoute } from '../utils/prefetch'

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
      <Link
        className="group inline-flex items-center gap-3"
        to="/"
        aria-label="Navigate to home"
        onMouseEnter={() => prefetchRoute('/')}
      >
        <div className="grid h-10 w-10 place-content-center overflow-hidden rounded-full bg-white/10 transition group-hover:bg-white/20">
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
        <span className="text-sm uppercase tracking-[0.35em] text-white/50 group-hover:text-white">
          Portfolio
        </span>
      </Link>

      <div className="hidden md:block">
        <GooeyNav items={links} />
      </div>
      <nav className="flex items-center gap-6 text-sm font-medium text-white/60 md:hidden">
        {links.map(({ label, href }) => (
          <NavLink
            key={label}
            to={href}
            onMouseEnter={() => prefetchRoute(href)}
            className={({ isActive }) =>
              `cursor-pointer transition hover:text-white ${isActive ? 'text-white' : ''}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <button className="self-start rounded-full border border-white/20 bg-white px-6 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-black transition hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] md:self-auto md:inline-flex">
        Download Résumé
      </button>
    </header>
  )
})

export default Navbar
