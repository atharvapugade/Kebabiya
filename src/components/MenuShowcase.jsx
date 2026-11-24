"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { menuCategories } from "@/data/menu";

export default function MenuShowcase() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);

  const selectedCategory =
    menuCategories.find((cat) => cat.id === activeCategory) || menuCategories[0];

  return (
    <section id="menu-showcase" className="py-24 sm:py-32 bg-secondary relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="TASTE OF DISTINCTION"
            title="The Art of"
            highlight="Our Menu."
            description="Explore representative selections from our kitchens. Handcrafted kebabs, sealed handi biryanis, and legendary Kolhapuri thalis prepared with unyielding culinary integrity."
          />
        </ScrollReveal>

        {/* Category Tabs */}
        <div className="mt-14 sm:mt-16 flex items-center justify-start sm:justify-center overflow-x-auto pb-4 gap-2 sm:gap-3 no-scrollbar">
          {menuCategories.map((cat) => {
            const isActive = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-5 py-2.5 text-xs uppercase tracking-[0.18em] rounded-[2px] transition-all duration-300 font-sans ${
                  isActive
                    ? "bg-accent text-background font-medium shadow-lg"
                    : "luxury-glass text-text-muted hover:text-text-main hover:border-accent/40"
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Category Tagline & Notice */}
        <div className="mt-8 text-center max-w-xl mx-auto">
          <p className="font-serif italic text-lg sm:text-xl text-text-main/90">
            "{selectedCategory.tagline}"
          </p>
          <p className="text-[11px] text-text-muted/70 mt-1 uppercase tracking-wider">
            {selectedCategory.notice}
          </p>
        </div>

        {/* Selected Dishes Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {selectedCategory.items.slice(0, 3).map((item, i) => (
            <ScrollReveal key={item.name} delay={i * 0.1}>
              <div className="group rounded-[2px] overflow-hidden luxury-card-glass border border-white/10 hover:border-accent/50 transition-all duration-500 flex flex-col h-full">
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-[2px] luxury-glass border border-white/10 text-accent font-medium">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-serif text-xl text-text-main group-hover:text-accent-light transition-colors font-medium">
                        {item.name}
                      </h3>
                      <span className={`w-2 h-2 rounded-full ${item.type === 'veg' ? 'bg-green-500' : 'bg-red-500'}`} title={item.type === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'} />
                    </div>

                    <p className="mt-3 text-xs sm:text-sm text-text-muted font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-accent/80 uppercase tracking-widest">
                      Authentic Recipe
                    </span>
                    <span className="text-text-muted/60 text-[11px]">
                      Dine-in · Parcel
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Dedicated Menu Page CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-accent text-accent hover:bg-accent hover:text-background text-xs uppercase tracking-[0.22em] transition-all duration-300 rounded-[2px] group font-medium"
          >
            <span>DISCOVER COMPLETE MENU & CATEGORIES</span>
            <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
