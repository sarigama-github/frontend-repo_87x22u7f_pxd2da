import { motion } from 'framer-motion'
import { Newspaper, Video, Headphones, Broadcast, Radio, PlayCircle } from 'lucide-react'

const features = [
  {
    icon: Newspaper,
    title: 'Editorial Stories',
    desc: 'In-depth articles and opinion pieces from top voices and emerging creators.'
  },
  {
    icon: Video,
    title: 'Video Highlights',
    desc: 'Daily clips, documentaries, and exclusive interviews across categories.'
  },
  {
    icon: Headphones,
    title: 'Podcasts',
    desc: 'Follow your favorite shows and discover new voices with smart recommendations.'
  },
  {
    icon: Broadcast,
    title: 'Live Channels',
    desc: 'Tune in to live events, esports, and breaking news as it happens.'
  },
  {
    icon: Radio,
    title: 'Radio & Music',
    desc: 'Stream curated stations, playlists, and music videos tailored to you.'
  },
  {
    icon: PlayCircle,
    title: 'Playlists',
    desc: 'Save stories, queue videos, and build collections to watch later.'
  }
]

function FeatureCard({ Icon, title, desc, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition backdrop-blur"
    >
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/80 to-cyan-400/80 flex items-center justify-center mb-4 shadow-lg shadow-blue-500/20">
        <Icon className="w-5 h-5 text-white"/>
      </div>
      <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
      <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  )
}

function FeatureGrid() {
  return (
    <section id="features" className="relative py-16 sm:py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_10%,rgba(59,130,246,0.15),transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Everything you love to consume</h2>
          <p className="mt-3 text-slate-300">A single, beautifully organized place for your daily media.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={f.title} Icon={f.icon} title={f.title} desc={f.desc} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureGrid
