import { useEffect } from 'react'
import Hero from './components/Hero'
import EventsWidget from './components/EventsWidget'
import Footer from './components/Footer'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

function App() {
  useEffect(() => {
    // Load stats and animate numbers
    async function loadStats(){
      try{
        const res = await fetch(`${API_BASE}/api/stats`)
        const data = await res.json()
        const stats = data.items || []
        const mapping = {
          'Tests Conducted': 'stat-tests',
          'Youth Trained': 'stat-youth',
          'Communities Served': 'stat-communities',
          'Lives Impacted': 'stat-lives'
        }
        stats.forEach(s => {
          const el = document.getElementById(mapping[s.label])
          if(el){ el.textContent = s.value.toLocaleString() }
        })
      }catch(e){ /* ignore */ }
    }
    loadStats()
  }, [])

  const onCTAClick = (key) => {
    const el = document.getElementById(key === 'events' ? 'events' : 'root')
    if(el){ el.scrollIntoView({ behavior: 'smooth' }) }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top bar */}
      <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-extrabold text-teal-700">Ekhaya Legae</div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <a href="#events" className="hover:text-teal-700">Events</a>
            <a href="#impact" className="hover:text-teal-700">Impact</a>
            <a href="#resources" className="hover:text-teal-700">Resources</a>
            <a href="#contact" className="hover:text-teal-700">Contact</a>
          </nav>
          <a href="#get-tested" className="px-4 py-2 rounded-lg bg-teal-700 text-white text-sm">Get Tested</a>
        </div>
      </header>

      <main>
        <Hero onCTAClick={onCTAClick} />
        <EventsWidget />

        {/* Partners */}
        <section id="partners" className="bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Partners & Supporters</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 opacity-80">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="aspect-[3/1] rounded-lg bg-slate-100" />
              ))}
            </div>
          </div>
        </section>

        {/* Stories */}
        <section id="impact" className="max-w-7xl mx-auto px-6 py-14">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Impact stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3].map(i => (
              <div key={i} className="rounded-xl border border-slate-200 p-5 bg-white">
                <div className="h-36 rounded-lg bg-slate-100 mb-4" />
                <h3 className="font-semibold">A story of hope</h3>
                <p className="text-sm text-slate-600 mt-2">Real stories from our communities, celebrating courage and care.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section id="resources" className="bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-14">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Resources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {["Know your status","What to expect","Myths & facts"].map((t, i) => (
                <div key={i} className="rounded-xl border border-slate-200 p-5 bg-white">
                  <h3 className="font-semibold">{t}</h3>
                  <p className="text-sm text-slate-600 mt-2">Short, stigma‑free explainers designed for mobile reading.</p>
                  <button className="mt-4 px-4 py-2 rounded-lg bg-slate-900 text-white text-sm">Download</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Contact us</h2>
              <p className="text-slate-600 mt-2">Have a question or want to partner with us? We’d love to hear from you.</p>
              <div className="mt-6 text-sm text-slate-700">
                <p>Office: Johannesburg, South Africa</p>
                <p>Phone: 010-000-0000</p>
                <p>Email: info@ekhaya-legae.org</p>
                <p>WhatsApp: +27 60 000 0000</p>
              </div>
            </div>
            <form className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="grid grid-cols-2 gap-4">
                <input className="col-span-2 md:col-span-1 input" placeholder="Full name" />
                <input className="col-span-2 md:col-span-1 input" placeholder="Email" />
                <input className="col-span-2 input" placeholder="Subject" />
                <textarea className="col-span-2 input min-h-[120px]" placeholder="Your message" />
              </div>
              <button type="button" className="mt-4 px-4 py-2 rounded-lg bg-teal-700 text-white text-sm">Send message</button>
            </form>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}

export default App
