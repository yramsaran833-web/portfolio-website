'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="relative w-full aspect-video bg-surface rounded-[2rem] border border-white/10 overflow-hidden shadow-[0_0_60px_rgba(255,122,0,0.15)] group cursor-pointer"
         onClick={() => setIsPlaying(true)}>
      
      {!isPlaying ? (
        <>
          <Image
            src="/assets/img/bio-thumbnail.png"
            alt="Ram Saran Yadav Biography"
            fill
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div>
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-primary/90 backdrop-blur-sm text-white rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(255,122,0,0.6)] group-hover:scale-110 group-hover:bg-primary transition-all duration-500 ring-4 ring-white/20">
              <span className="material-symbols-outlined text-6xl md:text-8xl ml-2 md:ml-4">
                play_arrow
              </span>
            </div>
          </div>
        </>
      ) : (
        <iframe
          src="https://drive.google.com/file/d/1Tg1as0_ld3r7OVJ4IFMbGXFjo4U3s9Bl/preview"
          className="absolute inset-0 w-full h-full border-0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      )}
    </div>
  )
}
