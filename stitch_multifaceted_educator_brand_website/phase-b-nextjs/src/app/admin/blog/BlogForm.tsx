'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { blogPostSchema, type BlogPostFormValues } from '@/lib/validations/blog'
import { createBlogPost, updateBlogPost, uploadBlogImage } from './actions'
import { Loader2, Image as ImageIcon } from 'lucide-react'
import Image from 'next/image'

interface BlogFormProps {
  initialData?: Partial<BlogPostFormValues> & { id?: string }
  categories: { id: string, name: string }[]
}

export function BlogForm({ initialData, categories }: BlogFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [imagePreview, setImagePreview] = useState<string | null>(initialData?.cover_image_url || null)
  const [uploadingImage, setUploadingImage] = useState(false)

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
            if (width > MAX_WIDTH) { height = Math.round(height * MAX_WIDTH / width); width = MAX_WIDTH; }
          } else {
            if (height > MAX_HEIGHT) { width = Math.round(width * MAX_HEIGHT / height); height = MAX_HEIGHT; }
          }
          canvas.width = width; canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, width, height);

          canvas.toBlob((blob) => {
            if (blob) { resolve(new File([blob], file.name.replace(/\.[^/.]+$/, "") + ".jpg", { type: 'image/jpeg' })); } 
            else { resolve(file); }
          }, 'image/jpeg', 0.8);
        };
      };
    });
  };

  const form = useForm<BlogPostFormValues>({
    resolver: zodResolver(blogPostSchema),
    defaultValues: {
      title: initialData?.title || '',
      slug: initialData?.slug || '',
      content: initialData?.content || '',
      summary: initialData?.summary || '',
      category_id: initialData?.category_id || '',
      published: initialData?.published || false,
      cover_image_url: initialData?.cover_image_url || '',
    }
  })

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const originalFile = e.target.files?.[0]
    if (!originalFile) return

    setUploadingImage(true)
    try {
      const file = await compressImage(originalFile)
      const formData = new FormData()
      formData.append('image', file)

      const res = await uploadBlogImage(formData)

      if (res.error) {
        alert(res.error)
      } else if (res.url) {
        setImagePreview(res.url)
        form.setValue('cover_image_url', res.url, { shouldValidate: true })
        form.clearErrors('cover_image_url')
      }
    } catch (err) {
      console.error(err)
      alert("An error occurred while uploading. Please try again.")
    } finally {
      setUploadingImage(false)
    }
  }

  async function onSubmit(data: BlogPostFormValues) {
    setIsSubmitting(true)
    setErrorMsg('')
    
    // Convert empty category string to null for UUID field
    if (!data.category_id) {
      data.category_id = null
    }

    let res
    if (initialData?.id) {
      res = await updateBlogPost(initialData.id, data)
    } else {
      res = await createBlogPost(data)
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
        {/* Main Content */}
        <div className="md:col-span-2 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Title</label>
            <input 
              {...form.register('title')}
              className="w-full bg-[#0a0f1d] border border-gray-800 rounded-md py-2 px-3 text-white focus:outline-none focus:border-[#d4af37]"
              placeholder="Post title"
            />
            {form.formState.errors.title && (
              <p className="text-xs text-red-500">{form.formState.errors.title.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Content</label>
            <textarea 
              {...form.register('content')}
              rows={15}
              className="w-full bg-[#0a0f1d] border border-gray-800 rounded-md py-2 px-3 text-white focus:outline-none focus:border-[#d4af37]"
              placeholder="Write your post content here..."
            />
            {form.formState.errors.content && (
              <p className="text-xs text-red-500">{form.formState.errors.content.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Summary (Optional)</label>
            <textarea 
              {...form.register('summary')}
              rows={3}
              className="w-full bg-[#0a0f1d] border border-gray-800 rounded-md py-2 px-3 text-white focus:outline-none focus:border-[#d4af37]"
              placeholder="Short summary for blog list"
            />
          </div>
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-6">
          <div className="bg-[#050812] border border-gray-800 rounded-lg p-4 space-y-4">
            <h3 className="font-medium text-white border-b border-gray-800 pb-2">Publishing</h3>
            
            <div className="space-y-2 flex items-center justify-between">
              <label className="text-sm font-medium text-gray-400">Published</label>
              <input 
                type="checkbox"
                {...form.register('published')}
                className="w-5 h-5 bg-[#0a0f1d] border border-gray-800 rounded focus:ring-[#d4af37] text-[#d4af37] accent-[#d4af37]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">URL Slug</label>
              <input 
                {...form.register('slug')}
                className="w-full bg-[#0a0f1d] border border-gray-800 rounded-md py-2 px-3 text-white focus:outline-none focus:border-[#d4af37]"
                placeholder="my-post-title"
              />
              {form.formState.errors.slug && (
                <p className="text-xs text-red-500">{form.formState.errors.slug.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Category</label>
              <select 
                {...form.register('category_id')}
                className="w-full bg-[#0a0f1d] border border-gray-800 rounded-md py-2 px-3 text-white focus:outline-none focus:border-[#d4af37]"
              >
                <option value="">Uncategorized</option>
                {categories.map(c => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="bg-[#050812] border border-gray-800 rounded-lg p-4 space-y-4">
            <h3 className="font-medium text-white border-b border-gray-800 pb-2">Featured Image</h3>
            <div className="space-y-4">
              {imagePreview ? (
                <div className="relative aspect-video rounded-md overflow-hidden bg-gray-900 border border-gray-800">
                  <Image src={imagePreview} alt="Preview" fill className="object-cover" />
                  <button 
                    type="button" 
                    onClick={() => { setImagePreview(null); form.setValue('cover_image_url', '') }}
                    className="absolute top-2 right-2 bg-black/50 hover:bg-black/80 text-white text-xs px-2 py-1 rounded"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <div className="aspect-video rounded-md bg-[#0a0f1d] border border-gray-800 border-dashed flex flex-col items-center justify-center text-gray-500">
                  <ImageIcon className="h-8 w-8 mb-2 opacity-50" />
                  <span className="text-xs">No image uploaded</span>
                </div>
              )}
              
              <input type="hidden" {...form.register('cover_image_url')} />
              
              <label className="block w-full text-center bg-gray-800 hover:bg-gray-700 text-white text-sm py-2 rounded-md cursor-pointer transition-colors">
                {uploadingImage ? 'Uploading...' : 'Upload Image'}
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
          {initialData?.id ? 'Update Post' : 'Publish Post'}
        </button>
      </div>
    </form>
  )
}
