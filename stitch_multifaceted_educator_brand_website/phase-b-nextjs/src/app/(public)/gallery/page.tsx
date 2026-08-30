import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/server";

export const metadata = {
  title: "Gallery | Ram Saran Yadav",
  description:
    "Visual journey of Ram Saran Yadav across teaching, digital printing, and community building.",
};

export default async function GalleryPage() {
  const supabase = await createClient();

  // Fetch gallery items
  const { data: galleryItems } = await supabase
    .from("gallery_items")
    .select("*, gallery_albums(name)")
    .order("created_at", { ascending: false });

  // Fetch albums
  const { data: albums } = await supabase
    .from("gallery_albums")
    .select("*");

  return (
    <>
      {/* Header Section */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="relative z-10 animate-on-scroll">
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6">
            Visual Journey
          </h1>
          <p className="font-body text-xl text-on-surface-variant max-w-2xl mx-auto mb-12">
            A curated collection of moments from the classroom, the printing
            press, and the creator studio.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative mb-8">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white-variant">
              search
            </span>
            <input
              type="text"
              id="gallery-search"
              placeholder="Search gallery..."
              className="w-full bg-surface border border-white/10 rounded-full py-3 pl-12 pr-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-lg placeholder:text-white-variant/50"
            />
          </div>

          {/* Category Filters */}
          <div className="w-full overflow-x-auto no-scrollbar py-2">
            <div
              className="flex justify-start md:justify-center gap-3 min-w-max px-4"
              id="gallery-filters"
            >
              <button
                data-filter="all"
                className="filter-btn active bg-primary text-white px-5 py-2 rounded-full font-heading font-bold text-sm transition-all shadow-[0_0_15px_rgba(255,122,0,0.4)] hover:shadow-[0_0_25px_rgba(255,122,0,0.6)] border border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              >
                All
              </button>
              {albums && albums.length > 0 && albums.map((album) => (
                <button
                  key={album.id}
                  data-filter={album.name.toLowerCase()}
                  className="filter-btn glass-panel text-white px-5 py-2 rounded-full font-heading font-bold text-sm hover:bg-white/10 transition-all border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                >
                  {album.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-12 px-6 md:px-16 max-w-7xl mx-auto relative z-20 min-h-[50vh]">
        {/* We will use a standard CSS grid for React migration for simplicity, mapping 'masonry-grid' */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          id="gallery-grid"
        >
          {galleryItems && galleryItems.length > 0 ? (
            galleryItems.map((item) => (
              <div key={item.id} className="masonry-item" data-category={item.gallery_albums ? (item.gallery_albums as any).name.toLowerCase() : 'all'}>
                <div className="relative group rounded-2xl overflow-hidden cursor-pointer">
                  <img
                    src={item.image_url}
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    {item.gallery_albums && (
                      <span className="bg-primary/90 text-white font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full inline-block w-max mb-2">
                        {/* @ts-ignore */}
                        {(item.gallery_albums as any).name}
                      </span>
                    )}
                    <h4 className="font-heading font-bold text-white text-lg">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 py-12 text-center border border-dashed border-white/10 rounded-2xl">
              <span className="material-symbols-outlined text-4xl text-white/20 mb-2">photo_library</span>
              <h4 className="font-heading text-xl text-white">No photos yet</h4>
              <p className="font-body text-on-surface-variant mt-2">Gallery will be updated soon.</p>
            </div>
          )}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-3 glass-panel border border-white/10 text-white font-heading font-bold rounded-full hover:border-primary/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
            Load More
          </button>
        </div>
      </section>

      {/* Lightbox Modal Placeholder */}
      <div
        id="lightbox"
        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300 backdrop-blur-sm"
      >
        <button
          className="absolute top-6 right-6 text-white hover:text-primary transition-colors focus:outline-none"
          aria-label="Close lightbox"
        >
          <span className="material-symbols-outlined text-4xl">close</span>
        </button>
        <div className="relative max-w-5xl w-full px-4 flex flex-col items-center">
          <img
            id="lightbox-img"
            src=""
            alt="Expanded view"
            className="max-h-[80vh] w-auto object-contain rounded-lg shadow-2xl"
          />
          <div className="mt-6 text-center">
            <span
              id="lightbox-category"
              className="bg-primary/20 text-primary font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-2"
            ></span>
            <h3
              id="lightbox-title"
              className="font-heading font-bold text-white text-2xl"
            ></h3>
          </div>
        </div>
        <button
          className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors focus:outline-none"
          aria-label="Previous image"
        >
          <span className="material-symbols-outlined text-5xl">
            chevron_left
          </span>
        </button>
        <button
          className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors focus:outline-none"
          aria-label="Next image"
        >
          <span className="material-symbols-outlined text-5xl">
            chevron_right
          </span>
        </button>
      </div>
    </>
  );
}
