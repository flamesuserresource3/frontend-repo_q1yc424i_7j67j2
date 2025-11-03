import Spline from '@splinetool/react-spline'

export default function HeroSpline() {
  return (
    <section id="home" className="relative min-h-[90vh] sm:min-h-screen flex items-center overflow-hidden">
      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay that does not block pointer events */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-white/0" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-md">
            Growth. Momentum. Evermark.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-100/90">
            We design marketing systems that compound—brand, performance, and content working together to scale your reach.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center rounded-md bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-emerald-600/30 hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500">
              Schedule a Call
            </a>
            <a href="#services" className="inline-flex items-center rounded-md bg-white/10 backdrop-blur px-5 py-3 text-sm font-medium text-white ring-1 ring-white/40 hover:bg-white/20">
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
