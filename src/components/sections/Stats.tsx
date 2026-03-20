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
    <section className="bg-dark-light border-y border-white/[0.04] py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-12">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="text-center relative">
                <stat.icon className="text-red mx-auto mb-4" size={26} />
                <div className="text-4xl lg:text-5xl font-bold text-white mb-3">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[12px] text-gray-500 uppercase tracking-[0.18em] font-medium">{stat.label}</div>
                {i < stats.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/[0.06]" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
