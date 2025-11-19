import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Starfield from './components/Starfield'
import Backtester from './components/Backtester'
import Pricing from './components/Pricing'
import About from './components/About'

function Home() {
  return (
    <>
      <Hero />
      <Backtester />
    </>
  )
}

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Neon theme tokens */}
      <div className="hidden">
        <style>{`:root{--neon:#10b981}`}</style>
      </div>
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(800px_400px_at_50%_-10%,rgba(16,185,129,0.15),transparent)]" />
      <Starfield />
      <Navbar />

      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <footer className="relative z-10 border-t border-neon/30 bg-black/60">
        <div className="mx-auto max-w-7xl px-6 py-10 text-zinc-400">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm">Built for traders who love neon and numbers.</p>
            <div className="flex items-center gap-3">
              <a href="/pricing" className="rounded-md border border-neon/40 px-3 py-1 text-neon hover:bg-zinc-900">$1 Lifetime</a>
              <a href="#try" className="rounded-md border border-neon/40 px-3 py-1 text-neon hover:bg-zinc-900">Try Now</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
