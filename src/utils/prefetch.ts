import { useGLTF } from '@react-three/drei'
import { TETOCAT_MODEL_URL } from '../constants/models'

export const preloadTetocat = () => {
  useGLTF.preload(TETOCAT_MODEL_URL, true)
}

export const prefetchRoute = (path: string) => {
  switch (path) {
    case '/':
      preloadTetocat()
      import('../components/3DTeto')
      break
    case '/work':
      import('../components/pages/Work')
      break
    case '/about':
      import('../components/pages/AboutMe')
      break
    case '/contact':
      import('../components/pages/Contact')
      break
    case '/playground':
      import('../components/pages/Playground')
      break
    default:
      break
  }
}
