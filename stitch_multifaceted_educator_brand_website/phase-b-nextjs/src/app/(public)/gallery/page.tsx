import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import GalleryClient from "@/components/gallery/GalleryClient";

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
    .select("*, gallery_albums(title)")
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
        </div>
      </section>

      <section className="px-6 md:px-16 max-w-7xl mx-auto relative z-20 pb-24 min-h-[50vh]">
        {/* Category Filters and Grid */}
        <GalleryClient items={galleryItems || []} albums={albums || []} />
      </section>
    </>
  );
}
