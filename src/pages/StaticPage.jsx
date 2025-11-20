import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function StaticPage({ title, children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-white mb-6">{title}</h1>
        <div className="prose prose-invert max-w-none">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}
