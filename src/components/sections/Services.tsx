"use client";

import Link from "next/link";
import { FiShield, FiCamera, FiUsers, FiTruck, FiMonitor, FiFileText, FiArrowRight } from "react-icons/fi";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";

const services = [
  { icon: FiShield, title: "Fiziki Güvenlik", desc: "Silahlı ve silahsız özel güvenlik görevlilerimiz ile tesislerinizin 7/24 fiziksel güvenliğini sağlıyoruz." },
  { icon: FiFileText, title: "Risk Analiz Raporu", desc: "Mevzuata uygun risk analizleriyle potansiyel tehditleri belirliyor ve önleyici çözümler geliştiriyoruz." },
  { icon: FiCamera, title: "Elektronik Güvenlik", desc: "CCTV, erişim kontrol ve alarm sistemleri ile teknolojik güvenlik altyapısı kuruyoruz." },
  { icon: FiUsers, title: "Etkinlik Güvenliği", desc: "Konser, kongre ve organizasyonlarda profesyonel kalabalık yönetimi ve güvenlik hizmeti sunuyoruz." },
  { icon: FiTruck, title: "Yakın Koruma (VIP)", desc: "Üst düzey yöneticiler ve özel kişiler için eğitimli yakın koruma personeli hizmeti veriyoruz." },
  { icon: FiMonitor, title: "Dijital Çözümler", desc: "GPS takip, dijital raporlama ve personel yönetim sistemi ile operasyonları anlık izliyoruz." },
];

export default function Services() {
  return (
    <section className="bg-dark-light py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          label="Hizmetlerimiz"
          title="Kapsamlı Güvenlik"
          highlight="Çözümleri"
          description="İşletmenizin güvenlik ihtiyaçlarına özel, entegre ve profesyonel çözümler sunuyoruz."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.08}>
              <div className="hover-lift bg-dark-card border border-border rounded-2xl p-8 group h-full">
                <div className="w-14 h-14 bg-red/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red transition-colors duration-300">
                  <s.icon className="text-red group-hover:text-white transition-colors duration-300" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-red transition-colors duration-300">{s.title}</h3>
                <p className="text-gray-400 text-[15px] leading-[1.7] mb-5">{s.desc}</p>
                <Link href="/hizmetler" className="text-red text-sm font-medium hover:text-red-light transition-colors inline-flex items-center gap-1.5">
                  Detaylı Bilgi <FiArrowRight size={14} />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-14">
            <Link href="/hizmetler" className="inline-flex items-center gap-2.5 text-red hover:text-white font-medium text-base transition-colors">
              Tüm Hizmetleri Görüntüle <FiArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
