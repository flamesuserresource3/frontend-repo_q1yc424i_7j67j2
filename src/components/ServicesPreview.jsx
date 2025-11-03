import { Rocket, Megaphone, Camera, Users, PenTool, BarChart3 } from 'lucide-react'

const services = [
  {
    icon: Rocket,
    title: 'Brand Strategy',
    desc: 'Positioning, messaging, and identity systems that stand out and scale.',
  },
  {
    icon: BarChart3,
    title: 'Digital Marketing',
    desc: 'Full-funnel acquisition with paid, SEO, CRO, and analytics.',
  },
  {
    icon: Users,
    title: 'Social Media',
    desc: 'Always-on content engines and community-led growth.',
  },
  {
    icon: Camera,
    title: 'Content Production',
    desc: 'Agile photo, video, and motion for every channel and moment.',
  },
  {
    icon: Megaphone,
    title: 'Influencer Partnerships',
    desc: 'Creator collaborations that feel authentic—and perform.',
  },
  {
    icon: PenTool,
    title: 'Advertising Campaigns',
    desc: 'Big ideas with disciplined execution across platforms.',
  },
]

export default function ServicesPreview() {
  return (
    <section id="services" className="relative py-20 sm:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">What We Do</h2>
          <p className="mt-3 text-slate-600">An integrated offering designed to ship results—fast.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600/10 text-emerald-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-1 text-sm text-slate-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a href="#contact" className="inline-flex items-center rounded-md bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-emerald-700">Schedule a Call</a>
        </div>
      </div>
    </section>
  )
}
