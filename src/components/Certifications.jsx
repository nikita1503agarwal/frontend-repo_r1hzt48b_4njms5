export default function Certifications() {
  const certs = [
    { name: 'AS9100', img: '/certs/as9100.png' },
    { name: 'ISO 9001', img: '/certs/iso9001.png' },
    { name: 'CEMILAC', img: '/certs/cemilac.png' },
    { name: 'DRDO Vendor', img: '/certs/drdo.png' },
  ]

  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-white text-2xl font-semibold">Certifications & Compliance</h3>
          <div className="flex-1 h-px bg-white/10"></div>
        </div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {certs.map((c) => (
            <div key={c.name} className="rounded-lg border border-white/10 bg-white/5 p-4 flex items-center justify-center">
              <img src={c.img} alt={c.name} className="h-10 opacity-90" onError={(e)=>{e.currentTarget.outerHTML = `<span class=\"text-slate-300 text-sm\">${c.name}</span>`}} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
