import OutletPageTemplate from "@/components/OutletPageTemplate";
import { outlets } from "@/data/outlets";

export const metadata = {
  title: "Kababiya Thalis & More | Tarabai Park, Kolhapur",
  description: "Authentic Kolhapuri mutton thalis, chicken rassa feasts, and traditional Maharashtrian dining at Kababiya Thalis & More in Tarabai Park, Kolhapur.",
};

export default function ThalisAndMorePage() {
  const outlet = outlets.find((o) => o.slug === "thalis-and-more");
  return <OutletPageTemplate outlet={outlet} />;
}
