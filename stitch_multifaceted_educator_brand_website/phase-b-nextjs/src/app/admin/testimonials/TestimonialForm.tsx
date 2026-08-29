'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { testimonialSchema, type TestimonialFormValues } from '@/lib/validations/testimonials'
import { createTestimonial, updateTestimonial, uploadTestimonialImage } from './actions'
import { Loader2, User as UserIcon } from 'lucide-react'
import Image from 'next/image'

interface TestimonialFormProps {
  initialData?: Partial<TestimonialFormValues> & { id?: string }
}

export function TestimonialForm({ initialData }: TestimonialFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [imagePreview, setImagePreview] = useState<string | null>(initialData?.avatar_url || null)
  const [uploadingImage, setUploadingImage] = useState(false)

  const form = useForm({
    resolver: zodResolver(testimonialSchema),
    defaultValues: {
      client_name: initialData?.client_name || '',
      client_role: initialData?.client_role || '',
      content: initialData?.content || '',
      avatar_url: initialData?.avatar_url || '',
      rating: initialData?.rating || 5,
      is_featured: initialData?.is_featured || false,
      sort_order: initialData?.sort_order || 0,
    }
  })

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    setUploadingImage(true)
    const formData = new FormData()
    formData.append('image', file)

    const res = await uploadTestimonialImage(formData)
    setUploadingImage(false)

    if (res.error) {
      alert(res.error)
    } else if (res.url) {
      setImagePreview(res.url)
      form.setValue('avatar_url', res.url)
    }
  }

  async function onSubmit(data: TestimonialFormValues) {
    setIsSubmitting(true)
    setErrorMsg('')
    
    let res
    if (initialData?.id) {
      res = await updateTestimonial(initialData.id, data)
    } else {
      res = await createTestimonial(data)
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
            <h3 className="font-medium text-white border-b border-gray-800 pb-2">Testimonial Content</h3>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Client Name *</label>
              <input 
                {...form.register('client_name')}
                className="w-full bg-[#0a0f1d] border border-gray-800 rounded-md py-2 px-3 text-white focus:outline-none focus:border-[#d4af37]"
                placeholder="Name"
              />
              {form.formState.errors.client_name && (
                <p className="text-xs text-red-500">{form.formState.errors.client_name.message as string}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Client Role / Relationship</label>
              <input 
                {...form.register('client_role')}
                className="w-full bg-[#0a0f1d] border border-gray-800 rounded-md py-2 px-3 text-white focus:outline-none focus:border-[#d4af37]"
                placeholder="E.g., Student, Parent, Colleague"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Content *</label>
              <textarea 
                {...form.register('content')}
                rows={6}
                className="w-full bg-[#0a0f1d] border border-gray-800 rounded-md py-2 px-3 text-white focus:outline-none focus:border-[#d4af37]"
                placeholder="The testimonial text..."
              />
              {form.formState.errors.content && (
                <p className="text-xs text-red-500">{form.formState.errors.content.message as string}</p>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[#050812] border border-gray-800 rounded-lg p-4 space-y-4">
            <h3 className="font-medium text-white border-b border-gray-800 pb-2">Settings</h3>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Rating (1-5)</label>
              <input 
                type="number"
                min="1" max="5"
                {...form.register('rating')}
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

            <div className="flex items-center space-x-2 pt-2">
              <input 
                type="checkbox" 
                id="is_featured"
                {...form.register('is_featured')}
                className="rounded border-gray-800 text-[#d4af37] focus:ring-[#d4af37]"
              />
              <label htmlFor="is_featured" className="text-sm font-medium text-gray-400">
                Featured Testimonial
              </label>
            </div>
          </div>

          <div className="bg-[#050812] border border-gray-800 rounded-lg p-4 space-y-4">
            <h3 className="font-medium text-white border-b border-gray-800 pb-2">Avatar</h3>
            <div className="space-y-4">
              {imagePreview ? (
                <div className="relative h-24 w-24 rounded-full overflow-hidden bg-gray-900 border border-gray-800 mx-auto">
                  <Image src={imagePreview} alt="Preview" fill className="object-cover" />
                  <button 
                    type="button" 
                    onClick={() => { setImagePreview(null); form.setValue('avatar_url', '') }}
                    className="absolute top-0 right-0 w-full h-full bg-black/50 hover:bg-black/70 text-white text-xs opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <div className="h-24 w-24 rounded-full bg-[#0a0f1d] border border-gray-800 border-dashed mx-auto flex flex-col items-center justify-center text-gray-500">
                  <UserIcon className="h-8 w-8 mb-1 opacity-50" />
                </div>
              )}
              
              <input type="hidden" {...form.register('avatar_url')} />
              
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
          {initialData?.id ? 'Update Testimonial' : 'Save Testimonial'}
        </button>
      </div>
    </form>
  )
}
