'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { printingProjectSchema, type PrintingProjectFormValues } from '@/lib/validations/printing'
import { createPrintingProject, updatePrintingProject, uploadPrintingImage } from './actions'
import { Loader2, Image as ImageIcon } from 'lucide-react'
import Image from 'next/image'

interface PrintingFormProps {
  initialData?: Partial<PrintingProjectFormValues> & { id?: string }
}

export function PrintingForm({ initialData }: PrintingFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [imagePreview, setImagePreview] = useState<string | null>(initialData?.image_url || null)
  const [uploadingImage, setUploadingImage] = useState(false)

  const form = useForm({
    resolver: zodResolver(printingProjectSchema),
    defaultValues: {
      title: initialData?.title || '',
      description: initialData?.description || '',
      image_url: initialData?.image_url || '',
      sort_order: initialData?.sort_order || 0,
      status: initialData?.status || 'published',
    },
  })

  // Compress image helper
  const compressImage = async (file: File): Promise<File> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new window.Image();
        img.src = event.target?.result as string;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;
          
          const MAX_WIDTH = 1920;
          const MAX_HEIGHT = 1080;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height = Math.round((height *= MAX_WIDTH / width));
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width = Math.round((width *= MAX_HEIGHT / height));
              height = MAX_HEIGHT;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, width, height);

          canvas.toBlob((blob) => {
            if (blob) {
              const compressedFile = new File([blob], file.name.replace(/\.[^/.]+$/, "") + ".jpg", {
                type: 'image/jpeg',
                lastModified: Date.now(),
              });
              resolve(compressedFile);
            } else {
              resolve(file);
            }
          }, 'image/jpeg', 0.8);
        };
      };
    });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    try {
      setUploadingImage(true)
      setErrorMsg('')

      const compressedFile = await compressImage(file)
      const formData = new FormData()
      formData.append('file', compressedFile)

      const result = await uploadPrintingImage(formData)

      if (result.error) {
        setErrorMsg(result.error)
        return
      }

      if (result.url) {
        setImagePreview(result.url)
        form.setValue('image_url', result.url)
      }
    } catch (error) {
      console.error('Error uploading image:', error)
      setErrorMsg('Failed to upload image')
    } finally {
      setUploadingImage(false)
    }
  }

  async function onSubmit(data: any) {
    try {
      setIsSubmitting(true)
      setErrorMsg('')
      
      const result = initialData?.id 
        ? await updatePrintingProject(initialData.id, data)
        : await createPrintingProject(data)

      if (result.error) {
        setErrorMsg(result.error)
        return
      }

      if (!initialData?.id) {
        form.reset()
        setImagePreview(null)
      }
    } catch (error) {
      setErrorMsg('An unexpected error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      {errorMsg && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl text-sm">
          {errorMsg}
        </div>
      )}

      {/* Image Upload */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-white-variant">
          Project Image <span className="text-red-400">*</span>
        </label>
        
        <div className="mt-2 flex justify-center rounded-xl border border-dashed border-white/10 px-6 py-10">
          <div className="text-center">
            {imagePreview ? (
              <div className="relative w-64 h-64 mx-auto mb-4 rounded-lg overflow-hidden border border-white/10">
                <Image
                  src={imagePreview}
                  alt="Preview"
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <ImageIcon className="mx-auto h-12 w-12 text-white/20" aria-hidden="true" />
            )}
            <div className="mt-4 flex text-sm leading-6 text-white-variant justify-center">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-surface font-semibold text-primary focus-within:outline-none hover:text-primary-hover"
              >
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  onChange={handleImageUpload}
                  disabled={uploadingImage}
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs leading-5 text-white/40">PNG, JPG, GIF up to 10MB</p>
            {uploadingImage && (
              <p className="text-sm text-primary mt-2 flex items-center justify-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" /> Uploading and compressing...
              </p>
            )}
            {form.formState.errors.image_url && (
              <p className="text-sm text-red-400 mt-2">{form.formState.errors.image_url.message}</p>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-white-variant">Title</label>
          <input
            {...form.register('title')}
            className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
            placeholder="e.g. Premium Business Cards"
          />
          {form.formState.errors.title && (
            <p className="text-sm text-red-400">{form.formState.errors.title.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-white-variant">Status</label>
          <select
            {...form.register('status')}
            className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
            <option value="archived">Archived</option>
          </select>
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="block text-sm font-medium text-white-variant">Description (Optional)</label>
          <textarea
            {...form.register('description')}
            rows={3}
            className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
            placeholder="Brief description of the project..."
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-white-variant">Sort Order</label>
          <input
            type="number"
            {...form.register('sort_order')}
            className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <button
          type="submit"
          disabled={isSubmitting || uploadingImage}
          className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Saving...
            </>
          ) : (
            'Save Project'
          )}
        </button>
      </div>
    </form>
  )
}
