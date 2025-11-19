import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const navItem = ({ isActive }) =>
    `px-4 py-2 rounded-md transition-colors ${
      isActive ? 'text-black bg-neon/90' : 'text-zinc-200 hover:text-white hover:bg-zinc-800/60'
    } border border-neon/30 shadow-[0_0_12px_rgba(16,185,129,0.35)]`

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4">
        <nav className="mt-4 flex items-center justify-between rounded-xl border border-neon/40 bg-black/50 backdrop-blur-md px-4 py-3 shadow-[0_0_25px_rgba(16,185,129,0.35)]">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="h-9 w-9 rounded-lg border border-neon/50 bg-black shadow-[0_0_20px_rgba(16,185,129,0.6)] flex items-center justify-center">
              <span className="text-neon font-black">FX</span>
            </div>
            <div>
              <div className="text-white font-semibold leading-none">Nebula Backtester</div>
              <div className="text-xs text-neon/70 leading-none">forex • funded • pro tools</div>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <NavLink to="/" className={navItem} end>
              Home
            </NavLink>
            <NavLink to="/pricing" className={navItem}>
              Pricing
            </NavLink>
            <NavLink to="/about" className={navItem}>
              About Us
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
