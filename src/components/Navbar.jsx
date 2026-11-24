"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown, Phone, MapPin } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { outlets } from "@/data/outlets";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [outletsDropdown, setOutletsDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "luxury-glass py-3.5 shadow-2xl"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link href="/" className="group flex flex-col">
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.22em] text-text-main group-hover:text-accent transition-colors">
              KABABIYA
            </span>
            <span className="text-[9px] uppercase tracking-[0.32em] text-accent/90 font-sans font-medium -mt-0.5">
              Kolhapur · Fine Hospitality
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`text-xs tracking-[0.18em] uppercase transition-colors relative py-1 ${
                pathname === "/"
                  ? "text-accent font-semibold"
                  : "text-text-main/90 hover:text-accent"
              }`}
            >
              Home
              {pathname === "/" && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent" />
              )}
            </Link>

            <Link
              href="/our-story"
              className={`text-xs tracking-[0.18em] uppercase transition-colors relative py-1 ${
                pathname === "/our-story"
                  ? "text-accent font-semibold"
                  : "text-text-main/90 hover:text-accent"
              }`}
            >
              Our Story
              {pathname === "/our-story" && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent" />
              )}
            </Link>

            <Link
              href="/#experiences"
              className="text-xs tracking-[0.18em] uppercase text-text-main/90 hover:text-accent transition-colors py-1"
            >
              Experiences
            </Link>

            {/* Outlets Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOutletsDropdown(true)}
              onMouseLeave={() => setOutletsDropdown(false)}
            >
              <button
                className={`text-xs tracking-[0.18em] uppercase flex items-center gap-1.5 transition-colors py-1 ${
                  pathname.startsWith("/outlets")
                    ? "text-accent font-semibold"
                    : "text-text-main/90 hover:text-accent"
                }`}
              >
                <span>Outlets</span>
                <ChevronDown size={14} className="opacity-70 transition-transform group-hover:rotate-180" />
              </button>

              {outletsDropdown && (
                <div className="absolute top-full -left-4 w-72 pt-3">
                  <div className="luxury-glass rounded-sm p-3 border border-white/10 shadow-2xl space-y-1">
                    {outlets.map((outlet) => (
                      <Link
                        key={outlet.slug}
                        href={`/outlets/${outlet.slug}`}
                        className="block px-3 py-2.5 rounded-sm hover:bg-white/5 transition-colors group"
                      >
                        <div className="text-xs font-serif font-medium text-text-main group-hover:text-accent transition-colors">
                          {outlet.name}
                        </div>
                        <div className="text-[10px] text-text-muted mt-0.5 flex items-center gap-1">
                          <MapPin size={10} className="text-accent/80" />
                          <span>{outlet.location}</span>
                        </div>
                      </Link>
                    ))}
                    <div className="pt-2 border-t border-white/10 mt-1">
                      <Link
                        href="/#outlets"
                        className="block text-[11px] text-center text-accent uppercase tracking-wider py-1 hover:underline"
                      >
                        View All Locations
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/menu"
              className={`text-xs tracking-[0.18em] uppercase transition-colors relative py-1 ${
                pathname === "/menu"
                  ? "text-accent font-semibold"
                  : "text-text-main/90 hover:text-accent"
              }`}
            >
              Menu
              {pathname === "/menu" && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent" />
              )}
            </Link>

            <Link
              href="/contact"
              className={`text-xs tracking-[0.18em] uppercase transition-colors relative py-1 ${
                pathname === "/contact"
                  ? "text-accent font-semibold"
                  : "text-text-main/90 hover:text-accent"
              }`}
            >
              Contact
              {pathname === "/contact" && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent" />
              )}
            </Link>
          </nav>

          {/* Right Action CTA & Mobile Trigger */}
          <div className="flex items-center gap-4">
            <Link
              href="/menu"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-medium text-accent border border-accent/60 hover:bg-accent hover:text-background transition-all duration-300 rounded-[2px]"
            >
              Explore Menu
            </Link>

            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Mobile Menu"
              className="lg:hidden w-10 h-10 rounded-sm border border-white/15 flex items-center justify-center text-text-main hover:text-accent hover:border-accent transition-colors"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
