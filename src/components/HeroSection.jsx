import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle } from 'lucide-react'

export default function HeroSection() {
  return (
    <section id="home" className="relative isolate">
      {/* Animated gradient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -inset-[20%] bg-[radial-gradient(60%_60%_at_50%_40%,rgba(46,139,87,0.25)_0%,rgba(26,77,46,0.15)_35%,transparent_70%)]" />
        <div className="absolute inset-0 opacity-60" style={{
          background: 'conic-gradient(from 0deg at 50% 50%, #2e8b57, #1a4d2e, #c0c0c0, #2e8b57)'
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-600 shadow-sm">
            Trusted by Founders & Creators
            <span className="inline-flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#2e8b57]" />
              <span className="text-slate-500">VentureLab</span>
              <span className="text-slate-500">CreatorCo</span>
              <span className="text-slate-500">GrowthHub</span>
            </span>
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            Transform Your Vision Into Market Leadership
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-700 max-w-2xl">
            Strategic marketing solutions that elevate brands and deliver measurable growth through creative innovation.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#2e8b57] px-6 py-3 text-base font-medium text-white shadow-sm transition hover:bg-[#256f46] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2e8b57]"
            >
              Schedule Your Discovery Call
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white/80 px-6 py-3 text-base font-medium text-slate-900 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2e8b57]"
            >
              <PlayCircle className="h-5 w-5 text-[#2e8b57]" aria-hidden="true" />
              See Our Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
