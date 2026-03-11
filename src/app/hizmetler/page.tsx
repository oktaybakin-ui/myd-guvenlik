"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { services } from "@/data/services";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HizmetlerPage() {
  return (
    <>
      <section className="bg-dark pt-40 lg:pt-48 pb-20 lg:pb-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-20">
              <div className="flex items-center gap-3 justify-center mb-6">
                <span className="w-10 h-[2px] bg-red rounded-full" />
                <span className="text-red text-sm font-semibold tracking-[0.2em] uppercase">Hizmetlerimiz</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                Kapsamlı Güvenlik <span className="text-gradient-red">Çözümleri</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
                Kartların üzerine gelerek detayları görüntüleyin, tıklayarak ayrıntılı bilgi sayfasına ulaşın.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <ScrollReveal key={s.slug} delay={i * 0.08}>
                <Link href={`/hizmetler/${s.slug}`} className="block">
                  <div className="flip-card h-[320px] md:h-[300px]">
                    <div className="flip-card-inner">
                      {/* Front */}
                      <div className="flip-card-front bg-dark-card border border-border flex flex-col items-center justify-center p-10 text-center">
                        <div className="w-20 h-20 bg-red/10 rounded-2xl flex items-center justify-center mb-6">
                          <s.icon className="text-red" size={36} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                        <p className="text-gray-400 text-[15px] leading-relaxed max-w-md">{s.shortDesc}</p>
                      </div>

                      {/* Back */}
                      <div className="flip-card-back border border-red/30">
                        <Image src={s.image} alt={s.title} fill className="object-cover opacity-30" />
                        <div className="absolute inset-0 bg-gradient-to-br from-red-dark/80 via-red/70 to-red-dark/80" />
                        <div className="relative z-10 flex flex-col items-center justify-center h-full p-10 text-center">
                          <s.icon className="text-white/80 mb-5" size={32} />
                          <h3 className="text-xl font-bold text-white mb-5">{s.title}</h3>
                          <div className="flex flex-wrap gap-2 justify-center mb-6">
                            {s.features.slice(0, 4).map((f) => (
                              <span key={f} className="text-xs font-medium bg-white/15 text-white px-3 py-1.5 rounded-full">
                                {f}
                              </span>
                            ))}
                          </div>
                          <span className="inline-flex items-center gap-2 text-white font-semibold text-sm">
                            Detaylı Bilgi <FiArrowRight size={14} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-dark via-red to-red-dark" />
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">
              Güvenlik İhtiyaçlarınız İçin Teklif Alın
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              İşletmenize özel güvenlik planı ve fiyat teklifi için bizimle iletişime geçin.
            </p>
            <Link href="/iletisim" className="btn-white inline-flex items-center gap-3 font-bold px-10 py-4 rounded-full text-base">
              İletişime Geçin <FiArrowRight size={17} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
