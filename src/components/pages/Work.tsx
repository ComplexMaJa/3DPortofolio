import { motion } from 'framer-motion'

const pageMotion = {
	initial: { opacity: 0, y: 32 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -24 },
}

const pageTransition = { duration: 0.55, ease: [0.22, 0.61, 0.36, 1] as const }

const projects = [
	{
		title: '3DPortofolio',
		description: 'A personal portfolio website showcasing 3D projects and interactive web experiences using React and Spline. The site you are on right now!.',
		year: '2025',
		link: 'https://complexmaja.github.io/3DPortofolio/',
	},
	{
		title: 'Skanida Apps : Absensi',
		description: 'Student absence app using react,expo,and typescript, i was the UI/UX for the project.',
		year: '2024',
		link: 'private repo lmao',
	},
]

function Work() {
	return (
		<motion.section
			className="mt-20 flex flex-1 flex-col gap-12"
			initial={pageMotion.initial}
			animate={pageMotion.animate}
			exit={pageMotion.exit}
			transition={pageTransition}
		>
			<header className="space-y-5">
				<p className="text-xs uppercase tracking-[0.4em] text-white/40">Selected Work</p>
				<h1 className="text-3xl font-semibold text-white sm:text-4xl">Projects i've worked on</h1>
				<p className="max-w-2xl text-base text-white/60 sm:text-lg">
					A lists of all the projects i have worked on over my 2+ years of being a developer.
				</p>
			</header>

			<div className="grid gap-6 md:grid-cols-2">
				{projects.map(project => (
					<article
						key={project.title}
						className="group flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-white/20 hover:bg-white/10"
					>
						<span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/35">{project.year}</span>
						<h2 className="text-2xl font-semibold text-white group-hover:text-white/90">{project.title}</h2>
						<p className="text-sm text-white/60">{project.description}</p>
						<a
							href={project.link}
							target={project.link.startsWith('http') ? '_blank' : undefined}
							rel={project.link.startsWith('http') ? 'noreferrer' : undefined}
							className="self-start rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70 transition hover:bg-white/20"
						>
							View project
						</a>
					</article>
				))}
			</div>
		</motion.section>
	)
}

export default Work
