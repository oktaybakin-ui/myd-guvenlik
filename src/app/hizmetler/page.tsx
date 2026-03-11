"use client";

import Link from "next/link";
import Image from "next/image";
import { FiShield, FiCamera, FiUsers, FiTruck, FiMonitor, FiFileText, FiArrowRight } from "react-icons/fi";
import PageBanner from "@/components/PageBanner";
import ScrollReveal from "@/components/ui/ScrollReveal";

const services = [
  { icon: FiShield, title: "Fiziki Güvenlik Hizmetleri", desc: "Silahlı ve silahsız özel güvenlik görevlilerimiz ile tesislerinizin 7/24 fiziksel güvenliğini sağlıyoruz.", features: ["7/24 nöbet sistemi", "Devriye hizmetleri", "Giriş-çıkış kontrol", "Olay müdahale"], image: "/services/services1.png" },
  { icon: FiFileText, title: "Risk Analiz Raporu Hazırlama", desc: "Mevzuata uygun risk analizleriyle potansiyel tehditleri belirliyor ve önleyici çözümler geliştiriyoruz.", features: ["Tehdit değerlendirmesi", "Güvenlik açığı analizi", "Mevzuat uyumluluk", "Önleyici tedbirler"], image: "/services/services2.png" },
  { icon: FiCamera, title: "Elektronik Güvenlik Sistemleri", desc: "CCTV kamera sistemleri, erişim kontrol, alarm sistemleri ve uzaktan izleme çözümleri sunuyoruz.", features: ["CCTV kamera sistemleri", "Erişim kontrol", "Alarm sistemleri", "Uzaktan izleme"], image: "/services/services3.png" },
  { icon: FiUsers, title: "Etkinlik Güvenliği", desc: "Konser, kongre, spor müsabakaları ve özel organizasyonlarınız için profesyonel etkinlik güvenliği hizmeti sunuyoruz.", features: ["Kalabalık yönetimi", "VIP alan güvenliği", "Giriş kontrol", "Acil durum planlaması"], image: "/services/services4.png" },
  { icon: FiTruck, title: "Yakın Koruma (VIP)", desc: "Üst düzey yöneticiler ve özel kişiler için eğitimli yakın koruma personeli hizmeti veriyoruz.", features: ["Kişisel koruma", "Güzergah güvenliği", "Araç eskort", "Tehdit analizi"], image: "/services/services1.png" },
  { icon: FiMonitor, title: "Dijital Güvenlik Çözümleri", desc: "Dijital altyapılar ve akıllı sistemlerle operasyonları anlık izliyor, ölçüyor ve raporlanabilir hale getiriyoruz.", features: ["GPS takip sistemi", "Dijital raporlama", "Personel yönetimi", "Anlık izleme"], image: "/services/services2.png" },
];

export default function HizmetlerPage() {
  return (
    <>
      <PageBanner title="Hizmetlerimiz" subtitle="İşletmenizin güvenlik ihtiyaçlarına özel, kapsamlı ve profesyonel güvenlik çözümleri sunuyoruz." breadcrumb="Hizmetler" />

      <section className="bg-dark py-36 lg:py-48">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((s) => (
              <ScrollReveal key={s.title} delay={0.05}>
                <div className="bg-dark-card border border-border rounded-2xl overflow-hidden hover-lift text-center">
                  <div className="relative h-64 w-full">
                    <Image src={s.image} alt={s.title} fill className="object-cover opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/80 to-transparent" />
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-red/15 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-red/20">
                      <s.icon className="text-red" size={26} />
                    </div>
                  </div>
                  <div className="p-10 lg:p-14">
                    <h3 className="text-2xl font-bold mb-5">{s.title}</h3>
                    <p className="text-gray-400 text-lg leading-[1.85] mb-10 max-w-2xl mx-auto">{s.desc}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                      {s.features.map((f) => (
                        <div key={f} className="flex items-center justify-center gap-3 bg-white/[0.03] border border-white/[0.05] rounded-2xl px-5 py-4">
                          <div className="w-2 h-2 bg-red rounded-full flex-shrink-0" />
                          <span className="text-sm text-gray-400">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-36 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-dark via-red to-red-dark" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-7 text-white tracking-tight">Güvenlik İhtiyaçlarınız İçin Teklif Alın</h2>
            <p className="text-white/50 text-xl mb-12 max-w-xl mx-auto leading-[1.8]">İşletmenize özel güvenlik planı ve fiyat teklifi için bizimle iletişime geçin.</p>
            <Link href="/iletisim" className="btn-white inline-flex items-center gap-3 font-bold px-10 py-5 rounded-full text-base">
              İletişime Geçin <FiArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
