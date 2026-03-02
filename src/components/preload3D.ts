import { useGLTF } from '@react-three/drei'

import { TETOCAT_MODEL_URL, DRACO_DECODER_PATH } from '../constants/models'

/**
 * Warm the GLB cache during idle time so the 3D model is ready
 * when the user scrolls into view.  Uses the same Draco decoder
 * path as the main component.
 */
export const preloadTetocat = () => {
  useGLTF.preload(TETOCAT_MODEL_URL, DRACO_DECODER_PATH)
}
