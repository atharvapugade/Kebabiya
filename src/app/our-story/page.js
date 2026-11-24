import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Sparkles, HeartHandshake } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { outlets } from "@/data/outlets";

export const metadata = {
  title: "Our Story | The Kababiya Experience · Kolhapur",
  description: "Discover the ethos and passion behind Kababiya. Uncompromising tandoor craft, royal dum biryanis, and warm hospitality across Kolhapur.",
};

export default function OurStoryPage() {
  return (
    <div className="bg-background text-text-main min-h-screen pt-24 pb-32">
      {/* Editorial Hero */}
      <section className="relative py-24 sm:py-36 overflow-hidden bg-secondary border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery/chef-tandoor.jpg"
            alt="Kababiya master chef at tandoor"
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
                BRAND ESSENCE & PHILOSOPHY
              </span>
              <span className="h-[1px] w-6 bg-accent" />
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-text-main tracking-tight leading-[1.1]">
              Crafted With Passion.
              <span className="block italic text-accent font-light mt-1">
                Served With Pride.
              </span>
            </h1>

            <p className="mt-8 text-text-muted text-base sm:text-xl font-light max-w-2xl mx-auto leading-relaxed">
              Every great dining experience begins with a passion for flavour. At Kababiya, we bring together memorable food, welcoming spaces, and a steadfast dedication to making every visit special.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Chapter 1: The Culinary Craft */}
      <section className="py-24 sm:py-32 bg-background relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story Text */}
            <div className="lg:col-span-6 space-y-6">
              <ScrollReveal>
                <span className="editorial-eyebrow text-accent">
                  CHAPTER I · THE CRAFT
                </span>

                <h2 className="font-serif text-3xl sm:text-5xl text-text-main font-normal leading-[1.15] mt-2">
                  The Reverence of Live Fire & Spice
                </h2>

                <p className="text-text-muted text-base sm:text-lg font-light leading-relaxed">
                  In Kolhapur, a city renowned for its bold palate and generous dining traditions, Kababiya was conceived with a clear vision: to celebrate time-honored cooking techniques without shortcut or compromise.
                </p>

                <p className="text-text-muted/80 text-sm sm:text-base font-light leading-relaxed">
                  Our marinades are blended patiently using whole, freshly roasted spices—cumin, green cardamom, black peppercorn, and artisanal chilies. When these skewers meet the clay tandoor's live coals, the resulting smoke imbues each cut with tenderness and authentic character.
                </p>

                <div className="pt-4 flex items-center gap-4 text-accent text-xs uppercase tracking-widest font-medium">
                  <span className="w-8 h-[1px] bg-accent" />
                  <span>Uncompromised Culinary Integrity</span>
                </div>
              </ScrollReveal>
            </div>

            {/* Photo */}
            <div className="lg:col-span-6">
              <ScrollReveal delay={0.2}>
                <div className="relative aspect-[4/3] rounded-[2px] overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src="/images/food/peshwari-kebab.jpg"
                    alt="Murgh Peshwari preparation"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 luxury-glass rounded-[2px] border border-white/10">
                    <p className="font-serif text-sm text-text-main">
                      The Murgh Peshwari Tradition
                    </p>
                    <p className="text-[11px] text-text-muted">
                      Roasted in intense clay oven heat to lock in natural moisture.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: The Three Dining Spaces */}
      <section className="py-24 sm:py-32 bg-secondary relative border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="CHAPTER II · THE DESTINATIONS"
              title="Three Expressions of"
              highlight="Hospitality."
              description="Each Kababiya destination is individually conceived to offer an authentic dining atmosphere suited to the occasion."
            />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {outlets.map((outlet, idx) => (
              <ScrollReveal key={outlet.slug} delay={idx * 0.15}>
                <div className="rounded-[2px] overflow-hidden luxury-card-glass border border-white/10 p-8 flex flex-col justify-between h-full space-y-6">
                  <div>
                    <span className="editorial-eyebrow text-accent text-[10px] block mb-2">
                      {outlet.eyebrow}
                    </span>
                    <h3 className="font-serif text-2xl text-text-main font-medium">
                      {outlet.name}
                    </h3>
                    <p className="text-xs text-accent mt-1">
                      {outlet.location}
                    </p>
                    <p className="text-text-muted text-xs sm:text-sm font-light leading-relaxed mt-4">
                      {outlet.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <Link
                      href={`/outlets/${outlet.slug}`}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-accent hover:underline font-medium"
                    >
                      <span>Explore {outlet.slug.replace(/-/g, ' ')}</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter 3: Hospitality Commitment */}
      <section className="py-24 sm:py-32 bg-background relative">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-8">
          <ScrollReveal>
            <div className="w-16 h-16 rounded-full bg-accent/15 border border-accent/40 flex items-center justify-center mx-auto text-accent mb-6">
              <HeartHandshake size={30} />
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-text-main font-normal leading-[1.15]">
              Every Table Is An Invitation
            </h2>

            <p className="text-text-muted text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
              Behind every plate of biryani, every skewered kebab, and every bowl of authentic rassa lies a team that takes pride in welcoming you. We look forward to hosting you and your guests at Kababiya.
            </p>

            <div className="pt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#experiences"
                className="px-8 py-4 bg-accent hover:bg-accent-light text-background font-medium text-xs uppercase tracking-[0.2em] transition-all rounded-[2px]"
              >
                EXPLORE EXPERIENCES
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border border-white/20 hover:border-accent hover:text-accent text-text-main text-xs uppercase tracking-[0.2em] transition-all luxury-glass rounded-[2px]"
              >
                TABLE ENQUIRY & CONTACT
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
