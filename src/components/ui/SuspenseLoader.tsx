import type { ReactNode } from 'react'
import { Suspense } from 'react'

interface SuspenseLoaderProps {
	children: ReactNode
	className?: string
}

/**
 * Shared suspense wrapper with a fast, non-blocking loading fallback.
 *
 * The fallback renders instantly so the user always sees immediate
 * visual feedback when navigating.  Heavy 3D / lazy chunks load
 * behind it.  The subtle pulse animation keeps the UI feeling alive.
 */
function SuspenseLoader({ children, className = 'mt-20' }: SuspenseLoaderProps) {
	return (
		<Suspense
			fallback={
				<div
					className={`flex items-center justify-center flex-1 ${className}`}
					role="status"
					aria-live="polite"
				>
					<div className="flex flex-col items-center gap-3">
						{/* Spinner ring */}
						<div className="h-6 w-6 animate-spin rounded-full border-2 border-primary/20 border-t-primary/70" />
						<span className="text-xs font-medium uppercase tracking-[0.35em] text-primary/40 animate-pulse">
							Loading…
						</span>
					</div>
				</div>
			}
		>
			{children}
		</Suspense>
	)
}

export default SuspenseLoader
