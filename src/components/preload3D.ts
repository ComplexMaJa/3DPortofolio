import { useGLTF } from '@react-three/drei'

import { TETOCAT_MODEL_URL } from '../constants/models'

export const preloadTetocat = () => {
  useGLTF.preload(TETOCAT_MODEL_URL, true)
}
