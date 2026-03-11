"use client";

import Image from "next/image";
import { FiCheckCircle, FiShield, FiUsers, FiAward, FiClock } from "react-icons/fi";
import PageBanner from "@/components/PageBanner";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { icon: FiShield, value: 1000, suffix: "+", label: "Uzman Personel" },
  { icon: FiUsers, value: 150, suffix: "+", label: "Kurumsal İş Ortağı" },
  { icon: FiAward, value: 10, suffix: "+", label: "Yıllık Deneyim" },
  { icon: FiClock, value: 7, suffix: "/24", label: "Kesintisiz Hizmet" },
];

const features = [
  "5188 Sayılı Kanun kapsamında tam yetkili faaliyet",
  "ISO 9001 Kalite Yönetim Sistemi sertifikalı",
  "Deneyimli ve sürekli eğitimli güvenlik kadrosu",
  "Modern teknoloji destekli güvenlik altyapısı",
  "7/24 aktif operasyon ve alarm izleme merkezi",
  "Sektöre özel güvenlik planlaması ve danışmanlık",
  "Şeffaf raporlama ve denetlenebilir süreçler",
  "Entegre hizmet yönetimi kapasitesi",
];

const values = [
  { title: "Güvenilirlik", desc: "Tüm hizmet süreçlerimizi yasal mevzuata uygun, denetlenebilir ve sürdürülebilir bir yapı ile yürütüyoruz." },
  { title: "Profesyonellik", desc: "Personelimiz sektör standartlarının üzerinde eğitim alır ve sürekli gelişim programlarına tabi tutulur." },
  { title: "Teknoloji", desc: "Operasyonel süreçleri dijital sistemlerle izliyor, ölçüyor ve raporlanabilir hale getiriyoruz." },
];

export default function HakkimizdaPage() {
  return (
    <>
      <PageBanner
        title="Hakkımızda"
        subtitle="MYD Özel Güvenlik Hizmetleri olarak, sektördeki derin bilgi birikimi ve tecrübemizle hizmet veriyoruz."
        breadcrumb="Hakkımızda"
      />

      <section className="bg-dark py-36 lg:py-48">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Centered intro */}
          <div className="text-center mb-20">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6 justify-center">
                <span className="w-10 h-[2px] bg-red rounded-full" />
                <span className="text-red text-sm font-semibold tracking-[0.2em] uppercase">Biz Kimiz?</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-8">
                Güvenlikte <span className="text-gradient-red">Güvenilir</span> Çözüm Ortağınız
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-gray-400 text-lg leading-[1.9] mb-4 max-w-3xl mx-auto">
                MYD Özel Güvenlik, sektördeki derin bilgi birikimi ve tecrübesiyle kurumsal müşterilerine en üst düzeyde güvenlik hizmeti sunmaktadır.
              </p>
              <p className="text-gray-400 text-lg leading-[1.9] max-w-3xl mx-auto">
                5188 sayılı kanun kapsamında faaliyet gösteren firmamız, güvenlik ihtiyaçlarınızı analiz ederek size özel çözümler üretir.
              </p>
            </ScrollReveal>
          </div>

          {/* Image + Features */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden img-zoom border border-border shadow-2xl">
                  <Image src="/hero.png" alt="MYD Güvenlik" width={640} height={480} className="w-full h-auto object-cover aspect-[4/3]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-red text-white rounded-2xl px-8 py-6 shadow-2xl shadow-red/20 hidden sm:block">
                  <div className="stat-value text-4xl font-bold">10+</div>
                  <div className="text-sm font-medium text-white/80 mt-1">Yıllık Tecrübe</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-3.5">
                    <FiCheckCircle className="text-red flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-400 text-base leading-relaxed">{f}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-dark-light py-28 lg:py-36 border-y border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center relative">
                  <stat.icon className="text-red mx-auto mb-5" size={28} />
                  <div className="text-5xl lg:text-6xl font-bold text-white mb-3">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-[0.15em] font-medium">{stat.label}</div>
                  {i < stats.length - 1 && <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-20 bg-white/[0.06]" />}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark py-36 lg:py-48">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-24">
              <div className="flex items-center gap-3 justify-center mb-6">
                <span className="w-10 h-[2px] bg-red rounded-full" />
                <span className="text-red text-sm font-semibold tracking-[0.2em] uppercase">Değerlerimiz</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Temel <span className="text-gradient-red">Değerlerimiz</span></h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-10">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="bg-dark-card border border-border rounded-2xl p-10 lg:p-12 hover-lift h-full text-center">
                  <h3 className="text-xl font-bold mb-5 text-red">{v.title}</h3>
                  <p className="text-gray-400 text-base leading-[1.85]">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
