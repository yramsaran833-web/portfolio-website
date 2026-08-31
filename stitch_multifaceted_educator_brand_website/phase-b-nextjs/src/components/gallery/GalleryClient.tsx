'use client'

import { useState } from 'react'

type Album = {
  id: string
  title: string
}

type GalleryItem = {
  id: string
  title: string
  image_url: string
  description?: string
  album_id: string
  gallery_albums?: {
    title: string
  }
}

export default function GalleryClient({ 
  items, 
  albums 
}: { 
  items: GalleryItem[], 
  albums: Album[] 
}) {
  const [filter, setFilter] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredItems = items.filter(item => 
    filter === 'all' || item.album_id === filter
  )

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  
  const showPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1)
    }
  }

  const showNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1)
    }
  }

  return (
    <>
      {/* Category Filters */}
      <div className="w-full overflow-x-auto no-scrollbar py-2 mb-12">
        <div className="flex justify-start md:justify-center gap-3 min-w-max px-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2 rounded-full font-heading font-bold text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${
              filter === 'all' 
                ? 'bg-primary text-white shadow-[0_0_15px_rgba(255,122,0,0.4)] hover:shadow-[0_0_25px_rgba(255,122,0,0.6)] border border-primary' 
                : 'glass-panel text-white hover:bg-white/10 border border-white/10'
            }`}
          >
            All
          </button>
          {albums.map((album) => (
            <button
              key={album.id}
              onClick={() => setFilter(album.id)}
              className={`px-5 py-2 rounded-full font-heading font-bold text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${
                filter === album.id
                  ? 'bg-primary text-white shadow-[0_0_15px_rgba(255,122,0,0.4)] hover:shadow-[0_0_25px_rgba(255,122,0,0.6)] border border-primary' 
                  : 'glass-panel text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {album.title}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div key={item.id} className="relative group rounded-2xl overflow-hidden cursor-pointer bg-surface border border-white/5" onClick={() => openLightbox(index)}>
              <img
                src={item.image_url}
                className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                alt={item.title}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                {item.gallery_albums && (
                  <span className="bg-primary/90 text-white font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full inline-block w-max mb-2">
                    {item.gallery_albums.title}
                  </span>
                )}
                <h4 className="font-heading font-bold text-white text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h4>
                {item.description && (
                  <p className="font-body text-white/80 text-sm mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 line-clamp-2">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center text-white-variant">
            No images found in this category.
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-sm">
          {/* Close button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors z-[101]"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>

          {/* Navigation */}
          {filteredItems.length > 1 && (
            <>
              <button 
                onClick={(e) => { e.stopPropagation(); showPrev(); }}
                className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors z-[101]"
              >
                <span className="material-symbols-outlined text-4xl">chevron_left</span>
              </button>
              
              <button 
                onClick={(e) => { e.stopPropagation(); showNext(); }}
                className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors z-[101]"
              >
                <span className="material-symbols-outlined text-4xl">chevron_right</span>
              </button>
            </>
          )}

          {/* Current Image */}
          <div className="w-full h-full p-4 md:p-12 flex flex-col items-center justify-center" onClick={closeLightbox}>
            <div className="relative max-w-5xl max-h-[80vh] w-full h-full flex flex-col items-center justify-center" onClick={e => e.stopPropagation()}>
              <img 
                src={filteredItems[lightboxIndex].image_url} 
                alt={filteredItems[lightboxIndex].title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-6 text-center">
                <h3 className="text-white font-heading font-bold text-2xl">{filteredItems[lightboxIndex].title}</h3>
                {filteredItems[lightboxIndex].description && (
                  <p className="text-white/70 mt-2 font-body max-w-2xl mx-auto">{filteredItems[lightboxIndex].description}</p>
                )}
                <div className="mt-4 text-white/50 text-sm">
                  {lightboxIndex + 1} of {filteredItems.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
