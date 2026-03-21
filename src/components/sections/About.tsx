"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";

const aboutStats = [
  { value: 270, suffix: "+", label: "ÖGG" },
  { value: 25, suffix: "", label: "Kurumsal İş Ortağı" },
  { value: 5, suffix: "", label: "Hizmet Kategorisi" },
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
      "Güvenlik, güvenlik danışmanlığı ve profesyonel site yönetim danışmanlığı alanlarında tek çatı altında entegre çözümler sunarak operasyonel verimlilik sağlıyoruz.",
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative bg-dark-light py-20 lg:py-28 overflow-hidden">
      {/* Subtle accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Image */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden img-zoom border border-white/[0.06]">
                <Image
                  src="/hero.png"
                  alt="MYD Güvenlik Ekibi"
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-red to-red-dark text-white rounded-2xl px-7 py-5 shadow-2xl shadow-red/20 animate-float hidden sm:block">
                <div className="stat-value text-4xl font-bold">10+</div>
                <div className="text-sm font-medium text-white/80 mt-1">Yıllık Tecrübe</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Content */}
          <ScrollReveal delay={0.15}>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-[2px] bg-gradient-to-r from-red to-red-light rounded-full" />
                <span className="text-red text-xs font-semibold tracking-[0.25em] uppercase">
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
                  <div key={i} className="group">
                    <div className="text-2xl font-bold text-white stat-value group-hover:text-red transition-colors">
                      {stat.static || <AnimatedCounter end={stat.value!} suffix={stat.suffix!} />}
                    </div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-[0.15em] font-medium mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tabs */}
              <div className="border-b border-white/[0.06] mb-6">
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
