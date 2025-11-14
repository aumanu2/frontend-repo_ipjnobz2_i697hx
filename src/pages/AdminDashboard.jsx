import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function AdminDashboard() {
  const [me, setMe] = useState(null)
  const [apps, setApps] = useState([])
  const [error, setError] = useState('')
  const token = localStorage.getItem('token')

  const load = async () => {
    try {
      const meRes = await fetch(`${API_BASE}/auth/me`, { headers: { Authorization: `Bearer ${token}` } })
      if (!meRes.ok) throw new Error('Sesi berakhir, silakan login lagi')
      const meData = await meRes.json()
      setMe(meData)

      const listRes = await fetch(`${API_BASE}/admin/applicants`, { headers: { Authorization: `Bearer ${token}` } })
      if (!listRes.ok) throw new Error('Akses ditolak atau gagal memuat data')
      const list = await listRes.json()
      setApps(Array.isArray(list) ? list : [])
    } catch (e) {
      setError(e.message)
    }
  }

  useEffect(() => { load() }, [])

  const logout = () => { localStorage.removeItem('token'); window.location.href = '/login' }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-sky-800">Dashboard Admin</h1>
          <button onClick={logout} className="text-sm text-red-600 hover:underline">Keluar</button>
        </div>
        {error && <p className="text-red-600 mt-2">{error}</p>}
        {me && (
          <div className="mt-4 bg-white rounded-lg shadow p-4">
            <p className="text-gray-700">Halo, <span className="font-semibold">{me.full_name}</span> (Admin)</p>
            <p className="text-gray-500 text-sm">Email: {me.email}</p>
          </div>
        )}

        <div className="mt-6 bg-white rounded-lg shadow overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-2">Nama</th>
                <th className="text-left p-2">Email</th>
                <th className="text-left p-2">HP</th>
                <th className="text-left p-2">Program Studi</th>
                <th className="text-left p-2">Jenjang</th>
                <th className="text-left p-2">Tahun</th>
              </tr>
            </thead>
            <tbody>
              {apps.map((a) => (
                <tr key={a.id} className="border-t">
                  <td className="p-2">{a.full_name}</td>
                  <td className="p-2">{a.email}</td>
                  <td className="p-2">{a.phone}</td>
                  <td className="p-2">{a.study_program}</td>
                  <td className="p-2">{a.study_degree}</td>
                  <td className="p-2">{a.graduation_year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
