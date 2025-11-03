import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Preload } from '@react-three/drei'

interface SceneContainerProps {
  className?: string
  children: React.ReactNode
  fallback?: React.ReactNode
}

function supportsWebGL() {
  try {
    const canvas = document.createElement('canvas')
    return !!(
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')) &&
      window.WebGLRenderingContext
    )
  } catch {
    return false
  }
}

export default function SceneContainer({ className, children, fallback }: SceneContainerProps) {
  const [webgl, setWebgl] = useState(true)
  const prefersReduced = useMemo(() => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches, [])

  useEffect(() => {
    setWebgl(supportsWebGL())
  }, [])

  if (!webgl || prefersReduced) {
    return (
      <div className={className} aria-hidden>
        {fallback ?? (
          <div className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,#2e8b57_0%,#1a4d2e_45%,#c0c0c0_100%)] opacity-30" />
        )}
      </div>
    )
  }

  return (
    <div className={className} aria-hidden>
      <Canvas dpr={[1, 1.8]} gl={{ antialias: true }} camera={{ position: [0, 0, 6], fov: 45 }}>
        <Suspense fallback={null}>
          <Environment preset="city" background={false} />
          {children}
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  )
}
