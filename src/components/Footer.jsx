export default function Footer(){
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-slate-600">
        <div>
          <h4 className="font-semibold text-slate-900">Ekhaya Legae</h4>
          <p className="mt-2 text-sm">Compassionate HIV testing, counselling, and youth empowerment across Johannesburg.</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Contact</h4>
          <p className="mt-2 text-sm">Phone: 010-000-0000</p>
          <p className="text-sm">Email: info@ekhaya-legae.org</p>
          <p className="text-sm">WhatsApp: +27 60 000 0000</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Follow</h4>
          <div className="mt-2 flex gap-3 text-sm">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">Twitter</a>
            <a href="#" className="hover:underline">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 pb-6">© {new Date().getFullYear()} Ekhaya Legae. All rights reserved.</div>
    </footer>
  )
}
