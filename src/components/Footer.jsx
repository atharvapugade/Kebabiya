import Link from "next/link";
import { MapPin, Phone, Instagram, Clock, ArrowUpRight } from "lucide-react";
import { outlets } from "@/data/outlets";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-white/10 text-text-muted pt-20 pb-12 font-sans relative overflow-hidden">
      {/* Decorative Gold Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-serif text-3xl sm:text-4xl font-bold tracking-[0.22em] text-text-main">
                KABABIYA
              </span>
              <span className="block text-[10px] uppercase tracking-[0.3em] text-accent mt-1">
                A Signature Dining Experience · Kolhapur
              </span>
            </Link>

            <p className="text-sm sm:text-base text-text-muted/90 font-light leading-relaxed max-w-sm">
              Crafting unforgettable culinary moments across Kolhapur. From live-charcoal tandoori kebabs and handi dum biryanis to authentic regional thalis and starlit rooftop dining.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <a
                href="https://instagram.com/kababiyakanopy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-text-main hover:text-accent hover:border-accent transition-colors"
                aria-label="Kababiya Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="tel:+919090905666"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-text-main hover:text-accent hover:border-accent transition-colors"
                aria-label="Call Kababiya"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-lg text-text-main tracking-wider">
              EXPLORE
            </h4>
            <div className="h-[1px] w-8 bg-accent/60" />
            <ul className="space-y-2.5 text-xs tracking-wider uppercase">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="hover:text-accent transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/#experiences" className="hover:text-accent transition-colors">
                  Experiences
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-accent transition-colors">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="hover:text-accent transition-colors">
                  Visual Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact & Enquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Outlets */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg text-text-main tracking-wider">
              OUR DESTINATIONS
            </h4>
            <div className="h-[1px] w-8 bg-accent/60" />
            <ul className="space-y-4 text-xs">
              {outlets.map((outlet) => (
                <li key={outlet.slug}>
                  <Link
                    href={`/outlets/${outlet.slug}`}
                    className="group block hover:text-text-main transition-colors"
                  >
                    <div className="text-accent group-hover:text-accent-light font-medium flex items-center gap-1">
                      <span>{outlet.name}</span>
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="text-text-muted/70 text-[11px] mt-0.5">
                      {outlet.location}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg text-text-main tracking-wider">
              HOSPITALITY DESK
            </h4>
            <div className="h-[1px] w-8 bg-accent/60" />
            <div className="space-y-3 text-xs text-text-muted/90">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
                <span>Rajarampuri & Tarabai Park, Kolhapur, Maharashtra — 416008</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-accent shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919090905666" className="hover:text-accent transition-colors">
                    +91 90909 05666
                  </a>
                  <a href="tel:+919980106899" className="hover:text-accent transition-colors text-[11px] text-text-muted/70">
                    +91 99801 06899
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock size={16} className="text-accent shrink-0 mt-0.5" />
                <span>Lunch: 11:30 AM – 3:30 PM<br />Dinner: 6:30 PM – Midnight</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-block text-xs uppercase tracking-widest text-accent hover:text-accent-light underline underline-offset-4"
              >
                Book An Experience &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted/60">
          <p>© {new Date().getFullYear()} KABABIYA. All rights reserved. Client Prototype Presentation.</p>
          <div className="flex items-center gap-6">
            <Link href="/our-story" className="hover:text-accent transition-colors">
              Brand Story
            </Link>
            <span>·</span>
            <Link href="/menu" className="hover:text-accent transition-colors">
              Menu Index
            </Link>
            <span>·</span>
            <Link href="/contact" className="hover:text-accent transition-colors">
              Table Enquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
