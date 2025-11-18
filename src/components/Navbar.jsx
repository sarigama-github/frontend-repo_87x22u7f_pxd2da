import { Menu, Search, PlayCircle, Newspaper, Film, Music, Tv, Radio } from 'lucide-react'

function Navbar() {
  return (
    <header className="w-full sticky top-0 z-30 bg-slate-900/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <PlayCircle className="w-5 h-5 text-white" />
          </div>
          <span className="text-white font-semibold tracking-tight text-lg">Pulse Media</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="text-slate-200/80 hover:text-white transition-colors flex items-center gap-2"><Newspaper className="w-4 h-4"/>Stories</a>
          <a href="#video" className="text-slate-200/80 hover:text-white transition-colors flex items-center gap-2"><Film className="w-4 h-4"/>Video</a>
          <a href="#music" className="text-slate-200/80 hover:text-white transition-colors flex items-center gap-2"><Music className="w-4 h-4"/>Music</a>
          <a href="#tv" className="text-slate-200/80 hover:text-white transition-colors flex items-center gap-2"><Tv className="w-4 h-4"/>TV</a>
          <a href="#radio" className="text-slate-200/80 hover:text-white transition-colors flex items-center gap-2"><Radio className="w-4 h-4"/>Radio</a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
            <Search className="w-4 h-4 text-slate-300" />
            <input placeholder="Search media, creators, topics" className="bg-transparent outline-none text-sm text-white placeholder:text-slate-300/70 w-64" />
          </div>
          <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-white"><Menu className="w-5 h-5"/></button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
