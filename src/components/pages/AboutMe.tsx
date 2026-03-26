import { motion } from 'framer-motion'
import PageLayout from '../ui/PageLayout'
import BorderGlow from '../ui/BorderGlow'

const workflowSteps = [
	{
		step: '01',
		title: 'Prototype',
		text: 'Prototype rapidly in Copilot, Lovable, and other AI tools ensuring a robust boilerplate.',
	},
	{
		step: '02',
		title: 'Design',
		text: 'Design responsive and clean UI structures for an aesthetically pleasing design.',
	},
	{
		step: '03',
		title: 'Develop',
		text: 'Add in features and other components neccecary for launching the app, ensuring a feature-rich experience.',
	},
	{
		step: '04',
		title: 'Deploy',
		text: 'Optimize, test, and deploy the app to production, ensuring a smooth user experience.',
	},
]

const milestones = [

	{
		year: '2008 - 2014',
		title: 'Respawn',
		label: 'I was spawned in this world, blessing this world with my presence.',
	},

	{
		year: '2014 - 2024',
		title: 'The Spark',
		label: 'Touched my first computer and was immedietly hooked on it, playing games and watching YouTube videos.',
	},

	{
		year: '2024 - PRESENT',
		title: 'Future Developer',
		label: 'Started learning web development and fell in love with creating interactive experiences on the web.',
	},
]

/** Shared glow palette — monochromatic white/silver to match the site's dark aesthetic */
const GLOW_COLORS = ['#ffffff', '#a0a0a0', '#666666']
const GLOW_HSL = '0 0 90' // neutral white glow

function AboutMe() {
	return (
		<PageLayout>
			<div className="mx-auto max-w-6xl px-4 py-20 text-white">
				{/* Header Section */}
				<header className="mb-32">
					<div className="mb-8 inline-block rounded border border-white/20 px-3 py-1 text-xs uppercase tracking-widest text-white/70">
						Role: Developer
					</div>

					<h1 className="mb-12 text-[clamp(3rem,8vw,8rem)] font-bold leading-[0.9] tracking-tighter">
						Professional<br />
						<span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>Ctrl c +</span><br />
						<span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>Ctrl v'er.</span>
					</h1>

					<div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
						<p className="max-w-md text-lg text-white/70">
							Hi, I&apos;m MaJa - a developer building web and mobile applications with AI, Born and raised in Indonesia I work and strive toward building software that reaches users worldwide.
						</p>
						<div className="flex flex-col gap-4 text-sm font-semibold uppercase tracking-widest text-white/80 md:w-48 border-l border-white/20 pl-6">
							<div className="flex items-center gap-3">
								<span className="text-xl">🛠</span>
								<span>Engineering First</span>
							</div>
							<div className="flex items-center gap-3">
								<span className="text-xl">⚡</span>
								<span>Clean Architecture</span>
							</div>
						</div>
					</div>
				</header>

				{/* How I Work Section */}
				<section className="mb-32">
					<div className="mb-12 flex items-center justify-between border-b mx-[-1rem] border-white/10 pb-4 md:mx-0">
						<h2 className="text-4xl font-bold italic tracking-tighter sm:text-5xl">How I work.</h2>
						<span className="text-xs uppercase tracking-widest text-white/40">Principles & Process</span>
					</div>

					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
						{workflowSteps.map((item) => (
							<BorderGlow
								key={item.step}
								className="h-full"
								backgroundColor="#0a0a0a"
								borderRadius={12}
								glowColor={GLOW_HSL}
								glowIntensity={0.6}
								glowRadius={30}
								colors={GLOW_COLORS}
								fillOpacity={0.3}
								coneSpread={20}
								edgeSensitivity={25}
							>
								<div className="group flex flex-col justify-between p-8 h-full">
									<div>
										<span className="mb-8 block text-3xl font-bold text-white/20">{item.step}</span>
										<h3 className="mb-4 text-xl font-bold">{item.title}</h3>
										<p className="text-sm leading-relaxed text-white/60">{item.text}</p>
									</div>
									<div className="mt-12 text-2xl text-white/20 group-hover:text-white/60 transition-colors">
										✦
									</div>
								</div>
							</BorderGlow>
						))}
					</div>
				</section>

				{/* Milestones Section */}
				<section className="mb-32">
					<h2 className="mb-16 text-4xl font-bold tracking-tighter sm:text-5xl">Milestones.</h2>

					<div className="relative mx-auto max-w-4xl">
						{/* Vertical Line */}
						<div className="absolute left-0 top-0 h-full w-[1px] bg-white/10 md:left-1/2 md:-ml-px"></div>

						<div className="space-y-24">
							{milestones.map((milestone, idx) => (
								<motion.div
									key={idx}
									initial={{ opacity: 0, y: 60, filter: "blur(4px)" }}
									whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
									viewport={{ once: true, margin: "-15%" }}
									transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
									className={`relative flex items-center md:justify-between grid grid-cols-1 md:grid-cols-2 gap-8 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}
								>
									<div className={`hidden md:block ${idx % 2 === 0 ? 'order-2' : 'order-1'}`}></div>

									<div className={`relative ${idx % 2 === 0 ? 'order-1 md:pr-16 md:ml-auto md:w-full md:max-w-md' : 'order-2 md:pl-16 md:mr-auto md:w-full md:max-w-md'} pl-8 md:pl-0`}>
										{/* Dot */}
										<div className={`absolute top-6 h-3 w-3 rounded-full bg-white/40 ring-4 ring-black md:-top-1 ${idx % 2 === 0 ? '-left-1.5 md:right-[-0.3rem] md:left-auto' : '-left-1.5 md:-left-[-0.3rem]'} ${idx === 0 ? 'bg-white' : ''}`}></div>

										<BorderGlow
											backgroundColor="#060606"
											borderRadius={12}
											glowColor={GLOW_HSL}
											glowIntensity={0.5}
											glowRadius={25}
											colors={GLOW_COLORS}
											fillOpacity={0.25}
											coneSpread={18}
											edgeSensitivity={30}
										>
											<div className="p-8">
												<span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-white/40">
													{milestone.year}
												</span>
												<h3 className="mb-2 text-xl font-bold">{milestone.title}</h3>
												<p className="text-sm leading-relaxed text-white/60">{milestone.label}</p>
											</div>
										</BorderGlow>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-32 text-center">
					<h2 className="mb-6 text-[clamp(3rem,8vw,6rem)] font-bold leading-none tracking-tighter">
						LET'S BUILD<br />SOMETHING EPIC.
					</h2>
					<p className="mx-auto mb-12 max-w-sm text-sm text-white/60">
						I'm currently available for select freelance opportunities and full-time architecture roles.
					</p>
					<a
						href="/contact"
						className="group inline-flex items-center gap-3 border-b-2 border-white pb-2 text-sm font-bold uppercase tracking-widest transition-colors hover:text-white/60 hover:border-white/60"
					>
						Say Hello
						<span className="transition-transform group-hover:translate-x-1">→</span>
					</a>
				</section>
			</div>
		</PageLayout>
	)
}

export default AboutMe
