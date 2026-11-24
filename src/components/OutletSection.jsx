"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock, ArrowRight, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { outlets } from "@/data/outlets";

export default function OutletSection() {
  return (
    <section id="outlets" className="py-24 sm:py-32 bg-secondary relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="LOCATIONS IN KOLHAPUR"
            title="Find Your Nearest"
            highlight="Kababiya."
            description="Three distinctive destinations across Rajarampuri and Tarabai Park. Each crafted with its own culinary specialty and unique hospitality charm."
          />
        </ScrollReveal>

        {/* Outlets Discovery Cards */}
        <div className="mt-16 sm:mt-20 space-y-12">
          {outlets.map((outlet, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <ScrollReveal key={outlet.slug} delay={idx * 0.15}>
                <div
                  className={`rounded-[2px] overflow-hidden luxury-card-glass border border-white/10 hover:border-accent/40 transition-all duration-500 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Outlet Photography */}
                  <div
                    className={`lg:col-span-6 relative h-[320px] sm:h-[400px] w-full overflow-hidden ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <Image
                      src={outlet.image}
                      alt={outlet.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                    <div className="absolute top-4 left-4">
                      <span className="editorial-eyebrow text-[9px] px-3 py-1.5 rounded-[2px] luxury-glass border border-white/10 text-accent font-medium">
                        {outlet.eyebrow}
                      </span>
                    </div>
                  </div>

                  {/* Outlet Details */}
                  <div
                    className={`lg:col-span-6 p-6 sm:p-10 space-y-6 ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-text-main font-medium">
                        {outlet.name}
                      </h3>
                      <p className="font-serif italic text-accent text-sm sm:text-base mt-1">
                        "{outlet.tagline}"
                      </p>
                    </div>

                    <p className="text-text-muted text-sm sm:text-base font-light leading-relaxed">
                      {outlet.description}
                    </p>

                    {/* Info Rows */}
                    <div className="space-y-3 pt-2 text-xs sm:text-sm text-text-muted/90 border-t border-white/10">
                      <div className="flex items-start gap-3">
                        <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
                        <span>{outlet.address}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <Clock size={16} className="text-accent shrink-0" />
                        <span>{outlet.timing}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <Phone size={16} className="text-accent shrink-0" />
                        <div className="flex items-center gap-3">
                          <a
                            href={`tel:${outlet.phone.replace(/\s+/g, '')}`}
                            className="text-text-main hover:text-accent font-medium transition-colors"
                          >
                            {outlet.phone}
                          </a>
                          {outlet.phoneSecondary && (
                            <>
                              <span className="text-white/20">|</span>
                              <a
                                href={`tel:${outlet.phoneSecondary.replace(/\s+/g, '')}`}
                                className="text-text-muted hover:text-accent transition-colors"
                              >
                                {outlet.phoneSecondary}
                              </a>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/outlets/${outlet.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light text-background font-medium text-xs uppercase tracking-[0.2em] transition-all rounded-[2px]"
                      >
                        <span>EXPLORE OUTLET</span>
                        <ArrowRight size={14} />
                      </Link>

                      <a
                        href={outlet.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-accent hover:text-accent text-text-main text-xs uppercase tracking-[0.2em] transition-all rounded-[2px]"
                      >
                        <MapPin size={14} className="text-accent" />
                        <span>GET DIRECTIONS</span>
                        <ExternalLink size={12} className="opacity-60" />
                      </a>

                      <a
                        href={`tel:${outlet.phone.replace(/\s+/g, '')}`}
                        className="inline-flex items-center gap-2 px-5 py-3 border border-accent/40 text-accent hover:bg-accent/10 text-xs uppercase tracking-[0.2em] transition-all rounded-[2px]"
                      >
                        <Phone size={14} />
                        <span>CALL NOW</span>
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
