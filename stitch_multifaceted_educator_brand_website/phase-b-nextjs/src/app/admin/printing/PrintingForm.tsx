'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { printingProjectSchema, type PrintingProjectFormValues } from '@/lib/validations/printing'
import { createPrintingProject, updatePrintingProject, bulkCreatePrintingProjects } from './actions'
import { Loader2, Image as ImageIcon, X } from 'lucide-react'
import Image from 'next/image'
import { createClient } from '@/lib/supabase/client'

interface PrintingFormProps {
  initialData?: Partial<PrintingProjectFormValues> & { id?: string }
}

export function PrintingForm({ initialData }: PrintingFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  
  // Support for multiple images
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [imagePreviews, setImagePreviews] = useState<string[]>(initialData?.image_url ? [initialData.image_url] : [])
  const [uploadingImage, setUploadingImage] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

  const isEditMode = !!initialData?.id
  const isBulkMode = !isEditMode && selectedFiles.length > 1

  const form = useForm({
    resolver: zodResolver(printingProjectSchema),
    defaultValues: {
      title: initialData?.title || 'Printing Press Work',
      description: initialData?.description || '',
      image_url: initialData?.image_url || 'pending', // placeholder for validation
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

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length === 0) return

    setUploadingImage(true)
    setErrorMsg('')
    
    try {
      // Compress all files and create previews
      const compressedFiles = await Promise.all(files.map(f => compressImage(f)))
      
      if (isEditMode) {
        setSelectedFiles([compressedFiles[0]])
        setImagePreviews([URL.createObjectURL(compressedFiles[0])])
      } else {
        setSelectedFiles(prev => [...prev, ...compressedFiles])
        const newPreviews = compressedFiles.map(f => URL.createObjectURL(f))
        setImagePreviews(prev => [...prev, ...newPreviews])
      }
    } catch (err) {
      console.error('Error selecting images:', err)
      setErrorMsg('Error processing images')
    } finally {
      setUploadingImage(false)
    }
  }

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index))
    setImagePreviews(prev => prev.filter((_, i) => i !== index))
  }

  // Client-side direct upload to Supabase Storage
  const uploadToStorage = async (file: File) => {
    const supabase = createClient()
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random().toString(36).substring(2)}_${Date.now()}.${fileExt}`
    const filePath = `printing/${fileName}`

    const { error: uploadError } = await supabase.storage
      .from('media')
      .upload(filePath, file)

    if (uploadError) {
      throw new Error(uploadError.message)
    }

    const { data: { publicUrl } } = supabase.storage
      .from('media')
      .getPublicUrl(filePath)

    return publicUrl
  }

  async function onSubmit(data: any) {
    try {
      setIsSubmitting(true)
      setErrorMsg('')
      setSuccessMsg('')
      
      // If we have selected files, we need to upload them first
      let uploadedUrls: string[] = []
      
      if (selectedFiles.length > 0) {
        let count = 0
        for (const file of selectedFiles) {
          count++
          setUploadProgress(Math.round((count / selectedFiles.length) * 100))
          const url = await uploadToStorage(file)
          uploadedUrls.push(url)
        }
      }

      if (isEditMode) {
        // Edit mode - single update
        const finalUrl = uploadedUrls.length > 0 ? uploadedUrls[0] : initialData?.image_url
        const result = await updatePrintingProject(initialData.id!, { ...data, image_url: finalUrl })
        if (result.error) throw new Error(result.error)
        setSuccessMsg('Project updated successfully!')
      } else {
        // Create mode
        if (uploadedUrls.length === 0) {
          throw new Error('Please select at least one image to upload.')
        }

        if (uploadedUrls.length === 1) {
          // Single create
          const result = await createPrintingProject({ ...data, image_url: uploadedUrls[0] })
          if (result.error) throw new Error(result.error)
          setSuccessMsg('Project created successfully!')
        } else {
          // Bulk create
          const projects = uploadedUrls.map((url, i) => ({
            ...data,
            title: `${data.title} ${i + 1}`, // Append number for uniqueness if multiple
            image_url: url
          }))
          const result = await bulkCreatePrintingProjects(projects)
          if (result.error) throw new Error(result.error)
          setSuccessMsg(`Successfully uploaded ${uploadedUrls.length} projects!`)
        }
        
        // Reset form on success create
        form.reset()
        setSelectedFiles([])
        setImagePreviews([])
        setUploadProgress(0)
      }
    } catch (error: any) {
      setErrorMsg(error.message || 'An unexpected error occurred')
    } finally {
      setIsSubmitting(false)
      setUploadProgress(0)
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      {errorMsg && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl text-sm">
          {errorMsg}
        </div>
      )}
      {successMsg && (
        <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-4 rounded-xl text-sm">
          {successMsg}
        </div>
      )}

      {/* Image Upload */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-white-variant">
          Project Image(s) {isEditMode ? '' : '(You can select multiple)'} <span className="text-red-400">*</span>
        </label>
        
        <div className="mt-2 rounded-xl border border-dashed border-white/10 px-6 py-10">
          <div className="text-center">
            {imagePreviews.length > 0 && (
              <div className="flex flex-wrap gap-4 justify-center mb-6">
                {imagePreviews.map((preview, idx) => (
                  <div key={idx} className="relative w-32 h-32 rounded-lg overflow-hidden border border-white/10 group">
                    <Image
                      src={preview}
                      alt="Preview"
                      fill
                      className="object-cover"
                    />
                    {!initialData?.image_url || idx < selectedFiles.length ? (
                       <button
                        type="button"
                        onClick={() => removeFile(idx)}
                        className="absolute top-1 right-1 bg-black/70 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500"
                      >
                        <X className="w-4 h-4 text-white" />
                      </button>
                    ) : null}
                  </div>
                ))}
              </div>
            )}
            
            {imagePreviews.length === 0 && (
              <ImageIcon className="mx-auto h-12 w-12 text-white/20 mb-4" aria-hidden="true" />
            )}

            <div className="flex text-sm leading-6 text-white-variant justify-center">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-surface font-semibold text-primary focus-within:outline-none hover:text-primary-hover"
              >
                <span>{imagePreviews.length > 0 ? 'Add more images' : 'Upload a file'}</span>
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  multiple={!isEditMode}
                  className="sr-only"
                  onChange={handleFileSelect}
                  disabled={uploadingImage || isSubmitting}
                />
              </label>
              {imagePreviews.length === 0 && <p className="pl-1">or drag and drop</p>}
            </div>
            {imagePreviews.length === 0 && <p className="text-xs leading-5 text-white/40 mt-2">PNG, JPG, GIF up to 10MB</p>}
            
            {uploadingImage && (
              <p className="text-sm text-primary mt-4 flex items-center justify-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" /> Compressing images...
              </p>
            )}
            
            {isSubmitting && uploadProgress > 0 && (
              <div className="mt-4 max-w-xs mx-auto">
                <div className="flex justify-between text-xs text-white-variant mb-1">
                  <span>Uploading to server...</span>
                  <span>{uploadProgress}%</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-white-variant">
            {isBulkMode ? 'Base Title (will be numbered automatically)' : 'Title'}
          </label>
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
          <label className="block text-sm font-medium text-white-variant">
            {isBulkMode ? 'Description (Optional - applied to all)' : 'Description (Optional)'}
          </label>
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
              {isBulkMode ? 'Uploading...' : 'Saving...'}
            </>
          ) : (
            isBulkMode ? `Upload ${selectedFiles.length} Projects` : 'Save Project'
          )}
        </button>
      </div>
    </form>
  )
}
