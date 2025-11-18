import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureGrid from './components/FeatureGrid'
import Trending from './components/Trending'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <FeatureGrid />
      <Trending />
      <Footer />
    </div>
  )
}

export default App
