import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import CTASection from './components/CTASection'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <a href="#home" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded bg-slate-900 px-3 py-2 text-white">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <section id="work" className="py-16 sm:py-20 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Selected Work</h2>
              <p className="mt-4 text-slate-600">Explore case studies and outcomes from recent engagements.</p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {["+420% Reach", "+3.2x ROAS", "+78% Conversion"].map((result) => (
                <div key={result} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="h-32 w-full rounded-lg bg-gradient-to-tr from-[#c0c0c0] via-white to-[#2e8b57]/20" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-semibold">Evermark Case Study</h3>
                  <p className="mt-1 text-sm text-slate-600">Outcome: {result}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <CTASection />
        <footer className="border-t border-slate-200 py-6 text-sm text-slate-600">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} Evermark Marketing & Promotion. All rights reserved.</p>
            <nav className="flex items-center gap-4" aria-label="Footer">
              <a className="hover:text-slate-900" href="#services">Services</a>
              <a className="hover:text-slate-900" href="#work">Work</a>
              <a className="hover:text-slate-900" href="#contact">Contact</a>
            </nav>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
