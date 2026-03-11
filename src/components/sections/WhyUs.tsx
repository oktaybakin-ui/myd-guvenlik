"use client";

import Image from "next/image";
import Link from "next/link";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
import ScrollReveal from "@/components/ui/ScrollReveal";

const advantages = [
  "Sektörel uzmanlık ve her sektöre özel güvenlik planlaması",
  "1000+ eğitimli, sertifikalı personel kadrosu",
  "Dijital teknoloji entegrasyonu ile anlık takip",
  "7/24 aktif alarm izleme ve acil müdahale merkezi",
  "Şeffaf raporlama ve periyodik denetim sistemi",
  "5188 sayılı kanun kapsamında tam yetkili operasyon",
];

export default function WhyUs() {
  return (
    <section className="bg-dark py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image */}
          <ScrollReveal direction="left">
            <div className="relative rounded-2xl overflow-hidden border border-border img-zoom">
              <Image
                src="/services/services1.png"
                alt="MYD Güvenlik Neden Biz"
                width={700}
                height={500}
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent" />
            </div>
          </ScrollReveal>

          {/* Right: Content */}
          <ScrollReveal delay={0.15}>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-[2px] bg-red rounded-full" />
                <span className="text-red text-[13px] font-semibold tracking-[0.2em] uppercase">
                  Neden MYD Güvenlik?
                </span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight mb-6">
                Farkımız{" "}
                <span className="text-gradient-red">Ortada</span>
              </h2>

              <p className="text-gray-400 text-[15px] leading-relaxed mb-8">
                Operasyonel verimlilik, şeffaflık ve sürdürülebilirlik ilkeleriyle güvenlik ihtiyaçlarınızı tek merkezden yönetiyoruz.
              </p>

              <div className="space-y-4 mb-10">
                {advantages.map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-red/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FiCheckCircle className="text-red" size={14} />
                    </div>
                    <span className="text-gray-300 text-[15px] leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/iletisim"
                className="btn-primary inline-flex items-center gap-3 text-white font-semibold px-8 py-4 rounded-full text-base"
              >
                Teklif Alın <FiArrowRight size={17} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
