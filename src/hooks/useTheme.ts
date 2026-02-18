import { useState, useCallback, useEffect } from 'react'

type Theme = 'dark' | 'light'

const STORAGE_KEY = 'theme-preference'

function getInitialTheme(): Theme {
	if (typeof window === 'undefined') return 'dark'
	const stored = localStorage.getItem(STORAGE_KEY) as Theme | null
	if (stored === 'dark' || stored === 'light') return stored
	return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function applyTheme(theme: Theme) {
	document.documentElement.classList.toggle('light', theme === 'light')
}

export default function useTheme() {
	const [theme, setTheme] = useState<Theme>(getInitialTheme)

	const toggleTheme = useCallback(() => {
		const root = document.documentElement
		root.classList.add('theme-transition')

		setTheme(prev => {
			const next: Theme = prev === 'dark' ? 'light' : 'dark'
			localStorage.setItem(STORAGE_KEY, next)
			applyTheme(next)
			return next
		})

		setTimeout(() => root.classList.remove('theme-transition'), 350)
	}, [])

	// Apply theme on mount
	useEffect(() => {
		applyTheme(theme)
	}, [theme])

	// Listen for system preference changes (only when user hasn't set a preference)
	useEffect(() => {
		const mql = window.matchMedia('(prefers-color-scheme: light)')
		const handler = (e: MediaQueryListEvent) => {
			if (!localStorage.getItem(STORAGE_KEY)) {
				const sys: Theme = e.matches ? 'light' : 'dark'
				setTheme(sys)
			}
		}
		mql.addEventListener('change', handler)
		return () => mql.removeEventListener('change', handler)
	}, [])

	return { theme, toggleTheme } as const
}
