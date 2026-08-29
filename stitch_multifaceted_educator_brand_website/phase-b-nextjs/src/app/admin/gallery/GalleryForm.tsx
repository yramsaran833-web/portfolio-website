'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { galleryItemSchema, type GalleryItemFormValues } from '@/lib/validations/gallery'
import { createGalleryItem, updateGalleryItem, uploadGalleryImage } from './actions'
import { Loader2, Image as ImageIcon } from 'lucide-react'
import Image from 'next/image'

interface GalleryFormProps {
  initialData?: Partial<GalleryItemFormValues> & { id?: string }
  albums: { id: string, title: string }[]
}

export function GalleryForm({ initialData, albums }: GalleryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [imagePreview, setImagePreview] = useState<string | null>(initialData?.image_url || null)
  const [uploadingImage, setUploadingImage] = useState(false)

  const form = useForm({
    resolver: zodResolver(galleryItemSchema),
    defaultValues: {
      title: initialData?.title || '',
      description: initialData?.description || '',
      image_url: initialData?.image_url || '',
      album_id: initialData?.album_id || '',
      alt_text: initialData?.alt_text || '',
      is_featured: initialData?.is_featured || false,
      sort_order: initialData?.sort_order || 0,
      status: initialData?.status || 'unpublished',
    }
  })

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    setUploadingImage(true)
    const formData = new FormData()
    formData.append('image', file)

    const res = await uploadGalleryImage(formData)
    setUploadingImage(false)

    if (res.error) {
      alert(res.error)
    } else if (res.url) {
      setImagePreview(res.url)
      form.setValue('image_url', res.url)
      form.clearErrors('image_url')
    }
  }

  async function onSubmit(data: GalleryItemFormValues) {
    setIsSubmitting(true)
    setErrorMsg('')
    
    if (!data.image_url) {
      form.setError('image_url', { message: 'Image is required' })
      setIsSubmitting(false)
      return
    }

    if (!data.album_id) data.album_id = null

    let res
    if (initialData?.id) {
      res = await updateGalleryItem(initialData.id, data)
    } else {
      res = await createGalleryItem(data)
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
        
        {/* Main Details */}
        <div className="md:col-span-2 space-y-6">
          
          <div className="bg-[#050812] border border-gray-800 rounded-lg p-6 space-y-4">
            <h3 className="font-medium text-white border-b border-gray-800 pb-2 mb-4">Image File</h3>
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
                  <span className="text-sm">Select an image to upload</span>
                </div>
              )}
              
              {form.formState.errors.image_url && (
                <p className="text-xs text-red-500">{form.formState.errors.image_url.message}</p>
              )}
              <input type="hidden" {...form.register('image_url')} />
              
              <label className="inline-block px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm rounded-md cursor-pointer transition-colors">
                {uploadingImage ? 'Uploading...' : 'Choose File'}
                <input type="file" accept="image/*" className="hidden" disabled={uploadingImage} onChange={handleImageUpload} />
              </label>
            </div>
          </div>

          <div className="space-y-4 bg-[#050812] border border-gray-800 rounded-lg p-6">
            <h3 className="font-medium text-white border-b border-gray-800 pb-2">Information</h3>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Title (Optional)</label>
              <input 
                {...form.register('title')}
                className="w-full bg-[#0a0f1d] border border-gray-800 rounded-md py-2 px-3 text-white focus:outline-none focus:border-[#d4af37]"
                placeholder="Image title"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Description (Optional)</label>
              <textarea 
                {...form.register('description')}
                rows={3}
                className="w-full bg-[#0a0f1d] border border-gray-800 rounded-md py-2 px-3 text-white focus:outline-none focus:border-[#d4af37]"
                placeholder="Short description"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Alt Text (For accessibility/SEO)</label>
              <input 
                {...form.register('alt_text')}
                className="w-full bg-[#0a0f1d] border border-gray-800 rounded-md py-2 px-3 text-white focus:outline-none focus:border-[#d4af37]"
                placeholder="Describe the image"
              />
            </div>
          </div>
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-6">
          <div className="bg-[#050812] border border-gray-800 rounded-lg p-4 space-y-4">
            <h3 className="font-medium text-white border-b border-gray-800 pb-2">Settings</h3>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Status</label>
              <select 
                {...form.register('status')}
                className="w-full bg-[#0a0f1d] border border-gray-800 rounded-md py-2 px-3 text-white focus:outline-none focus:border-[#d4af37]"
              >
                <option value="unpublished">Unpublished</option>
                <option value="published">Published</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Album</label>
              <select 
                {...form.register('album_id')}
                className="w-full bg-[#0a0f1d] border border-gray-800 rounded-md py-2 px-3 text-white focus:outline-none focus:border-[#d4af37]"
              >
                <option value="">No Album</option>
                {albums.map(a => (
                  <option key={a.id} value={a.id}>{a.title}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Sort Order</label>
              <input 
                type="number"
                {...form.register('sort_order')}
                className="w-full bg-[#0a0f1d] border border-gray-800 rounded-md py-2 px-3 text-white focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            <div className="flex items-center space-x-2 pt-2">
              <input 
                type="checkbox" 
                id="is_featured"
                {...form.register('is_featured')}
                className="rounded border-gray-800 text-[#d4af37] focus:ring-[#d4af37]"
              />
              <label htmlFor="is_featured" className="text-sm font-medium text-gray-400">
                Featured Image
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
          {initialData?.id ? 'Update Item' : 'Save Item'}
        </button>
      </div>
    </form>
  )
}
