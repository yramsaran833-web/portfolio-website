'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { reelSchema, type ReelFormValues } from '@/lib/validations/reels'
import { createReel, updateReel } from './actions'
import { Loader2 } from 'lucide-react'

interface ReelFormProps {
  initialData?: Partial<ReelFormValues> & { id?: string }
}

export function ReelForm({ initialData }: ReelFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const form = useForm({
    resolver: zodResolver(reelSchema),
    defaultValues: {
      title: initialData?.title || '',
      url: initialData?.url || '',
      sort_order: initialData?.sort_order || 0,
      status: initialData?.status || 'published',
    },
  })

  async function onSubmit(data: any) {
    try {
      setIsSubmitting(true)
      setErrorMsg('')
      
      const result = initialData?.id 
        ? await updateReel(initialData.id, data)
        : await createReel(data)

      if (result.error) {
        setErrorMsg(result.error)
        return
      }

      if (!initialData?.id) {
        form.reset()
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

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-white-variant">Title</label>
          <input
            {...form.register('title')}
            className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
            placeholder="e.g. My latest viral reel"
          />
          {form.formState.errors.title && (
            <p className="text-sm text-red-400">{form.formState.errors.title.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-white-variant">Facebook Reel URL</label>
          <input
            {...form.register('url')}
            className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
            placeholder="https://www.facebook.com/reel/123456789"
          />
          {form.formState.errors.url && (
            <p className="text-sm text-red-400">{form.formState.errors.url.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-white-variant">Status</label>
          <select
            {...form.register('status')}
            className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
          >
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>
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
          disabled={isSubmitting}
          className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Saving...
            </>
          ) : (
            'Save Reel'
          )}
        </button>
      </div>
    </form>
  )
}
