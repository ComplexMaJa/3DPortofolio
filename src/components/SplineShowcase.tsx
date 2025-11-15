import { Component, Suspense, useEffect, useLayoutEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, Environment, Html, useGLTF } from '@react-three/drei'
import { Box3, MathUtils, Mesh, Vector3, type Group, type Object3D, type WebGLRenderer } from 'three'

const modelUrl = `${import.meta.env.BASE_URL}tetocat.glb`

type FrameState = {
  viewport: {
    height: number
  }
}

function LoadingOverlay() {
  return (
    <Html center>
      <div className="bg-black/70 px-6 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
        Loading 3D preview…
      </div>
    </Html>
  )
}

function TetocatAvatar() {
  const group = useRef<Group>(null)
  const pointer = useRef({ x: 0, y: 0 })
  const { scene } = useGLTF(modelUrl, true)
  const cloned = useMemo(() => scene.clone(true), [scene])

  const modelHeight = useMemo(() => {
    const box = new Box3().setFromObject(cloned)
    const size = new Vector3()
    box.getSize(size)
    return size.y || 1
  }, [cloned])

  useLayoutEffect(() => {
    cloned.traverse((child: Object3D) => {
      if (child instanceof Mesh) {
        child.castShadow = true
        child.receiveShadow = true
      }
    })
  }, [cloned])

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      pointer.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: (event.clientY / window.innerHeight) * 2 - 1,
      }
    }

    window.addEventListener('pointermove', handlePointerMove)
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  useFrame((state: FrameState) => {
    if (!group.current) return
    const targetX = MathUtils.clamp(pointer.current.x, -1, 1)
    const targetY = MathUtils.clamp(pointer.current.y, -1, 1)

    const available = state.viewport.height * 0.92
    const desiredScale = MathUtils.clamp(available / modelHeight, 0.85, 1.6)
    const nextScale = MathUtils.lerp(group.current.scale.x, desiredScale, 0.06)
    group.current.scale.setScalar(nextScale)

    group.current.rotation.y = MathUtils.lerp(group.current.rotation.y, targetX * 0.65, 0.08)
    group.current.rotation.x = MathUtils.lerp(group.current.rotation.x, -targetY * 0.4 + 0.22, 0.08)

    const baseX = 0.65
    const baseY = -0.38
    group.current.position.x = MathUtils.lerp(group.current.position.x, baseX + targetX * 0.14, 0.08)
    group.current.position.y = MathUtils.lerp(group.current.position.y, baseY + targetY * 0.1, 0.08)
  })

  return (
    <group ref={group} position={[0.65, -0.38, 0]}>
      <primitive object={cloned} dispose={null} />
    </group>
  )
}

function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[4, 6, 6]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={14}
      />
      <spotLight
        position={[-4, 5, 2]}
        intensity={0.9}
        angle={0.55}
        penumbra={0.4}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <ContactShadows position={[0, -0.55, 0]} opacity={0.35} scale={4.5} blur={2.8} far={3} />
      <Environment preset="city" />
    </>
  )
}

function ErrorOverlay({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-black/60 text-center text-sm text-white/70">
      <span>3D preview offline.</span>
      <button
        className="px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:text-white"
        onClick={onRetry}
        type="button"
      >
        Retry
      </button>
    </div>
  )
}

class PreviewErrorBoundary extends Component<{ onReset: () => void; children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  override componentDidCatch(error: unknown) {
    console.error('3D preview failed to load', error)
  }

  private handleRetry = () => {
    this.setState({ hasError: false })
    this.props.onReset()
  }

  override render() {
    if (this.state.hasError) {
      return <ErrorOverlay onRetry={this.handleRetry} />
    }

    return this.props.children
  }
}

function SplineShowcase() {
  const [attempt, setAttempt] = useState(0)

  return (
    <section className="relative flex flex-1 items-stretch overflow-visible">
      <div className="relative flex w-full min-h-[clamp(420px,70vh,900px)]">
        <PreviewErrorBoundary onReset={() => setAttempt((value) => value + 1)} key={attempt}>
          <Canvas
            className="absolute inset-y-0 right-0 h-full w-[min(55vw,640px)]"
            camera={{ position: [0.4, 1.2, 4.2], fov: 32 }}
            dpr={[1, 2]}
            shadows
            onCreated={({ gl }: { gl: WebGLRenderer }) => {
              gl.setClearColor('#000000', 0)
            }}
          >
            <Suspense fallback={<LoadingOverlay />}>
              <TetocatAvatar />
              <SceneLights />
            </Suspense>
          </Canvas>
        </PreviewErrorBoundary>
      </div>

      <div className="pointer-events-none absolute bottom-6 right-6 flex flex-col items-end gap-2 text-xs uppercase tracking-[0.25em] text-white/60">
        <span className="text-[0.65rem] text-white/80">Signature Front-End &amp; 3D Web</span>
        <span className="text-white/50">Craft · Integrate · Iterate · 2025</span>
      </div>
    </section>
  )
}

useGLTF.preload(modelUrl, true)

export default SplineShowcase
