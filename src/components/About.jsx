function About() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-white">About Us</h2>
          <p className="mt-4 text-zinc-300">
            We build tools for traders who love clarity. Our forex backtester focuses on fast iteration,
            simple inputs, and real insight: pips, winrate, expectancy, drawdown, funded rules — all in one flow.
          </p>
          <div className="mt-6 rounded-xl border border-neon/40 bg-black/60 p-5 text-zinc-300">
            <p className="text-neon mb-2 font-semibold">What makes it different</p>
            <ul className="space-y-2 list-disc pl-5">
              <li>Neon-dark UI that keeps you engaged during long sessions</li>
              <li>Strategy-first: name, notes, and image for context while you simulate</li>
              <li>Both real and funded account modeling, including DD checks</li>
              <li>Clear metrics: pips, P/L, expectancy, and end balance</li>
            </ul>
          </div>
        </div>
        <div className="rounded-2xl border border-neon/40 bg-black/60 p-5 text-zinc-300">
          <h3 className="text-white font-semibold text-xl">How backtesting works here</h3>
          <ol className="mt-3 space-y-3 list-decimal pl-6">
            <li>Set your balance, risk, R:R, winrate, trades, and pip assumptions.</li>
            <li>Attach an image of the setup and write notes to remember the playbook.</li>
            <li>We calculate wins/losses, pips, P/L, expectancy, and funded breach risk.</li>
            <li>Iterate quickly and save what works. Build confidence before live capital.</li>
          </ol>
          <div className="mt-6 text-sm text-zinc-400">
            Pro tip: Positive expectancy with controlled drawdown is the core edge. Protect the downside and let R multiples work.
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
