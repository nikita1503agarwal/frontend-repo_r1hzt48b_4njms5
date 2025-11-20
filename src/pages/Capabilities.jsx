import StaticPage from './StaticPage'

function Section({ title, children }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-white font-semibold">{title}</h3>
      <div className="text-slate-300 mt-2 text-sm">{children}</div>
    </div>
  )
}

export function FluidDistribution() {
  return (
    <StaticPage title="Capabilities / Fluid Distribution Systems">
      <Section title="What we build">Manifolds, valves, tube assemblies, quick disconnects, filters, regulators and test rigs for hydraulic and fuel systems.</Section>
      <div className="h-4"/>
      <Section title="Engineering">Flow analysis, contamination control, burst/pressure/helium leak tests, material compatibility and qualification to MIL/DO-160.</Section>
    </StaticPage>
  )
}

export function ThermalManagement() {
  return (
    <StaticPage title="Capabilities / Thermal Management Systems">
      <Section title="Products">Plate-fin and tube-fin heat exchangers, cold plates, high heat flux solutions, environmental control systems components.</Section>
      <div className="h-4"/>
      <Section title="Expertise">Thermal sizing, CFD, brazing, vacuum leak detection, burst/pressure testing and qualification.</Section>
    </StaticPage>
  )
}

export function PrecisionMachining() {
  return (
    <StaticPage title="Capabilities / Precision Machining">
      <Section title="Strengths">Multi-axis CNC, exotic alloys, tight tolerances, surface treatments, and in-process inspection with CMM.</Section>
      <div className="h-4"/>
      <Section title="Applications">Aerospace structural parts, housings, mounts, brackets, and complex geometries.</Section>
    </StaticPage>
  )
}

export function SystemIntegration() {
  return (
    <StaticPage title="Capabilities / System Integration">
      <Section title="Scope">Electro-mechanical assembly, harnessing, test rigs, HASS/ESS, EMI/EMC management, and documentation for airworthiness.</Section>
      <div className="h-4"/>
      <Section title="Outcomes">Qualified subsystems integrated and validated for platform deployment.</Section>
    </StaticPage>
  )
}

export function ProductRealization() {
  return (
    <StaticPage title="Capabilities / Product Realization">
      <Section title="Approach">Concurrent engineering, DFM/DFA, prototyping, PPAP/APQP, supply chain development, and digital traceability.</Section>
      <div className="h-4"/>
      <Section title="Manufacturing">Brazing, welding, heat treatment, NDT, and assembly lines designed for repeatability and throughput.</Section>
    </StaticPage>
  )
}
