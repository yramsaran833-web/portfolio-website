'use client'
import { useState } from 'react'
import { updateAppointment, deleteAppointment } from './actions'
import { useRouter } from 'next/navigation'

export function AppointmentForm({ item }: { item: any }) {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(item.status)
  const [notes, setNotes] = useState(item.admin_notes || '')
  const router = useRouter()

  async function handleSave() {
    setLoading(true)
    const res = await updateAppointment(item.id, status as any, notes)
    if (res?.error) {
      alert(res.error)
      setLoading(false)
    }
  }

  async function handleDelete() {
    if (!confirm('Are you sure you want to delete this appointment?')) return
    setLoading(true)
    const res = await deleteAppointment(item.id)
    if (res?.error) {
      alert(res.error)
      setLoading(false)
    } else {
      router.push('/admin/appointments')
    }
  }

  return (
    <div className="bg-[#050812] border border-gray-800 rounded-lg p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
        <div><p className="text-xs text-gray-500 uppercase">Client Name</p><p className="font-medium text-white">{item.name}</p></div>
        <div><p className="text-xs text-gray-500 uppercase">Email / Phone</p><p>{item.email} <br/> {item.phone || 'N/A'}</p></div>
        <div><p className="text-xs text-gray-500 uppercase">Requested Date</p><p>{new Date(item.requested_date).toLocaleDateString()}</p></div>
        <div><p className="text-xs text-gray-500 uppercase">Requested Time</p><p className="text-[#d4af37]">{item.requested_time || 'N/A'}</p></div>
      </div>
      <div className="border-t border-gray-800 pt-6">
        <p className="text-xs text-gray-500 uppercase mb-2">Reason</p>
        <div className="bg-[#0a0f1d] p-4 rounded-md text-gray-300 whitespace-pre-wrap">{item.reason}</div>
      </div>
      <div className="border-t border-gray-800 pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Update Status</label>
          <select value={status} onChange={e => setStatus(e.target.value)} className="w-full bg-[#0a0f1d] border border-gray-800 rounded-md py-2 px-3 text-white focus:outline-none focus:border-[#d4af37]">
            <option value="new">New</option>
            <option value="confirmed">Confirmed</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Admin Notes (Private)</label>
          <textarea value={notes} onChange={e => setNotes(e.target.value)} rows={3} className="w-full bg-[#0a0f1d] border border-gray-800 rounded-md py-2 px-3 text-white focus:outline-none focus:border-[#d4af37]" placeholder="Add private notes here..." />
        </div>
      </div>
      <div className="flex justify-between pt-4 border-t border-gray-800">
        <button onClick={handleDelete} disabled={loading} type="button" className="text-red-400 hover:text-red-300 text-sm">Delete</button>
        <button onClick={handleSave} disabled={loading} type="button" className="bg-[#d4af37] text-black px-6 py-2 rounded-md font-medium hover:bg-[#d4af37]/90 transition-colors">
          {loading ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </div>
  )
}
