'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

interface Testimonial {
  id: string;
  author_name: string;
  author_role: string | null;
  content: string;
  avatar_url: string | null;
  rating: number;
}

export default function TestimonialSlider({ testimonials }: { testimonials: Testimonial[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [autoplay, setAutoplay] = useState(true);

  // Auto-advance
  useEffect(() => {
    if (!autoplay || testimonials.length <= 1) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex, autoplay, testimonials.length]);

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setAutoplay(false);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Get the 2 testimonials to show (current and next)
  const current = testimonials[currentIndex];
  // If there's only 1 testimonial, don't try to show a second one
  const next = testimonials.length > 1 ? testimonials[(currentIndex + 1) % testimonials.length] : null;

  const renderCard = (t: Testimonial) => (
    <div className="bg-[#0f1524]/80 backdrop-blur-md border border-[#d4af37]/20 p-8 rounded-3xl shadow-2xl relative overflow-hidden flex-1 h-full flex flex-col">
      <div className="flex gap-4 items-center relative z-10 mb-6">
        <div className="flex-shrink-0">
          {t.avatar_url ? (
            <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-[#d4af37] shadow-lg shadow-black/50">
              <Image src={t.avatar_url} alt={t.author_name} fill className="object-cover" />
            </div>
          ) : (
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-800 to-black border-2 border-[#d4af37] flex items-center justify-center shadow-lg shadow-black/50">
              <span className="text-xl text-[#d4af37] font-heading font-bold">{t.author_name.charAt(0)}</span>
            </div>
          )}
        </div>
        <div>
          <h4 className="text-white font-bold font-heading text-lg">{t.author_name}</h4>
          {t.author_role && (
            <p className="text-gray-400 text-sm">{t.author_role}</p>
          )}
          <div className="flex gap-1 mt-1 text-[#d4af37]">
            {Array.from({ length: t.rating || 5 }).map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-current" />
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 text-left relative z-10 flex items-center">
        <p className="text-lg text-gray-200 font-body leading-relaxed italic">
          "{t.content}"
        </p>
      </div>
    </div>
  );

  return (
    <div 
      className="relative max-w-6xl mx-auto"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <div className="absolute top-0 left-0 text-[#d4af37]/20 -translate-x-4 -translate-y-4 md:-translate-x-8 md:-translate-y-8">
        <Quote size={80} className="rotate-180" />
      </div>

      <div className="flex flex-col md:flex-row gap-6 transition-opacity duration-500 min-h-[250px]">
        {renderCard(current)}
        {next && <div className="hidden md:flex flex-1">{renderCard(next)}</div>}
      </div>

      {/* Controls */}
      {testimonials.length > 1 && (
        <div className="flex justify-center gap-4 mt-8">
          <button 
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#d4af37] hover:border-[#d4af37] hover:text-black transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex gap-2 items-center px-4">
            {testimonials.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => {
                  setAutoplay(false);
                  setCurrentIndex(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-[#d4af37] w-6' : 'bg-white/20'}`}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#d4af37] hover:border-[#d4af37] hover:text-black transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </div>
  );
}
