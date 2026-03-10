"use client";

import { FiTarget, FiUsers, FiMonitor, FiHeadphones } from "react-icons/fi";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";

const advantages = [
  { icon: FiTarget, title: "Sektörel Uzmanlık", desc: "Her sektörün kendine özgü güvenlik ihtiyaçlarını analiz eder, size özel planlama yaparız." },
  { icon: FiUsers, title: "1000+ Eğitimli Personel", desc: "5188 sayılı kanun kapsamında eğitimli, sertifikalı ve sürekli gelişim programlarına dahil kadro." },
  { icon: FiMonitor, title: "Teknoloji Entegrasyonu", desc: "Dijital sistemlerle operasyonları takip ediyor, ölçüyor ve raporlanabilir hale getiriyoruz." },
  { icon: FiHeadphones, title: "7/24 Müdahale Merkezi", desc: "Aktif alarm izleme merkezimiz ile acil durumlarda anında saha müdahalesi yapıyoruz." },
];

export default function WhyUs() {
  return (
    <section className="bg-dark-light py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          label="Neden MYD Güvenlik?"
          title="Farkımız"
          highlight="Ortada"
          description="Operasyonel verimlilik, şeffaflık ve sürdürülebilirlik ilkeleriyle güvenlik ihtiyaçlarınızı tek merkezden yönetiyoruz."
        />

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {advantages.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="relative hover-lift bg-gradient-to-br from-dark-card to-dark border border-border rounded-2xl p-8 lg:p-10 group overflow-hidden h-full">
                {/* Big number background */}
                <span className="absolute top-4 right-6 text-7xl font-bold text-red/[0.06] select-none pointer-events-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10 flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-red/10 rounded-xl flex items-center justify-center group-hover:bg-red transition-colors duration-300">
                      <item.icon className="text-red group-hover:text-white transition-colors duration-300" size={26} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-gray-400 text-[15px] leading-[1.7]">{item.desc}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
