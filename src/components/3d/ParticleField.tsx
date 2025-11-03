import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

interface ParticleFieldProps {
  paused?: boolean
}

export default function ParticleField({ paused = false }: ParticleFieldProps) {
  const points = useRef<any>(null)
  const positions = useMemo(() => {
    const count = 600
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 10
      arr[i * 3 + 1] = Math.random() * 6 - 2
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6
    }
    return arr
  }, [])

  useFrame((_, delta) => {
    if (paused || !points.current) return
    const pos = points.current.geometry.attributes.position
    for (let i = 1; i < pos.array.length; i += 3) {
      pos.array[i] += delta * 0.2
      if (pos.array[i] > 3) pos.array[i] = -3
    }
    pos.needsUpdate = true
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#c0c0c0" sizeAttenuation transparent opacity={0.55} />
    </points>
  )
}
