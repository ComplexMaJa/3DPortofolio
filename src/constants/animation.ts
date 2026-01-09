/**
 * Shared page transition animation configuration.
 * Used across all page components for consistent motion.
 */
export const pageMotion = {
	initial: { opacity: 0, y: 32 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -24 },
}

export const pageTransition = { duration: 0.55, ease: [0.22, 0.61, 0.36, 1] as const }
