import { Rocket, Target, BarChart3, Users } from 'lucide-react'
import ServiceCard from './ServiceCard'

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

  return (
    <section id="services" className="relative py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
            <ServiceCard key={s.title} icon={s.icon} title={s.title} description={s.description} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
