"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import Lightbox from "./Lightbox";
import { galleryImages } from "@/data/gallery";

export default function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openLightbox = (index) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="VISUAL IMPRESSIONS"
            title="The Photographic"
            highlight="Archive."
            description="Moments captured within our kitchens and dining spaces. Live tandoor fires, royal spice blends, and the intimate ambience of our Kolhapur destinations."
          />
        </ScrollReveal>

        {/* Editorial Masonry-style Grid */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {galleryImages.map((image, index) => {
            const isWide = index === 0 || index === 4;
            return (
              <ScrollReveal key={image.id} delay={index * 0.08}>
                <div
                  onClick={() => openLightbox(index)}
                  className={`group relative overflow-hidden rounded-[2px] border border-white/10 cursor-pointer shadow-xl ${
                    isWide ? "sm:col-span-2 lg:col-span-2 aspect-[16/9]" : "aspect-[4/3] sm:aspect-square"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Lightbox Trigger Icon */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full luxury-glass border border-white/15 flex items-center justify-center text-text-main opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                    <Maximize2 size={14} className="text-accent" />
                  </div>

                  {/* Caption & Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-transform duration-300 group-hover:-translate-y-0.5">
                    <span className="editorial-eyebrow text-[9px] text-accent/90 block mb-1">
                      {image.category}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl text-text-main group-hover:text-accent-light transition-colors font-medium">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        images={galleryImages}
        currentIndex={selectedIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
}
