"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { services } from "@/data/services";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Services() {
  return (
    <section className="relative bg-dark py-20 lg:py-28 overflow-hidden grid-pattern">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
        <SectionTitle
          label="Hizmetlerimiz"
          title="Kapsamlı Güvenlik"
          highlight="Çözümleri"
          description="İşletmenizin güvenlik ihtiyaçlarına özel, entegre ve profesyonel çözümler sunuyoruz."
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mt-16">
          {services.map((s, i) => (
            <ScrollReveal key={s.slug} delay={i * 0.08}>
              <Link href={`/hizmetler/${s.slug}`} className="block">
                <div className="flip-card h-[280px] md:h-[260px]">
                  <div className="flip-card-inner">
                    {/* Front */}
                    <div className="flip-card-front bg-dark-card border border-white/[0.06] flex items-center gap-6 p-8 lg:p-10 hover:border-red/20 transition-colors">
                      <div className="flex-shrink-0 w-16 h-16 bg-red/[0.08] rounded-2xl flex items-center justify-center">
                        <s.icon className="text-red" size={26} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                        <p className="text-gray-400 text-[15px] leading-relaxed mb-3">{s.shortDesc}</p>
                        <span className="text-red text-sm font-semibold inline-flex items-center gap-2">
                          Detaylı Bilgi <FiArrowRight size={14} />
                        </span>
                      </div>
                    </div>

                    {/* Back */}
                    <div className="flip-card-back border border-red/20">
                      <Image src={s.image} alt={s.title} fill className="object-cover opacity-25" />
                      <div className="absolute inset-0 bg-gradient-to-br from-red-dark/85 via-red/75 to-red-dark/85" />
                      <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 lg:p-10 text-center">
                        <s.icon className="text-white/80 mb-4" size={26} />
                        <h3 className="text-lg font-bold text-white mb-4">{s.title}</h3>
                        <div className="flex flex-wrap gap-2 justify-center mb-5">
                          {s.features.slice(0, 4).map((f) => (
                            <span key={f} className="text-xs font-medium bg-white/15 text-white px-3 py-1.5 rounded-full backdrop-blur-sm">
                              {f}
                            </span>
                          ))}
                        </div>
                        <span className="inline-flex items-center gap-2 text-white font-semibold text-sm">
                          Sayfaya Git <FiArrowRight size={14} />
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
  );
}
