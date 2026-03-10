"use client";

import { FiShield, FiUsers, FiAward, FiClock } from "react-icons/fi";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";

const stats = [
  { icon: FiShield, value: 1000, suffix: "+", label: "Güvenlik Personeli" },
  { icon: FiUsers, value: 150, suffix: "+", label: "Kurumsal İş Ortağı" },
  { icon: FiAward, value: 10, suffix: "+", label: "Yıllık Deneyim" },
  { icon: FiClock, value: 7, suffix: "/24", label: "Kesintisiz Hizmet" },
];

export default function Stats() {
  return (
    <section className="bg-dark-light border-y border-red/10 py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="text-center relative">
                <stat.icon className="text-red mx-auto mb-3" size={24} />
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">{stat.label}</div>
                {i < stats.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gray-800" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
