import StaticPage from './StaticPage'

export function About() {
  return (
    <StaticPage title="About Us">
      <p>We are a design-to-delivery partner for aerospace and defense, specializing in fluid distribution, thermal management, precision machining, and system integration. Our mission is to enable reliable, high-performance platforms through engineering rigor and manufacturing excellence.</p>
      <div className="grid sm:grid-cols-2 gap-6 mt-6">
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h3 className="text-white font-semibold">Vision</h3>
          <p className="text-slate-300 mt-1">Advance indigenous capability for global aerospace programs.</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h3 className="text-white font-semibold">Mission</h3>
          <p className="text-slate-300 mt-1">Deliver mission-ready systems with predictable quality, cost, and schedule.</p>
        </div>
      </div>
    </StaticPage>
  )
}

export function Quality() {
  return (
    <StaticPage title="Quality">
      <p>We operate an AS9100-certified QMS with full traceability, PPAP/APQP processes, and in-house special processes. First article inspection (FAI), process capability studies, and reliability testing ensure flight-readiness.</p>
      <ul className="list-disc pl-6 mt-4">
        <li>Certifications: AS9100, ISO 9001, CEMILAC, DRDO approved vendor</li>
        <li>Processes: NDT, anodizing, passivation, heat treatment</li>
        <li>Digital traceability and document control</li>
      </ul>
    </StaticPage>
  )
}

export function Careers() {
  return (
    <StaticPage title="Careers">
      <p>Join a fast-growing team building critical systems for aerospace and defense. We hire across design, manufacturing, quality, program management and supply chain.</p>
      <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-5">
        <h3 className="text-white font-semibold">Open Roles</h3>
        <ul className="list-disc pl-6 mt-2 text-slate-300">
          <li>Thermal Design Engineer</li>
          <li>Manufacturing Engineer - Precision Machining</li>
          <li>Supplier Quality Engineer</li>
        </ul>
        <p className="text-slate-300 mt-3">Send your resume to careers@rangsons.com</p>
      </div>
    </StaticPage>
  )
}
