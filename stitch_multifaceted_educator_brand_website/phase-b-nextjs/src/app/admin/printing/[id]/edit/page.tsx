import { PrintingForm } from '../../PrintingForm'
import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'

export const metadata = {
  title: 'Edit Printing Project | Admin Dashboard',
}

interface EditPageProps {
  params: {
    id: string
  }
}

export default async function EditPrintingProjectPage({ params }: EditPageProps) {
  const supabase = await createClient()

  const { data: project } = await supabase
    .from('printing_projects')
    .select('*')
    .eq('id', params.id)
    .single()

  if (!project) {
    notFound()
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link
          href="/admin/printing"
          className="p-2 text-white-variant hover:text-white hover:bg-white/5 rounded-full transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-white">Edit Project</h1>
          <p className="text-white-variant mt-1">Update project details</p>
        </div>
      </div>

      <div className="bg-surface border border-white/5 p-6 sm:p-8 rounded-2xl">
        <PrintingForm initialData={project} />
      </div>
    </div>
  )
}
