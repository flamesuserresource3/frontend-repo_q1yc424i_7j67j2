import SceneContainer from './3d/SceneContainer'
import PortfolioCarousel from './3d/PortfolioCarousel'

export default function PortfolioSection() {
  return (
    <section id="work" className="relative py-16 sm:py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Selected Work</h2>
          <p className="mt-4 text-slate-600">Explore case studies and outcomes from recent engagements.</p>
        </div>
      </div>
      <SceneContainer className="relative mx-auto mt-10 h-[360px] w-full max-w-5xl rounded-xl border border-slate-200 bg-white/60 shadow-sm">
        <PortfolioCarousel />
      </SceneContainer>
    </section>
  )
}
