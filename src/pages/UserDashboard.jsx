import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function UserDashboard() {
  const [me, setMe] = useState(null)
  const [recent, setRecent] = useState([])
  const [error, setError] = useState('')

  const token = localStorage.getItem('token')

  useEffect(() => {
    const load = async () => {
      try {
        const meRes = await fetch(`${API_BASE}/auth/me`, { headers: { Authorization: `Bearer ${token}` } })
        if (!meRes.ok) throw new Error('Sesi berakhir, silakan login lagi')
        const meData = await meRes.json()
        setMe(meData)
        const appsRes = await fetch(`${API_BASE}/api/applicants?limit=5`)
        const apps = await appsRes.json()
        setRecent(Array.isArray(apps) ? apps : [])
      } catch (e) {
        setError(e.message)
      }
    }
    load()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-sky-800">Dashboard Pengguna</h1>
        {error && <p className="text-red-600 mt-2">{error}</p>}
        {me && (
          <div className="mt-4 bg-white rounded-lg shadow p-4">
            <p className="text-gray-700">Selamat datang, <span className="font-semibold">{me.full_name}</span></p>
            <p className="text-gray-500 text-sm">Peran: {me.role}</p>
          </div>
        )}

        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800">Pendaftaran Terbaru</h2>
          <div className="mt-3 bg-white rounded-lg shadow overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-2">Nama</th>
                  <th className="text-left p-2">Email</th>
                  <th className="text-left p-2">Program Studi</th>
                </tr>
              </thead>
              <tbody>
                {recent.map((r) => (
                  <tr key={r.id} className="border-t">
                    <td className="p-2">{r.full_name}</td>
                    <td className="p-2">{r.email}</td>
                    <td className="p-2">{r.study_program} ({r.study_degree})</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
