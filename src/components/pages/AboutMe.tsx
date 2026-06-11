import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Cpu, Palette, Code, Rocket, ArrowBigRight } from 'lucide-react'
import PageLayout from '../ui/PageLayout'
import BorderGlow from '../ui/BorderGlow'
import ShinyText from '../ui/ShinyText'
import ScrollFloat from '../ui/ScrollFloat'
import ScrollVelocity from '../ui/ScrollVelocity'
import tetoBanner from '../../assets/teto_banner.png'

const workflowSteps = [
	{
		step: '01',
		title: 'Prototype',
		text: 'Prototype rapidly in Copilot, Lovable, and other AI tools ensuring a robust boilerplate.',
		icon: Cpu,
	},
	{
		step: '02',
		title: 'Design',
		text: 'Design responsive and clean UI structures for an aesthetically pleasing design.',
		icon: Palette,
	},
	{
		step: '03',
		title: 'Develop',
		text: 'Add in features and other components neccecary for launching the app, ensuring a feature-rich experience.',
		icon: Code,
	},
	{
		step: '04',
		title: 'Deploy',
		text: 'Optimize, test, and deploy the app to production, ensuring a smooth user experience.',
		icon: Rocket,
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

/** Shared glow palette — red shades matching the brand color */
const GLOW_COLORS = ['#ef4444', '#f87171', '#b91c1c']
const GLOW_HSL = '0 84 60' // red glow HSL

function AboutMe() {
	return (
		<PageLayout className="!mt-0 relative">
			<div className="mx-auto max-w-7xl px-4 pt-0 pb-20 text-primary">
				{/* Scroll Velocity Text Banner */}
				<div className="absolute top-0 left-[calc(50%-50vw)] w-screen overflow-hidden py-2 select-none z-10">
					<ScrollVelocity
						texts={[
							<span key="teto" className="text-red-500 font-black uppercase">Teto</span>,
							<span key="bumi" className="text-white font-black uppercase light-maja-text">MaJa</span>
						]}
						velocity={320}
						numCopies={40}
						className="text-3xl md:text-5xl tracking-[-0.04em] pr-6 md:pr-10"
						scrollerClassName="!text-3xl md:!text-5xl !leading-none md:!leading-none"
					/>
				</div>
				{/* Spacer to prevent overlap since the banner is absolutely positioned */}
				<div className="h-[46px] md:h-[64px] mb-8" />

				{/* Header Section */}
				<header className="mb-32 relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[500px]">
					{/* Left Column: Text & Badges */}
					<div className="lg:col-span-7 z-10 flex flex-col items-start text-left">


						<h1 className="mb-12 text-[clamp(2.8rem,7vw,6.5rem)] font-bold leading-[0.95] tracking-tighter">
							Professional<br />
							<span className="text-transparent outline-stroke">Ctrl c +</span><br />
							<span className="text-transparent outline-stroke">Ctrl v'er.</span>
						</h1>

						<div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end w-full">
							<p className="max-w-md text-lg text-primary/70">
								Hi, I&apos;m MaJa / Bumi - a developer building web and mobile applications with AI, Born and raised in Indonesia I work and strive toward building software that reaches users worldwide.
							</p>
							<div className="flex flex-col gap-4 text-sm font-semibold uppercase tracking-widest text-primary/80 sm:w-48 border-l border-primary/20 pl-6 shrink-0">
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
					</div>

					{/* Right Column: Large Bleeding Banner Image */}
					<div className="lg:col-span-5 w-full flex justify-center lg:justify-end lg:absolute lg:-right-[25vw] lg:top-[-40px] lg:w-[55vw] lg:h-[580px] pointer-events-none z-0">
						<div className="relative w-full h-full overflow-hidden lg:overflow-visible">
							<img
								src={tetoBanner}
								alt="Teto Banner"
								className="w-full h-full object-cover object-right opacity-90 lg:opacity-100 rounded-2xl lg:rounded-none"
							/>
						</div>
					</div>
				</header>

				{/* How I Work Section */}
				<section className="mb-32">
					<div className="mb-12 flex items-center justify-between border-b mx-[-1rem] border-primary/10 pb-4 md:mx-0">
						<h2 className="text-4xl font-bold italic tracking-tighter sm:text-5xl">How I work.</h2>
						<span className="text-xs uppercase tracking-widest text-primary/40 flex items-center gap-1.5">
							Principles & Process
							<span className="h-1.5 w-1.5 rounded-full bg-red-500 light-principles-dot inline-block" />
						</span>
					</div>

					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
						{workflowSteps.map((item) => (
							<BorderGlow
								key={item.step}
								className="h-full about-card"
								backgroundColor="var(--workflow-card-bg)"
								borderRadius={12}
								glowColor={GLOW_HSL}
								glowIntensity={0.6}
								glowRadius={30}
								colors={GLOW_COLORS}
								fillOpacity={0.3}
								coneSpread={20}
								edgeSensitivity={25}
							>
								<div className="group flex flex-col justify-between p-8 h-full relative overflow-hidden">
									<div>
										<div className="flex justify-between items-center mb-8">
											<span className="text-3xl font-bold text-white">{item.step}</span>
											<item.icon className="h-6 w-6 text-white/30 group-hover:text-white/80 group-hover:scale-110 transition-all duration-300" />
										</div>
										<h3 className="mb-4 text-xl font-bold text-white">{item.title}</h3>
										<p className="text-sm leading-relaxed text-white/60">{item.text}</p>
									</div>
									<div className="mt-12 text-white/20 group-hover:text-white/60 group-hover:translate-x-1.5 transition-all duration-300">
										<ArrowBigRight className="h-6 w-6" />
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
						<div className="absolute left-0 top-0 h-full w-[1px] bg-primary/10 md:left-1/2 md:-ml-px"></div>

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
										{/* Connector Line (Desktop Only) */}
										<div className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[1px] timeline-connector ${idx % 2 === 0 ? 'right-0 w-16' : 'left-0 w-16'}`} />

										{/* Dot */}
										<div className={`absolute top-6 h-3 w-3 rounded-full bg-white/40 light-timeline-dot ring-4 ring-black md:top-1/2 md:-translate-y-1/2 ${idx % 2 === 0 ? '-left-1.5 md:right-[-0.375rem] md:left-auto' : '-left-1.5 md:left-[-0.375rem]'} ${idx === 0 ? 'bg-white' : ''}`}></div>

										<BorderGlow
											backgroundColor="var(--milestone-card-bg)"
											borderRadius={12}
											glowColor={GLOW_HSL}
											glowIntensity={0.5}
											glowRadius={25}
											colors={GLOW_COLORS}
											fillOpacity={0.25}
											coneSpread={18}
											edgeSensitivity={30}
											className="about-card"
										>
											<div className="p-8">
												<span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-white/40">
													{milestone.year}
												</span>
												<h3 className="mb-2 text-xl font-bold text-white">{milestone.title}</h3>
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
					<ScrollFloat
						containerClassName="mb-6 font-bold leading-none tracking-tighter !my-0"
						textClassName="!text-[clamp(3rem,8vw,6rem)] !leading-none flex flex-col items-center"
						animationDuration={1}
						stagger={0.1}
					>
						<ShinyText text="LET'S BUILD" speed={3} color="var(--shiny-text-base)" shineColor="var(--shiny-text-shine)" className="block" />
						<ShinyText text="SOMETHING EPIC." speed={3} delay={0.2} color="var(--shiny-text-base)" shineColor="var(--shiny-text-shine)" className="block" />
					</ScrollFloat>
					<p className="mx-auto mb-12 max-w-sm text-sm text-primary/60">
						I'm currently available for select freelance opportunities and full-time architecture roles.
					</p>
					<Link
						to="/contact"
						className="group inline-flex items-center gap-3 border-b-2 border-white pb-2 text-sm font-bold uppercase tracking-widest transition-colors hover:text-white/60 hover:border-white/60 cta-link"
					>
						Say Hello
						<span className="transition-transform group-hover:translate-x-1">→</span>
					</Link>
				</section>
			</div>
		</PageLayout>
	)
}

export default AboutMe
