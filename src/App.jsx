import SiteHeader from './components/SiteHeader'
import HeroSpline from './components/HeroSpline'
import ServicesPreview from './components/ServicesPreview'
import SiteFooter from './components/SiteFooter'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <a href="#home" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded bg-slate-900 px-3 py-2 text-white">Skip to content</a>
      <SiteHeader />
      <main id="main-content" className="pt-16">
        <HeroSpline />

        {/* About */}
        <section id="about" className="relative py-20 sm:py-28 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Who We Are</h2>
              <p className="mt-4 text-slate-600">
                Evermark is a marketing and creative partner for brands ready to scale. We blend strategy, performance, and content into a single growth system—engineered for momentum.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-transparent p-6 border border-emerald-100">
                <p className="font-semibold text-slate-900">Vision</p>
                <p className="mt-2 text-sm text-slate-600">Make ambitious brands inevitable through compounding, data-informed creativity.</p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-transparent p-6 border border-slate-200">
                <p className="font-semibold text-slate-900">Values</p>
                <p className="mt-2 text-sm text-slate-600">Clarity, craft, velocity, and outcomes—measured by lift, not likes.</p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-transparent p-6 border border-emerald-100">
                <p className="font-semibold text-slate-900">Process</p>
                <p className="mt-2 text-sm text-slate-600">Discover → Design → Deploy, with tight feedback loops and sprints.</p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-transparent p-6 border border-slate-200">
                <p className="font-semibold text-slate-900">Team</p>
                <p className="mt-2 text-sm text-slate-600">A senior, distributed team across strategy, media, and production.</p>
              </div>
            </div>
          </div>
        </section>

        <ServicesPreview />

        {/* Portfolio preview */}
        <section id="portfolio" className="relative py-20 sm:py-28 bg-gradient-to-b from-white to-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Our Work Speaks for Itself</h2>
              <p className="mt-3 text-slate-600">A snapshot of recent launches and performance wins.</p>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1,2,3,4,5,6].map((i) => (
                <div key={i} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="aspect-[16/10] bg-gradient-to-br from-slate-100 to-slate-200" />
                  <div className="p-5">
                    <p className="text-sm font-medium text-emerald-700">Client {i}</p>
                    <p className="mt-1 text-slate-800">Campaign launch with multi-channel creative and paid orchestration.</p>
                  </div>
                  <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="relative py-20 sm:py-28 bg-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Let’s Build Something Amazing Together</h2>
            <p className="mt-3 text-slate-600">Tell us about your brand goals and we’ll plan your success story.</p>
            <form className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input type="text" required className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" required className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="jane@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Company</label>
                <input type="text" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Company Inc." />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Budget</label>
                <select className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option value="">Select budget</option>
                  <option>$5k - $10k</option>
                  <option>$10k - $25k</option>
                  <option>$25k - $50k</option>
                  <option>$50k+</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea rows={4} className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Tell us about your goals..." />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="w-full inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-emerald-700">Send</button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
