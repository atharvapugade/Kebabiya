import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://kababiya.com"),
  title: "KABABIYA | A Signature Dining Experience · Kolhapur",
  description: "Experience luxury dining at Kababiya, Kolhapur. Discover signature outlets in Rajarampuri & Tarabai Park featuring slow-cooked dum biryanis, tandoori kebabs, authentic Kolhapuri thalis, and elevated rooftop dining at Kababiya Kanopy.",
  keywords: [
    "Kababiya",
    "Kababiya Kolhapur",
    "Kababiya Kanopy",
    "Kababiya Kebabs & Biryanis",
    "Kababiya Thalis & More",
    "Fine Dining Kolhapur",
    "Best Biryani in Kolhapur",
    "Rooftop Restaurant Rajarampuri",
  ],
  authors: [{ name: "Kababiya Hospitality" }],
  openGraph: {
    title: "KABABIYA · Where Every Flavour Tells A Story",
    description: "Discover a world of exceptional flavours, handcrafted culinary experiences, and unforgettable dining moments in Kolhapur.",
    url: "https://kababiya.com",
    siteName: "Kababiya",
    images: [
      {
        url: "/images/hero/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Kababiya Signature Hospitality",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Kababiya",
    "image": "https://kababiya.com/images/hero/hero-bg.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ace Arcade, 9th Lane, Rajarampuri",
      "addressLocality": "Kolhapur",
      "addressRegion": "Maharashtra",
      "postalCode": "416008",
      "addressCountry": "IN"
    },
    "telephone": "+919090905666",
    "servesCuisine": ["North Indian", "Mughlai", "Biryani", "Kebabs", "Kolhapuri Thalis"],
    "priceRange": "₹₹",
    "url": "https://kababiya.com"
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-text-main antialiased selection:bg-accent selection:text-background min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
