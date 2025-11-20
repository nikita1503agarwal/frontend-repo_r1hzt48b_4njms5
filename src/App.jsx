import Homepage from './components/Homepage'
import { Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact'
import { About, Quality, Careers } from './pages/ContentPages'
import { FluidDistribution, ThermalManagement, PrecisionMachining, SystemIntegration, ProductRealization } from './pages/Capabilities'
import { SatcomPods, TacticalDataLinks, HeatExchangers, ProductFluidSystems } from './pages/Products'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />

      <Route path="/capabilities/fluid-distribution-systems" element={<FluidDistribution />} />
      <Route path="/capabilities/thermal-management-systems" element={<ThermalManagement />} />
      <Route path="/capabilities/precision-machining" element={<PrecisionMachining />} />
      <Route path="/capabilities/system-integration" element={<SystemIntegration />} />
      <Route path="/capabilities/product-realization" element={<ProductRealization />} />

      <Route path="/products/satcom-ew-pods" element={<SatcomPods />} />
      <Route path="/products/tactical-data-links" element={<TacticalDataLinks />} />
      <Route path="/products/heat-exchangers" element={<HeatExchangers />} />
      <Route path="/products/fluid-distribution-systems" element={<ProductFluidSystems />} />

      <Route path="/quality" element={<Quality />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
