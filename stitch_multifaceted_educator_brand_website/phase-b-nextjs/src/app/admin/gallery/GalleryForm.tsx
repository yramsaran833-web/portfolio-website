'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { galleryItemSchema, type GalleryItemFormValues } from '@/lib/validations/gallery'
import { createGalleryItem, updateGalleryItem, uploadGalleryImage, createMultipleGalleryItems } from './actions'
import { Loader2, Image as ImageIcon, X } from 'lucide-react'
import Image from 'next/image'

interface GalleryFormProps {
  initialData?: Partial<GalleryItemFormValues> & { id?: string }
  albums: { id: string, title: string }[]
}

export function GalleryForm({ initialData, albums }: GalleryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [imagePreviews, setImagePreviews] = useState<string[]>(initialData?.image_url ? [initialData.image_url] : [])
  const [uploadingImage, setUploadingImage] = useState(false)

  const form = useForm({
    resolver: zodResolver(galleryItemSchema),
    defaultValues: {
      title: initialData?.title || '',
      image_url: initialData?.image_url || '',
      album_id: initialData?.album_id || '',
    }
  })

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || [])
    if (files.length === 0) return

    setUploadingImage(true)
    const newPreviews = [...imagePreviews]

    for (const file of files) {
      const formData = new FormData()
      formData.append('image', file)

      const res = await uploadGalleryImage(formData)
      if (res.error) {
        alert(res.error)
      } else if (res.url) {
        newPreviews.push(res.url)
      }
    }

    setImagePreviews(newPreviews)
    if (newPreviews.length > 0) {
      form.setValue('image_url', newPreviews[0]) // just to satisfy form schema
      form.clearErrors('image_url')
    }
    setUploadingImage(false)
  }

  async function onSubmit(data: GalleryItemFormValues) {
    setIsSubmitting(true)
    setErrorMsg('')
    
    if (imagePreviews.length === 0) {
      form.setError('image_url', { message: 'At least one image is required' })
      setIsSubmitting(false)
      return
    }

    if (!data.album_id) data.album_id = null

    let res
    if (initialData?.id) {
      // Editing: Only use the first image
      data.image_url = imagePreviews[0]
      res = await updateGalleryItem(initialData.id, data)
    } else {
      // Creating: Can upload multiple
      const itemsToCreate = imagePreviews.map(url => ({
        ...data,
        image_url: url
      }))
      res = await createMultipleGalleryItems(itemsToCreate)
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
              {imagePreviews.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                  {imagePreviews.map((preview, idx) => (
                    <div key={idx} className="relative aspect-square rounded-md overflow-hidden bg-gray-900 border border-gray-800">
                      <Image src={preview} alt="Preview" fill className="object-cover" />
                      <button 
                        type="button" 
                        onClick={() => { 
                          const newPreviews = [...imagePreviews];
                          newPreviews.splice(idx, 1);
                          setImagePreviews(newPreviews);
                          if (newPreviews.length === 0) form.setValue('image_url', '');
                        }}
                        className="absolute top-2 right-2 bg-black/70 hover:bg-black text-white p-1 rounded-full"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              
              {imagePreviews.length === 0 && (
                <div className="aspect-video max-w-lg rounded-md bg-[#0a0f1d] border border-gray-800 border-dashed flex flex-col items-center justify-center text-gray-500">
                  <ImageIcon className="h-10 w-10 mb-2 opacity-50" />
                  <span className="text-sm">Select images to upload</span>
                </div>
              )}
              
              {form.formState.errors.image_url && (
                <p className="text-xs text-red-500">{form.formState.errors.image_url.message}</p>
              )}
              <input type="hidden" {...form.register('image_url')} />
              
              <label className="inline-block px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm rounded-md cursor-pointer transition-colors">
                {uploadingImage ? 'Uploading...' : 'Choose Files'}
                <input 
                  type="file" 
                  accept="image/*" 
                  multiple={!initialData?.id} 
                  className="hidden" 
                  disabled={uploadingImage} 
                  onChange={handleImageUpload} 
                />
              </label>
              {!initialData?.id && (
                <p className="text-xs text-gray-500 mt-2">You can select multiple photos at once.</p>
              )}
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
          </div>
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-6">
          <div className="bg-[#050812] border border-gray-800 rounded-lg p-4 space-y-4">
            <h3 className="font-medium text-white border-b border-gray-800 pb-2">Settings</h3>

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
