import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()
  const isActive = (p) => pathname === p
  return (
    <header className="bg-white/80 backdrop-blur sticky top-0 z-40 border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-extrabold text-sky-700 text-xl">UMB Jakarta</Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link to="/" className={"px-3 py-1.5 rounded " + (isActive('/') ? 'bg-sky-100 text-sky-700' : 'hover:bg-gray-100')}>Beranda</Link>
          <Link to="/login" className={"px-3 py-1.5 rounded " + (isActive('/login') ? 'bg-sky-100 text-sky-700' : 'hover:bg-gray-100')}>Masuk</Link>
          <Link to="/dashboard" className={"px-3 py-1.5 rounded " + (isActive('/dashboard') ? 'bg-sky-100 text-sky-700' : 'hover:bg-gray-100')}>Dashboard</Link>
          <Link to="/admin" className={"px-3 py-1.5 rounded " + (isActive('/admin') ? 'bg-sky-100 text-sky-700' : 'hover:bg-gray-100')}>Admin</Link>
        </nav>
      </div>
    </header>
  )
}
