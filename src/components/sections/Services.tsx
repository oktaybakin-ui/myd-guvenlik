"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";

const services = [
  { title: "Fiziki Güvenlik Hizmetleri", desc: "Silahlı ve silahsız özel güvenlik görevlilerimiz ile tesislerinizin 7/24 fiziksel güvenliğini sağlıyoruz.", image: "/services/services1.png" },
  { title: "Risk Analiz Raporu Hazırlama", desc: "Mevzuata uygun risk analizleriyle potansiyel tehditleri belirliyor ve önleyici çözümler geliştiriyoruz.", image: "/services/services2.png" },
  { title: "Elektronik Güvenlik Sistemleri", desc: "CCTV kamera sistemleri, erişim kontrol ve alarm sistemleri ile teknolojik güvenlik altyapısı kuruyoruz.", image: "/services/services3.png" },
  { title: "Etkinlik Güvenliği", desc: "Konser, kongre ve organizasyonlarınızda profesyonel kalabalık yönetimi ve güvenlik hizmeti sunuyoruz.", image: "/services/services4.png" },
  { title: "Yakın Koruma (VIP)", desc: "Üst düzey yöneticiler ve özel kişiler için eğitimli yakın koruma personeli hizmeti veriyoruz.", image: "/services/services1.png" },
  { title: "Dijital Güvenlik Çözümleri", desc: "GPS takip, dijital raporlama ve personel yönetim sistemi ile operasyonları anlık izliyoruz.", image: "/services/services2.png" },
];

export default function Services() {
  return (
    <section className="bg-dark py-32 lg:py-44">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          label="Hizmetlerimiz"
          title="Kapsamlı Güvenlik"
          highlight="Çözümleri"
          description="İşletmenizin güvenlik ihtiyaçlarına özel, entegre ve profesyonel çözümler sunuyoruz."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.08}>
              <Link href="/hizmetler" className="group block h-full">
                <div className="hover-lift bg-dark-card border border-border rounded-2xl overflow-hidden h-full">
                  {/* Photo */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/30 to-transparent" />
                  </div>
                  {/* Content */}
                  <div className="p-9">
                    <h3 className="text-xl font-bold mb-4 group-hover:text-red transition-colors duration-300">{s.title}</h3>
                    <p className="text-gray-400 text-base leading-[1.85] mb-6">{s.desc}</p>
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
