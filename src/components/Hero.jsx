import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/30 to-slate-950/90" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur px-3 py-1 text-xs text-slate-100 mb-6">
              Modern media hub • Curated daily
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight tracking-tight text-white">
              Discover, watch, and read the stories that move culture
            </h1>
            <p className="mt-6 text-lg text-slate-200 max-w-2xl">
              Your personalized gateway to news, videos, podcasts, and live shows — all in one place.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#features" className="px-5 py-3 rounded-lg bg-white text-slate-900 font-semibold hover:bg-slate-100 transition">Explore Features</a>
              <a href="#trending" className="px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition">See Trending</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
