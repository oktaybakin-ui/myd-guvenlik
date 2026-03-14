"use client";

import Image from "next/image";
import Link from "next/link";
import { FiClock, FiAward, FiArrowRight, FiCheckCircle } from "react-icons/fi";
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
      <section className="bg-dark pt-40 lg:pt-48 pb-20 lg:pb-28">
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

      {/* Ders Saatleri Tablosu */}
      <section className="bg-dark-light border-y border-border py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="flex items-center gap-2.5 justify-center mb-4">
                <span className="w-10 h-[2px] bg-red rounded-full" />
                <span className="text-red text-sm font-semibold tracking-[0.2em] uppercase">Müfredat</span>
                <span className="w-10 h-[2px] bg-red rounded-full" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Temel ve Yenileme Eğitimi Ders Saatleri</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full max-w-4xl mx-auto text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-gray-400 font-semibold uppercase tracking-wider text-xs">Ders</th>
                    <th className="text-center py-4 px-3 text-gray-400 font-semibold uppercase tracking-wider text-xs">Temel Saat</th>
                    <th className="text-center py-4 px-3 text-gray-400 font-semibold uppercase tracking-wider text-xs">Devamsızlık</th>
                    <th className="text-center py-4 px-3 text-gray-400 font-semibold uppercase tracking-wider text-xs">Yenileme Saat</th>
                    <th className="text-center py-4 px-3 text-gray-400 font-semibold uppercase tracking-wider text-xs">Devamsızlık</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Özel Güvenlik Hukuku ve Kişi Hakları", 20, 5, 10, 2],
                    ["Güvenlik Tedbirleri", 20, 5, 10, 2],
                    ["Güvenlik Sistem ve Cihazları", 5, 1, 3, 1],
                    ["Temel İlk Yardım", 10, 2, 4, 1],
                    ["Yangın Güvenliği ve Tabii Felaketlerde Müdahale", 8, 2, 4, 1],
                    ["Uyuşturucu Madde Bilgileri", 2, 2, 1, 1],
                    ["Etkili İletişim", 12, 3, 8, 2],
                    ["Kalabalık Yönetimi", 10, 2, 4, 1],
                    ["Kişi Koruma", 9, 2, 4, 1],
                    ["Genel Kollukla İlişkiler", 4, 1, 2, 2],
                    ["Silah Bilgisi ve Atış", 20, 5, 10, 2],
                  ].map(([ders, temel, devT, yenileme, devY], i) => (
                    <tr key={i} className="border-b border-border/50 hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-4 text-gray-300">{ders}</td>
                      <td className="py-3.5 px-3 text-center text-white font-medium">{temel}</td>
                      <td className="py-3.5 px-3 text-center text-gray-500">{devT}</td>
                      <td className="py-3.5 px-3 text-center text-white font-medium">{yenileme}</td>
                      <td className="py-3.5 px-3 text-center text-gray-500">{devY}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-red/30">
                    <td className="py-4 px-4 text-white font-bold text-base">TOPLAM</td>
                    <td className="py-4 px-3 text-center text-red font-bold text-lg">120</td>
                    <td className="py-4 px-3 text-center text-gray-400 font-bold">30</td>
                    <td className="py-4 px-3 text-center text-red font-bold text-lg">60</td>
                    <td className="py-4 px-3 text-center text-gray-400 font-bold">16</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>
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
