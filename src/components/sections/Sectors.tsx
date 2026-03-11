"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const sectors = [
  "Rezidans & Site", "AVM & Mağaza", "Sağlık Kuruluşları", "Eğitim Kurumları",
  "Üretim & Sanayi", "Kamu Kurumları", "Lojistik & Depo", "Otel & Turizm",
  "Enerji & Altyapı", "Teknoloji & Bilişim", "Bankacılık", "Havalimanları",
  "OSB", "Ofis & Plaza",
];

export default function Sectors() {
  return (
    <section
      className="relative py-40 lg:py-52 overflow-hidden"
      style={{
        backgroundImage: "url('/services/services4.png')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
      }}
    >
      {/* Overlays */}
      <div className="absolute inset-0 bg-black/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-red-dark/15 via-transparent to-dark/95" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <ScrollReveal>
          <div className="flex items-center gap-3 justify-center mb-7">
            <span className="w-12 h-[2px] bg-red rounded-full" />
            <span className="text-red text-[13px] font-semibold tracking-[0.25em] uppercase">Hizmet Verdiğimiz Sektörler</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
            Her Sektöre Özel{" "}
            <span className="text-gradient-red">Güvenlik Çözümleri</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-gray-300 text-lg lg:text-xl max-w-2xl mx-auto leading-[2] mb-20">
            Farklı sektörlerin ihtiyaçlarına özel planlanan güvenlik yapımızla operasyonel verimlilik sağlıyoruz.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-5">
            {sectors.map((s) => (
              <span
                key={s}
                className="sector-pill text-white rounded-full px-8 py-4 text-base font-medium cursor-default"
              >
                {s}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
