import { useState } from 'react'
import StaticPage from './StaticPage'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed to send')
      setStatus('Thanks! We will get back to you shortly.')
      setForm({ name: '', email: '', message: '' })
    } catch (e) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <StaticPage title="Contact Us">
      <div className="grid lg:grid-cols-2 gap-10">
        <form onSubmit={onSubmit} className="rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-300">Name</label>
              <input name="name" value={form.name} onChange={onChange} required className="mt-1 w-full rounded bg-slate-800/80 border border-white/10 p-2 text-white" />
            </div>
            <div>
              <label className="block text-sm text-slate-300">Email</label>
              <input type="email" name="email" value={form.email} onChange={onChange} required className="mt-1 w-full rounded bg-slate-800/80 border border-white/10 p-2 text-white" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm text-slate-300">Message</label>
            <textarea name="message" rows="5" value={form.message} onChange={onChange} required className="mt-1 w-full rounded bg-slate-800/80 border border-white/10 p-2 text-white" />
          </div>
          <button className="mt-4 px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600">Send</button>
          {status && <p className="mt-3 text-sm text-slate-300">{status}</p>}
        </form>
        <div className="rounded-xl overflow-hidden border border-white/10">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.043386678566!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjciTiA3N8KwMzUnNDEuNiJF!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </StaticPage>
  )
}
