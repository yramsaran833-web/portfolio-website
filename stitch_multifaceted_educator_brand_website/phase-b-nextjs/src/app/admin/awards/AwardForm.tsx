'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { awardSchema, type AwardFormValues } from '@/lib/validations/awards'
import { createAward, updateAward, uploadAwardImage } from './actions'
import { Loader2, Image as ImageIcon } from 'lucide-react'
import Image from 'next/image'

interface AwardFormProps {
  initialData?: Partial<AwardFormValues> & { id?: string }
}

export function AwardForm({ initialData }: AwardFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [imagePreview, setImagePreview] = useState<string | null>(initialData?.image_url || null)
  const [uploadingImage, setUploadingImage] = useState(false)

  const form = useForm({
    resolver: zodResolver(awardSchema),
    defaultValues: {
      title: initialData?.title || '',
      issuer: initialData?.issuer || '',
      issue_date: initialData?.issue_date || '',
      image_url: initialData?.image_url || '',
      description: initialData?.description || '',
      sort_order: initialData?.sort_order || 0,
    }
  })

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    setUploadingImage(true)
    const formData = new FormData()
    formData.append('image', file)

    const res = await uploadAwardImage(formData)
    setUploadingImage(false)

    if (res.error) {
      alert(res.error)
    } else if (res.url) {
      setImagePreview(res.url)
      form.setValue('image_url', res.url)
    }
  }

  async function onSubmit(data: AwardFormValues) {
    setIsSubmitting(true)
    setErrorMsg('')
    
    let res
    if (initialData?.id) {
      res = await updateAward(initialData.id, data)
    } else {
      res = await createAward(data)
    }

    if (res?.error) {
      setErrorMsg(res.error)
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      {errorMsg && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-md text-sm">
          {errorMsg}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-[#050812] border border-gray-800 rounded-lg p-6 space-y-4">
            <h3 className="font-medium text-white border-b border-gray-800 pb-2">Award Details</h3>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Title / Name *</label>
              <input 
                {...form.register('title')}
                className="w-full bg-[#0a0f1d] border border-gray-800 rounded-md py-2 px-3 text-white focus:outline-none focus:border-[#d4af37]"
                placeholder="E.g., Best Educator Award"
              />
              {form.formState.errors.title && (
                <p className="text-xs text-red-500">{form.formState.errors.title.message as string}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Issuer / Organization</label>
              <input 
                {...form.register('issuer')}
                className="w-full bg-[#0a0f1d] border border-gray-800 rounded-md py-2 px-3 text-white focus:outline-none focus:border-[#d4af37]"
                placeholder="E.g., Ministry of Education"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Description</label>
              <textarea 
                {...form.register('description')}
                rows={4}
                className="w-full bg-[#0a0f1d] border border-gray-800 rounded-md py-2 px-3 text-white focus:outline-none focus:border-[#d4af37]"
                placeholder="Additional details..."
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[#050812] border border-gray-800 rounded-lg p-4 space-y-4">
            <h3 className="font-medium text-white border-b border-gray-800 pb-2">Settings</h3>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Issue Date</label>
              <input 
                type="date"
                {...form.register('issue_date')}
                className="w-full bg-[#0a0f1d] border border-gray-800 rounded-md py-2 px-3 text-white focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Sort Order</label>
              <input 
                type="number"
                {...form.register('sort_order')}
                className="w-full bg-[#0a0f1d] border border-gray-800 rounded-md py-2 px-3 text-white focus:outline-none focus:border-[#d4af37]"
              />
            </div>
          </div>

          <div className="bg-[#050812] border border-gray-800 rounded-lg p-4 space-y-4">
            <h3 className="font-medium text-white border-b border-gray-800 pb-2">Award Image</h3>
            <div className="space-y-4">
              {imagePreview ? (
                <div className="relative aspect-video rounded-md overflow-hidden bg-gray-900 border border-gray-800 max-w-lg">
                  <Image src={imagePreview} alt="Preview" fill className="object-contain" />
                  <button 
                    type="button" 
                    onClick={() => { setImagePreview(null); form.setValue('image_url', '') }}
                    className="absolute top-2 right-2 bg-black/50 hover:bg-black/80 text-white text-xs px-2 py-1 rounded"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <div className="aspect-video max-w-lg rounded-md bg-[#0a0f1d] border border-gray-800 border-dashed flex flex-col items-center justify-center text-gray-500">
                  <ImageIcon className="h-10 w-10 mb-2 opacity-50" />
                  <span className="text-sm">No image uploaded</span>
                </div>
              )}
              
              <input type="hidden" {...form.register('image_url')} />
              
              <label className="block text-center w-full px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm rounded-md cursor-pointer transition-colors">
                {uploadingImage ? 'Uploading...' : 'Choose File'}
                <input type="file" accept="image/*" className="hidden" disabled={uploadingImage} onChange={handleImageUpload} />
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-4 border-t border-gray-800">
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-[#d4af37] text-black px-6 py-2 rounded-md font-medium hover:bg-[#d4af37]/90 transition-colors disabled:opacity-50 flex items-center"
        >
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {initialData?.id ? 'Update Award' : 'Save Award'}
        </button>
      </div>
    </form>
  )
}
