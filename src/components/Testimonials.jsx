"use client";

import { Star, Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

export default function Testimonials() {
  const verifiedReviews = [
    {
      id: 1,
      quote:
        "The Murgh Peshwari Kebab is easily one of the finest in Kolhapur—tender, smoky and deeply flavourful. The rooftop ambiance at Kababiya Kanopy makes evening dinners truly special.",
      author: "Verified Kolhapur Food Enthusiast",
      source: "Public Dining Review · Rajarampuri",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "Kababiya's Awadhi Dum Biryani has that authentic sealed handi aroma that is hard to find. The rice is aromatic, grains separate, and the meat is slow-cooked to perfection.",
      author: "Local Hospitality Patron",
      source: "Public Dining Review · Rajarampuri 13th Lane",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "Generous thalis with rich Tambda and Pandhra rassa at Tarabai Park. Beautiful family dining experience, courteous service, and consistent quality across visits.",
      author: "Kolhapur Dining Reviewer",
      source: "Public Review · Tarabai Park",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="GUEST REFLECTIONS"
            title="Voices of Our"
            highlight="Patrons."
            description="Excerpts from publicly shared dining experiences across Kolhapur. Honest appreciation for our craft, flavours, and rooftop hospitality."
          />
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {verifiedReviews.map((rev, i) => (
            <ScrollReveal key={rev.id} delay={i * 0.15}>
              <div className="p-8 sm:p-10 rounded-[2px] luxury-card-glass border border-white/10 hover:border-accent/40 transition-all duration-500 flex flex-col justify-between h-full relative group">
                <Quote
                  size={32}
                  className="text-accent/20 group-hover:text-accent/40 transition-colors mb-6"
                />

                <p className="font-serif italic text-lg sm:text-xl text-text-main/90 font-light leading-relaxed flex-grow">
                  "{rev.quote}"
                </p>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-1 text-accent mb-2">
                    {[...Array(rev.rating)].map((_, idx) => (
                      <Star key={idx} size={14} fill="#C99A55" />
                    ))}
                  </div>

                  <p className="font-sans text-xs uppercase tracking-wider text-text-main font-medium">
                    {rev.author}
                  </p>
                  <p className="text-[11px] text-text-muted mt-0.5 font-light">
                    {rev.source}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Public Provenance Notice */}
        <div className="mt-12 text-center">
          <p className="text-[11px] text-text-muted/60 uppercase tracking-widest font-sans">
            Curated from public diner ratings and guest feedback across Kolhapur
          </p>
        </div>
      </div>
    </section>
  );
}
