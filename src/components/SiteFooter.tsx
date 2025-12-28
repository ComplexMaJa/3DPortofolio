import type { SVGProps } from 'react'
import { memo } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const links = [
  {
    href: 'mailto:kmabumi@gmail.com',
    label: 'Email',
    Icon: (props: IconProps) => (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
        <path d="M3 7l9 6l9 -6" />
      </svg>
    ),
  },
  {
    href: 'https://discord.com/users/complexmaja',
    label: 'Discord',
    Icon: (props: IconProps) => (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
        <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0m6 0a1 1 0 1 0 2 0a1 1 0 0 0 -2 0m1.5 5c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3" />
      </svg>
    ),
  },
  {
    href: 'https://github.com/ComplexMaJa',
    label: 'GitHub',
    Icon: (props: IconProps) => (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
      </svg>
    ),
  },
  {
    href: 'https://www.youtube.com/@complexmaja',
    label: 'YouTube',
    Icon: (props: IconProps) => (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
        <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
        <path d="M10 9l5 3l-5 3z" />
      </svg>
    ),
  },
]

const SiteFooter = memo(function SiteFooter() {
  return (
    <footer className="mt-24 flex flex-wrap items-center justify-between gap-6 text-xs uppercase tracking-[0.35em] text-white/40">
      <p>© 2025 MaJa.dev · Based in Indonesia</p>
      <div className="flex gap-4">
        {links.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            title={label}
            className="group rounded-full p-2 text-white/40 transition hover:text-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
            rel={href.startsWith('http') ? 'noreferrer' : undefined}
            target={href.startsWith('http') ? '_blank' : undefined}
          >
            <Icon className="h-5 w-5 transition-colors duration-200 group-hover:text-white/70" />
            <span className="sr-only">{label}</span>
          </a>
        ))}
      </div>
    </footer>
  )
})

export default SiteFooter
