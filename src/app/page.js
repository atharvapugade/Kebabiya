import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import ExperienceCards from "@/components/ExperienceCards";
import FoodGallery from "@/components/FoodGallery";
import SensoryBanner from "@/components/SensoryBanner";
import MenuShowcase from "@/components/MenuShowcase";
import GallerySection from "@/components/GallerySection";
import OutletSection from "@/components/OutletSection";
import Testimonials from "@/components/Testimonials";
import ReservationSection from "@/components/ReservationSection";

export default function Home() {
  return (
    <>
      {/* 1. Cinematic Hero */}
      <Hero />

      {/* 2. Editorial Brand Story */}
      <BrandStory />

      {/* 3. Our Signature Experiences */}
      <ExperienceCards />

      {/* 4. The Art of Flavour (Food Showcase) */}
      <FoodGallery />

      {/* 5. A Feast for the Senses (Parallax Banner) */}
      <SensoryBanner />

      {/* 6. Selected Menu Highlights */}
      <MenuShowcase />

      {/* 7. Photographic Gallery & Lightbox */}
      <GallerySection />

      {/* 8. Find Your Kababiya (All 3 Outlets) */}
      <OutletSection />

      {/* 9. Verified Customer Reflections */}
      <Testimonials />

      {/* 10. Table Reservations & Contact */}
      <ReservationSection />
    </>
  );
}
