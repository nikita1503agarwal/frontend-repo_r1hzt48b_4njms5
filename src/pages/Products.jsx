import StaticPage from './StaticPage'

function Section({ title, children }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-white font-semibold">{title}</h3>
      <div className="text-slate-300 mt-2 text-sm">{children}</div>
    </div>
  )
}

export function SatcomPods() {
  return (
    <StaticPage title="Products / Satcom & EW Pods">
      <Section title="Overview">Aerodynamic pods engineered for electronic warfare and satellite communication payloads, with integrated thermal and fluid systems.</Section>
      <div className="h-4"/>
      <Section title="Highlights">Environmental control, vibration isolation, access panels, and qualification support.</Section>
    </StaticPage>
  )
}

export function TacticalDataLinks() {
  return (
    <StaticPage title="Products / Tactical Data Links">
      <Section title="Overview">Ruggedized terminal integration with RF, cooling, and power management for secure, low-latency communications.</Section>
      <div className="h-4"/>
      <Section title="Highlights">Thermal design, EMI/EMC, redundancy, and LRU-level maintainability.</Section>
    </StaticPage>
  )
}

export function HeatExchangers() {
  return (
    <StaticPage title="Products / Heat Exchangers">
      <Section title="Overview">Plate-fin and tube-fin heat exchangers tailored for platform constraints and mission profiles.</Section>
      <div className="h-4"/>
      <Section title="Highlights">High heat flux capability, weight optimization, and qualification to aerospace standards.</Section>
    </StaticPage>
  )
}

export function ProductFluidSystems() {
  return (
    <StaticPage title="Products / Fluid Distribution Systems">
      <Section title="Overview">Custom manifolds, valves, tube assemblies, and filtration solutions for hydraulic and fuel systems.</Section>
      <div className="h-4"/>
      <Section title="Highlights">Precision flow control, contamination management, and qualification testing.</Section>
    </StaticPage>
  )
}
