"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || currentIndex === null) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8"
        onClick={onClose}
      >
        {/* Top Control Bar */}
        <div
          className="flex items-center justify-between text-text-muted text-xs border-b border-white/10 pb-4 z-20"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3">
            <span className="editorial-eyebrow text-accent text-[11px]">
              KABABIYA GALLERY
            </span>
            <span className="text-white/30">|</span>
            <span className="text-text-main font-mono">
              {currentIndex + 1} / {images.length}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Lightbox"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-text-main hover:text-accent hover:border-accent transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Center Image Container */}
        <div
          className="relative flex-grow flex items-center justify-center my-4 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Previous Button */}
          <button
            onClick={onPrev}
            aria-label="Previous Image"
            className="absolute left-2 sm:left-6 z-20 w-12 h-12 rounded-full luxury-glass border border-white/20 flex items-center justify-center text-text-main hover:text-accent hover:border-accent transition-all"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Image */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative w-full h-[70vh] max-w-5xl"
          >
            <Image
              src={currentImage.src}
              alt={currentImage.alt || currentImage.title}
              fill
              quality={90}
              sizes="(max-width: 1200px) 90vw, 1200px"
              className="object-contain object-center"
            />
          </motion.div>

          {/* Next Button */}
          <button
            onClick={onNext}
            aria-label="Next Image"
            className="absolute right-2 sm:right-6 z-20 w-12 h-12 rounded-full luxury-glass border border-white/20 flex items-center justify-center text-text-main hover:text-accent hover:border-accent transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Bottom Caption Bar */}
        <div
          className="text-center pt-3 border-t border-white/10 z-20"
          onClick={(e) => e.stopPropagation()}
        >
          <h4 className="font-serif text-lg sm:text-xl text-text-main font-medium">
            {currentImage.title}
          </h4>
          {currentImage.caption && (
            <p className="text-xs text-text-muted mt-1 max-w-lg mx-auto font-light">
              {currentImage.caption}
            </p>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
