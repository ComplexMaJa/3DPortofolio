import type { ReactNode } from 'react'
import { Suspense } from 'react'

interface SuspenseLoaderProps {
	children: ReactNode
	className?: string
}

/**
 * Shared suspense wrapper with consistent loading fallback styling.
 * Use this to wrap lazy-loaded page components.
 */
function SuspenseLoader({ children, className = 'mt-20' }: SuspenseLoaderProps) {
	return (
		<Suspense
			fallback={
				<div className={`flex items-center justify-center flex-1 text-sm text-white/50 ${className}`}>
					<div className="h-6 w-6 animate-spin rounded-full border-2 border-white/20 border-t-white" />
				</div>
			}
		>
			{children}
		</Suspense>
	)
}

export default SuspenseLoader
