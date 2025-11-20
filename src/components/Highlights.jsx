import { Rocket, Gauge, Thermometer, Cog, Factory, Layers } from 'lucide-react'

const items = [
  {
    icon: Rocket,
    title: 'Flight-ready Quality',
    text: 'AS9100-driven systems engineered for safety, reliability and lifecycle performance.'
  },
  {
    icon: Gauge,
    title: 'Fluid Distribution',
    text: 'Manifolds, valves and tubing assemblies for precision flow control in extreme conditions.'
  },
  {
    icon: Thermometer,
    title: 'Thermal Management',
    text: 'Heat exchangers and cold plates designed for high heat flux and weight-optimized platforms.'
  },
  {
    icon: Cog,
    title: 'Precision Machining',
    text: 'Multi-axis, tight-tolerance components with special processes and treatments in-house.'
  },
  {
    icon: Layers,
    title: 'System Integration',
    text: 'Electro-mechanical integration, qualification and compliance for aerospace applications.'
  },
  {
    icon: Factory,
    title: 'Product Realization',
    text: 'Rapid prototyping to serial production — PPAP, APQP and traceability built-in.'
  }
]

export default function Highlights() {
  return (
    <section id="highlights" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">What we do</h2>
        <p className="text-slate-300 mt-2">End-to-end capability across design, manufacturing and qualification.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
              <Icon className="h-6 w-6 text-blue-400" />
              <h3 className="mt-3 text-white font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
