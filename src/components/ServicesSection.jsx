import { Rocket, Target, BarChart3, Users } from 'lucide-react'
import ServiceCard from './ServiceCard'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SceneContainer from './3d/SceneContainer'
import ServicesIcons from './3d/ServicesIcons'

gsap.registerPlugin(ScrollTrigger)

export default function ServicesSection() {
  const services = [
    {
      icon: Rocket,
      title: 'Launch & Growth Strategy',
      description:
        'Go-to-market roadmaps, positioning, and full-funnel strategies designed to accelerate traction and revenue.',
    },
    {
      icon: Target,
      title: 'Performance Marketing',
      description:
        'Paid social, search, and conversion optimization focused on measurable outcomes and scalable ROAS.',
    },
    {
      icon: BarChart3,
      title: 'Content & Social',
      description:
        'Editorial calendars, creator partnerships, and platform-native content that builds audience and trust.',
    },
    {
      icon: Users,
      title: 'Brand & Community',
      description:
        'Identity systems, messaging, and community-led growth programs that foster loyal advocates.',
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-card', {
        y: 24,
        rotateX: 6,
        opacity: 0,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#services',
          start: 'top 70%'
        }
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="services" className="relative py-20 sm:py-28 bg-white">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <SceneContainer className="absolute inset-0">
          <ServicesIcons />
        </SceneContainer>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Services built for impact
          </h2>
          <p className="mt-4 text-slate-600">
            End-to-end solutions that transform early momentum into sustainable, measurable growth.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <div key={s.title} className="service-card will-change-transform">
              <ServiceCard icon={s.icon} title={s.title} description={s.description} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
