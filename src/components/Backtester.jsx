import { useMemo, useState } from 'react'

function Stat({ label, value, hint }) {
  return (
    <div className="flex-1 min-w-[160px] rounded-xl border border-neon/40 bg-black/50 p-4 text-zinc-200 shadow-[0_0_18px_rgba(16,185,129,0.25)]">
      <div className="text-xs uppercase tracking-wider text-neon/70">{label}</div>
      <div className="mt-1 text-2xl font-bold text-white">{value}</div>
      {hint && <div className="mt-1 text-xs text-zinc-400">{hint}</div>}
    </div>
  )
}

export default function Backtester() {
  const [balance, setBalance] = useState(10000)
  const [risk, setRisk] = useState(1)
  const [rr, setRR] = useState(2)
  const [winrate, setWinrate] = useState(50)
  const [trades, setTrades] = useState(50)
  const [pipsPerWin, setPipsPerWin] = useState(20)
  const [pipsPerLoss, setPipsPerLoss] = useState(10)

  // strategy notes & media
  const [strategyName, setStrategyName] = useState('Liquidity Sweep + OB')
  const [notes, setNotes] = useState('Wait for liquidity grab, confirm with BOS, enter on OB with 1% risk.')
  const [image, setImage] = useState(null)

  const expected = useMemo(() => {
    const riskAmt = balance * (risk / 100)
    const wins = Math.round(trades * (winrate / 100))
    const losses = trades - wins

    const avgWin = riskAmt * rr
    const avgLoss = riskAmt

    const pnl = wins * avgWin - losses * avgLoss
    const endBal = balance + pnl

    const totalPips = wins * pipsPerWin - losses * pipsPerLoss

    const fundedDrawdown = balance * 0.1 // 10% rule of many funded programs
    const ddHit = pnl <= -fundedDrawdown

    const expectancy = (winrate / 100) * rr - (1 - winrate / 100) * 1

    return { riskAmt, wins, losses, avgWin, avgLoss, pnl, endBal, totalPips, fundedDrawdown, ddHit, expectancy }
  }, [balance, risk, rr, winrate, trades, pipsPerWin, pipsPerLoss])

  return (
    <section id="try" className="relative z-10 mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-center gap-3">
        <div className="h-2 w-2 rounded-full bg-neon shadow-[0_0_20px_rgba(16,185,129,0.9)]" />
        <h2 className="text-2xl md:text-3xl font-bold text-white">Backtest Playground</h2>
        <span className="text-neon/70">simulate & measure</span>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="rounded-xl border border-neon/40 bg-black/50 p-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <label className="block">
                <div className="text-xs text-zinc-400">Starting Balance ($)</div>
                <input type="number" value={balance} onChange={e=>setBalance(Number(e.target.value))} className="mt-1 w-full rounded-md bg-zinc-900 text-white border border-neon/40 px-3 py-2" />
              </label>
              <label className="block">
                <div className="text-xs text-zinc-400">Risk per Trade (%)</div>
                <input type="number" value={risk} onChange={e=>setRisk(Number(e.target.value))} className="mt-1 w-full rounded-md bg-zinc-900 text-white border border-neon/40 px-3 py-2" />
              </label>
              <label className="block">
                <div className="text-xs text-zinc-400">Reward:Risk</div>
                <input type="number" value={rr} step="0.1" onChange={e=>setRR(Number(e.target.value))} className="mt-1 w-full rounded-md bg-zinc-900 text-white border border-neon/40 px-3 py-2" />
              </label>
              <label className="block">
                <div className="text-xs text-zinc-400">Winrate (%)</div>
                <input type="number" value={winrate} onChange={e=>setWinrate(Number(e.target.value))} className="mt-1 w-full rounded-md bg-zinc-900 text-white border border-neon/40 px-3 py-2" />
              </label>
              <label className="block">
                <div className="text-xs text-zinc-400">Trades</div>
                <input type="number" value={trades} onChange={e=>setTrades(Number(e.target.value))} className="mt-1 w-full rounded-md bg-zinc-900 text-white border border-neon/40 px-3 py-2" />
              </label>
              <label className="block">
                <div className="text-xs text-zinc-400">Pips per Win</div>
                <input type="number" value={pipsPerWin} onChange={e=>setPipsPerWin(Number(e.target.value))} className="mt-1 w-full rounded-md bg-zinc-900 text-white border border-neon/40 px-3 py-2" />
              </label>
              <label className="block">
                <div className="text-xs text-zinc-400">Pips per Loss</div>
                <input type="number" value={pipsPerLoss} onChange={e=>setPipsPerLoss(Number(e.target.value))} className="mt-1 w-full rounded-md bg-zinc-900 text-white border border-neon/40 px-3 py-2" />
              </label>
            </div>
          </div>

          <div className="rounded-xl border border-neon/40 bg-black/50 p-4">
            <div className="grid md:grid-cols-2 gap-3">
              <label className="block">
                <div className="text-xs text-zinc-400">Strategy Name</div>
                <input value={strategyName} onChange={e=>setStrategyName(e.target.value)} className="mt-1 w-full rounded-md bg-zinc-900 text-white border border-neon/40 px-3 py-2" />
              </label>
              <label className="block">
                <div className="text-xs text-zinc-400">Add Image (optional)</div>
                <input type="file" accept="image/*" onChange={e=>{
                  const f = e.target.files?.[0]
                  if (!f) return
                  const reader = new FileReader()
                  reader.onload = () => setImage(reader.result)
                  reader.readAsDataURL(f)
                }} className="mt-1 w-full rounded-md bg-zinc-900 text-white border border-neon/40 px-3 py-2" />
              </label>
            </div>
            <label className="block mt-3">
              <div className="text-xs text-zinc-400">Notes</div>
              <textarea rows={4} value={notes} onChange={e=>setNotes(e.target.value)} className="mt-1 w-full rounded-md bg-zinc-900 text-white border border-neon/40 px-3 py-2" />
            </label>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            <Stat label="Wins" value={expected.wins} />
            <Stat label="Losses" value={expected.losses} />
            <Stat label="Total Pips" value={`${expected.totalPips.toFixed(0)} pips`} />
          </div>
          <div className="flex flex-wrap gap-3">
            <Stat label="Expectancy" value={`${expected.expectancy.toFixed(2)} R`} hint="> 0 means edge" />
            <Stat label="P/L" value={`$${expected.pnl.toFixed(2)}`} hint="based on risk model" />
            <Stat label="End Balance" value={`$${expected.endBal.toFixed(2)}`} />
          </div>

          <div className="rounded-xl border border-neon/40 bg-black/50 p-4">
            <div className="flex items-center gap-2 text-zinc-300">
              <div className={`h-2 w-2 rounded-full ${expected.ddHit ? 'bg-red-500' : 'bg-neon'} shadow-[0_0_20px_rgba(16,185,129,0.9)]`} />
              <div className="font-semibold">Funded Account Check</div>
              <div className="ml-auto text-sm text-zinc-400">Max DD 10%: ${expected.fundedDrawdown.toFixed(2)}</div>
            </div>
            <div className="mt-3 text-zinc-200">
              {expected.ddHit ? (
                <p>Warning: This simulation violates typical funded account drawdown rules.</p>
              ) : (
                <p>Great: This simulation respects funded account drawdown rules.</p>
              )}
            </div>
          </div>

          <div className="rounded-xl border border-neon/40 bg-black/50 p-4">
            <div className="flex items-center gap-3">
              {image && <img src={image} alt="strategy" className="h-16 w-16 rounded-md object-cover border border-neon/40" />}
              <div>
                <div className="text-white font-semibold">{strategyName}</div>
                <div className="text-zinc-400 text-sm max-w-xl">{notes}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
