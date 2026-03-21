"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const sectors = [
  "Bankacılık", "Sağlık / Hastane", "Teknoloji / Bilişim",
  "Enerji / Altyapı", "Lojistik / Depolama", "Üretim / Sanayi",
  "Site / Residans", "AVM", "İlaç, Medikal",
  "Turizm / Otel", "Eğitim Kurumları", "Kamu Kurumları",
  "OSB", "Ofis / Plaza",
];

export default function Sectors() {
  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{
        backgroundImage: "url('/services/services1.png')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
      }}
    >
      <div className="absolute inset-0 bg-black/85" />
      <div className="absolute inset-0 bg-gradient-to-b from-red-dark/8 via-transparent to-dark/95" />
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "48px 48px" }} />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <ScrollReveal>
          <div className="flex items-center gap-3 justify-center mb-6">
            <span className="w-12 h-[2px] bg-gradient-to-r from-red to-red-light rounded-full" />
            <span className="text-red text-xs font-semibold tracking-[0.25em] uppercase">
              Hizmet Verdiğimiz Sektörler
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Her Sektöre Özel Entegre Hizmet ve Operasyon{" "}
            <span className="text-gradient-red">Çözümleri</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-gray-300/70 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-14">
            Farklı sektörlerin ihtiyaçlarına özel planlanan entegre hizmet yapımızla operasyonel verimlilik ve sürdürülebilirlik sağlıyoruz.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
            {sectors.map((s) => (
              <span
                key={s}
                className="sector-pill text-white rounded-full px-7 py-3.5 text-sm font-medium cursor-default"
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
