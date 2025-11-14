import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { GraduationCap, ShieldCheck, Sparkles, ArrowRight, Users, Library } from 'lucide-react'

export default function Home() {
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()

  // Parallax transforms (disabled if reduced motion)
  const ySlow = prefersReducedMotion ? 0 : useTransform(scrollYProgress, [0, 1], [0, 120])
  const yMedium = prefersReducedMotion ? 0 : useTransform(scrollYProgress, [0, 1], [0, 220])
  const yFast = prefersReducedMotion ? 0 : useTransform(scrollYProgress, [0, 1], [0, 360])
  const yHero = prefersReducedMotion ? 0 : useTransform(scrollYProgress, [0, 1], [0, -80])
  const yHeroOpp = prefersReducedMotion ? 0 : useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50">
      <Navbar />

      {/* Global parallax layers */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Farthest soft orbs (slowest) */}
        <motion.div
          className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-sky-300/30 blur-3xl"
          style={prefersReducedMotion ? undefined : { y: ySlow }}
          animate={prefersReducedMotion ? undefined : { x: [0, 40, -20, 0], y: [0, 10, -6, 0], scale: [1, 1.06, 0.98, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Mid orbs */}
        <motion.div
          className="absolute bottom-0 -right-16 h-[28rem] w-[28rem] rounded-full bg-indigo-300/30 blur-3xl"
          style={prefersReducedMotion ? undefined : { y: yMedium }}
          animate={prefersReducedMotion ? undefined : { x: [0, -50, 25, 0], y: [0, -10, 30, 0], scale: [1, 1.05, 0.98, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Near orbs (fast) */}
        <motion.div
          className="absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-cyan-200/40 blur-3xl"
          style={prefersReducedMotion ? undefined : { y: yFast }}
          animate={prefersReducedMotion ? undefined : { rotate: [0, 60, -45, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        />

        {/* Floating clouds across entire page */}
        {!prefersReducedMotion && (
          <>
            <motion.div className="absolute top-20 left-8" style={{ y: ySlow }}>
              <motion.ellipse cx="0" cy="0" rx="48" ry="16" fill="#FFFFFF" opacity="0.75" animate={{ x: [0, 80, 0] }} transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }} />
            </motion.div>
            <motion.div className="absolute top-36 right-16" style={{ y: yMedium }}>
              <motion.ellipse cx="0" cy="0" rx="36" ry="13" fill="#FFFFFF" opacity="0.8" animate={{ x: [0, -120, 0] }} transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }} />
            </motion.div>
            <motion.div className="absolute top-10 left-1/2" style={{ y: yFast }}>
              <motion.ellipse cx="0" cy="0" rx="28" ry="10" fill="#FFFFFF" opacity="0.8" animate={{ x: [0, 140, 0] }} transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }} />
            </motion.div>
          </>
        )}
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Hero */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={prefersReducedMotion ? undefined : { y: yHero }}
            transition={{ type: 'spring', stiffness: 120, damping: 14 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold mb-4 border border-sky-200">
              <Sparkles size={14} /> Penerimaan Mahasiswa Baru
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-sky-900 leading-tight">
              Pendaftaran Mahasiswa Baru
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600">Universitas Mercu Buana Jakarta</span>
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Bergabunglah dengan komunitas kampus unggul. Daftar sekarang untuk masa depan yang lebih cerah.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/register" className="group inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition">
                Daftar Sekarang <ArrowRight className="transition group-hover:translate-x-0.5" size={18} />
              </Link>
              <a href="/test" className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-slate-200 hover:bg-white text-sky-700 font-semibold px-6 py-3 rounded-xl shadow-sm">
                Cek Koneksi
              </a>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[{label:'Program', value:'30+'}, {label:'Mahasiswa', value:'20K+'}, {label:'Kemitraan', value:'150+'}].map((s, i) => (
                <motion.div key={s.label} className="rounded-2xl bg-white/70 backdrop-blur border border-white/40 shadow p-4 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <div className="text-2xl font-extrabold text-sky-700">{s.value}</div>
                  <div className="text-xs text-slate-600">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hero card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            style={prefersReducedMotion ? undefined : { y: yHeroOpp }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 120, damping: 16 }}
          >
            <motion.div className="rounded-3xl border border-white/40 bg-white/70 backdrop-blur-xl shadow-xl p-6 md:p-8 overflow-hidden">
              <div className="grid sm:grid-cols-2 gap-6">
                <Feature icon={<GraduationCap className="text-sky-600" />} title="Program Unggulan" desc="Kurikulum relevan industri dengan dosen berpengalaman" />
                <Feature icon={<ShieldCheck className="text-sky-600" />} title="Akreditasi Baik" desc="Standar mutu terjamin dan fasilitas modern" />
                <Feature icon={<Users className="text-sky-600" />} title="Komunitas Besar" desc="Relasi dan jaringan alumni di berbagai sektor" />
                <Feature icon={<Library className="text-sky-600" />} title="Sumber Belajar Lengkap" desc="Perpustakaan dan laboratorium yang lengkap" />
              </div>
              <div className="mt-6 text-sm text-slate-600">
                Sudah punya akun? <Link to="/login" className="text-sky-700 font-semibold hover:underline">Masuk</Link>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Parallax campus strip */}
        <motion.section
          className="relative mt-16 rounded-3xl overflow-hidden border border-white/50 bg-white/60 backdrop-blur shadow-xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Background layer (sky + buildings) */}
          <motion.div style={prefersReducedMotion ? undefined : { y: ySlow }}>
            <svg viewBox="0 0 1200 360" className="w-full h-[240px] md:h-[300px]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#E0F2FE"/>
                  <stop offset="100%" stopColor="#EEF2FF"/>
                </linearGradient>
                <linearGradient id="pathGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#CBD5E1"/>
                  <stop offset="100%" stopColor="#94A3B8"/>
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="1200" height="360" fill="url(#skyGrad)" />

              {/* Distant buildings */}
              <g opacity="0.25">
                <rect x="60" y="120" width="120" height="90" rx="8" fill="#94A3B8" />
                <rect x="220" y="100" width="100" height="110" rx="6" fill="#94A3B8" />
                <rect x="360" y="140" width="160" height="70" rx="10" fill="#94A3B8" />
                <rect x="560" y="110" width="140" height="100" rx="8" fill="#94A3B8" />
                <rect x="740" y="130" width="110" height="80" rx="8" fill="#94A3B8" />
                <rect x="880" y="120" width="150" height="90" rx="8" fill="#94A3B8" />
              </g>
            </svg>
          </motion.div>

          {/* Mid layer (trees + destination) */}
          <motion.div className="absolute inset-0" style={prefersReducedMotion ? undefined : { y: yMedium }}>
            <svg viewBox="0 0 1200 360" className="w-full h-[240px] md:h-[300px]" xmlns="http://www.w3.org/2000/svg">
              {/* Trees */}
              <g opacity="0.75">
                {Array.from({ length: 14 }).map((_, i) => (
                  <g key={i} transform={`translate(${80 + i * 80}, 210)`}>
                    <rect x="-2" y="12" width="4" height="28" fill="#065F46" rx="2" />
                    <circle cx="0" cy="6" r="14" fill="#34D399" />
                  </g>
                ))}
              </g>

              {/* Destination building (class) */}
              <g transform="translate(980,168)">
                <rect x="0" y="0" width="160" height="110" rx="10" fill="#FFFFFF" stroke="#E2E8F0" />
                <text x="80" y="18" textAnchor="middle" fontSize="14" fontWeight="600" fill="#334155">Gedung Kelas</text>
                {Array.from({ length: 3 }).map((_, r) => (
                  Array.from({ length: 4 }).map((__, c) => (
                    <rect key={`${r}-${c}`} x={16 + c*34} y={30 + r*26} width="24" height="18" rx="3" fill="#BFDBFE" stroke="#93C5FD" />
                  ))
                ))}
                <rect x="68" y="86" width="24" height="20" rx="3" fill="#94A3B8" />
              </g>
            </svg>
          </motion.div>

          {/* Foreground layer (path + student) */}
          <motion.div className="absolute inset-0" style={prefersReducedMotion ? undefined : { y: yFast }}>
            <motion.svg viewBox="0 0 1200 360" className="w-full h-[240px] md:h-[300px]" xmlns="http://www.w3.org/2000/svg">
              {/* Path */}
              <path d="M0,260 C220,230 380,280 560,250 C760,215 980,250 1200,230 L1200,360 L0,360 Z" fill="url(#pathGrad)" opacity="0.5" />
              <path d="M0,270 C240,250 420,290 600,260 C820,225 1020,260 1200,245" fill="none" stroke="#64748B" strokeWidth="3" opacity="0.5" />

              {/* Student character */}
              <motion.g
                transform="translate(-120, 180)"
                animate={prefersReducedMotion ? undefined : { x: [0, 1320] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              >
                {/* shadow */}
                <ellipse cx="60" cy="86" rx="30" ry="6" fill="#000" opacity="0.12" />

                {/* backpack */}
                <rect x="42" y="28" width="28" height="34" rx="6" fill="#6366F1" stroke="#4F46E5" />

                {/* body */}
                <rect x="56" y="24" width="32" height="48" rx="8" fill="#0EA5E9" stroke="#0284C7" />

                {/* head */}
                <circle cx="72" cy="16" r="12" fill="#FDE68A" stroke="#F59E0B" />
                {/* cap */}
                <polygon points="60,6 84,6 72,0" fill="#334155" />
                <rect x="69" y="6" width="6" height="6" fill="#334155" />

                {/* left arm */}
                <motion.rect x="50" y="30" width="8" height="26" rx="4" fill="#0284C7" style={{ transformOrigin: '54px 30px' }}
                  animate={prefersReducedMotion ? undefined : { rotate: [20, -10, 20] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
                />
                {/* right arm */}
                <motion.rect x="88" y="30" width="8" height="26" rx="4" fill="#0284C7" style={{ transformOrigin: '92px 30px' }}
                  animate={prefersReducedMotion ? undefined : { rotate: [-10, 20, -10] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* left leg */}
                <motion.rect x="58" y="70" width="8" height="26" rx="4" fill="#1F2937" style={{ transformOrigin: '62px 70px' }}
                  animate={prefersReducedMotion ? undefined : { rotate: [-14, 14, -14] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
                />
                {/* right leg */}
                <motion.rect x="78" y="70" width="8" height="26" rx="4" fill="#111827" style={{ transformOrigin: '82px 70px' }}
                  animate={prefersReducedMotion ? undefined : { rotate: [14, -14, 14] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* shoes */}
                <rect x="54" y="94" width="16" height="6" rx="3" fill="#0F172A" />
                <rect x="74" y="94" width="16" height="6" rx="3" fill="#0F172A" />
              </motion.g>
            </motion.svg>
          </motion.div>
        </motion.section>
      </main>
    </div>
  )
}

function Feature({ icon, title, desc }) {
  return (
    <motion.div
      className="flex items-start gap-4 p-4 rounded-2xl bg-white/60 border border-slate-100 hover:bg-white transition shadow-sm"
      whileHover={{ y: -2, boxShadow: '0 12px 30px rgba(30,64,175,0.12)' }}
    >
      <div className="h-11 w-11 rounded-xl bg-sky-100 grid place-items-center">{icon}</div>
      <div>
        <div className="font-semibold text-slate-900">{title}</div>
        <div className="text-sm text-slate-600">{desc}</div>
      </div>
    </motion.div>
  )
}
