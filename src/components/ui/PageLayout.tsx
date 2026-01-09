import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

import { pageMotion, pageTransition } from '../../constants/animation'

interface PageLayoutProps {
	children: ReactNode
	className?: string
}

/**
 * Shared page layout wrapper that provides consistent page transition animations.
 * All page components should use this wrapper for uniform enter/exit animations.
 */
function PageLayout({ children, className = '' }: PageLayoutProps) {
	return (
		<motion.section
			className={`mt-20 flex flex-1 flex-col gap-12 ${className}`}
			initial={pageMotion.initial}
			animate={pageMotion.animate}
			exit={pageMotion.exit}
			transition={pageTransition}
		>
			{children}
		</motion.section>
	)
}

export default PageLayout
