'use client'

import { useState } from 'react'
import { loginAction } from './actions'
import { Loader2 } from 'lucide-react'

export default function LoginPage() {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    const formData = new FormData(e.currentTarget)
    const res = await loginAction(formData)
    
    if (res?.error) {
      setError(res.error)
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0f1d] text-white">
      <div className="bg-[#050812] border border-gray-800 p-8 rounded-lg w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#d4af37]">RSY ADMIN</h1>
          <p className="text-gray-400 text-sm mt-2">Sign in to access the dashboard</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <div className="bg-red-500/10 text-red-500 border border-red-500/50 p-3 rounded text-sm">{error}</div>}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
            <input name="email" type="email" required placeholder="admin@ramsaranyadav.com" className="w-full bg-[#0a0f1d] border border-gray-800 rounded-md py-2 px-3 text-white focus:outline-none focus:border-[#d4af37]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Password</label>
            <input name="password" type="password" required placeholder="••••••••" className="w-full bg-[#0a0f1d] border border-gray-800 rounded-md py-2 px-3 text-white focus:outline-none focus:border-[#d4af37]" />
          </div>
          <button type="submit" disabled={loading} className="w-full bg-[#d4af37] text-black py-2 rounded-md font-medium hover:bg-[#d4af37]/90 transition-colors mt-4 flex items-center justify-center">
            {loading && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  )
}
