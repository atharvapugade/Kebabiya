import { MapPin, Phone, Clock, Mail, ExternalLink, HelpCircle } from "lucide-react";
import ReservationSection from "@/components/ReservationSection";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { outlets } from "@/data/outlets";

export const metadata = {
  title: "Contact & Table Enquiries | Kababiya Kolhapur",
  description: "Connect with Kababiya hospitality desk. Outlet contact numbers, addresses in Rajarampuri and Tarabai Park, directions and table enquiries.",
};

export default function ContactPage() {
  const faqs = [
    {
      q: "Do I need a reservation for dining?",
      a: "Walk-ins are always welcomed warmly at all Kababiya outlets. However, for weekends, rooftop tables at Kababiya Kanopy, or large family celebrations, reservations are strongly recommended.",
    },
    {
      q: "How can I reserve an open-air canopy table at Kababiya Kanopy?",
      a: "You can indicate your canopy preference in the enquiry form below or call directly at +91 90909 05666. Canopy seating is confirmed based on availability.",
    },
    {
      q: "Are takeaway and parcel services available?",
      a: "Yes, curbside takeaway and delivery through major food apps are offered across Kababiya Kebabs & Biryanis, Thalis & More, and Kababiya Kanopy.",
    },
    {
      q: "Can Kababiya host private celebrations or corporate dinners?",
      a: "Absolutely. Our rooftop spaces and dining halls accommodate private family get-togethers, birthday celebrations, and business gatherings. Please submit an enquiry with your guest count.",
    },
  ];

  return (
    <div className="bg-background text-text-main min-h-screen pt-24">
      {/* Header Banner */}
      <section className="py-20 sm:py-28 bg-secondary border-b border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-[1px] w-6 bg-accent" />
              <span className="editorial-eyebrow text-accent">
                CONNECT WITH US
              </span>
              <span className="h-[1px] w-6 bg-accent" />
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-text-main tracking-tight leading-[1.1]">
              Hospitality &
              <span className="block italic text-accent font-light mt-1">
                Reservations.
              </span>
            </h1>

            <p className="mt-6 text-text-muted text-base sm:text-lg font-light max-w-xl mx-auto leading-relaxed">
              We are delighted to assist with table bookings, banquet inquiries, or any special culinary requests across our three Kolhapur locations.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Outlets Direct Contact Cards */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {outlets.map((outlet, i) => (
            <ScrollReveal key={outlet.slug} delay={i * 0.15}>
              <div className="p-8 rounded-[2px] luxury-card-glass border border-white/10 flex flex-col justify-between h-full space-y-6">
                <div>
                  <span className="editorial-eyebrow text-accent text-[10px] block mb-2">
                    {outlet.eyebrow}
                  </span>
                  <h3 className="font-serif text-2xl text-text-main font-medium">
                    {outlet.name}
                  </h3>

                  <div className="mt-6 space-y-3.5 text-xs text-text-muted">
                    <div className="flex items-start gap-2.5">
                      <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
                      <span>{outlet.address}</span>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Clock size={16} className="text-accent shrink-0 mt-0.5" />
                      <span>{outlet.timing}</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Phone size={16} className="text-accent shrink-0" />
                      <div className="flex flex-col">
                        <a
                          href={`tel:${outlet.phone.replace(/\s+/g, '')}`}
                          className="text-text-main hover:text-accent font-medium transition-colors"
                        >
                          {outlet.phone}
                        </a>
                        {outlet.phoneSecondary && (
                          <a
                            href={`tel:${outlet.phoneSecondary.replace(/\s+/g, '')}`}
                            className="text-text-muted hover:text-accent text-[11px]"
                          >
                            {outlet.phoneSecondary}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <a
                    href={`tel:${outlet.phone.replace(/\s+/g, '')}`}
                    className="flex-1 py-2.5 text-center bg-accent/20 border border-accent/40 text-accent hover:bg-accent hover:text-background text-xs uppercase tracking-wider transition-colors rounded-[2px] font-medium"
                  >
                    Call Now
                  </a>
                  <a
                    href={outlet.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 border border-white/15 text-text-main hover:text-accent hover:border-accent transition-colors rounded-[2px]"
                    aria-label="Google Maps"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Embedded Table Reservation Form */}
      <ReservationSection />

      {/* Frequently Asked Questions */}
      <section className="py-24 bg-background border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="GUEST QUERIES"
              title="Frequently Asked"
              highlight="Questions."
              description="Helpful details to assist with your dining plans, seating preferences, and celebrations."
            />
          </ScrollReveal>

          <div className="mt-14 space-y-6">
            {faqs.map((faq, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="p-6 rounded-[2px] luxury-card-glass border border-white/10">
                  <h4 className="font-serif text-lg sm:text-xl text-text-main font-medium flex items-center gap-3">
                    <span className="text-accent text-sm">0{idx + 1}.</span>
                    <span>{faq.q}</span>
                  </h4>
                  <p className="mt-3 text-xs sm:text-sm text-text-muted font-light leading-relaxed pl-7">
                    {faq.a}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
