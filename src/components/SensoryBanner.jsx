"use client";

import Image from "next/image";
import Link from "next/link";
import { Utensils } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function SensoryBanner() {
  return (
    <section className="relative py-32 sm:py-44 overflow-hidden bg-background">
      {/* Background Parallax Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/gallery/ambience-rooftop.jpg"
          alt="Ambient evening starlit dining at Kababiya"
          fill
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        {/* Dark Dramatic Atmosphere Overlays */}
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-background" />
        <div className="absolute inset-0 vignette pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="h-[1px] w-6 bg-accent" />
            <span className="editorial-eyebrow text-accent">
              A FEAST FOR THE SENSES
            </span>
            <span className="h-[1px] w-6 bg-accent" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-text-main tracking-tight leading-[1.12]">
            Good Food.
            <span className="block text-accent italic font-light my-1">
              Great Company.
            </span>
            Unforgettable Moments.
          </h2>

          <p className="mt-8 text-text-muted text-base sm:text-xl font-light font-sans max-w-xl mx-auto leading-relaxed">
            Because the best memories are often made around a table.
          </p>

          <div className="mt-10 sm:mt-12 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-9 py-4 bg-accent hover:bg-accent-light text-background font-medium text-xs uppercase tracking-[0.22em] transition-all duration-300 shadow-2xl rounded-[2px] group"
            >
              <Utensils size={16} className="text-background group-hover:rotate-12 transition-transform" />
              <span>FIND YOUR TABLE</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
