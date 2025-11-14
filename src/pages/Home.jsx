import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-sky-800 leading-tight">
            Pendaftaran Mahasiswa Baru UMB Jakarta
          </h1>
          <p className="mt-4 text-gray-600">
            Bergabunglah dengan komunitas kampus unggul. Daftar sekarang untuk masa depan yang lebih cerah.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/register" className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 rounded">Daftar Sekarang</Link>
            <Link to="/test" className="bg-white border hover:bg-gray-50 text-sky-700 font-semibold px-6 py-3 rounded">Cek Koneksi</Link>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800">Kenapa UMB Jakarta?</h3>
          <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
            <li>Program studi beragam dan relevan industri</li>
            <li>Fasilitas modern dan dosen berpengalaman</li>
            <li>Beasiswa dan kemitraan luas</li>
          </ul>
          <div className="mt-6 border-t pt-4 text-sm text-gray-500">
            Sudah pernah daftar? <Link to="/login" className="text-sky-600 hover:underline">Masuk</Link>
          </div>
        </div>
      </main>
    </div>
  )
}
