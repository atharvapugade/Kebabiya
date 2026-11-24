"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function BrandStory() {
  return (
    <section className="py-24 sm:py-32 bg-secondary relative overflow-hidden">
      {/* Decorative subtle border line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Asymmetrical Image Frame (Left Column) */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal yOffset={32}>
              <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full max-w-lg mx-auto lg:max-w-none overflow-hidden rounded-[2px] shadow-2xl group">
                <Image
                  src="/images/gallery/chef-tandoor.jpg"
                  alt="Crafting culinary excellence at Kababiya tandoor"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                
                {/* Subtle Floating Stamp / Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-5 luxury-glass rounded-[2px] border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent">
                      <Sparkles size={14} />
                    </div>
                    <div>
                      <p className="font-serif text-sm text-text-main font-medium">
                        Authentic Tandoor & Mughlai Craft
                      </p>
                      <p className="text-[11px] text-text-muted">
                        Slow-fire culinary traditions in Kolhapur
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Decorative Gold Border Offset Frame */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-full h-full border border-accent/20 rounded-[2px] -z-10 pointer-events-none" />
          </div>

          {/* Editorial Content (Right Column) */}
          <div className="lg:col-span-6 space-y-8">
            <ScrollReveal delay={0.15}>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-[1px] w-8 bg-accent" />
                <span className="editorial-eyebrow text-accent">
                  THE KABABIYA EXPERIENCE
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-text-main font-normal tracking-tight leading-[1.15]">
                Crafted With Passion.
                <span className="block italic text-accent font-light mt-1">
                  Served With Pride.
                </span>
              </h2>

              <p className="text-text-muted text-base sm:text-lg leading-relaxed font-light mt-6">
                Every great dining experience begins with a passion for flavour. At Kababiya, we bring together memorable food, welcoming spaces and a commitment to making every visit special.
              </p>

              <p className="text-text-muted/80 text-sm sm:text-base leading-relaxed font-light mt-4">
                From the live sizzle of charcoal tandoors to the royal layering of fragrant dum biryanis, our kitchens in Kolhapur honor time-tested techniques. Whether it is an intimate family meal over traditional thalis or a starlit evening at our rooftop kanopy, Kababiya is where heartfelt hospitality meets culinary distinction.
              </p>

              <div className="pt-6">
                <Link
                  href="/our-story"
                  className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-accent hover:text-accent-light font-medium transition-colors"
                >
                  <span className="border-b border-accent pb-1">
                    DISCOVER OUR STORY
                  </span>
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1.5 transition-transform"
                  />
                </Link>
              </div>

              {/* Three Editorial Pillars */}
              <div className="grid grid-cols-3 gap-4 pt-10 border-t border-white/10 mt-10">
                <div>
                  <div className="font-serif text-2xl sm:text-3xl text-text-main">
                    3
                  </div>
                  <div className="text-[10px] sm:text-xs text-text-muted uppercase tracking-wider mt-1">
                    Signature Outlets
                  </div>
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl text-accent">
                    100%
                  </div>
                  <div className="text-[10px] sm:text-xs text-text-muted uppercase tracking-wider mt-1">
                    Authentic Recipes
                  </div>
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl text-text-main">
                    Kolhapur
                  </div>
                  <div className="text-[10px] sm:text-xs text-text-muted uppercase tracking-wider mt-1">
                    Culinary Roots
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
