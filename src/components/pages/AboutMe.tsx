import { Fragment } from 'react'
import PageLayout from '../ui/PageLayout'

const workflowSteps = [
	{
		step: 1,
		text: 'Prototype rapidly in Copilot, Lovable, and other AI tools ensuring a robust boilerplate.',
	},
	{
		step: 2,
		text: 'Design responsive and clean UI structures for an aesthetically pleasing design.',
	},
	{
		step: 3,
		text: 'Add in features and other components neccecary for launching the app, ensuring a feature-rich experience.',
	},
	{
		step: 4,
		text: 'Optimize, test, and deploy the app to production, ensuring a smooth user experience.',
	},
]

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
		<PageLayout>
			<header className="space-y-5">
				<p className="text-xs uppercase tracking-[0.4em] text-primary/40">About</p>
				<h1 className="text-3xl font-semibold text-primary sm:text-4xl">Professional Ctrl c + Ctrl v'er</h1>
						<p className="max-w-3xl text-base text-primary/60 sm:text-lg">
							Hi, I&apos;m MaJa - a developer building web and mobile applications with AI, Born and raised in Indonesia I work and strive toward building software that reaches users worldwide.
				</p>
			</header>

			<section className="relative grid gap-8 overflow-hidden rounded-3xl border border-primary/10 bg-primary/5 p-8 shadow-neon-soft backdrop-blur">
				{/* Decorative background glow */}
				<div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-3/4 -translate-x-1/2 rounded-full bg-primary/[0.06] blur-3xl" />

				<h2 className="text-xl font-semibold text-primary">How I work</h2>
				<ol className="relative flex flex-col items-center gap-6 text-sm text-primary/60 lg:flex-row lg:items-center">
					{workflowSteps.map((item, i) => (
						<Fragment key={item.step}>
							<li className="group relative flex w-full min-w-0 flex-1 gap-4 rounded-2xl border border-primary/10 bg-surface/40 p-5 transition-all duration-300 hover:border-primary/25 hover:bg-surface/60 hover:shadow-neon-hover lg:flex-col lg:gap-3">
								{/* Step number badge */}
								<span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-xs font-bold text-primary/70 transition-colors duration-300 group-hover:border-primary/40 group-hover:bg-primary/20 group-hover:text-primary">
									{item.step}
								</span>
								<p className="leading-relaxed">{item.text}</p>
							</li>
							{i < workflowSteps.length - 1 && (
								<li className="flex shrink-0 items-center justify-center" aria-hidden="true">
									{/* Right arrow – visible on desktop */}
									<span className="hidden h-9 w-9 items-center justify-center rounded-full border border-primary/10 bg-primary/5 lg:flex">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2.5}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-4 w-4 text-primary/40"
										>
											<path d="M9 5l7 7-7 7" />
										</svg>
									</span>
									{/* Down arrow – visible on mobile */}
									<span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/10 bg-primary/5 lg:hidden">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2.5}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-4 w-4 text-primary/40"
										>
											<path d="M5 9l7 7 7-7" />
										</svg>
									</span>
								</li>
							)}
						</Fragment>
					))}
				</ol>
			</section>

			<section className="space-y-4">
				<h2 className="text-xl font-semibold text-primary">Milestones</h2>
				<ul className="space-y-3 text-sm text-primary/60">
					{milestones.map(milestone => (
						<li key={milestone.year} className="flex gap-4 rounded-2xl border border-primary/10 bg-primary/5 p-4">
							<span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/45">{milestone.year}</span>
							<p className="text-sm text-primary/70">{milestone.label}</p>
						</li>
					))}
				</ul>
			</section>
		</PageLayout>
	)
}

export default AboutMe
