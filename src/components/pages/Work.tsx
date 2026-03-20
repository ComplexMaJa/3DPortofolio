import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageLayout from '../ui/PageLayout'

// Screenshot imports – add your images here
import meekuScreenshot from '../../assets/meeku.png'
import portfolioScreenshot from '../../assets/portofolio.png'
import dnschanger from '../../assets/dns.png'

interface Project {
	title: string
	description: string
	year: string
	link: string
	tags: string[]
	/** Path to a screenshot image. Replace placeholder paths with real screenshots. */
	screenshot: string | null
}

const projects: Project[] = [
	{
		title: '3DPortofolio',
		description:
			'A personal portfolio website showcasing 3D projects and interactive web experiences using React. The site you are on right now!',
		year: '2025',
		link: 'https://maja.web.id/',
		tags: ['React','TypeScript', 'Vite', 'Tailwind'],
		// Import your screenshot above, then use: screenshot: myImportedVar,
		screenshot: portfolioScreenshot,
	},



	{
		title: 'Meeku',
		description:
			'Premium clothing brand website. Built to showcase my UI/UX design skills and ability to create visually appealing and user-friendly interfaces.',
		year: '2026',
		link: 'https://meeku.netlify.app',
		tags: ['React', 'TypeScript', 'Vite'],
		screenshot: meekuScreenshot,
	},

	{
		title: 'MaJa-s DNS Changer',
		description:
			'A user-friendly DNS changer application built with Electron, allowing users to easily switch between different DNS providers for improved internet performance and security.',
		year: '2026',
		link: 'https://github.com/ComplexMaJa/MaJa-s-DNS-Changer',
		tags: ['Electron','Vite', 'TypeScript'],
		screenshot: dnschanger,
	},
]

/* ------------------------------------------------------------------ */
/*  Placeholder thumbnail shown when no screenshot is provided        */
/* ------------------------------------------------------------------ */
function PlaceholderThumb({ title }: { title: string }) {
	return (
		<div className="flex h-full w-full items-center justify-center bg-primary/[0.04]">
			<div className="flex flex-col items-center gap-3 text-primary/25">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth={1.2}
					strokeLinecap="round"
					strokeLinejoin="round"
					className="h-10 w-10"
				>
					<rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
					<circle cx="8.5" cy="8.5" r="1.5" />
					<polyline points="21 15 16 10 5 21" />
				</svg>
				<span className="text-xs font-medium tracking-wider uppercase">{title}</span>
			</div>
		</div>
	)
}

/* ------------------------------------------------------------------ */
/*  Lightbox overlay                                                  */
/* ------------------------------------------------------------------ */
function Lightbox({
	src,
	alt,
	onClose,
}: {
	src: string | null
	alt: string
	onClose: () => void
}) {
	// Close on Escape
	useEffect(() => {
		function handleKey(e: KeyboardEvent) {
			if (e.key === 'Escape') onClose()
		}
		window.addEventListener('keydown', handleKey)
		return () => window.removeEventListener('keydown', handleKey)
	}, [onClose])

	return (
		<motion.div
			className="fixed inset-0 z-50 flex items-center justify-center bg-surface/80 backdrop-blur-md"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.25 }}
			onClick={onClose}
		>
			{/* Close button */}
			<button
				onClick={onClose}
				className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-primary/15 bg-primary/10 text-primary/60 transition hover:bg-primary/20 hover:text-primary"
				aria-label="Close preview"
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
					<line x1="18" y1="6" x2="6" y2="18" />
					<line x1="6" y1="6" x2="18" y2="18" />
				</svg>
			</button>

			<motion.div
				className="relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-2xl border border-primary/10 shadow-neon-soft"
				initial={{ scale: 0.85, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				exit={{ scale: 0.85, opacity: 0 }}
				transition={{ type: 'spring', stiffness: 300, damping: 26 }}
				onClick={(e) => e.stopPropagation()}
			>
				{src ? (
					<img
						src={src}
						alt={alt}
						className="block max-h-[85vh] w-auto object-contain"
					/>
				) : (
					<div className="flex h-[50vh] w-[70vw] max-w-3xl items-center justify-center bg-surface">
						<PlaceholderThumb title={alt} />
					</div>
				)}
			</motion.div>
		</motion.div>
	)
}

/* ------------------------------------------------------------------ */
/*  Project card                                                      */
/* ------------------------------------------------------------------ */
function ProjectCard({
	project,
	onPreview,
}: {
	project: Project
	onPreview: (project: Project) => void
}) {
	return (
		<article className="group flex flex-col overflow-hidden rounded-3xl border border-primary/10 bg-primary/5 transition hover:border-primary/20 hover:bg-primary/10">
			{/* Screenshot preview */}
			<button
				type="button"
				onClick={() => onPreview(project)}
				className="relative aspect-video w-full cursor-zoom-in overflow-hidden border-b border-primary/10"
				aria-label={`Preview screenshot of ${project.title}`}
			>
				{project.screenshot ? (
					<img
						src={project.screenshot}
						alt={`Screenshot of ${project.title}`}
						className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						loading="lazy"
					/>
				) : (
					<PlaceholderThumb title={project.title} />
				)}
				{/* Hover overlay */}
				<div className="absolute inset-0 flex items-center justify-center bg-surface/0 transition-colors duration-300 group-hover:bg-surface/40">
					<span className="flex items-center gap-2 rounded-full border border-primary/20 bg-surface/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary/70 opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
							<polyline points="15 3 21 3 21 9" />
							<line x1="14" y1="10" x2="21" y2="3" />
						</svg>
						Enlarge
					</span>
				</div>
			</button>

			{/* Card body */}
			<div className="flex flex-1 flex-col gap-4 p-8">
				<div className="flex items-center justify-between">
					<span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/35">
						{project.year}
					</span>
					<div className="flex flex-wrap gap-2">
						{project.tags.map((tag) => (
							<span
								key={tag}
								className="rounded-full border border-primary/10 bg-primary/[0.06] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-primary/40"
							>
								{tag}
							</span>
						))}
					</div>
				</div>

				<h2 className="text-2xl font-semibold text-primary group-hover:text-primary/90">
					{project.title}
				</h2>
				<p className="text-sm leading-relaxed text-primary/60">{project.description}</p>

				<a
					href={project.link}
					target={project.link.startsWith('http') ? '_blank' : undefined}
					rel={project.link.startsWith('http') ? 'noreferrer noopener' : undefined}
					className="mt-auto self-start rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary/70 transition hover:bg-primary/20"
				>
					View project
				</a>
			</div>
		</article>
	)
}

/* ------------------------------------------------------------------ */
/*  Work page                                                         */
/* ------------------------------------------------------------------ */
function Work() {
	const [lightboxProject, setLightboxProject] = useState<Project | null>(null)

	const openLightbox = useCallback((project: Project) => {
		setLightboxProject(project)
	}, [])

	const closeLightbox = useCallback(() => {
		setLightboxProject(null)
	}, [])

	// Lock body scroll when lightbox is open
	useEffect(() => {
		if (lightboxProject) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}
		return () => {
			document.body.style.overflow = ''
		}
	}, [lightboxProject])

	return (
		<PageLayout>
			<header className="space-y-5">
				<p className="text-xs uppercase tracking-[0.4em] text-primary/40">Selected Work</p>
				<h1 className="text-3xl font-semibold text-primary sm:text-4xl">
					Projects i've worked on
				</h1>
				<p className="max-w-2xl text-base text-primary/60 sm:text-lg">
					A lists of all the projects i have worked on over my 2+ years of being a
					developer.
				</p>
			</header>

			<div className="grid gap-6 md:grid-cols-2">
				{projects.map((project) => (
					<ProjectCard
						key={project.title}
						project={project}
						onPreview={openLightbox}
					/>
				))}
			</div>

			{/* Lightbox */}
			<AnimatePresence>
				{lightboxProject && (
					<Lightbox
						src={lightboxProject.screenshot}
						alt={lightboxProject.title}
						onClose={closeLightbox}
					/>
				)}
			</AnimatePresence>
		</PageLayout>
	)
}

export default Work
