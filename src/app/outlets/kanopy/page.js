import OutletPageTemplate from "@/components/OutletPageTemplate";
import { outlets } from "@/data/outlets";

export const metadata = {
  title: "Kababiya Kanopy | Luxury Rooftop Dining · Rajarampuri, Kolhapur",
  description: "Kolhapur's premier open-air rooftop dining sanctuary. Panoramic skyline views, canopy lounges, multi-cuisine grills and signature Koobideh at Kababiya Kanopy, 9th Lane Rajarampuri.",
};

export default function KanopyPage() {
  const outlet = outlets.find((o) => o.slug === "kanopy");
  return <OutletPageTemplate outlet={outlet} />;
}
