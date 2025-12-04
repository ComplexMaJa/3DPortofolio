import { useGLTF } from '@react-three/drei'

const modelUrl = `${import.meta.env.BASE_URL}tetocat.glb`

export const preloadTetocat = () => {
  useGLTF.preload(modelUrl, true)
}
