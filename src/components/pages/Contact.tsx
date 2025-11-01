import { motion } from 'framer-motion'

const pageMotion = {
    initial: { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -24 },
}

const pageTransition = { duration: 0.55, ease: [0.22, 0.61, 0.36, 1] as const }

type ContactChannel = {
    label: string
    detail: string
    helper: string
    href?: string
}

const contacts: ContactChannel[] = [
    {
        label: 'Email',
        detail: 'kmabumi@gmail.com',
        helper: 'Primary inbox for scoped project briefs or collaboration invites.',
        href: 'mailto:kmabumi@gmail.com',
    },
    {
        label: 'Calendly',
        detail: '15-minute chemistry call',
        helper: 'Book a quick sync to align on goals, scope, and next steps.',
        href: 'https://calendly.com/',
    },
    {
        label: 'LinkedIn',
        detail: '@majacodes',
        helper: 'Let’s connect for speaking engagements or long-term partnerships.',
        href: 'https://www.linkedin.com/in/majacodes',
    },
]

function Contact() {
    return (
        <motion.section
            className="mt-20 flex flex-1 flex-col gap-12"
            initial={pageMotion.initial}
            animate={pageMotion.animate}
            exit={pageMotion.exit}
            transition={pageTransition}
        >
            <header className="space-y-5">
                <p className="text-xs uppercase tracking-[0.4em] text-white/40">Contacts</p>
                <h1 className="text-3xl font-semibold text-white sm:text-4xl">All the ways to reach me</h1>
                <p className="max-w-2xl text-base text-white/60 sm:text-lg">
                    Pick the channel that best fits your project cadence. Each entry routes directly to me—no gatekeepers, no waiting games.
                </p>
            </header>

            <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <ul className="grid gap-6 sm:grid-cols-2">
                    {contacts.map(channel => (
                        <li key={channel.label} className="rounded-2xl border border-white/10 bg-black/40 p-6">
                            <p className="text-xs uppercase tracking-[0.35em] text-white/35">{channel.label}</p>
                            {channel.href ? (
                                <a
                                    className="mt-2 inline-flex items-center gap-2 text-lg font-semibold text-white underline-offset-4 hover:underline"
                                    href={channel.href}
                                    target={channel.href.startsWith('http') ? '_blank' : undefined}
                                    rel={channel.href.startsWith('http') ? 'noreferrer noopener' : undefined}
                                >
                                    {channel.detail}
                                </a>
                            ) : (
                                <p className="mt-2 text-lg font-semibold text-white">{channel.detail}</p>
                            )}
                            <p className="mt-3 text-sm text-white/55">{channel.helper}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </motion.section>
    )
}

export default Contact
