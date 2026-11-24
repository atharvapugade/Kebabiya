"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Utensils, Phone, Info, Search, Filter } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import { menuCategories } from "@/data/menu";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filterType, setFilterType] = useState("all"); // 'all', 'veg', 'non-veg'
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = menuCategories
    .map((cat) => {
      let items = cat.items;
      if (filterType !== "all") {
        items = items.filter((item) => item.type === filterType);
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        items = items.filter(
          (item) =>
            item.name.toLowerCase().includes(q) ||
            item.description.toLowerCase().includes(q)
        );
      }
      return { ...cat, items };
    })
    .filter((cat) => {
      if (activeCategory === "all") return cat.items.length > 0;
      return cat.id === activeCategory && cat.items.length > 0;
    });

  return (
    <div className="bg-background text-text-main min-h-screen pt-24 pb-32">
      {/* Header Banner */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-secondary border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-ambience.jpg"
            alt="Kababiya fine dining ambience"
            fill
            priority
            className="object-cover object-center opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-[1px] w-6 bg-accent" />
              <span className="editorial-eyebrow text-accent">
                CULINARY REPERTOIRE
              </span>
              <span className="h-[1px] w-6 bg-accent" />
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-text-main tracking-tight leading-[1.1]">
              The Gastronomic
              <span className="block italic text-accent font-light mt-1">
                Collection.
              </span>
            </h1>

            <p className="mt-6 text-text-muted text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed">
              A curated showcase of authentic tandoori kebabs, slow-cooked royal biryanis, and rich Maharashtrian thalis across Kababiya destinations in Kolhapur.
            </p>

            {/* Official Verification Notice */}
            <div className="mt-8 max-w-2xl mx-auto p-4 rounded-[2px] luxury-glass border border-white/10 flex items-start gap-3 text-left">
              <Info size={18} className="text-accent shrink-0 mt-0.5" />
              <div className="text-xs text-text-muted font-light leading-relaxed">
                <span className="text-text-main font-medium">Authenticity Guarantee:</span>{" "}
                Dishes featured reflect verified public offerings of Kababiya. In accordance with brand transparency, comprehensive seasonal pricing is confirmed directly at each outlet table.
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter and Category Controls */}
      <section className="sticky top-16 z-30 luxury-glass border-b border-white/10 py-4 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            <button
              onClick={() => setActiveCategory("all")}
              className={`whitespace-nowrap px-4 py-2 text-xs uppercase tracking-wider rounded-[2px] transition-all font-sans ${
                activeCategory === "all"
                  ? "bg-accent text-background font-medium"
                  : "text-text-muted hover:text-text-main hover:bg-white/5"
              }`}
            >
              All Selections
            </button>
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 text-xs uppercase tracking-wider rounded-[2px] transition-all font-sans ${
                  activeCategory === cat.id
                    ? "bg-accent text-background font-medium"
                    : "text-text-muted hover:text-text-main hover:bg-white/5"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search & Dietary Toggle */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            {/* Dietary Toggle */}
            <div className="flex items-center rounded-[2px] border border-white/10 p-0.5 text-xs">
              <button
                onClick={() => setFilterType("all")}
                className={`px-2.5 py-1 rounded-[2px] uppercase text-[10px] tracking-wider ${
                  filterType === "all" ? "bg-white/15 text-text-main" : "text-text-muted"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterType("veg")}
                className={`px-2.5 py-1 rounded-[2px] uppercase text-[10px] tracking-wider flex items-center gap-1.5 ${
                  filterType === "veg" ? "bg-green-900/60 text-green-300 font-medium" : "text-text-muted"
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Veg
              </button>
              <button
                onClick={() => setFilterType("non-veg")}
                className={`px-2.5 py-1 rounded-[2px] uppercase text-[10px] tracking-wider flex items-center gap-1.5 ${
                  filterType === "non-veg" ? "bg-red-900/60 text-red-300 font-medium" : "text-text-muted"
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                Non-Veg
              </button>
            </div>

            {/* Quick Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search dish..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-36 sm:w-48 pl-8 pr-3 py-1.5 text-xs bg-background/80 border border-white/10 rounded-[2px] text-text-main placeholder-text-muted/50 focus:outline-none focus:border-accent"
              />
              <Search size={13} className="absolute left-2.5 top-2.5 text-text-muted/60" />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Categories and Dish Cards */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mt-16 sm:mt-20">
        {filteredCategories.length === 0 ? (
          <div className="text-center py-24 text-text-muted">
            <p className="font-serif text-2xl text-text-main">No dishes match your filter.</p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setFilterType("all");
                setSearchQuery("");
              }}
              className="mt-4 text-xs uppercase tracking-widest text-accent hover:underline"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="space-y-20">
            {filteredCategories.map((category) => (
              <div key={category.id} id={category.id} className="scroll-mt-36">
                {/* Category Header */}
                <div className="border-b border-white/10 pb-4 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                  <div>
                    <h2 className="font-serif text-3xl sm:text-4xl text-text-main font-medium">
                      {category.name}
                    </h2>
                    <p className="font-serif italic text-accent text-sm sm:text-base mt-1">
                      "{category.tagline}"
                    </p>
                  </div>
                  <span className="text-xs text-text-muted/60 uppercase tracking-widest">
                    {category.items.length} Curated Items
                  </span>
                </div>

                {/* Dish Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="rounded-[2px] overflow-hidden luxury-card-glass border border-white/10 hover:border-accent/40 transition-all duration-500 flex flex-col justify-between group"
                    >
                      {/* Dish Photo */}
                      <div className="relative h-56 w-full overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                        
                        <div className="absolute top-3 left-3">
                          <span className="text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-[2px] luxury-glass border border-white/10 text-accent font-medium">
                            {item.tag}
                          </span>
                        </div>

                        <div className="absolute top-3 right-3">
                          <span
                            className={`w-3 h-3 rounded-full border border-black/40 block ${
                              item.type === "veg" ? "bg-green-500" : "bg-red-500"
                            }`}
                            title={item.type === "veg" ? "Vegetarian" : "Non-Vegetarian"}
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-grow flex flex-col justify-between">
                        <div>
                          <h3 className="font-serif text-xl sm:text-2xl text-text-main group-hover:text-accent-light transition-colors font-medium">
                            {item.name}
                          </h3>

                          <p className="mt-3 text-xs sm:text-sm text-text-muted font-light leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        <div className="pt-5 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-text-muted/70">
                          <span className="text-[11px] uppercase tracking-wider text-accent/90">
                            Available Daily
                          </span>
                          <span className="text-[11px]">
                            Dine-In & Takeaway
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Reservation CTA Strip */}
      <section className="mt-28 max-w-5xl mx-auto px-6 sm:px-8">
        <div className="p-8 sm:p-12 rounded-[2px] luxury-card-glass border border-accent/30 text-center space-y-6">
          <h3 className="font-serif text-3xl sm:text-4xl text-text-main">
            Taste The Artistry in Person
          </h3>
          <p className="text-text-muted text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
            Every dish is prepared fresh to order. Reserve your table at your preferred Kababiya outlet or enquire about our banquet menus.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-accent hover:bg-accent-light text-background font-medium text-xs uppercase tracking-[0.2em] transition-all rounded-[2px]"
            >
              RESERVE A TABLE
            </Link>
            <a
              href="tel:+919090905666"
              className="px-6 py-3.5 border border-white/20 hover:border-accent hover:text-accent text-text-main text-xs uppercase tracking-[0.2em] transition-all luxury-glass rounded-[2px]"
            >
              CALL +91 90909 05666
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
