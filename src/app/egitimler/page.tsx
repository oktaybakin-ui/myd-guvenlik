"use client";

import Image from "next/image";
import Link from "next/link";
import { FiClock, FiAward, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import PageBanner from "@/components/PageBanner";
import ScrollReveal from "@/components/ui/ScrollReveal";

const trainings = [
  {
    title: "Silahsız Özel Güvenlik Temel Eğitimi",
    hours: "100 Saat",
    desc: "Özel güvenlik sektörüne ilk adımını atacak adaylar için 5188 sayılı kanun kapsamında düzenlenen zorunlu temel eğitim programıdır.",
    features: ["Güvenlik temelleri", "İlk yardım", "Yangın söndürme", "İletişim becerileri", "Hukuki mevzuat", "Kriz yönetimi"],
    image: "/services/services1.png",
  },
  {
    title: "Silahlı Özel Güvenlik Temel Eğitimi",
    hours: "120 Saat",
    desc: "Silahlı görev yapacak adaylar için silah bilgisi, atış eğitimi ve ileri güvenlik tekniklerini kapsayan genişletilmiş eğitim programıdır.",
    features: ["Silah bilgisi", "Atış eğitimi", "Taktik müdahale", "Tehdit değerlendirme", "Yakın savunma", "Mevzuat bilgisi"],
    image: "/services/services3.png",
  },
  {
    title: "Yenileme Eğitimi",
    hours: "60 Saat",
    desc: "Kimlik kartı süresini dolduran özel güvenlik görevlilerinin mesleki yeterliliklerini güncellemek için düzenlenen periyodik eğitim programıdır.",
    features: ["Güncel mevzuat", "İleri iletişim", "Pratik tatbikatlar", "İlk yardım yenileme", "Teknoloji kullanımı", "Saha uygulamaları"],
    image: "/services/services4.png",
  },
  {
    title: "Silah Fark Eğitimi",
    hours: "25 Saat",
    desc: "Silahsız kimlik kartı sahibi güvenlik görevlilerinin silahlı kimlik kartına geçişi için silah eğitimi ve atış pratiği odaklı programdır.",
    features: ["Silah tanıtımı", "Güvenli silah kullanımı", "Atış poligonu pratiği", "Hukuki sorumluluklar"],
    image: "/services/services2.png",
  },
];

export default function EgitimlerPage() {
  return (
    <>
      <PageBanner
        title="Eğitim Programları"
        subtitle="5188 sayılı kanun kapsamında, profesyonel güvenlik sektörünün ihtiyaç duyduğu tüm eğitim programlarını sunuyoruz."
        breadcrumb="Eğitimler"
      />

      <section className="bg-dark py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="space-y-28">
            {trainings.map((t, i) => (
              <ScrollReveal key={t.title} delay={0.05}>
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">
                  {/* Image */}
                  <div className={`relative ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="rounded-2xl overflow-hidden border border-border shadow-2xl shadow-black/30 img-zoom">
                      <Image
                        src={t.image}
                        alt={t.title}
                        width={640}
                        height={420}
                        className="w-full h-auto object-cover aspect-[3/2]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent" />
                    </div>
                    {/* Badge */}
                    <div className="absolute -bottom-5 -right-5 bg-red text-white rounded-xl px-6 py-4 shadow-2xl shadow-red/20 hidden sm:block">
                      <div className="flex items-center gap-2">
                        <FiClock size={18} />
                        <span className="font-bold text-lg">{t.hours}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`text-center lg:text-left ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="flex items-center gap-2.5 mb-4 justify-center lg:justify-start">
                      <FiAward className="text-red" size={18} />
                      <span className="text-red text-sm font-semibold uppercase tracking-widest">Sertifikalı Program</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-5 leading-tight">{t.title}</h3>
                    <p className="text-gray-400 text-lg leading-[1.8] mb-8">{t.desc}</p>
                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3.5 mb-8 text-left">
                      {t.features.map((f) => (
                        <div key={f} className="flex items-center gap-3">
                          <FiCheckCircle className="text-red flex-shrink-0" size={16} />
                          <span className="text-gray-400 text-base">{f}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/iletisim"
                      className="btn-primary inline-flex items-center gap-2.5 text-white font-semibold px-7 py-3.5 rounded-full text-sm"
                    >
                      Başvuru İçin İletişime Geçin <FiArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-dark via-red to-red-dark" />
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white tracking-tight">Eğitim Programlarımız Hakkında Bilgi Alın</h2>
            <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto leading-[1.8]">Eğitim tarihleri, kontenjan bilgisi ve başvuru süreci için bizimle iletişime geçin.</p>
            <Link href="/iletisim" className="btn-white inline-flex items-center gap-3 font-bold px-8 py-4 rounded-full text-base">
              İletişime Geçin <FiArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
