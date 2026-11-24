"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, MapPin, Compass, Calendar, Users, Send, CheckCircle2, Clock } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { outlets } from "@/data/outlets";

export default function ReservationSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    outlet: outlets[0].name,
    guests: "2 Guests",
    date: "",
    time: "Dinner (7:30 PM)",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Please provide your full name.";
    if (!formData.phone.trim() || formData.phone.length < 10)
      errs.phone = "Please provide a valid 10-digit phone number.";
    if (!formData.date) errs.date = "Please select your preferred date.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="reservations" className="py-24 sm:py-32 bg-secondary relative overflow-hidden">
      {/* Decorative Golden Ambient Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-accent/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow="RESERVE YOUR MOMENT"
            title="Your Table Is"
            highlight="Waiting."
            description="Make your next dining experience memorable. Discover your nearest Kababiya destination or leave your enquiry below."
          />
        </ScrollReveal>

        {/* Quick Action Buttons Row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/#outlets"
            className="inline-flex items-center gap-2 px-6 py-3 luxury-glass hover:border-accent text-text-main hover:text-accent text-xs uppercase tracking-[0.2em] transition-all rounded-[2px]"
          >
            <Compass size={14} className="text-accent" />
            <span>EXPLORE OUR OUTLETS</span>
          </Link>

          <a
            href="tel:+919090905666"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light text-background font-medium text-xs uppercase tracking-[0.2em] transition-all rounded-[2px]"
          >
            <Phone size={14} />
            <span>CALL TO ENQUIRE (+91 90909 05666)</span>
          </a>

          <a
            href="https://maps.google.com/?q=Kababiya+Kolhapur"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 luxury-glass hover:border-accent text-text-main hover:text-accent text-xs uppercase tracking-[0.2em] transition-all rounded-[2px]"
          >
            <MapPin size={14} className="text-accent" />
            <span>GET DIRECTIONS</span>
          </a>
        </div>

        {/* Reservation Form Card */}
        <div className="mt-16 max-w-3xl mx-auto">
          <ScrollReveal delay={0.2}>
            <div className="p-8 sm:p-12 rounded-[2px] luxury-card-glass border border-white/10 shadow-2xl">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent flex items-center justify-center mx-auto text-accent">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-serif text-3xl text-text-main">
                    Enquiry Received
                  </h3>
                  <p className="text-text-muted text-sm max-w-md mx-auto font-light leading-relaxed">
                    Thank you, <span className="text-accent font-medium">{formData.name}</span>. Your enquiry for <span className="text-text-main">{formData.outlet}</span> on <span className="text-text-main">{formData.date}</span> for <span className="text-text-main">{formData.guests}</span> has been logged.
                  </p>
                  <div className="p-4 rounded-[2px] bg-white/5 border border-white/10 text-xs text-text-muted max-w-md mx-auto">
                    <p className="font-medium text-accent">Prototype Notice:</p>
                    <p className="mt-0.5">
                      Client-side demonstration only. For immediate reservations, please contact our hospitality desk at <a href="tel:+919090905666" className="text-text-main underline">+91 90909 05666</a>.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs uppercase tracking-widest text-accent hover:underline"
                  >
                    Send Another Request &rarr;
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-text-muted mb-2 font-sans">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Vikramaditya Patil"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-[2px] bg-background/80 border text-text-main placeholder-text-muted/40 text-sm focus:outline-none focus:border-accent transition-colors ${
                          errors.name ? "border-red-500" : "border-white/10"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-text-muted mb-2 font-sans">
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-[2px] bg-background/80 border text-text-main placeholder-text-muted/40 text-sm focus:outline-none focus:border-accent transition-colors ${
                          errors.phone ? "border-red-500" : "border-white/10"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {/* Outlet Choice */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-text-muted mb-2 font-sans">
                        Preferred Outlet
                      </label>
                      <select
                        value={formData.outlet}
                        onChange={(e) =>
                          setFormData({ ...formData, outlet: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-[2px] bg-background/80 border border-white/10 text-text-main text-sm focus:outline-none focus:border-accent transition-colors"
                      >
                        {outlets.map((outlet) => (
                          <option
                            key={outlet.slug}
                            value={outlet.name}
                            className="bg-[#111111] text-text-main"
                          >
                            {outlet.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Guests */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-text-muted mb-2 font-sans">
                        Number of Guests
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) =>
                          setFormData({ ...formData, guests: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-[2px] bg-background/80 border border-white/10 text-text-main text-sm focus:outline-none focus:border-accent transition-colors"
                      >
                        {[
                          "1 Guest",
                          "2 Guests",
                          "3-4 Guests",
                          "5-8 Guests",
                          "8+ Party Celebration",
                        ].map((num) => (
                          <option
                            key={num}
                            value={num}
                            className="bg-[#111111] text-text-main"
                          >
                            {num}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Date */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-text-muted mb-2 font-sans">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-[2px] bg-background/80 border text-text-main text-sm focus:outline-none focus:border-accent transition-colors ${
                          errors.date ? "border-red-500" : "border-white/10"
                        }`}
                      />
                      {errors.date && (
                        <p className="text-red-400 text-xs mt-1">{errors.date}</p>
                      )}
                    </div>
                  </div>

                  {/* Special Message */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-text-muted mb-2 font-sans">
                      Special Requests or Celebration Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Table with skyline view at Kanopy, birthday celebration, dietary preferences..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-[2px] bg-background/80 border border-white/10 text-text-main placeholder-text-muted/40 text-sm focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>

                  {/* Submission Notice & Submit CTA */}
                  <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-[11px] text-text-muted/70 max-w-sm">
                      * Prototype notice: Submissions demonstrate frontend validation. Restaurant backend integration pending.
                    </p>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-accent hover:bg-accent-light text-background font-medium text-xs uppercase tracking-[0.22em] transition-all rounded-[2px] shadow-xl group"
                    >
                      <Send size={14} className="group-hover:translate-x-0.5 transition-transform" />
                      <span>SUBMIT TABLE ENQUIRY</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
