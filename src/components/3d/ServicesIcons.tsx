import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function ServicesIcons() {
  const g1 = useRef<any>(null)
  const g2 = useRef<any>(null)
  const g3 = useRef<any>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (g1.current) g1.current.rotation.y = t * 0.2
    if (g2.current) g2.current.rotation.y = -t * 0.18
    if (g3.current) g3.current.rotation.y = t * 0.22
  })

  return (
    <group position={[0, 0.2, 0]}>
      <mesh ref={g1} position={[-2.2, 0.2, -1]}>
        <torusKnotGeometry args={[0.5, 0.14, 90, 12]} />
        <meshStandardMaterial color="#2e8b57" metalness={0.7} roughness={0.35} />
      </mesh>
      <mesh ref={g2} position={[0, -0.1, -1.4]}>
        <dodecahedronGeometry args={[0.7, 0]} />
        <meshStandardMaterial color="#1a4d2e" metalness={0.6} roughness={0.4} />
      </mesh>
      <mesh ref={g3} position={[2.2, 0.3, -1]}>
        <torusGeometry args={[0.7, 0.18, 16, 100]} />
        <meshStandardMaterial color="#c0c0c0" metalness={0.85} roughness={0.2} />
      </mesh>
    </group>
  )
}
