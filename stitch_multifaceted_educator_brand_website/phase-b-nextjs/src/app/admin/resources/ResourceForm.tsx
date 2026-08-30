'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { resourceSchema, type ResourceFormValues } from '@/lib/validations/resources'
import { createResource, updateResource, uploadResourceFile } from './actions'
import { Loader2, File as FileIcon } from 'lucide-react'
import Link from 'next/link'

interface ResourceFormProps {
  initialData?: Partial<ResourceFormValues> & { id?: string }
  categories: { id: string, name: string }[]
}

export function ResourceForm({ initialData, categories }: ResourceFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [fileUrlPreview, setFileUrlPreview] = useState<string | null>(initialData?.file_url || null)
  const [uploading, setUploading] = useState(false)

  const form = useForm({
    resolver: zodResolver(resourceSchema),
    defaultValues: {
      title: initialData?.title || '',
      description: initialData?.description || '',
      category_id: initialData?.category_id || '',
      file_url: initialData?.file_url || '',
      resource_type: initialData?.resource_type || 'pdf',
    }
  })

  const resourceType = form.watch('resource_type')

  async function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    const formData = new FormData()
    formData.append('file', file)

    const res = await uploadResourceFile(formData)
    setUploading(false)

    if (res.error) {
      alert(res.error)
    } else if (res.url) {
      setFileUrlPreview(res.url)
      form.setValue('file_url', res.url)
      form.clearErrors('file_url')
    }
  }

  async function onSubmit(data: any) {
    setIsSubmitting(true)
    setErrorMsg('')
    
    if (!data.file_url) {
      form.setError('file_url', { message: 'File is required' })
      setIsSubmitting(false)
      return
    }

    if (!data.category_id) data.category_id = null

    let res
    if (initialData?.id) {
      res = await updateResource(initialData.id, data)
    } else {
      res = await createResource(data)
    }

    if (res?.error) {
      setErrorMsg(res.error)
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      {errorMsg && <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-md text-sm">{errorMsg}</div>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-[#050812] border border-gray-800 rounded-lg p-6 space-y-4">
            <h3 className="font-medium text-white border-b border-gray-800 pb-2 mb-4">Resource File</h3>
            <div className="space-y-4">
              <div className="flex gap-4 mb-4">
                <label className="flex items-center gap-2 text-white cursor-pointer">
                  <input type="radio" value="pdf" {...form.register('resource_type')} className="text-primary" />
                  PDF File
                </label>
                <label className="flex items-center gap-2 text-white cursor-pointer">
                  <input type="radio" value="youtube" {...form.register('resource_type')} className="text-primary" />
                  YouTube URL
                </label>
              </div>

              {resourceType === 'pdf' ? (
                <>
                  {fileUrlPreview && !fileUrlPreview.includes('youtube') ? (
                    <div className="p-4 rounded-md bg-[#0a0f1d] border border-gray-800 flex items-center justify-between max-w-lg">
                      <div className="flex items-center text-gray-300">
                        <FileIcon className="h-5 w-5 mr-2 text-[#d4af37]" />
                        <span className="text-sm truncate max-w-[200px]">{fileUrlPreview.split('/').pop()}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <a href={fileUrlPreview} target="_blank" rel="noreferrer" className="text-xs text-[#d4af37] hover:underline">View</a>
                        <button type="button" onClick={() => { setFileUrlPreview(null); form.setValue('file_url', '') }} className="text-xs text-red-400 hover:underline">Remove</button>
                      </div>
                    </div>
                  ) : (
                    <div className="p-8 max-w-lg rounded-md bg-[#0a0f1d] border border-gray-800 border-dashed flex flex-col items-center justify-center text-gray-500">
                      <FileIcon className="h-10 w-10 mb-2 opacity-50" />
                      <span className="text-sm">Select a file to upload</span>
                    </div>
                  )}
                  
                  {form.formState.errors.file_url && <p className="text-xs text-red-500">{form.formState.errors.file_url.message as string}</p>}
                  <input type="hidden" {...form.register('file_url')} />
                  
                  <label className="inline-block px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm rounded-md cursor-pointer transition-colors">
                    {uploading ? 'Uploading...' : 'Choose File'}
                    <input type="file" className="hidden" disabled={uploading} onChange={handleFileUpload} />
                  </label>
                </>
              ) : (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">YouTube Video URL</label>
                  <input 
                    type="url" 
                    {...form.register('file_url')} 
                    placeholder="https://youtube.com/watch?v=..."
                    className="w-full bg-[#0a0f1d] border border-gray-800 rounded-md py-2 px-3 text-white focus:outline-none focus:border-[#d4af37]" 
                  />
                  {form.formState.errors.file_url && <p className="text-xs text-red-500">{form.formState.errors.file_url.message as string}</p>}
                </div>
              )}
            </div>
          </div>

          <div className="space-y-4 bg-[#050812] border border-gray-800 rounded-lg p-6">
            <h3 className="font-medium text-white border-b border-gray-800 pb-2">Information</h3>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Title *</label>
              <input {...form.register('title')} className="w-full bg-[#0a0f1d] border border-gray-800 rounded-md py-2 px-3 text-white focus:outline-none focus:border-[#d4af37]" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Description</label>
              <textarea {...form.register('description')} rows={3} className="w-full bg-[#0a0f1d] border border-gray-800 rounded-md py-2 px-3 text-white focus:outline-none focus:border-[#d4af37]" />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[#050812] border border-gray-800 rounded-lg p-4 space-y-4">
            <h3 className="font-medium text-white border-b border-gray-800 pb-2">Settings</h3>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Category</label>
              <select {...form.register('category_id')} className="w-full bg-[#0a0f1d] border border-gray-800 rounded-md py-2 px-3 text-white focus:outline-none focus:border-[#d4af37]">
                <option value="">No Category</option>
                {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-4 border-t border-gray-800">
        <button type="submit" disabled={isSubmitting} className="bg-[#d4af37] text-black px-6 py-2 rounded-md font-medium hover:bg-[#d4af37]/90 transition-colors disabled:opacity-50 flex items-center">
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {initialData?.id ? 'Update Resource' : 'Save Resource'}
        </button>
      </div>
    </form>
  )
}
