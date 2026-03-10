import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MYD Özel Güvenlik Hizmetleri",
  description:
    "MYD Özel Güvenlik - Profesyonel güvenlik hizmetleri, fiziki koruma, teknolojik güvenlik çözümleri ve eğitim hizmetleri.",
  keywords:
    "özel güvenlik, güvenlik hizmetleri, fiziki koruma, güvenlik eğitimi, MYD güvenlik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
