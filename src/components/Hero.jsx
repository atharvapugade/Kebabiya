"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Compass, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-background">
      {/* Background Media with Ken Burns Slow Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.0 }}
          animate={{ scale: 1.1 }}
          transition={{
            duration: 22,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/hero/hero-bg.jpg"
            alt="Cinematic charcoal grilled kebabs at Kababiya Kolhapur"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        {/* Cinematic Multi-layered Dark Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-black/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 z-10" />
        <div className="absolute inset-0 vignette z-10 pointer-events-none" />
        <div className="absolute inset-0 grain-overlay z-10 pointer-events-none opacity-40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center pt-16">
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-md mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="editorial-eyebrow text-[10px] sm:text-xs text-accent">
            A SIGNATURE DINING EXPERIENCE · KOLHAPUR
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-text-main tracking-tight leading-[1.08] max-w-4xl"
        >
          Where Every Flavour
          <span className="block italic text-accent font-light mt-1 md:mt-2">
            Tells A Story.
          </span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="mt-6 sm:mt-8 text-text-muted text-base sm:text-lg md:text-xl font-light font-sans max-w-2xl leading-relaxed"
        >
          Discover a world of exceptional flavours, handcrafted experiences and unforgettable dining moments with Kababiya.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <Link
            href="/#experiences"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-accent hover:bg-accent-light text-background font-medium text-xs uppercase tracking-[0.22em] transition-all duration-300 shadow-xl rounded-[2px] group"
          >
            <Compass size={16} className="text-background group-hover:rotate-45 transition-transform" />
            <span>EXPLORE OUR EXPERIENCES</span>
          </Link>

          <Link
            href="/#outlets"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-white/20 hover:border-accent hover:text-accent text-text-main text-xs uppercase tracking-[0.22em] transition-all duration-300 backdrop-blur-sm rounded-[2px] group"
          >
            <MapPin size={16} className="text-accent group-hover:scale-110 transition-transform" />
            <span>DISCOVER OUR OUTLETS</span>
          </Link>
        </motion.div>
      </div>

      {/* Minimal Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-text-muted/60"
      >
        <span className="text-[10px] uppercase tracking-[0.28em] font-sans">
          SCROLL TO EXPLORE
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-accent/80" />
        </motion.div>
      </motion.div>
    </section>
  );
}
