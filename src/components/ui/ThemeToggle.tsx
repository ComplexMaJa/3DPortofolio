import { memo } from 'react'
import { AnimatePresence, motion } from 'motion/react'

import useTheme from '../../hooks/useTheme'

const ThemeToggle = memo(function ThemeToggle() {
	const { theme, toggleTheme } = useTheme()
	const isLight = theme === 'light'

	return (
		<button
			onClick={toggleTheme}
			aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
			title={`Switch to ${isLight ? 'dark' : 'light'} mode`}
			className="grid h-9 w-9 place-content-center rounded-full border border-primary/20 bg-primary/5 text-primary/60 transition-colors duration-300 hover:bg-primary/15 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/50"
		>
			<AnimatePresence mode="wait" initial={false}>
				<motion.span
					key={theme}
					initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
					animate={{ opacity: 1, rotate: 0, scale: 1 }}
					exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
					transition={{ duration: 0.2 }}
					className="flex items-center justify-center"
				>
					{isLight ? (
						<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 006.002-2.998z"
							/>
						</svg>
					) : (
						<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
							/>
						</svg>
					)}
				</motion.span>
			</AnimatePresence>
		</button>
	)
})

export default ThemeToggle
