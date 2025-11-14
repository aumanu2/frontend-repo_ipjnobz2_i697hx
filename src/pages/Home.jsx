import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { GraduationCap, ShieldCheck, Sparkles, ArrowRight, Users, Library } from 'lucide-react'

export default function Home() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50">
      <Navbar />

      {/* Animated background orbs */}
      <motion.div aria-hidden initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <motion.div
          className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-sky-300/30 blur-3xl"
          animate={prefersReducedMotion ? undefined : { x: [0, 40, -20, 0], y: [0, 20, -10, 0], scale: [1, 1.08, 0.96, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="pointer-events-none absolute bottom-0 -right-16 h-[28rem] w-[28rem] rounded-full bg-indigo-300/30 blur-3xl"
          animate={prefersReducedMotion ? undefined : { x: [0, -50, 25, 0], y: [0, -10, 30, 0], scale: [1, 1.05, 0.98, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="pointer-events-none absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-cyan-200/40 blur-3xl"
          animate={prefersReducedMotion ? undefined : { rotate: [0, 60, -45, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Hero */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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

        {/* Refined campus strip animation */}
        <motion.section
          className="relative mt-16 rounded-3xl overflow-hidden border border-white/50 bg-white/60 backdrop-blur shadow-lg"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Gradient sky */}
          <div className="absolute inset-0 bg-gradient-to-r from-sky-50 via-sky-100 to-indigo-100" />

          {/* Parallax layers: skyline */}
          <motion.div
            className="relative h-36 md:h-44"
          >
            {/* back buildings */}
            <motion.div
              className="absolute inset-x-0 bottom-16 flex gap-6 px-6"
              style={{ opacity: 0.35 }}
              animate={prefersReducedMotion ? undefined : { x: [0, 10, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="h-12 w-24 bg-slate-300/60 rounded-md" />
              <div className="h-16 w-16 bg-slate-300/60 rounded-md" />
              <div className="h-10 w-20 bg-slate-300/60 rounded-md" />
              <div className="h-14 w-24 bg-slate-300/60 rounded-md" />
            </motion.div>

            {/* mid trees */}
            <motion.div
              className="absolute inset-x-0 bottom-12 flex items-end gap-3 px-6"
              style={{ opacity: 0.6 }}
              animate={prefersReducedMotion ? undefined : { x: [0, -12, 0] }}
              transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
            >
              {[...Array(8)].map((_, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-1.5 h-6 bg-emerald-700 rounded" />
                  <div className="w-6 h-6 -mt-1 bg-emerald-400 rounded-full" />
                </div>
              ))}
            </motion.div>

            {/* path */}
            <svg className="absolute inset-x-0 bottom-0 h-20" viewBox="0 0 800 160" preserveAspectRatio="none" aria-hidden>
              <path d="M0,120 C200,90 320,130 420,110 C540,84 660,108 800,90 L800,160 L0,160 Z" fill="rgba(148,163,184,0.45)" />
              <path d="M0,130 C220,110 350,140 470,120 C600,100 700,120 800,105" fill="none" stroke="rgba(100,116,139,0.45)" strokeWidth="2" />
            </svg>

            {/* destination building */}
            <motion.div
              className="absolute right-6 bottom-16 w-28 md:w-36 h-20 md:h-24 bg-white/90 border border-slate-200 rounded-lg shadow"
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="px-2 py-1 text-[10px] md:text-xs font-semibold text-slate-700">Gedung Kelas</div>
              <div className="grid grid-cols-3 gap-1 px-2">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-4 md:h-5 bg-sky-200/70 border border-sky-300/60 rounded-sm" />
                ))}
              </div>
            </motion.div>

            {/* student marker */}
            <motion.div
              className="absolute bottom-16 left-0"
              animate={prefersReducedMotion ? undefined : { x: ['-5%', '105%'] }}
              transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
            >
              <motion.div
                className="relative flex items-center gap-2"
                animate={prefersReducedMotion ? undefined : { y: [0, -2, 0, 2, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-sky-500 to-indigo-500 border border-white shadow-md" />
                <GraduationCap className="text-slate-700/90" size={16} />
              </motion.div>
              <div className="absolute top-7 left-1.5 w-6 h-2 bg-slate-400/40 rounded-full blur-[1px]" />
            </motion.div>
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
