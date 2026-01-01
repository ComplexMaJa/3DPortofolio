import { useEffect, useState } from 'react'

const MOBILE_USER_AGENT = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i

function computeIsMobile(breakpoint: number) {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return false

  const isMobileUA = MOBILE_USER_AGENT.test(navigator.userAgent)
  const matchesViewport = window.matchMedia(`(max-width: ${breakpoint}px)`).matches

  return isMobileUA || matchesViewport
}

function useIsMobileDevice(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(() => computeIsMobile(breakpoint))

  useEffect(() => {
    const handleChange = () => setIsMobile(computeIsMobile(breakpoint))
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`)

    handleChange()
    mediaQuery.addEventListener('change', handleChange)
    window.addEventListener('resize', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
      window.removeEventListener('resize', handleChange)
    }
  }, [breakpoint])

  return isMobile
}

export default useIsMobileDevice
