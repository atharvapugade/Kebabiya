import OutletPageTemplate from "@/components/OutletPageTemplate";
import { outlets } from "@/data/outlets";

export const metadata = {
  title: "Kababiya Kebabs & Biryanis | Rajarampuri 13th Lane, Kolhapur",
  description: "Experience the art of live charcoal tandoor and sealed handi dum biryanis at Kababiya Kebabs & Biryanis in Rajarampuri 13th Lane, Kolhapur.",
};

export default function KebabsAndBiryanisPage() {
  const outlet = outlets.find((o) => o.slug === "kebabs-and-biryanis");
  return <OutletPageTemplate outlet={outlet} />;
}
