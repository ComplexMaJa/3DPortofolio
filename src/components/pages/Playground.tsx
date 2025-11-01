import { motion } from 'framer-motion'

const pageMotion = {
	initial: { opacity: 0, y: 32 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -24 },
}

const pageTransition = { duration: 0.55, ease: [0.22, 0.61, 0.36, 1] as const }

const experiments = [
	{
		title: 'Liquid UI shader pack',
		summary: 'Procedural shader experiments rendered in WebGL, optimized for gooey UI states and responsive cursor trails.',
		status: 'In progress',
	},
	{
		title: 'Spline component library',
		summary: 'Reusable Spline scenes wired to React props, enabling CMS-driven hero swaps without code changes.',
		status: 'Beta',
	},
	{
		title: 'Motion audit checklist',
		summary: 'A checklist for evaluating motion budgets, easing curves, and perception thresholds before hand-off.',
		status: 'Published',
	},
]

function Playground() {
	return (
		<motion.section
			className="mt-20 flex flex-1 flex-col gap-12"
			initial={pageMotion.initial}
			animate={pageMotion.animate}
			exit={pageMotion.exit}
			transition={pageTransition}
		>
			<header className="space-y-5">
				<p className="text-xs uppercase tracking-[0.4em] text-white/40">Playground</p>
				<h1 className="text-3xl font-semibold text-white sm:text-4xl">Experiments, sketches, and motion tests</h1>
				<p className="max-w-2xl text-base text-white/60 sm:text-lg">
					Work in progress explorations that inform production projects. Expect shader doodles, rapid prototypes, and occasional
					behind-the-scenes breakdowns.
				</p>
			</header>

			<div className="grid gap-6 md:grid-cols-3">
				{experiments.map(experiment => (
					<article
						key={experiment.title}
						className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/10"
					>
						<div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/35">
							<span>{experiment.status}</span>
							<span>Personal</span>
						</div>
						<h2 className="text-xl font-semibold text-white">{experiment.title}</h2>
						<p className="text-sm text-white/60">{experiment.summary}</p>
						<button className="mt-auto self-start rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70 transition hover:bg-white/20">
							View notes
						</button>
					</article>
				))}
			</div>
		</motion.section>
	)
}

export default Playground
