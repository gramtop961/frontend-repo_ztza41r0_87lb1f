import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(16,185,129,0.25),transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white drop-shadow-[0_0_30px_rgba(16,185,129,0.45)]">
            Neon Forex Backtester
          </h1>
          <p className="mt-6 text-lg md:text-xl text-zinc-200/90">
            Simulate strategies, track pips and winrate, and model real vs funded account outcomes. Built for speed and clarity with an immersive cosmic vibe.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#try" className="inline-flex items-center gap-2 rounded-lg border border-neon/50 bg-black px-5 py-3 text-neon shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:bg-zinc-900 transition">
              Try Backtester
            </a>
            <a href="/pricing" className="inline-flex items-center gap-2 rounded-lg bg-neon text-black font-semibold px-6 py-3 shadow-[0_0_30px_rgba(16,185,129,0.7)] hover:brightness-110 transition">
              Lifetime $1
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
