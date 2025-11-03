import { useRef } from 'react'
import { MeshDistortMaterial } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

interface HeroOrbProps {
  parallax?: number
}

export default function HeroOrb({ parallax = 0.05 }: HeroOrbProps) {
  const mesh = useRef<any>(null)
  const light = useRef<any>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (mesh.current) {
      mesh.current.rotation.y = t * 0.2
      mesh.current.rotation.x = 0.2 + Math.sin(t * 0.4) * 0.05
      const { x, y } = state.pointer
      mesh.current.position.x = x * parallax
      mesh.current.position.y = y * parallax
    }
    if (light.current) {
      light.current.position.x = Math.sin(t * 0.6) * 3
      light.current.position.y = Math.cos(t * 0.5) * 2
    }
  })

  return (
    <group>
      <ambientLight intensity={0.25} />
      <pointLight ref={light} intensity={1.2} color={0xffffff} position={[2, 2, 3]} />
      <mesh ref={mesh} position={[0, 0.2, 0]} castShadow>
        <icosahedronGeometry args={[1.6, 1]} />
        <MeshDistortMaterial
          color="#2e8b57"
          speed={1.2}
          distort={0.25}
          metalness={0.6}
          roughness={0.35}
          transparent
          opacity={0.9}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -1.2, 0]}>
        <ringGeometry args={[2.2, 2.8, 64]} />
        <meshBasicMaterial color="#c0c0c0" transparent opacity={0.12} />
      </mesh>
    </group>
  )
}
