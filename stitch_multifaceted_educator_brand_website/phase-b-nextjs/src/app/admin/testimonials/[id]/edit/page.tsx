import { TestimonialForm } from '../../TestimonialForm'
import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'

export default async function EditTestimonialPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()
  
  const { data: item, error } = await supabase.from('testimonials').select('*').eq('id', id).single()

  if (error || !item) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Edit Testimonial</h2>
      </div>
      <TestimonialForm initialData={item} />
    </div>
  )
}
