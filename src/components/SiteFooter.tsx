import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const links = [
  {
    href: 'mailto:kmabumi@gmail.com',
    label: 'Email',
    Icon: (props: IconProps) => (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 6-10 7L2 6" />
      </svg>
    ),
  },
  {
    href: 'https://discord.com/users/complexmaja',
    label: 'Discord',
    Icon: (props: IconProps) => (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
        <path d="M21 5a16 16 0 0 0-4-1 11 11 0 0 0-.52 1.05 15.58 15.58 0 0 0-4.96 0A11.38 11.38 0 0 0 11 4a16 16 0 0 0-4 1c-2.53 3.66-3.6 7.24-3 10a16.5 16.5 0 0 0 4 2 12.12 12.12 0 0 0 .84-1.36 10.52 10.52 0 0 0 4.32 0c.27.48.55.94.84 1.36a16.5 16.5 0 0 0 4-2c.55-2.83-.46-6.41-3-10ZM9.5 13c-.83 0-1.5-.9-1.5-2s.67-2 1.5-2 1.5.9 1.5 2-.67 2-1.5 2Zm5 0c-.83 0-1.5-.9-1.5-2s.67-2 1.5-2 1.5.9 1.5 2-.67 2-1.5 2Z" />
      </svg>
    ),
  },
  {
    href: 'https://github.com/ComplexMaJa',
    label: 'GitHub',
    Icon: (props: IconProps) => (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
        <path d="M15 22v-2a4.1 4.1 0 0 0-1-3c3 0 6-2 6-5.5.1-1.2-.3-2.4-1-3.4.3-1 0-2.2-.1-2.4 0 0-.7-.3-2.4 1a8.6 8.6 0 0 0-4.5 0c-1.7-1.3-2.4-1-2.4-1-.1.2-.4 1.4-.1 2.4a5.4 5.4 0 0 0-1 3.4C6 15 9 17 12 17a4.1 4.1 0 0 0-1 3v2" />
        <path d="M9 18c-4.5 1.5-4.5-2.5-6-3" />
        <path d="M15 18c4.5 1.5 4.5-2.5 6-3" />
      </svg>
    ),
  },
  {
    href: 'https://www.youtube.com/@complexmaja',
    label: 'YouTube',
    Icon: (props: IconProps) => (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
        <rect width="20" height="14" x="2" y="5" rx="4" />
        <path d="m11 9 4 3-4 3V9" />
      </svg>
    ),
  },
]

function SiteFooter() {
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
}

export default SiteFooter
