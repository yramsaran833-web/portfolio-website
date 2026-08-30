import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import { Award, Calendar, Building2 } from "lucide-react";

export const metadata = {
  title: "Awards & Recognition | Ram Saran Yadav",
  description: "A showcase of awards and recognition received by Ram Saran Yadav for his contributions.",
};

export default async function AwardsPage() {
  const supabase = await createClient();

  // Fetch awards
  const { data: awards } = await supabase
    .from("awards")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  return (
    <>
      {/* Header Section */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="relative z-10 animate-on-scroll">
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6">
            Awards & <span className="text-[#d4af37]">Recognition</span>
          </h1>
          <p className="font-body text-xl text-on-surface-variant max-w-2xl mx-auto mb-12">
            Celebrating milestones, achievements, and contributions in the journey of education and community service.
          </p>
        </div>
      </section>

      {/* Main Awards Grid */}
      <section className="py-12 px-6 md:px-16 max-w-7xl mx-auto relative z-20 min-h-[50vh]">
        {!awards || awards.length === 0 ? (
          <div className="text-center text-white/50 py-20">
            <Award className="w-16 h-16 mx-auto mb-4 opacity-50 text-[#d4af37]" />
            <p className="text-xl">No awards found. Check back later.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award) => (
              <div 
                key={award.id} 
                className="bg-[#0f1524] border border-white/5 hover:border-[#d4af37]/30 transition-all rounded-2xl overflow-hidden group shadow-xl shadow-black/20"
              >
                {/* Award Image */}
                {award.image_url ? (
                  <div className="w-full h-64 relative overflow-hidden">
                    <img 
                      src={award.image_url} 
                      alt={award.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1524] to-transparent opacity-80" />
                  </div>
                ) : (
                  <div className="w-full h-48 bg-white/5 flex items-center justify-center relative overflow-hidden">
                    <Award className="w-16 h-16 text-[#d4af37]/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1524] to-transparent opacity-80" />
                  </div>
                )}

                {/* Content */}
                <div className={`p-6 relative z-10 ${award.image_url ? '-mt-16' : ''}`}>
                  <div className="bg-[#1a2235] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 border border-[#d4af37]/20 shadow-lg">
                    <Award className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white font-heading mb-3 line-clamp-2">
                    {award.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4 text-sm text-gray-400">
                    {award.issuer && (
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-[#d4af37]" />
                        <span>{award.issuer}</span>
                      </div>
                    )}
                    {award.issue_date && (
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#d4af37]" />
                        <span>
                          {new Date(award.issue_date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {award.description && (
                    <p className="text-gray-400 line-clamp-3 text-sm leading-relaxed border-t border-white/10 pt-4 mt-4">
                      {award.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
