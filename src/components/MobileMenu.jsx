"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Phone, ArrowRight, Instagram } from "lucide-react";
import { outlets } from "@/data/outlets";

export default function MobileMenu({ isOpen, onClose }) {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Our Story", href: "/our-story" },
    { label: "Signature Experiences", href: "/#experiences" },
    { label: "Our Menu", href: "/menu" },
    { label: "Our Outlets", href: "/#outlets" },
    { label: "Contact & Table Enquiry", href: "/contact" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-50 bg-[#111111]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <Link href="/" onClick={onClose} className="flex flex-col">
              <span className="font-serif text-2xl tracking-[0.2em] text-text-main font-semibold">
                KABABIYA
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-accent">
                Kolhapur · Signature Hospitality
              </span>
            </Link>

            <button
              onClick={onClose}
              aria-label="Close menu"
              className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-text-main hover:text-accent hover:border-accent transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Links */}
          <div className="py-8 space-y-5">
            <p className="editorial-eyebrow text-accent/80 text-[11px] mb-2">
              NAVIGATION
            </p>
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 * idx, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="group flex items-center justify-between text-2xl sm:text-3xl font-serif text-text-main hover:text-accent transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowRight
                    size={18}
                    className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 text-accent transition-all"
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Outlets Quick Navigation */}
          <div className="py-6 border-t border-white/10">
            <p className="editorial-eyebrow text-accent/80 text-[11px] mb-4">
              OUR DESTINATIONS
            </p>
            <div className="space-y-3">
              {outlets.map((outlet) => (
                <Link
                  key={outlet.slug}
                  href={`/outlets/${outlet.slug}`}
                  onClick={onClose}
                  className="block text-sm text-text-muted hover:text-text-main transition-colors"
                >
                  <span className="text-accent font-medium">{outlet.name}</span>
                  <span className="text-xs text-text-muted/70 block mt-0.5">
                    {outlet.location}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Info */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-text-muted">
            <div className="flex items-center gap-4">
              <a
                href="tel:+919090905666"
                className="flex items-center gap-1.5 text-accent hover:underline"
              >
                <Phone size={14} /> +91 90909 05666
              </a>
              <span className="text-white/20">|</span>
              <a
                href="https://instagram.com/kababiyakanopy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-accent"
              >
                <Instagram size={14} /> @kababiyakanopy
              </a>
            </div>
            <p>© {new Date().getFullYear()} Kababiya Hospitality.</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
