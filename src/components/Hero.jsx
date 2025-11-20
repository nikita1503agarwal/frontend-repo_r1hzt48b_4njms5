import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.15),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.15),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(34,197,94,0.15),transparent_35%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight"
            >
              Engineering reliable systems for the skies and beyond
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-lg text-slate-300"
            >
              From concept to qualification, we partner with aerospace and defense leaders to design, build, and integrate mission-critical hardware.
            </motion.p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#highlights" className="px-5 py-2.5 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors">Explore Capabilities</a>
              <a href="/contact" className="px-5 py-2.5 rounded-md bg-white/10 text-white hover:bg-white/20 transition-colors">Talk to Us</a>
            </div>

            <div className="mt-10 flex items-center gap-4 text-slate-400">
              <span className="text-xs uppercase tracking-wider">Trusted by</span>
              <img src="/logos/aero-india.svg" alt="Aero India" className="h-6 opacity-80" onError={(e)=>{e.currentTarget.style.display='none'}} />
              <span className="text-xs px-2 py-1 rounded bg-white/10">Aero India 2025</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative aspect-[4/3] rounded-xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.15),transparent_40%)]" />
            <img src="/hero-visual.jpg" alt="Aircraft systems" className="w-full h-full object-cover opacity-70" onError={(e)=>{e.currentTarget.style.display='none'}} />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-slate-100 text-sm">Fluid Distribution • Thermal Management • Precision Machining • System Integration</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
