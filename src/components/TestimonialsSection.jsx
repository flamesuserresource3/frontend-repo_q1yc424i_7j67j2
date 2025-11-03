import SceneContainer from './3d/SceneContainer'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function Ring() {
  const ref = useRef<any>(null)
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (ref.current) ref.current.rotation.z = t * 0.1
  })
  return (
    <mesh ref={ref}>
      <torusGeometry args={[3.2, 0.08, 16, 100]} />
      <meshStandardMaterial color="#2e8b57" metalness={0.8} roughness={0.3} />
    </mesh>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="relative py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Clients Say</h2>
          <p className="mt-4 text-slate-600">A few words from founders and creators we partner with.</p>
        </div>
      </div>
      <div className="relative mt-10">
        <SceneContainer className="pointer-events-none absolute inset-0 h-72">
          <Ring />
        </SceneContainer>
        <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            ['Evermark unlocked our go-to-market in weeks, not months.', 'Head of Growth, SaaSCo'],
            ['Their creative raised our paid performance by 3x.', 'Founder, DTC Brand'],
            ['Strategic, fast, and genuinely invested in outcomes.', 'CMO, Fintech'],
          ].map(([quote, author]) => (
            <blockquote key={author} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-slate-800">“{quote}”</p>
              <footer className="mt-3 text-sm text-slate-500">{author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
