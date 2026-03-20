"use client";

import Link from "next/link";
import { FiAward, FiBookOpen, FiUsers, FiArrowRight } from "react-icons/fi";
import ScrollReveal from "@/components/ui/ScrollReveal";

const trainings = [
  { icon: FiAward, title: "Temel Güvenlik Eğitimi", hours: "120 Saat" },
  { icon: FiBookOpen, title: "Yenileme Eğitimi", hours: "60 Saat" },
  { icon: FiUsers, title: "Silah Farkı Eğitimi", hours: "Uygulamalı" },
];

export default function Training() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-dark via-red to-red-dark" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />

      {/* Animated glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.06] rounded-full blur-[100px]" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Text */}
          <ScrollReveal direction="left">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full mb-8 border border-white/10">
                <FiAward className="text-white" size={16} />
                <span className="text-white text-sm font-semibold tracking-wide">Eğitim Merkezi</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
                Güvenlik Eğitimlerinde
                <br />
                <span className="text-white/85">Profesyonel Kadro</span>
              </h2>

              <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-lg">
                Özel güvenlik temel eğitimi, yenileme eğitimi ve silah farkı eğitimi programlarımızla sektöre nitelikli personel yetiştiriyoruz.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/egitimler"
                  className="btn-white inline-flex items-center justify-center gap-3 font-bold px-8 py-4 rounded-full text-base"
                >
                  Eğitimleri İncele <FiArrowRight size={17} />
                </Link>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-white/10 backdrop-blur-sm transition-all duration-400"
                >
                  Kayıt Ol
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Cards */}
          <ScrollReveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {trainings.map((t, i) => (
                <div
                  key={t.title}
                  className={`bg-white/[0.08] backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/[0.15] transition-all duration-400 hover:-translate-y-1 ${
                    i === 0 ? "col-span-2 sm:col-span-1" : ""
                  }`}
                >
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <t.icon className="text-white" size={24} />
                  </div>
                  <h4 className="text-white font-bold text-[15px] mb-2">{t.title}</h4>
                  <span className="text-white/40 text-sm font-medium">{t.hours}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
