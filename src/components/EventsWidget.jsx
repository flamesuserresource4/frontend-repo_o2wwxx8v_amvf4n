import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function EventsWidget() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${API_BASE}/api/events`)
        const data = await res.json()
        setEvents(data.items || [])
      } catch (e) {
        setEvents([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="events" className="max-w-7xl mx-auto px-6 py-14">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Upcoming Testing Events</h2>
        <a href="#" className="text-teal-700 hover:underline">View calendar</a>
      </div>
      {loading ? (
        <p className="text-slate-600">Loading events…</p>
      ) : events.length === 0 ? (
        <p className="text-slate-600">No events published yet. Check back soon.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {events.map((e) => (
            <div key={e._id} className="rounded-xl border border-slate-200 p-5 bg-white">
              <p className="text-sm text-slate-500">{new Date(e.start_time).toLocaleString()}</p>
              <h3 className="font-semibold text-slate-900 mt-1">{e.title}</h3>
              <p className="text-slate-600 text-sm mt-2 line-clamp-3">{e.description}</p>
              <p className="text-slate-700 text-sm mt-3">📍 {e.location}</p>
              <button className="mt-4 px-4 py-2 rounded-lg bg-teal-700 text-white text-sm">Book a slot</button>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
