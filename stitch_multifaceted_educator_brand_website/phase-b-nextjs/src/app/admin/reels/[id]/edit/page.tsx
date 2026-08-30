import { ReelForm } from '../../ReelForm'
import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'

export const metadata = {
  title: 'Edit Reel | Admin Dashboard',
}

interface EditPageProps {
  params: {
    id: string
  }
}

export default async function EditReelPage({ params }: EditPageProps) {
  const supabase = await createClient()

  const { data: reel } = await supabase
    .from('facebook_reels')
    .select('*')
    .eq('id', params.id)
    .single()

  if (!reel) {
    notFound()
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link
          href="/admin/reels"
          className="p-2 text-white-variant hover:text-white hover:bg-white/5 rounded-full transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-white">Edit Reel</h1>
          <p className="text-white-variant mt-1">Update reel details</p>
        </div>
      </div>

      <div className="bg-surface border border-white/5 p-6 sm:p-8 rounded-2xl">
        <ReelForm initialData={reel} />
      </div>
    </div>
  )
}
