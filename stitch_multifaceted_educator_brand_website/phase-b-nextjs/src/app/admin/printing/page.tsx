import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import Image from 'next/image'
import { Plus, Edit, Trash2 } from 'lucide-react'
import { deletePrintingProject } from './actions'

export const metadata = {
  title: 'Printing Projects | Admin Dashboard',
}

export default async function PrintingAdminPage() {
  const supabase = await createClient()

  const { data: projects } = await supabase
    .from('printing_projects')
    .select('*')
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: false })

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Printing Press Projects</h1>
          <p className="text-white-variant mt-1">Manage images for United Digital Printing Press</p>
        </div>
        <Link
          href="/admin/printing/new"
          className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Project
        </Link>
      </div>

      <div className="bg-surface border border-white/5 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-white-variant">
              <tr>
                <th className="px-6 py-4 font-medium">Project</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Order</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {projects?.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-white/40">
                    No printing projects found. Add one to get started.
                  </td>
                </tr>
              )}
              {projects?.map((project) => (
                <tr key={project.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-white/10 shrink-0 bg-black/50">
                        {project.image_url ? (
                          <Image src={project.image_url} alt={project.title} fill className="object-cover" />
                        ) : null}
                      </div>
                      <div>
                        <p className="font-medium text-white">{project.title}</p>
                        {project.description && (
                          <p className="text-white/40 text-xs mt-1 truncate max-w-[200px]">{project.description}</p>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      project.status === 'published' ? 'bg-green-500/10 text-green-400' :
                      project.status === 'draft' ? 'bg-yellow-500/10 text-yellow-400' :
                      'bg-white/10 text-white-variant'
                    }`}>
                      {project.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-white-variant">
                    {project.sort_order}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/printing/${project.id}/edit`}
                        className="p-2 text-white-variant hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </Link>
                      <form action={async () => {
                        'use server'
                        await deletePrintingProject(project.id)
                      }}>
                        <button
                          type="submit"
                          className="p-2 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg transition-colors"
                          onClick={(e) => {
                            if(!confirm('Are you sure you want to delete this project?')) e.preventDefault()
                          }}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
