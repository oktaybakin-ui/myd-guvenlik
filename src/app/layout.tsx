import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { BranchProvider } from "@/context/BranchContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  title: { default: "MYD Özel Güvenlik Hizmetleri", template: "%s | MYD Özel Güvenlik" },
  description: "MYD Özel Güvenlik - Profesyonel güvenlik hizmetleri, fiziki koruma, elektronik güvenlik, etkinlik güvenliği ve güvenlik danışmanlığı. Isparta merkezli, Türkiye geneli hizmet.",
  keywords: "özel güvenlik, güvenlik hizmetleri, fiziki koruma, güvenlik eğitimi, MYD güvenlik, Isparta güvenlik",
  openGraph: {
    title: "MYD Özel Güvenlik Hizmetleri",
    description: "270+ özel güvenlik görevlisi ile profesyonel güvenlik hizmetleri. 5188 sayılı kanun kapsamında yetkili.",
    url: "https://mydozelguvenlik.com",
    siteName: "MYD Özel Güvenlik",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MYD Özel Güvenlik Hizmetleri",
    description: "270+ özel güvenlik görevlisi ile profesyonel güvenlik hizmetleri.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MYD Özel Güvenlik Hizmetleri",
  description: "Profesyonel güvenlik hizmetleri",
  telephone: "+905069038502",
  email: "mayda.mehmet32@gmail.com",
  url: "https://mydozelguvenlik.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kutlubey Mh. 1017 Sk. No:2/4",
    addressLocality: "Merkez",
    addressRegion: "Isparta",
    addressCountry: "TR",
  },
  openingHours: ["Mo-Fr 08:30-18:00", "Sa 09:00-14:00"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased font-sans">
        <BranchProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <ScrollToTop />
        </BranchProvider>
      </body>
    </html>
  );
}
