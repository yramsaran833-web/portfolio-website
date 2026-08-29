'use client'
import { useState } from 'react'
import { updateSiteSettings, uploadSettingImage } from './actions'
import { Loader2 } from 'lucide-react'
import Image from 'next/image'

export function SettingsForm({ initialData }: { initialData: any }) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(initialData)
  const [msg, setMsg] = useState('')

  async function handleSave() {
    setLoading(true)
    setMsg('')
    const res = await updateSiteSettings(data)
    if (res?.error) setMsg('Error: ' + res.error)
    else setMsg('Settings saved successfully.')
    setLoading(false)
  }

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>, field: 'logo_url' | 'profile_photo_url') {
    const file = e.target.files?.[0]
    if (!file) return
    setLoading(true)
    const fd = new FormData()
    fd.append('file', file)
    const res = await uploadSettingImage(fd, field)
    if (res?.url) setData({ ...data, [field]: res.url })
    else if (res?.error) alert(res.error)
    setLoading(false)
  }

  return (
    <div className="bg-[#050812] border border-gray-800 rounded-lg p-6 space-y-8">
      {msg && <div className={`p-4 rounded-md text-sm ${msg.includes('Error') ? 'bg-red-500/10 text-red-500' : 'bg-green-500/10 text-green-500'}`}>{msg}</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="font-medium text-white border-b border-gray-800 pb-2">General Information</h3>
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Site Name</label>
            <input value={data.site_name || ''} onChange={e => setData({...data, site_name: e.target.value})} className="w-full bg-[#0a0f1d] border border-gray-800 rounded-md py-2 px-3 text-white focus:border-[#d4af37] outline-none" />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Contact Email</label>
            <input value={data.contact_email || ''} onChange={e => setData({...data, contact_email: e.target.value})} className="w-full bg-[#0a0f1d] border border-gray-800 rounded-md py-2 px-3 text-white focus:border-[#d4af37] outline-none" />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Contact Phone</label>
            <input value={data.contact_phone || ''} onChange={e => setData({...data, contact_phone: e.target.value})} className="w-full bg-[#0a0f1d] border border-gray-800 rounded-md py-2 px-3 text-white focus:border-[#d4af37] outline-none" />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-400">WhatsApp Number</label>
            <input value={data.whatsapp_number || ''} onChange={e => setData({...data, whatsapp_number: e.target.value})} className="w-full bg-[#0a0f1d] border border-gray-800 rounded-md py-2 px-3 text-white focus:border-[#d4af37] outline-none" />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium text-white border-b border-gray-800 pb-2">Branding & Media</h3>
          <div className="space-y-2">
            <label className="text-sm text-gray-400 block">Logo</label>
            {data.logo_url && <img src={data.logo_url} alt="Logo" className="h-12 object-contain bg-gray-900 p-2 rounded border border-gray-800 mb-2" />}
            <input type="file" onChange={e => handleUpload(e, 'logo_url')} className="text-sm text-gray-400" />
          </div>
          <div className="space-y-2 pt-4">
            <label className="text-sm text-gray-400 block">Profile Photo</label>
            {data.profile_photo_url && <img src={data.profile_photo_url} alt="Profile" className="h-20 w-20 object-cover rounded-full bg-gray-900 border border-gray-800 mb-2" />}
            <input type="file" onChange={e => handleUpload(e, 'profile_photo_url')} className="text-sm text-gray-400" />
          </div>
        </div>

        <div className="md:col-span-2 space-y-4 pt-4 border-t border-gray-800">
          <h3 className="font-medium text-white pb-2">About (Biography / Mission / Vision)</h3>
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Biography</label>
            <textarea value={data.biography || ''} onChange={e => setData({...data, biography: e.target.value})} rows={4} className="w-full bg-[#0a0f1d] border border-gray-800 rounded-md py-2 px-3 text-white focus:border-[#d4af37] outline-none" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Mission</label>
              <textarea value={data.mission || ''} onChange={e => setData({...data, mission: e.target.value})} rows={3} className="w-full bg-[#0a0f1d] border border-gray-800 rounded-md py-2 px-3 text-white focus:border-[#d4af37] outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Vision</label>
              <textarea value={data.vision || ''} onChange={e => setData({...data, vision: e.target.value})} rows={3} className="w-full bg-[#0a0f1d] border border-gray-800 rounded-md py-2 px-3 text-white focus:border-[#d4af37] outline-none" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-4 border-t border-gray-800">
        <button onClick={handleSave} disabled={loading} className="bg-[#d4af37] text-black px-6 py-2 rounded-md font-medium hover:bg-[#d4af37]/90 transition-colors disabled:opacity-50 flex items-center">
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Save Settings
        </button>
      </div>
    </div>
  )
}
