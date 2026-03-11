"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";

const aboutStats = [
  { value: 1000, suffix: "+", label: "Uzman Personel" },
  { value: 150, suffix: "+", label: "Kurumsal İş Ortağı" },
  { value: 25, suffix: "+", label: "Hizmet Kategorisi" },
  { label: "Kesintisiz Hizmet", static: "7/24" },
];

const tabs = [
  {
    title: "Güvenilirlik",
    content:
      "5188 sayılı kanun kapsamında tam yetkili firmamız, ISO sertifikalı hizmet kalitesi ve şeffaf raporlama anlayışıyla güvenilir çözüm ortağınızdır.",
  },
  {
    title: "Dijital Altyapı",
    content:
      "Operasyonel süreçleri dijital sistemlerle izliyor ve raporlanabilir hale getiriyoruz. GPS takip, anlık bildirimler ve dijital personel yönetimi.",
  },
  {
    title: "Entegre Yönetim",
    content:
      "Güvenlik, temizlik, personel yönetimi ve teknoloji çözümlerini tek çatı altında entegre ederek operasyonel verimlilik sağlıyoruz.",
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-dark-light py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Image */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden img-zoom border border-border">
                <Image
                  src="/hero.png"
                  alt="MYD Güvenlik Ekibi"
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-red text-white rounded-2xl px-7 py-5 shadow-2xl shadow-red/25 animate-float hidden sm:block">
                <div className="stat-value text-4xl font-bold">10+</div>
                <div className="text-sm font-medium text-white/80 mt-1">Yıllık Tecrübe</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Content */}
          <ScrollReveal delay={0.15}>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-[2px] bg-red rounded-full" />
                <span className="text-red text-[13px] font-semibold tracking-[0.2em] uppercase">
                  Biz MYD Güvenlik&apos;iz
                </span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight mb-6">
                Güvenlikte Güvenilir{" "}
                <span className="text-gradient-red">Çözüm Ortağınız</span>
              </h2>

              <p className="text-gray-400 text-[15px] leading-relaxed mb-8">
                MYD Özel Güvenlik olarak, 5188 sayılı kanun kapsamında faaliyet gösteriyor ve kurumsal müşterilerimize en üst düzeyde güvenlik hizmeti sunuyoruz. Dijital ve teknolojik gelişmeleri hızla hizmetlerimize entegre ederek sürekli yenileniyoruz.
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
                {aboutStats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold text-white stat-value">
                      {stat.static || <AnimatedCounter end={stat.value!} suffix={stat.suffix!} />}
                    </div>
                    <div className="text-[11px] text-gray-500 uppercase tracking-[0.12em] font-medium mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tabs */}
              <div className="border-b border-border mb-6">
                <div className="flex gap-6 sm:gap-8">
                  {tabs.map((tab, i) => (
                    <button
                      key={tab.title}
                      onClick={() => setActiveTab(i)}
                      className={`pb-3 text-sm font-semibold transition-all border-b-2 cursor-pointer ${
                        activeTab === i
                          ? "border-red text-white"
                          : "border-transparent text-gray-500 hover:text-gray-300"
                      }`}
                    >
                      {tab.title}
                    </button>
                  ))}
                </div>
              </div>

              <p className="text-gray-400 text-[15px] leading-relaxed mb-8 min-h-[60px]">
                {tabs[activeTab].content}
              </p>

              <Link
                href="/hakkimizda"
                className="btn-primary inline-flex items-center gap-3 text-white font-semibold px-8 py-4 rounded-full text-base"
              >
                Daha Fazla Bilgi <FiArrowRight size={17} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
