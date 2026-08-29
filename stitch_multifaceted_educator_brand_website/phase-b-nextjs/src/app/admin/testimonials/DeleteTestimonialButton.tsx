'use client'
import { useState } from 'react'
import { Trash2 } from 'lucide-react'
import { deleteTestimonial } from './actions'

export function DeleteTestimonialButton({ id, name }: { id: string, name: string }) {
  const [isDeleting, setIsDeleting] = useState(false)

  async function handleDelete() {
    if (!confirm(`Are you sure you want to delete testimonial from "${name}"?`)) return
    
    setIsDeleting(true)
    const res = await deleteTestimonial(id)
    if (res?.error) {
      alert('Error deleting testimonial: ' + res.error)
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
