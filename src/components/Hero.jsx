import { motion } from 'framer-motion'

export default function Hero({ onCTAClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-teal-700 via-teal-600 to-emerald-700" />
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_20%_20%,#ffffff33,transparent_40%),radial-gradient(circle_at_80%_0%,#ffffff22,transparent_35%)]" />

      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 text-white">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Empowering Communities. Saving Lives. Building Futures.
            </h1>
            <p className="mt-6 text-white/90 text-lg md:text-xl max-w-2xl">
              Ekhaya Legae provides compassionate, stigma-free HIV testing, counselling, and youth training across Johannesburg.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => onCTAClick('events')} className="px-5 py-3 rounded-lg bg-amber-400 text-slate-900 font-semibold hover:bg-amber-300 transition">Find Testing Events</button>
              <button onClick={() => onCTAClick('join')} className="px-5 py-3 rounded-lg border border-white/30 hover:bg-white/10 transition">Join Our Team</button>
              <button onClick={() => onCTAClick('get-tested')} className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition">Get Tested Today</button>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="bg-white/10 rounded-2xl backdrop-blur p-6 border border-white/20">
            <h3 className="text-xl font-semibold mb-3">Quick Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              {[['Tests Conducted','tests'],['Youth Trained','youth'],['Communities Served','communities'],['Lives Impacted','lives']].map(([label, key]) => (
                <div key={key} className="p-4 rounded-xl bg-white/10 border border-white/10">
                  <p className="text-3xl font-extrabold" id={`stat-${key}`}>0</p>
                  <p className="text-sm opacity-80">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
