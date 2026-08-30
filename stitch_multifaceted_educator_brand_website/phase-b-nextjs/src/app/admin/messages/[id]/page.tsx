import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { MessageActions } from './MessageActions'
import { updateMessageStatus } from '../actions'

export default async function ViewMessagePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()
  const { data: m, error } = await supabase.from('contact_messages').select('*').eq('id', id).single()

  if (error || !m) notFound()

  // Auto-mark as read if new
  if (!m.is_read) {
    await updateMessageStatus(id, true)
    m.is_read = true
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/messages" className="text-gray-400 hover:text-white"><ArrowLeft className="h-5 w-5" /></Link>
          <h2 className="text-2xl font-bold text-white">View Message</h2>
        </div>
        <MessageActions id={m.id} isRead={m.is_read} />
      </div>

      <div className="bg-[#050812] border border-gray-800 rounded-lg p-6 space-y-6 text-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-xs text-gray-500 uppercase">From</p>
            <p className="text-white font-medium">{m.name}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase">Email</p>
            <p className="text-[#d4af37]"><a href={`mailto:${m.email}`}>{m.email}</a></p>
          </div>

          <div>
            <p className="text-xs text-gray-500 uppercase">Date</p>
            <p>{new Date(m.created_at).toLocaleString()}</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <p className="text-xs text-gray-500 uppercase mb-2">Subject</p>
          <p className="text-white font-medium">{m.subject || 'No Subject'}</p>
        </div>

        <div>
          <p className="text-xs text-gray-500 uppercase mb-2">Message</p>
          <div className="bg-[#0a0f1d] p-4 rounded-md whitespace-pre-wrap">{m.message}</div>
        </div>
      </div>
    </div>
  )
}
