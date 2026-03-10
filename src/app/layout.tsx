import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

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
    <html lang="tr">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
