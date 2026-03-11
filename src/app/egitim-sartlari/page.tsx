"use client";

import { FiCheckCircle, FiFileText, FiAlertCircle, FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const gerekliEvraklar = [
  "T.C. Kimlik Kartı fotokopisi (2 adet)",
  "Nüfus cüzdanı fotokopisi (2 adet)",
  "İkametgâh belgesi",
  "Adli sicil kaydı (son 6 ay içinde alınmış)",
  "Sağlık raporu (Özel Güvenlik Görevlisi olur ibareli)",
  "Diploma fotokopisi (en az lise mezunu)",
  "4 adet vesikalık fotoğraf (son 6 ay içinde çekilmiş, biyometrik)",
  "Askerlik durum belgesi (erkek adaylar için)",
];

const sartlar = [
  {
    title: "Yaş Şartı",
    desc: "En az 18 yaşını doldurmuş olmak.",
  },
  {
    title: "Eğitim Durumu",
    desc: "En az lise veya dengi okul mezunu olmak.",
  },
  {
    title: "Sağlık Durumu",
    desc: "Görevin yapılmasına engel teşkil edecek herhangi bir sağlık sorunu bulunmamak. Sağlık raporu ile belgelenmek.",
  },
  {
    title: "Sabıka Kaydı",
    desc: "5188 sayılı Kanun ve ilgili yönetmelikte belirtilen suçlardan hüküm giymemiş olmak.",
  },
  {
    title: "Askerlik Durumu",
    desc: "Erkek adaylar için askerliğini yapmış veya tecilli olmak.",
  },
  {
    title: "Türk Vatandaşlığı",
    desc: "T.C. vatandaşı olmak.",
  },
];

const egitimSureci = [
  {
    step: "1",
    title: "Başvuru",
    desc: "Gerekli evraklarınızı tamamlayarak şubemize başvurunuzu yapın.",
  },
  {
    step: "2",
    title: "Kayıt",
    desc: "Evrak kontrolü sonrası eğitim programına kaydınız yapılır.",
  },
  {
    step: "3",
    title: "Eğitim",
    desc: "Teorik ve uygulamalı eğitimlere katılarak programı tamamlayın.",
  },
  {
    step: "4",
    title: "Sınav & Sertifika",
    desc: "Eğitim sonrası yapılan sınavda başarılı olanlara sertifika verilir.",
  },
];

export default function EgitimSartlariPage() {
  return (
    <>
      {/* Şartlar */}
      <section className="bg-dark pt-40 lg:pt-48 pb-20 lg:pb-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="flex items-center gap-2.5 justify-center mb-4">
                <span className="w-10 h-[2px] bg-red rounded-full" />
                <span className="text-red text-sm font-semibold tracking-[0.2em] uppercase">Başvuru Şartları</span>
                <span className="w-10 h-[2px] bg-red rounded-full" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Eğitime Katılım Şartları</h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-28">
            {sartlar.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.08}>
                <div className="bg-dark-light border border-border rounded-2xl p-8 group hover-lift h-full">
                  <div className="w-12 h-12 bg-red/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-red/20 transition-colors duration-300">
                    <FiCheckCircle className="text-red" size={20} />
                  </div>
                  <h4 className="font-bold text-lg mb-3">{s.title}</h4>
                  <p className="text-gray-400 text-base leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Gerekli Evraklar */}
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="flex items-center gap-2.5 justify-center mb-4">
                <span className="w-10 h-[2px] bg-red rounded-full" />
                <span className="text-red text-sm font-semibold tracking-[0.2em] uppercase">Gerekli Evraklar</span>
                <span className="w-10 h-[2px] bg-red rounded-full" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Hazırlamanız Gereken Belgeler</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-dark-light border border-border rounded-2xl p-10 lg:p-14 max-w-3xl mx-auto mb-28">
              <div className="space-y-5">
                {gerekliEvraklar.map((evrak, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-7 h-7 bg-red/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FiFileText className="text-red" size={14} />
                    </div>
                    <span className="text-gray-300 text-base leading-relaxed">{evrak}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-5 bg-red/5 border border-red/20 rounded-xl flex items-start gap-3">
                <FiAlertCircle className="text-red flex-shrink-0 mt-0.5" size={18} />
                <p className="text-gray-400 text-sm leading-relaxed">
                  Tüm evrakların asılları kayıt esnasında kontrol edilmektedir. Fotokopiler net ve okunaklı olmalıdır.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Eğitim Süreci */}
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="flex items-center gap-2.5 justify-center mb-4">
                <span className="w-10 h-[2px] bg-red rounded-full" />
                <span className="text-red text-sm font-semibold tracking-[0.2em] uppercase">Süreç</span>
                <span className="w-10 h-[2px] bg-red rounded-full" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Eğitim Süreci</h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {egitimSureci.map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <span className="text-red text-2xl font-bold">{item.step}</span>
                  </div>
                  <h4 className="font-bold text-lg mb-3">{item.title}</h4>
                  <p className="text-gray-400 text-base leading-relaxed">{item.desc}</p>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white tracking-tight">Eğitime Başlamaya Hazır mısınız?</h2>
            <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto leading-[1.8]">
              Başvuru ve kayıt işlemleri için hemen bizimle iletişime geçin.
            </p>
            <Link href="/iletisim" className="btn-white inline-flex items-center gap-3 font-bold px-8 py-4 rounded-full text-base">
              İletişime Geçin <FiArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
