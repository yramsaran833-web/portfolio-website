'use client'
import { useState } from 'react'
import { updateMessageStatus, deleteMessage } from '../actions'

export function MessageActions({ id, isRead }: { id: string, isRead: boolean }) {
  const [loading, setLoading] = useState(false)

  async function handleToggleRead() {
    setLoading(true)
    await updateMessageStatus(id, !isRead)
    setLoading(false)
  }

  async function handleDelete() {
    if (!confirm('Are you sure you want to delete this message?')) return
    setLoading(true)
    await deleteMessage(id)
  }

  return (
    <div className="flex gap-4 items-center">
      <button 
        onClick={handleToggleRead} 
        disabled={loading}
        className="bg-[#0a0f1d] border border-gray-800 rounded-md py-1.5 px-3 text-sm text-white focus:outline-none focus:border-[#d4af37]"
      >
        {isRead ? 'Mark as Unread' : 'Mark as Read'}
      </button>
      <button onClick={handleDelete} disabled={loading} className="text-red-400 hover:text-red-300 text-sm">Delete Message</button>
    </div>
  )
}
