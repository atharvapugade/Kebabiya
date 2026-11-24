"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Calendar,
  Utensils,
  Maximize2,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import Lightbox from "./Lightbox";

export default function OutletPageTemplate({ outlet }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    guests: "2 Guests",
    notes: "",
  });

  const galleryList = outlet.gallery.map((img, i) => ({
    id: i,
    src: img,
    title: `${outlet.name} - Impression 0${i + 1}`,
    caption: `Authentic experience at ${outlet.location}`,
    alt: `${outlet.name} dining ambiance and food`,
  }));

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.date) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="bg-background text-text-main min-h-screen">
      {/* 1. Full-screen Outlet Hero */}
      <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={outlet.heroImage}
            alt={outlet.name}
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-center scale-105 animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/60 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
          <div className="absolute inset-0 vignette pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center pt-20">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-md mb-6">
            <span className="editorial-eyebrow text-accent text-[10px] sm:text-xs">
              {outlet.eyebrow}
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-text-main tracking-tight leading-[1.1]">
            {outlet.name}
          </h1>

          <p className="font-serif italic text-accent text-lg sm:text-2xl mt-4 max-w-2xl mx-auto font-light">
            "{outlet.tagline}"
          </p>

          <p className="mt-6 text-text-muted text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
            {outlet.shortDescription}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#outlet-reservation"
              className="px-8 py-3.5 bg-accent hover:bg-accent-light text-background font-medium text-xs uppercase tracking-[0.2em] transition-all rounded-[2px] shadow-xl"
            >
              RESERVE A TABLE
            </a>

            <a
              href={`tel:${outlet.phone.replace(/\s+/g, '')}`}
              className="px-6 py-3.5 border border-white/20 hover:border-accent hover:text-accent text-text-main text-xs uppercase tracking-[0.2em] transition-all luxury-glass rounded-[2px]"
            >
              CALL OUTLET ({outlet.phone})
            </a>

            <a
              href={outlet.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 border border-white/20 hover:border-accent hover:text-accent text-text-main text-xs uppercase tracking-[0.2em] transition-all luxury-glass rounded-[2px] flex items-center gap-2"
            >
              <MapPin size={14} className="text-accent" />
              <span>DIRECTIONS</span>
              <ExternalLink size={12} className="opacity-60" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. Outlet Introduction & Features */}
      <section className="py-24 sm:py-32 bg-secondary relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story */}
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal>
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-[1px] w-6 bg-accent" />
                  <span className="editorial-eyebrow text-accent">
                    THE DESTINATION
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-text-main font-normal leading-[1.15]">
                  A Sanctuary of Flavor in{" "}
                  <span className="italic text-accent">{outlet.location.split(",")[0]}</span>
                </h2>

                <p className="text-text-muted text-base sm:text-lg font-light leading-relaxed">
                  {outlet.description}
                </p>

                {/* Features Checklist */}
                <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/10 mt-8">
                  {outlet.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent shrink-0">
                        <CheckCircle2 size={12} />
                      </div>
                      <span className="text-xs sm:text-sm text-text-main/90 font-medium">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Side Card Info */}
            <div className="lg:col-span-5">
              <ScrollReveal delay={0.2}>
                <div className="p-8 sm:p-10 rounded-[2px] luxury-card-glass border border-white/10 shadow-2xl space-y-6">
                  <h3 className="font-serif text-2xl text-text-main border-b border-white/10 pb-4">
                    Guest Information
                  </h3>

                  <div className="space-y-4 text-xs sm:text-sm text-text-muted">
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-text-main font-medium">Address</span>
                        <span>{outlet.address}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock size={18} className="text-accent shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-text-main font-medium">Operating Hours</span>
                        <span>{outlet.timing}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone size={18} className="text-accent shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-text-main font-medium">Reservations & Enquiries</span>
                        <a href={`tel:${outlet.phone.replace(/\s+/g, '')}`} className="text-accent hover:underline block">
                          {outlet.phone}
                        </a>
                        {outlet.phoneSecondary && (
                          <a href={`tel:${outlet.phoneSecondary.replace(/\s+/g, '')}`} className="text-text-muted hover:underline block text-xs mt-0.5">
                            {outlet.phoneSecondary}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <a
                      href={outlet.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 bg-accent/15 border border-accent/40 text-accent hover:bg-accent hover:text-background text-xs uppercase tracking-widest font-medium transition-colors rounded-[2px]"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Signature Specialties */}
      <section className="py-24 sm:py-32 bg-background relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="CULINARY HIGHLIGHTS"
              title="Signature"
              highlight="Specialties."
              description={`Culinary creations celebrated by guests at ${outlet.name}. Handcrafted using secret marinades, fragrant aged basmati, and royal spices.`}
            />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {outlet.signatureSpecialties.map((dish, i) => (
              <ScrollReveal key={dish.name} delay={i * 0.1}>
                <div className="p-8 rounded-[2px] luxury-card-glass border border-white/10 hover:border-accent/40 transition-all duration-500 group flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="editorial-eyebrow text-[9px] px-2.5 py-1 rounded-[2px] bg-accent/10 border border-accent/30 text-accent font-medium">
                        {dish.tag}
                      </span>
                      <Sparkles size={14} className="text-accent/60 group-hover:text-accent transition-colors" />
                    </div>

                    <h3 className="font-serif text-2xl text-text-main group-hover:text-accent-light transition-colors mt-4 font-medium">
                      {dish.name}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-text-muted font-light leading-relaxed">
                      {dish.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-text-muted/70">
                    <span>Authentic House Recipe</span>
                    <span className="text-accent group-hover:translate-x-1 transition-transform">
                      Signature Selection &rarr;
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-accent hover:underline underline-offset-8"
            >
              <span>Explore Complete Menu Archive</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Photographic Impressions Gallery */}
      <section className="py-24 bg-secondary relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="ATMOSPHERE & PLATING"
              title="Visual"
              highlight="Impressions."
              description={`A glimpse into the ambience and art of plating at ${outlet.name}.`}
            />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {outlet.gallery.map((img, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div
                  onClick={() => {
                    setLightboxIndex(idx);
                    setLightboxOpen(true);
                  }}
                  className="group relative h-72 rounded-[2px] overflow-hidden border border-white/10 cursor-pointer shadow-xl"
                >
                  <Image
                    src={img}
                    alt={`${outlet.name} scene ${idx + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-50 group-hover:opacity-80 transition-opacity" />
                  
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full luxury-glass border border-white/15 flex items-center justify-center text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 size={13} />
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-serif text-sm text-text-main group-hover:text-accent-light transition-colors">
                      {outlet.name}
                    </p>
                    <span className="text-[10px] text-text-muted uppercase tracking-widest block">
                      Scene 0{idx + 1}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Table Enquiry for this Outlet */}
      <section id="outlet-reservation" className="py-24 sm:py-32 bg-background relative">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="RESERVE YOUR TABLE"
              title="Experience"
              highlight={outlet.name}
              description={`Reserve your table at ${outlet.location}. For private celebrations, group dinners, or special requests, our hospitality team is at your service.`}
            />
          </ScrollReveal>

          <div className="mt-12 p-8 sm:p-12 luxury-card-glass border border-white/10 rounded-[2px] shadow-2xl">
            {formSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-accent/20 border border-accent flex items-center justify-center mx-auto text-accent">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="font-serif text-2xl text-text-main">
                  Table Enquiry Logged
                </h3>
                <p className="text-text-muted text-sm max-w-md mx-auto font-light">
                  Thank you, <span className="text-accent">{formData.name}</span>. Your request for <span className="text-text-main">{outlet.name}</span> on <span className="text-text-main">{formData.date}</span> for <span className="text-text-main">{formData.guests}</span> has been logged.
                </p>
                <p className="text-xs text-text-muted/70 italic">
                  * Prototype notice: Submissions demonstrate frontend validation. Call {outlet.phone} for immediate table confirmation.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 text-xs uppercase tracking-widest text-accent hover:underline"
                >
                  Make Another Request &rarr;
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Deshmukh"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-[2px] bg-background/80 border border-white/10 text-text-main text-sm focus:outline-none focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98220 00000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-[2px] bg-background/80 border border-white/10 text-text-main text-sm focus:outline-none focus:border-accent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-[2px] bg-background/80 border border-white/10 text-text-main text-sm focus:outline-none focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">
                      Number of Guests
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) =>
                        setFormData({ ...formData, guests: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-[2px] bg-background/80 border border-white/10 text-text-main text-sm focus:outline-none focus:border-accent"
                    >
                      {["2 Guests", "3-4 Guests", "5-8 Guests", "8+ Party"].map(
                        (g) => (
                          <option key={g} value={g} className="bg-[#111111]">
                            {g}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">
                    Notes or Seating Preferences
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Outdoor canopy table, birthday celebration, vegetarian preferences..."
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-[2px] bg-background/80 border border-white/10 text-text-main text-sm focus:outline-none focus:border-accent"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[11px] text-text-muted/70">
                    * Prototype notice: Form validates locally. Direct reservations via {outlet.phone}.
                  </p>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-accent hover:bg-accent-light text-background font-medium text-xs uppercase tracking-[0.2em] transition-all rounded-[2px] shadow-xl"
                  >
                    CONFIRM TABLE ENQUIRY
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox for Outlet Gallery */}
      <Lightbox
        images={galleryList}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() =>
          setLightboxIndex((prev) => (prev + 1) % galleryList.length)
        }
        onPrev={() =>
          setLightboxIndex((prev) =>
            prev === 0 ? galleryList.length - 1 : prev - 1
          )
        }
      />
    </div>
  );
}
