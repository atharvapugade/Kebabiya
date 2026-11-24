"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { outlets } from "@/data/outlets";

export default function ExperienceCards() {
  return (
    <section id="experiences" className="py-24 sm:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="DISTINCTIVE HOSPITALITY"
            title="Our Signature"
            highlight="Experiences."
            description="Discover three carefully curated dining atmospheres across Kolhapur, each crafted to celebrate a distinct dimension of flavor, tradition, and ambience."
          />
        </ScrollReveal>

        {/* 3 Luxury Property Cards */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {outlets.map((outlet, index) => (
            <ScrollReveal key={outlet.slug} delay={index * 0.15}>
              <Link
                href={`/outlets/${outlet.slug}`}
                className="group relative block h-[520px] sm:h-[560px] rounded-[2px] overflow-hidden border border-white/10 hover:border-accent/60 transition-all duration-700 shadow-2xl bg-card"
              >
                {/* Background Image with Slow Smooth Zoom */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={outlet.image}
                    alt={outlet.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  {/* Subtle Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                </div>

                {/* Eyebrow Numbering Badge */}
                <div className="absolute top-6 left-6 z-10">
                  <div className="px-3.5 py-1.5 luxury-glass rounded-[2px] border border-white/10 text-[10px] uppercase tracking-[0.25em] text-accent font-medium">
                    {outlet.eyebrow.split("·")[0].trim()}
                  </div>
                </div>

                {/* Arrow Icon Top Right */}
                <div className="absolute top-6 right-6 z-10 w-11 h-11 rounded-full luxury-glass border border-white/15 flex items-center justify-center text-text-main group-hover:text-accent group-hover:border-accent group-hover:scale-105 transition-all duration-300">
                  <ArrowUpRight
                    size={18}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </div>

                {/* Bottom Content Area */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-10 flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-1">
                  {/* Animated Gold Accent Line */}
                  <div className="w-12 h-[2px] bg-accent/60 group-hover:w-20 group-hover:bg-accent transition-all duration-500 mb-4" />

                  {/* Outlet Title */}
                  <h3 className="font-serif text-2xl sm:text-3xl text-text-main font-normal tracking-wide group-hover:text-accent-light transition-colors">
                    {outlet.name}
                  </h3>

                  {/* Location Eyebrow */}
                  <div className="flex items-center gap-1.5 text-xs text-accent mt-2 font-medium">
                    <MapPin size={13} className="text-accent shrink-0" />
                    <span>{outlet.location}</span>
                  </div>

                  {/* Short Description */}
                  <p className="mt-3 text-text-muted text-xs sm:text-sm font-light leading-relaxed line-clamp-2">
                    {outlet.shortDescription}
                  </p>

                  {/* Explore CTA Button */}
                  <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-[0.22em] text-accent font-medium group-hover:underline underline-offset-4">
                      EXPLORE EXPERIENCE
                    </span>
                    <span className="text-xs text-text-muted/60 group-hover:text-text-main group-hover:translate-x-1 transition-all">
                      &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
