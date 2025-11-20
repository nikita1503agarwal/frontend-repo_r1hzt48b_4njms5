import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinkClass = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive ? 'text-white bg-white/10' : 'text-slate-200 hover:text-white hover:bg-white/10'
  }`

function Dropdown({ label, items }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="inline-flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10">
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute left-0 mt-2 w-64 rounded-lg bg-slate-800/95 backdrop-blur border border-white/10 shadow-xl p-2 z-20">
          {items.map((item) => (
            <NavLink key={item.to} to={item.to} className={({isActive}) =>
              `block px-3 py-2 rounded-md text-sm ${isActive ? 'bg-white/10 text-white' : 'text-slate-200 hover:text-white hover:bg-white/10'}`
            }>
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const capabilities = [
    { label: 'Fluid Distribution Systems', to: '/capabilities/fluid-distribution-systems' },
    { label: 'Thermal Management Systems', to: '/capabilities/thermal-management-systems' },
    { label: 'Precision Machining', to: '/capabilities/precision-machining' },
    { label: 'System Integration', to: '/capabilities/system-integration' },
    { label: 'Product Realization', to: '/capabilities/product-realization' },
  ]

  const products = [
    { label: 'Satcom / EW Pods', to: '/products/satcom-ew-pods' },
    { label: 'Tactical Data Links', to: '/products/tactical-data-links' },
    { label: 'Heat Exchangers', to: '/products/heat-exchangers' },
    { label: 'Fluid Distribution Systems', to: '/products/fluid-distribution-systems' },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-slate-900/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/flame-icon.svg" className="h-8 w-8" alt="logo" />
            <span className="text-white font-semibold">Rangsons</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <Dropdown label="Capabilities" items={capabilities} />
            <Dropdown label="Products" items={products} />
            <NavLink to="/quality" className={navLinkClass}>Quality</NavLink>
            <NavLink to="/careers" className={navLinkClass}>Careers</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </nav>

          <button className="md:hidden text-slate-200" onClick={() => setMobileOpen((v) => !v)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-1">
            <NavLink to="/" className={navLinkClass} onClick={() => setMobileOpen(false)}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={() => setMobileOpen(false)}>About</NavLink>
            <div className="px-3 pt-2 text-slate-300 text-xs uppercase">Capabilities</div>
            {capabilities.map((c) => (
              <NavLink key={c.to} to={c.to} className={navLinkClass} onClick={() => setMobileOpen(false)}>
                {c.label}
              </NavLink>
            ))}
            <div className="px-3 pt-2 text-slate-300 text-xs uppercase">Products</div>
            {products.map((p) => (
              <NavLink key={p.to} to={p.to} className={navLinkClass} onClick={() => setMobileOpen(false)}>
                {p.label}
              </NavLink>
            ))}
            <NavLink to="/quality" className={navLinkClass} onClick={() => setMobileOpen(false)}>Quality</NavLink>
            <NavLink to="/careers" className={navLinkClass} onClick={() => setMobileOpen(false)}>Careers</NavLink>
            <NavLink to="/contact" className={navLinkClass} onClick={() => setMobileOpen(false)}>Contact</NavLink>
          </div>
        )}
      </div>
    </header>
  )
}
