export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-slate-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-slate-300">
        <div className="col-span-2 lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img src="/flame-icon.svg" className="h-7 w-7" alt="logo" />
            <span className="text-white font-semibold">Rangsons</span>
          </div>
          <p className="text-sm text-slate-400">Design-to-delivery partner for aerospace and defense systems across thermal management, fluid distribution, precision machining, and system integration.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/careers" className="hover:text-white">Careers</a></li>
            <li><a href="/quality" className="hover:text-white">Quality</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Capabilities</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/capabilities/fluid-distribution-systems" className="hover:text-white">Fluid Distribution</a></li>
            <li><a href="/capabilities/thermal-management-systems" className="hover:text-white">Thermal Management</a></li>
            <li><a href="/capabilities/precision-machining" className="hover:text-white">Precision Machining</a></li>
            <li><a href="/capabilities/system-integration" className="hover:text-white">System Integration</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Products</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/products/satcom-ew-pods" className="hover:text-white">Satcom / EW Pods</a></li>
            <li><a href="/products/tactical-data-links" className="hover:text-white">Tactical Data Links</a></li>
            <li><a href="/products/heat-exchangers" className="hover:text-white">Heat Exchangers</a></li>
            <li><a href="/products/fluid-distribution-systems" className="hover:text-white">Fluid Systems</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Certifications</h4>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 rounded bg-white/10 text-xs">AS9100</span>
            <span className="px-2 py-1 rounded bg-white/10 text-xs">ISO 9001</span>
            <span className="px-2 py-1 rounded bg-white/10 text-xs">CEMILAC</span>
            <span className="px-2 py-1 rounded bg-white/10 text-xs">DRDO</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-400">© {new Date().getFullYear()} Rangsons. All rights reserved.</div>
    </footer>
  )
}
