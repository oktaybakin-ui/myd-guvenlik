"use client";

import Link from "next/link";
import Image from "next/image";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
import ScrollReveal from "@/components/ui/ScrollReveal";

const features = [
  "5188 Sayılı Kanun kapsamında tam yetkili",
  "ISO sertifikalı hizmet kalitesi",
  "10+ yıllık sektör deneyimi",
  "150+ kurumsal iş ortağı",
  "Modern teknoloji altyapısı",
  "Şeffaf raporlama ve denetim",
];

export default function About() {
  return (
    <section className="bg-dark py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left - Image */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden img-zoom border border-border shadow-2xl shadow-black/30">
                <Image
                  src="/hero.png"
                  alt="MYD Güvenlik Ekibi"
                  width={640}
                  height={480}
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-red text-white rounded-2xl px-8 py-6 shadow-2xl shadow-red/20 animate-float">
                <div className="stat-value text-4xl font-bold">10+</div>
                <div className="text-sm font-medium text-white/80 mt-1">Yıllık Tecrübe</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Content */}
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-0.5 bg-red rounded" />
                <span className="text-red text-[13px] font-semibold tracking-[0.15em] uppercase">Hakkımızda</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold leading-[1.15] tracking-tight mb-6">
                Güvenlikte Güvenilir{" "}
                <span className="text-gradient-red">Çözüm Ortağınız</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-gray-400 text-lg leading-[1.8] mb-10">
                MYD Özel Güvenlik olarak, 5188 sayılı kanun kapsamında faaliyet gösteriyor ve kurumsal müşterilerimize en üst düzeyde güvenlik hizmeti sunuyoruz. Sektördeki derin bilgi birikimimiz ve profesyonel kadromuzla güvenlik ihtiyaçlarınızı analiz eder, size özel çözümler üretiriz.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <FiCheckCircle className="text-red flex-shrink-0" size={18} />
                    <span className="text-gray-400 text-base">{f}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <Link
                href="/hakkimizda"
                className="btn-primary inline-flex items-center gap-2.5 text-white font-semibold px-7 py-3.5 rounded-full text-sm"
              >
                Daha Fazla Bilgi <FiArrowRight size={16} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
