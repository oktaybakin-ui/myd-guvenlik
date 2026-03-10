import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "MYD Özel Güvenlik Hizmetleri",
    template: "%s | MYD Özel Güvenlik",
  },
  description:
    "MYD Özel Güvenlik - Profesyonel güvenlik hizmetleri, fiziki koruma, elektronik güvenlik, etkinlik güvenliği ve güvenlik danışmanlığı.",
  keywords:
    "özel güvenlik, güvenlik hizmetleri, fiziki koruma, güvenlik eğitimi, MYD güvenlik, Isparta güvenlik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className="antialiased font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
