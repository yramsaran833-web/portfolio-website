'use client'
import { useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function VisitorTracker() {
  useEffect(() => {
    const hasVisited = sessionStorage.getItem('has_visited')
    if (!hasVisited) {
      sessionStorage.setItem('has_visited', 'true')
      const supabase = createClient()
      const track = async () => {
        try {
          await supabase.rpc('increment_views')
        } catch (e) {
          console.error(e)
        }
      }
      track()
    }
  }, [])

  return null
}
