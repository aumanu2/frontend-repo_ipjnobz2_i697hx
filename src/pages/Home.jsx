import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { GraduationCap, ShieldCheck, Sparkles, ArrowRight, Users, Library } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50">
      <Navbar />

      {/* Animated background orbs */}
      <motion.div aria-hidden initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <motion.div
          className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-sky-300/30 blur-3xl"
          animate={{ x: [0, 40, -20, 0], y: [0, 20, -10, 0], scale: [1, 1.08, 0.96, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="pointer-events-none absolute bottom-0 -right-16 h-[28rem] w-[28rem] rounded-full bg-indigo-300/30 blur-3xl"
          animate={{ x: [0, -50, 25, 0], y: [0, -10, 30, 0], scale: [1, 1.05, 0.98, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="pointer-events-none absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-cyan-200/40 blur-3xl"
          animate={{ rotate: [0, 60, -45, 0] }}
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

        {/* Scene: Mahasiswa berjalan menuju kelas */}
        <motion.div
          className="relative mt-16 h-40 md:h-48 rounded-3xl overflow-hidden border border-white/50 bg-gradient-to-r from-sky-100/70 to-indigo-100/60 backdrop-blur"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {/* Jalan */}
          <div className="absolute bottom-0 left-0 right-0 h-10 md:h-12 bg-slate-200/80" />

          {/* Pohon sederhana */}
          <div className="absolute bottom-10 left-4 hidden sm:block">
            <div className="w-2 h-8 bg-emerald-700 rounded" />
            <div className="w-8 h-8 -mt-1 bg-emerald-400 rounded-full" />
          </div>

          {/* Gedung kelas (tujuan) */}
          <motion.div
            className="absolute bottom-10 right-4 w-28 md:w-36 h-20 md:h-24 bg-white/90 border border-slate-200 rounded-lg shadow"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="px-2 py-1 text-[10px] md:text-xs font-semibold text-slate-700">Gedung Kelas</div>
            <div className="grid grid-cols-3 gap-1 px-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-4 md:h-5 bg-sky-200/70 border border-sky-300/60 rounded-sm" />
              ))}
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-2 bg-slate-300/90 rounded-full" />
          </motion.div>

          {/* Mahasiswa berjalan */}
          <motion.div
            aria-label="Mahasiswa berjalan menuju kelas"
            className="absolute bottom-10 left-[-80px] md:left-[-100px]"
            animate={{ x: ['0%', '110%'] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.div
              className="relative flex items-end"
              animate={{ y: [0, -2, 0, 2, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* tubuh */}
              <div className="w-6 h-10 md:w-7 md:h-12 bg-sky-500 rounded-md shadow-md border border-sky-600/30" />
              {/* kepala */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-6 h-6 md:w-7 md:h-7 bg-amber-200 rounded-full border border-amber-300" />
              {/* topi wisuda */}
              <GraduationCap className="absolute -top-7 left-1/2 -translate-x-1/2 text-slate-700" size={18} />
              {/* tas */}
              <div className="absolute top-0 -left-3 w-3 h-5 md:w-3.5 md:h-6 bg-indigo-500 rounded-sm shadow border border-indigo-600/30" />
              {/* kaki (ayunan) */}
              <motion.div className="absolute -bottom-1 left-0 w-10 h-2" animate={{ rotate: [8, -8, 8] }} transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}>
                <div className="absolute left-0 w-4 h-1 bg-slate-700/70 rounded-full" />
                <div className="absolute left-5 w-4 h-1 bg-slate-700/70 rounded-full" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Awan bergerak */}
          <motion.div
            className="absolute top-4 left-4 w-16 h-6 bg-white/80 rounded-full blur-sm"
            animate={{ x: [0, 40, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-6 left-24 w-10 h-4 bg-white/80 rounded-full blur-[2px]"
            animate={{ x: [0, 60, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
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
