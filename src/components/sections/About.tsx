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
    <section className="bg-dark py-32 lg:py-44">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          {/* Left - Image */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden img-zoom border border-border shadow-2xl shadow-black/40">
                <Image
                  src="/hero.png"
                  alt="MYD Güvenlik Ekibi"
                  width={640}
                  height={480}
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-red text-white rounded-2xl px-9 py-7 shadow-2xl shadow-red/25 animate-float">
                <div className="stat-value text-5xl font-bold">10+</div>
                <div className="text-base font-medium text-white/80 mt-1.5">Yıllık Tecrübe</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Content */}
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-[2px] bg-red rounded-full" />
                <span className="text-red text-sm font-semibold tracking-[0.2em] uppercase">Hakkımızda</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-8">
                Güvenlikte Güvenilir{" "}
                <span className="text-gradient-red">Çözüm Ortağınız</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-gray-400 text-lg leading-[1.9] mb-12">
                MYD Özel Güvenlik olarak, 5188 sayılı kanun kapsamında faaliyet gösteriyor ve kurumsal müşterilerimize en üst düzeyde güvenlik hizmeti sunuyoruz. Sektördeki derin bilgi birikimimiz ve profesyonel kadromuzla güvenlik ihtiyaçlarınızı analiz eder, size özel çözümler üretiriz.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5 mb-12">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-3.5">
                    <FiCheckCircle className="text-red flex-shrink-0" size={20} />
                    <span className="text-gray-300 text-[17px]">{f}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <Link
                href="/hakkimizda"
                className="btn-primary inline-flex items-center gap-3 text-white font-semibold px-9 py-4.5 rounded-full text-base"
              >
                Daha Fazla Bilgi <FiArrowRight size={17} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
