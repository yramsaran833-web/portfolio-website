import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { AppointmentForm } from '../../AppointmentForm'

export default async function EditAppointmentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()
  const { data: item } = await supabase.from('appointments').select('*').eq('id', id).single()

  if (!item) notFound()

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/appointments" className="text-gray-400 hover:text-white"><ArrowLeft className="h-5 w-5" /></Link>
        <h2 className="text-2xl font-bold text-white">Manage Appointment</h2>
      </div>
      <AppointmentForm item={item} />
    </div>
  )
}
