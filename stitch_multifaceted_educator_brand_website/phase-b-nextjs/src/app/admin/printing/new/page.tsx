import { PrintingForm } from '../PrintingForm'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Add Printing Project | Admin Dashboard',
}

export default function NewPrintingProjectPage() {
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
          <h1 className="text-2xl font-bold text-white">Add New Project</h1>
          <p className="text-white-variant mt-1">Upload a new printing press work image</p>
        </div>
      </div>

      <div className="bg-surface border border-white/5 p-6 sm:p-8 rounded-2xl">
        <PrintingForm />
      </div>
    </div>
  )
}
