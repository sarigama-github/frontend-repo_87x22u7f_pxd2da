import { motion } from 'framer-motion'

const items = [
  {
    tag: 'Top Story',
    title: 'The rise of short-form documentaries',
    image: 'https://images.unsplash.com/photo-1495562569060-2eec283d3391?q=80&w=1200&auto=format&fit=crop',
  },
  {
    tag: 'Feature',
    title: 'Inside the world of indie game creators',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    tag: 'Spotlight',
    title: 'How AI is reshaping music production',
    image: 'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=1200&auto=format&fit=crop',
  }
]

function Trending() {
  return (
    <section id="trending" className="relative py-16 sm:py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Trending now</h2>
            <p className="mt-3 text-slate-300">Fresh picks updated throughout the day.</p>
          </div>
          <a href="#" className="text-sm text-sky-300 hover:text-sky-200">View all</a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <div className="relative h-56">
                <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"/>
              </div>
              <div className="p-5">
                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur px-2 py-0.5 text-xs text-slate-100 mb-3">{item.tag}</span>
                <h3 className="text-white font-semibold leading-snug group-hover:underline">{item.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trending
