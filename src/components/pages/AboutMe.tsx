import { motion } from 'framer-motion'

const pageMotion = {
	initial: { opacity: 0, y: 32 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -24 },
}

const pageTransition = { duration: 0.55, ease: [0.22, 0.61, 0.36, 1] as const }

const milestones = [
	{
		year: '2008',
		label: 'I was spawned in this world, blessing this world with my presence.',
	},
	{
		year: '2014',
		label: 'Touched my first computer and was immedietly hooked on it, playing games and watching YouTube videos.',
	},
	{
		year: '2024',
		label: 'Started learning web development and fell in love with creating interactive experiences on the web.',
	},
]

function AboutMe() {
	return (
		<motion.section
			className="mt-20 flex flex-1 flex-col gap-12"
			initial={pageMotion.initial}
			animate={pageMotion.animate}
			exit={pageMotion.exit}
			transition={pageTransition}
		>
			<header className="space-y-5">
				<p className="text-xs uppercase tracking-[0.4em] text-white/40">About</p>
				<h1 className="text-3xl font-semibold text-white sm:text-4xl">Profesional Ctrl c + Ctrl v'er</h1>
						<p className="max-w-3xl text-base text-white/60 sm:text-lg">
							Hi, I&apos;m MaJa - a developer who thrives at Building web and mobile apps using AI, Born and raised in Indonesia and looking to get the hell out of here and i wanna do that using code!.
				</p>
			</header>

			<section className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
				<h2 className="text-xl font-semibold text-white">How I work</h2>
				<ul className="grid gap-6 text-sm text-white/60 sm:grid-cols-2">
					<li className="rounded-2xl border border-white/10 bg-black/40 p-6">
						Prototype rapidly in Copilot,Lovable, and other AI tools ensuring a robust boilerplate.
					</li>
					<li className="rounded-2xl border border-white/10 bg-black/40 p-6">
						Design responsive UI languages with Tailwind and ship them via component-driven architectures.
					</li>
					<li className="rounded-2xl border border-white/10 bg-black/40 p-6">
						Collaborate closely with design and product to align storytelling, motion, and accessibility goals.
					</li>
					<li className="rounded-2xl border border-white/10 bg-black/40 p-6">
						Advocate for measurable performance budgets, including bundle size, shader complexity, and interaction latency.
					</li>
				</ul>
			</section>

			<section className="space-y-4">
				<h2 className="text-xl font-semibold text-white">Milestones</h2>
				<ul className="space-y-3 text-sm text-white/60">
					{milestones.map(milestone => (
						<li key={milestone.year} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
							<span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/45">{milestone.year}</span>
							<p className="text-sm text-white/70">{milestone.label}</p>
						</li>
					))}
				</ul>
			</section>
		</motion.section>
	)
}

export default AboutMe
