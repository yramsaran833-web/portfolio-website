'use client'
import { useState } from 'react'
import { Trash2 } from 'lucide-react'
import { deleteBlogPost } from './actions'

export function DeletePostButton({ id, title }: { id: string, title: string }) {
  const [isDeleting, setIsDeleting] = useState(false)

  async function handleDelete() {
    if (!confirm(`Are you sure you want to delete "${title}"? This cannot be undone.`)) return
    
    setIsDeleting(true)
    const res = await deleteBlogPost(id)
    if (res?.error) {
      alert('Error deleting post: ' + res.error)
      setIsDeleting(false)
    }
  }

  return (
    <button 
      onClick={handleDelete}
      disabled={isDeleting}
      className="text-red-400 hover:text-red-300 transition-colors disabled:opacity-50" 
      title="Delete"
    >
      <Trash2 className="h-4 w-4" />
    </button>
  )
}
