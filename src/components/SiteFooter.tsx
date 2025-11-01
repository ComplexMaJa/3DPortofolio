function SiteFooter() {
  return (
    <footer className="mt-24 flex flex-wrap items-center justify-between gap-6 text-xs uppercase tracking-[0.35em] text-white/40">
      <p>© 2025 MaJa.dev · Based in Indonesia</p>
      <div className="flex gap-5">
        <a className="transition hover:text-white/70" href="mailto:kmabumi@gmail.com">
          Email
        </a>
        <a className="transition hover:text-white/70" href="https://discord.com/users/complexmaja" target="_blank" rel="noreferrer">
          Discord
        </a>
        <a className="transition hover:text-white/70" href="https://github.com/ComplexMaJa" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="transition hover:text-white/70" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  )
}

export default SiteFooter
