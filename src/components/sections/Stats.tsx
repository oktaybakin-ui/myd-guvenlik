"use client";

import { FiShield, FiUsers, FiAward, FiClock } from "react-icons/fi";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";

const stats = [
  { icon: FiShield, value: 270, suffix: "+", label: "ÖGG" },
  { icon: FiUsers, value: 25, suffix: "", label: "Kurumsal İş Ortağı" },
  { icon: FiAward, value: 5, suffix: "", label: "Hizmet Kategorisi" },
  { icon: FiClock, value: 7, suffix: "/24", label: "Kesintisiz Hizmet" },
];

export default function Stats() {
  return (
    <section className="relative bg-dark-light py-16 lg:py-20 overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="section-divider absolute bottom-0 left-0 right-0" />

      {/* Subtle bg glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-red/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-12">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="text-center relative group">
                <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-red/[0.08] flex items-center justify-center transition-all duration-400 group-hover:bg-red/15 group-hover:scale-110">
                  <stat.icon className="text-red" size={24} />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-3 stat-value">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[11px] text-gray-500 uppercase tracking-[0.2em] font-medium">{stat.label}</div>
                {i < stats.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-20 bg-gradient-to-b from-transparent via-white/[0.06] to-transparent" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
