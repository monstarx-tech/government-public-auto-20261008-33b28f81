import React, { useState } from 'react';
import { siteContent } from '../../lib/siteContent';
import { Camera, ZoomIn, X } from 'lucide-react';

export default function EngagementPhotoMosaic() {
  const data = siteContent?.gallery;
  const title = data?.title ?? "Participation in Pictures";
  const subtitle = data?.subtitle ?? "Civic innovation is not a spectator sport.";
  const description = data?.description ?? "These moments show what public co-design looks like in practice.";
  const images = data?.images ?? [];

  // Active full screen image viewing state
  const [activePhoto, setActivePhoto] = useState<typeof images[0] | null>(null);

  return (
    <section id="gallery-section" className="bg-[#F5F3EE] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-6">
            <span className="text-xs font-bold tracking-widest text-[#D2643A] uppercase block mb-3">
              On-The-Ground Moments
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#1E2328] tracking-tight mb-2">
              {title}
            </h2>
            <p className="text-xl font-serif text-[#2E6F7D] font-medium leading-relaxed italic">
              {subtitle}
            </p>
          </div>
          <div className="lg:col-span-6">
            <p className="text-base sm:text-lg text-[#1E2328]/85 font-sans leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Mosaic Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {images.map((img, idx) => {
            // Determine custom aspect ratio styling to create asymmetry
            let sizeClass = "aspect-[4/3]";
            if (idx === 0) sizeClass = "lg:col-span-2 aspect-[16/9]"; // Prominent landscape
            if (idx === 2) sizeClass = "aspect-[1/1]"; // Square shape
            if (idx === 5) sizeClass = "sm:col-span-2 lg:col-span-1 aspect-[4/3]"; // Wider column mobile

            return (
              <div 
                key={img?.id}
                onClick={() => setActivePhoto(img)}
                className={`relative group overflow-hidden rounded-[6px] shadow-sm cursor-pointer ${sizeClass} bg-[#1E2328]`}
              >
                {/* Background image & subtle color-overlay */}
                <div className="absolute inset-0 bg-[#2E6F7D]/10 mix-blend-multiply opacity-100 group-hover:opacity-40 transition-opacity duration-300 z-10" />
                <img 
                  src={img?.imageSrc} 
                  alt={img?.imageAlt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Tag & Hover overlay */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#1E2328] text-xs font-bold tracking-widest uppercase rounded">
                    {img?.tag ?? "Participation"}
                  </span>
                </div>

                {/* Caption / Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <p className="text-white text-sm sm:text-base font-sans font-medium mb-2 leading-snug">
                    {img?.caption}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs text-[#D2643A] font-bold uppercase tracking-wider">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Enlarge Image</span>
                  </span>
                </div>

              </div>
            );
          })}

        </div>

        {/* Photo View Modal Overlay */}
        {activePhoto && (
          <div className="fixed inset-0 z-50 bg-[#1E2328]/95 flex flex-col justify-center items-center p-4 sm:p-8">
            <button 
              onClick={() => setActivePhoto(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="max-w-4xl max-h-[80vh] overflow-hidden rounded-[6px] shadow-2xl">
              <img 
                src={activePhoto.imageSrc} 
                alt={activePhoto.imageAlt} 
                className="w-full h-full max-h-[70vh] object-contain" 
              />
            </div>
            
            <div className="max-w-4xl text-center mt-6 text-white space-y-2">
              <span className="px-3 py-1 bg-[#D2643A] text-xs font-bold uppercase tracking-widest rounded inline-block">
                {activePhoto.tag}
              </span>
              <p className="text-lg font-serif italic max-w-2xl mx-auto px-4">
                “{activePhoto.caption}”
              </p>
              <p className="text-xs text-white/50 font-sans">
                {activePhoto.imageAlt}
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
