"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

const sectors = [
  "Rezidans & Site", "AVM & Mağaza", "Sağlık Kuruluşları", "Eğitim Kurumları",
  "Üretim & Sanayi", "Kamu Kurumları", "Lojistik & Depo", "Otel & Turizm",
  "Enerji & Altyapı", "Teknoloji & Bilişim", "Bankacılık", "Havalimanları",
  "OSB", "Ofis & Plaza",
];

export default function Sectors() {
  return (
    <section className="relative py-28 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image src="/services/services4.png" alt="" fill className="object-cover" style={{ objectPosition: "center 30%" }} />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-red-dark/20 via-transparent to-dark/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <ScrollReveal>
          <div className="flex items-center gap-3 justify-center mb-4">
            <span className="w-6 h-0.5 bg-red rounded" />
            <span className="text-red text-[13px] font-semibold tracking-[0.15em] uppercase">Hizmet Verdiğimiz Sektörler</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5">
            Her Sektöre Özel{" "}
            <span className="text-gradient-red">Güvenlik Çözümleri</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-[1.7] mb-12">
            Farklı sektörlerin ihtiyaçlarına özel planlanan güvenlik yapımızla operasyonel verimlilik sağlıyoruz.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-wrap justify-center gap-3">
            {sectors.map((s) => (
              <span
                key={s}
                className="sector-pill text-white rounded-full px-6 py-3 text-sm font-medium cursor-default"
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
