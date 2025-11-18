function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© 2025 Pulse Media. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#" className="text-slate-300/80 hover:text-white">About</a>
            <a href="#" className="text-slate-300/80 hover:text-white">Careers</a>
            <a href="#" className="text-slate-300/80 hover:text-white">Contact</a>
            <a href="#" className="text-slate-300/80 hover:text-white">Privacy</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
