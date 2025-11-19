function Pricing() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-white drop-shadow-[0_0_30px_rgba(16,185,129,0.45)]">Lifetime Access</h2>
        <p className="mt-4 text-zinc-300">No subscriptions. No drama. One crisp dollar turns on every pro feature forever.</p>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-neon/50 bg-black/60 p-6 shadow-[0_0_30px_rgba(16,185,129,0.4)]">
          <div className="text-neon text-sm uppercase tracking-wider">Real Account</div>
          <div className="mt-1 text-3xl font-bold text-white">$1 one-time</div>
          <ul className="mt-4 space-y-2 text-zinc-300">
            <li>• Backtesting with pips and winrate</li>
            <li>• Strategy notes and image insertion</li>
            <li>• P/L and expectancy calculator</li>
            <li>• Export scenarios (coming soon)</li>
          </ul>
          <button className="mt-6 w-full rounded-lg bg-neon text-black font-semibold py-3 hover:brightness-110 transition shadow-[0_0_25px_rgba(16,185,129,0.6)]">Buy $1</button>
        </div>

        <div className="rounded-2xl border border-neon/50 bg-black/60 p-6 shadow-[0_0_30px_rgba(16,185,129,0.4)]">
          <div className="text-neon text-sm uppercase tracking-wider">Funded Account</div>
          <div className="mt-1 text-3xl font-bold text-white">$1 one-time</div>
          <ul className="mt-4 space-y-2 text-zinc-300">
            <li>• All real account features</li>
            <li>• Funded DD rules modeling</li>
            <li>• Risk templates (1-step / 2-step)</li>
            <li>• Challenge pass probability</li>
          </ul>
          <button className="mt-6 w-full rounded-lg bg-neon text-black font-semibold py-3 hover:brightness-110 transition shadow-[0_0_25px_rgba(16,185,129,0.6)]">Buy $1</button>
        </div>
      </div>

      <div className="mt-10 text-center text-zinc-400">
        <p>Intro offer. Lock-in price for life. Instant access after purchase.</p>
      </div>
    </section>
  )
}

export default Pricing
