import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function App() {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    nik: '',
    gender: 'Laki-laki',
    birth_place: '',
    birth_date: '',
    address: '',
    high_school: '',
    graduation_year: new Date().getFullYear(),
    study_program: '',
    study_degree: 'S1',
    intake: 'Ganjil',
    notes: ''
  })

  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setMessage(null)
    try {
      const res = await fetch(`${API_BASE}/api/applicants`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          graduation_year: Number(form.graduation_year)
        })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Gagal mengirim pendaftaran')
      setMessage({ type: 'success', text: 'Pendaftaran berhasil dikirim. Kode: ' + data.id })
      setForm({
        full_name: '', email: '', phone: '', nik: '', gender: 'Laki-laki', birth_place: '', birth_date: '', address: '', high_school: '', graduation_year: new Date().getFullYear(), study_program: '', study_degree: 'S1', intake: 'Ganjil', notes: ''
      })
    } catch (err) {
      setMessage({ type: 'error', text: err.message })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-100 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-sky-700">Pendaftaran Mahasiswa Baru</h1>
          <p className="text-gray-600">Universitas Mercu Buana Jakarta</p>
        </div>

        {message && (
          <div className={`${message.type === 'success' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'} border p-3 rounded mb-6`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium">Nama Lengkap</label>
            <input name="full_name" value={form.full_name} onChange={handleChange} required className="mt-1 w-full border rounded px-3 py-2" placeholder="Nama sesuai KTP" />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full border rounded px-3 py-2" placeholder="email@contoh.com" />
          </div>
          <div>
            <label className="block text-sm font-medium">No. HP/WhatsApp</label>
            <input name="phone" value={form.phone} onChange={handleChange} required className="mt-1 w-full border rounded px-3 py-2" placeholder="08xxxxxxxxxx" />
          </div>

          <div>
            <label className="block text-sm font-medium">NIK</label>
            <input name="nik" value={form.nik} onChange={handleChange} required className="mt-1 w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Jenis Kelamin</label>
            <select name="gender" value={form.gender} onChange={handleChange} className="mt-1 w-full border rounded px-3 py-2">
              <option>Laki-laki</option>
              <option>Perempuan</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Tempat Lahir</label>
            <input name="birth_place" value={form.birth_place} onChange={handleChange} required className="mt-1 w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Tanggal Lahir</label>
            <input type="date" name="birth_date" value={form.birth_date} onChange={handleChange} required className="mt-1 w-full border rounded px-3 py-2" />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium">Alamat</label>
            <textarea name="address" value={form.address} onChange={handleChange} required className="mt-1 w-full border rounded px-3 py-2" rows="2" />
          </div>

          <div>
            <label className="block text-sm font-medium">Asal Sekolah</label>
            <input name="high_school" value={form.high_school} onChange={handleChange} required className="mt-1 w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Tahun Lulus</label>
            <input type="number" name="graduation_year" value={form.graduation_year} onChange={handleChange} required className="mt-1 w-full border rounded px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium">Program Studi</label>
            <input name="study_program" value={form.study_program} onChange={handleChange} required className="mt-1 w-full border rounded px-3 py-2" placeholder="mis. Teknik Informatika" />
          </div>
          <div>
            <label className="block text-sm font-medium">Jenjang</label>
            <select name="study_degree" value={form.study_degree} onChange={handleChange} className="mt-1 w-full border rounded px-3 py-2">
              <option>S1</option>
              <option>S2</option>
              <option>D3</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Periode</label>
            <select name="intake" value={form.intake} onChange={handleChange} className="mt-1 w-full border rounded px-3 py-2">
              <option>Ganjil</option>
              <option>Genap</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Catatan (opsional)</label>
            <input name="notes" value={form.notes} onChange={handleChange} className="mt-1 w-full border rounded px-3 py-2" />
          </div>

          <div className="md:col-span-2 flex items-center justify-between pt-4">
            <a href="/test" className="text-sm text-sky-600 hover:underline">Cek Koneksi Backend</a>
            <button disabled={submitting} className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-2 rounded disabled:opacity-60">
              {submitting ? 'Mengirim...' : 'Kirim Pendaftaran'}
            </button>
          </div>
        </form>

        <RecentSubmissions />
      </div>
    </div>
  )
}

function RecentSubmissions() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  const load = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/applicants`)
      const data = await res.json()
      setItems(Array.isArray(data) ? data.slice(0, 5) : [])
    } catch (e) {
      setItems([])
    } finally {
      setLoading(false)
    }
  }

  useState(() => { load() }, [])

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Pendaftaran Terbaru</h2>
      {loading ? (
        <p className="text-gray-500">Memuat...</p>
      ) : items.length === 0 ? (
        <p className="text-gray-500">Belum ada data.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-2 text-left border">Nama</th>
                <th className="p-2 text-left border">Email</th>
                <th className="p-2 text-left border">Program Studi</th>
                <th className="p-2 text-left border">Tahun</th>
              </tr>
            </thead>
            <tbody>
              {items.map((it) => (
                <tr key={it.id} className="odd:bg-white even:bg-gray-50">
                  <td className="p-2 border">{it.full_name}</td>
                  <td className="p-2 border">{it.email}</td>
                  <td className="p-2 border">{it.study_program} ({it.study_degree})</td>
                  <td className="p-2 border">{it.graduation_year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default App
