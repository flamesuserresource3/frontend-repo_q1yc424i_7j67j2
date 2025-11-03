import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Html } from '@react-three/drei'

interface ItemProps {
  color: string
  index: number
}

function Item({ color, index }: ItemProps) {
  const ref = useRef<any>(null)
  const [hovered, setHovered] = useState(false)
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (ref.current) {
      ref.current.rotation.y = Math.sin(t * 0.2 + index) * 0.05
      ref.current.scale.x = ref.current.scale.y = hovered ? 1.06 : 1
    }
  })
  return (
    <Float speed={1} floatIntensity={0.6} rotationIntensity={0.1}>
      <mesh
        ref={ref}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        position={[Math.sin(index) * 3.2, Math.cos(index * 1.2) * 0.6, 0]}
      >
        <planeGeometry args={[2.2, 1.4, 1, 1]} />
        <meshStandardMaterial color={color} metalness={0.4} roughness={0.6} />
      </mesh>
    </Float>
  )
}

export default function PortfolioCarousel() {
  const group = useRef<any>(null)
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (group.current) group.current.rotation.y = Math.sin(t * 0.1) * 0.2
  })

  const colors = ['#c0c0c0', '#2e8b57', '#1a4d2e', '#9fb6a3', '#b8c7bf']

  return (
    <group ref={group}>
      {colors.map((c, i) => (
        <Item key={c + i} color={c} index={i} />
      ))}
    </group>
  )
}
