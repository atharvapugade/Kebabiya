"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flame } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

export default function FoodGallery() {
  const editorialShowcase = [
    {
      id: 1,
      title: "Murgh Peshwari Char",
      category: "Signature Kebab",
      desc: "Live-charcoal smoke infused with roasted cumin and crushed coriander seeds.",
      src: "/images/food/peshwari-kebab.jpg",
      span: "lg:col-span-7 lg:row-span-2",
      height: "h-[380px] sm:h-[480px] lg:h-[540px]",
    },
    {
      id: 2,
      title: "Royal Awadhi Dum Biryani",
      category: "Rice Gastronomy",
      desc: "Aged long-grain basmati sealed with tender cuts, saffron, and fried onions.",
      src: "/images/food/dum-biryani.jpg",
      span: "lg:col-span-5",
      height: "h-[280px] sm:h-[340px] lg:h-[255px]",
    },
    {
      id: 3,
      title: "Nawabi Tangdi Roast",
      category: "Tandoor Mastery",
      desc: "Rich cashew and cardamom glaze charred over live tandoor embers.",
      src: "/images/food/nawabi-tangdi.jpg",
      span: "lg:col-span-5",
      height: "h-[280px] sm:h-[340px] lg:h-[255px]",
    },
    {
      id: 4,
      title: "Heritage Kolhapuri Thali",
      category: "Regional Pride",
      desc: "Authentic spicy Tambda and fragrant Pandhra rassa served with tender meat fry.",
      src: "/images/food/kolhapuri-thali.jpg",
      span: "lg:col-span-4",
      height: "h-[320px] sm:h-[380px]",
    },
    {
      id: 5,
      title: "Balochi Paneer Tikka",
      category: "Vegetarian Prime",
      desc: "Handcrafted fresh paneer blocks in a robust tandoori marinade with bell peppers.",
      src: "/images/food/balochi-paneer.jpg",
      span: "lg:col-span-4",
      height: "h-[320px] sm:h-[380px]",
    },
    {
      id: 6,
      title: "Murg Nawabi Simmer",
      category: "Opulent Gravy",
      desc: "Velvety spiced sauce slow-simmered with aromatic whole spices.",
      src: "/images/food/murg-nawabi.jpg",
      span: "lg:col-span-4",
      height: "h-[320px] sm:h-[380px]",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-secondary relative overflow-hidden">
      {/* Background Ambience */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="CULINARY MASTERY"
            title="An Affair With"
            highlight="Flavour."
            description="From the first aroma to the last bite, discover the artistry behind every dining experience at Kababiya."
          />
        </ScrollReveal>

        {/* Asymmetrical Editorial Grid */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
          {editorialShowcase.map((item, idx) => (
            <div
              key={item.id}
              className={`${item.span} relative rounded-[2px] overflow-hidden group shadow-2xl border border-white/10`}
            >
              <ScrollReveal delay={idx * 0.1}>
                <div className={`relative w-full ${item.height} overflow-hidden`}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-1000 ease-out"
                  />

                  {/* Gradient & Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="editorial-eyebrow text-[9px] px-2.5 py-1 rounded-[2px] bg-black/60 backdrop-blur-md border border-white/10 text-accent">
                      {item.category}
                    </span>
                  </div>

                  {/* Editorial Caption Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transform transition-transform duration-500 group-hover:-translate-y-1">
                    <h3 className="font-serif text-xl sm:text-2xl text-text-main group-hover:text-accent-light transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-text-muted/90 font-light line-clamp-2 max-w-md">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-16 text-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 border border-accent/60 text-accent hover:bg-accent hover:text-background text-xs uppercase tracking-[0.22em] transition-all duration-300 rounded-[2px] group"
          >
            <span>VIEW OUR SIGNATURE DISHES</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
