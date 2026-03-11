"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiShield, FiFileText, FiCamera, FiUsers, FiTruck, FiMonitor } from "react-icons/fi";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";

const services = [
  { icon: FiShield, title: "Fiziki Güvenlik Hizmetleri", desc: "Silahlı ve silahsız özel güvenlik görevlilerimiz ile tesislerinizin 7/24 fiziksel güvenliğini sağlıyoruz.", image: "/services/services1.png" },
  { icon: FiFileText, title: "Risk Analiz Raporu Hazırlama", desc: "Mevzuata uygun risk analizleriyle potansiyel tehditleri belirliyor ve önleyici çözümler geliştiriyoruz.", image: "/services/services2.png" },
  { icon: FiCamera, title: "Elektronik Güvenlik Sistemleri", desc: "CCTV kamera sistemleri, erişim kontrol ve alarm sistemleri ile teknolojik güvenlik altyapısı kuruyoruz.", image: "/services/services3.png" },
  { icon: FiUsers, title: "Etkinlik Güvenliği", desc: "Konser, kongre ve organizasyonlarınızda profesyonel kalabalık yönetimi ve güvenlik hizmeti sunuyoruz.", image: "/services/services4.png" },
  { icon: FiTruck, title: "Yakın Koruma (VIP)", desc: "Üst düzey yöneticiler ve özel kişiler için eğitimli yakın koruma personeli hizmeti veriyoruz.", image: "/services/services1.png" },
  { icon: FiMonitor, title: "Dijital Güvenlik Çözümleri", desc: "GPS takip, dijital raporlama ve personel yönetim sistemi ile operasyonları anlık izliyoruz.", image: "/services/services2.png" },
];

export default function Services() {
  return (
    <section className="bg-dark py-40 lg:py-52">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          label="Hizmetlerimiz"
          title="Kapsamlı Güvenlik"
          highlight="Çözümleri"
          description="İşletmenizin güvenlik ihtiyaçlarına özel, entegre ve profesyonel çözümler sunuyoruz."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 mt-28">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.08}>
              <Link href="/hizmetler" className="group block h-full">
                <div className="hover-lift bg-dark-card border border-border rounded-2xl overflow-hidden h-full">
                  {/* Photo */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/30 to-transparent" />
                    {/* Icon overlay */}
                    <div className="absolute bottom-5 left-7 w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-red group-hover:border-red transition-all duration-300">
                      <s.icon className="text-white" size={22} />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-9 lg:p-10">
                    <h3 className="text-xl font-bold mb-4 group-hover:text-red transition-colors duration-300">{s.title}</h3>
                    <p className="text-gray-400 text-[15px] leading-[2] mb-7">{s.desc}</p>
                    <span className="text-red text-sm font-semibold inline-flex items-center gap-2 group-hover:gap-3.5 transition-all duration-300">
                      Detaylı Bilgi <FiArrowRight size={15} />
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
