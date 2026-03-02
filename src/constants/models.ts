/**
 * Shared 3D model URLs used across the application.
 */
export const TETOCAT_MODEL_URL = `${import.meta.env.BASE_URL}tetocat.glb`

/**
 * CDN-hosted Draco decoder.  drei's useGLTF accepts either `true`
 * (uses its own bundled decoder) or a string path to the decoder
 * directory.  Using the Google-hosted CDN prevents the decoder WASM
 * from inflating our own bundle.
 */
export const DRACO_DECODER_PATH = 'https://www.gstatic.com/draco/versioned/decoders/1.5.7/'
