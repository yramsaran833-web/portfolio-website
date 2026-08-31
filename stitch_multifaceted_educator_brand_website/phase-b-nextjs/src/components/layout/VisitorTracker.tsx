'use client'
import { useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function VisitorTracker() {
  useEffect(() => {
    // Only count once per session
    const hasVisited = sessionStorage.getItem('has_visited')
    if (!hasVisited) {
      sessionStorage.setItem('has_visited', 'true')
      const supabase = createClient()
      supabase.rpc('increment_views').then(() => {
        // silently incremented
      }).catch(console.error)
    }
  }, [])

  return null
}
