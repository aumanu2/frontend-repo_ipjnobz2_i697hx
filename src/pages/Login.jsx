import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Lock, Eye, EyeOff, LogIn } from 'lucide-react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPwd, setShowPwd] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Gagal login')
      localStorage.setItem('token', data.access_token)
      // fetch profile
      const meRes = await fetch(`${API_BASE}/auth/me`, { headers: { Authorization: `Bearer ${data.access_token}` } })
      const me = await meRes.json()
      if (me.role === 'admin') navigate('/admin')
      else navigate('/dashboard')
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50">
      <Navbar />

      {/* Animated decorative orbs */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-sky-300/30 blur-3xl"
          animate={{ x: [0, 30, -20, 0], y: [0, 20, -10, 0], scale: [1, 1.1, 0.95, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="pointer-events-none absolute bottom-10 -right-10 h-96 w-96 rounded-full bg-indigo-300/30 blur-3xl"
          animate={{ x: [0, -40, 20, 0], y: [0, -10, 30, 0], scale: [1, 1.05, 0.97, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="pointer-events-none absolute top-1/3 right-1/3 h-56 w-56 rounded-full bg-cyan-200/40 blur-3xl"
          animate={{ rotate: [0, 45, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center px-4 py-10">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 14 }}
        >
          <motion.div
            className="rounded-2xl border border-white/40 bg-white/70 backdrop-blur-xl shadow-xl overflow-hidden"
            initial={{ boxShadow: '0 10px 30px rgba(2, 132, 199, 0.0)' }}
            animate={{ boxShadow: '0 20px 60px rgba(30, 64, 175, 0.15)' }}
            transition={{ duration: 1.2 }}
          >
            <div className="p-7 sm:p-8">
              <motion.div
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 grid place-items-center text-white">
                  <LogIn size={20} />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-sky-800">Masuk Akun</h1>
                  <p className="text-slate-600 text-sm">Selamat datang kembali di PMB UMB Jakarta</p>
                </div>
              </motion.div>

              <AnimatePresence>
                {error && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="mb-4 rounded-lg border border-red-200 bg-red-50/80 text-red-700 px-3 py-2"
                  >
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <div className="mt-1 relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                      <Mail size={18} />
                    </span>
                    <input
                      type="email"
                      className="w-full rounded-xl border border-slate-200 bg-white/70 pl-10 pr-3 py-2.5 outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-300 transition shadow-sm"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="nama@umb.ac.id"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-sm font-medium text-slate-700">Password</label>
                  <div className="mt-1 relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                      <Lock size={18} />
                    </span>
                    <input
                      type={showPwd ? 'text' : 'password'}
                      className="w-full rounded-xl border border-slate-200 bg-white/70 pl-10 pr-10 py-2.5 outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-300 transition shadow-sm"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPwd((s) => !s)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 transition"
                      aria-label={showPwd ? 'Sembunyikan password' : 'Tampilkan password'}
                    >
                      {showPwd ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="group w-full rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition focus:outline-none focus:ring-4 focus:ring-sky-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <div className="flex items-center justify-center gap-2">
                    <AnimatePresence>
                      {loading ? (
                        <motion.span
                          key="spinner"
                          className="inline-block h-5 w-5 rounded-full border-2 border-white/60 border-t-white"
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                        />
                      ) : (
                        <motion.span
                          key="icon"
                          initial={{ x: -6, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          className="grid place-items-center"
                        >
                          <LogIn size={18} />
                        </motion.span>
                      )}
                    </AnimatePresence>
                    <span>{loading ? 'Memproses...' : 'Masuk'}</span>
                  </div>
                </motion.button>

                <motion.p
                  className="text-center text-sm text-slate-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                >
                  Belum punya akun? <a className="text-sky-700 hover:underline" href="/register">Daftar Sekarang</a>
                </motion.p>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
