import Navbar from './Navbar'
import Hero from './Hero'
import Highlights from './Highlights'
import Certifications from './Certifications'
import Footer from './Footer'

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <Navbar />
      <Hero />
      <Highlights />

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white text-2xl font-semibold">From Prototype to Production</h3>
            <p className="mt-2 text-slate-300">We help programs accelerate with rapid engineering iterations, in-house special processes, and rigorous qualification. Explore how our teams deliver mission-ready hardware.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a href="/capabilities/product-realization" className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600">Product Realization</a>
              <a href="/quality" className="px-4 py-2 rounded bg-white/10 text-white hover:bg-white/20">Quality</a>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h4 className="text-white font-semibold">Industry Mentions</h4>
            <ul className="mt-3 space-y-3 text-sm">
              <li className="flex items-center justify-between"><span>Aero India 2025</span><span className="px-2 py-0.5 rounded bg-white/10">Showcase</span></li>
              <li className="flex items-center justify-between"><span>DRDO Vendor</span><span className="px-2 py-0.5 rounded bg-white/10">Approved</span></li>
              <li className="flex items-center justify-between"><span>AS9100</span><span className="px-2 py-0.5 rounded bg-white/10">Certified</span></li>
            </ul>
          </div>
        </div>
      </section>

      <Certifications />
      <Footer />
    </div>
  )
}
