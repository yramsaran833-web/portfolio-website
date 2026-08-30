'use client';

import { useState } from 'react';
import { Share2, Check, Copy } from 'lucide-react';

export function ShareButton({ title, slug }: { title: string; slug: string }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = `${window.location.origin}/blog/${slug}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${title} | Ram Saran Yadav`,
          url: url,
        });
        return;
      } catch (err) {
        console.error('Error sharing:', err);
        // Fallback to copy if share gets cancelled or fails
      }
    }

    // Fallback: Copy to clipboard
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-gray-300 transition-colors border border-gray-800 px-4 py-2 rounded-full text-sm font-medium"
      title="Share this article"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-green-500" />
          <span className="text-green-500">Copied!</span>
        </>
      ) : (
        <>
          <Share2 className="w-4 h-4 text-[#d4af37]" />
          <span>Share Article</span>
        </>
      )}
    </button>
  );
}
