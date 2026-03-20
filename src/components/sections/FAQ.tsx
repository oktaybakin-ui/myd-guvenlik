"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import ScrollReveal from "@/components/ui/ScrollReveal";

const faqs = [
  {
    q: "MYD Güvenlik hangi hizmetleri sunuyor?",
    a: "Fiziki güvenlik, elektronik güvenlik sistemleri, risk analizi, etkinlik güvenliği, yakın koruma (VIP), dijital güvenlik çözümleri ve entegre hizmet yönetimi sunuyoruz.",
  },
  {
    q: "Hizmetlerinizi hangi sektörlere sunuyorsunuz?",
    a: "Bankacılık, sağlık, teknoloji, enerji, üretim, lojistik, perakende, gayrimenkul, eğitim, turizm ve daha birçok sektöre entegre hizmet çözümleri sağlıyoruz.",
  },
  {
    q: "Personel seçimi ve yönetimi nasıl yapılıyor?",
    a: "Tüm personelimiz 5188 sayılı kanun kapsamında eğitimli ve sertifikalıdır. Düzenli performans değerlendirmeleri ve sürekli gelişim programları ile kaliteyi koruyoruz.",
  },
  {
    q: "Dijital ve teknolojik çözümler sunuyor musunuz?",
    a: "Evet, GPS takip sistemleri, dijital raporlama platformu, anlık bildirim sistemi ve personel yönetim yazılımı ile operasyonları dijital ortamda yönetiyoruz.",
  },
  {
    q: "MYD Güvenlik ile çalışmanın avantajları nelerdir?",
    a: "10+ yıllık sektör deneyimi, 270+ özel güvenlik görevlisi, 7/24 kesintisiz hizmet, ISO sertifikalı kalite ve şeffaf raporlama anlayışı ile fark yaratıyoruz.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(1);

  return (
    <section className="relative bg-dark-light py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[900px] mx-auto px-6 lg:px-12 relative">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="flex items-center gap-3 justify-center mb-6">
              <span className="w-12 h-[2px] bg-gradient-to-r from-red to-red-light rounded-full" />
              <span className="text-red text-xs font-semibold tracking-[0.25em] uppercase">
                Sıkça Sorulan Sorular
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
              Merak <span className="text-gradient-red">Edilenler</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="border-b border-white/[0.06]">
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left cursor-pointer group"
                >
                  <span className={`text-base lg:text-lg font-semibold pr-8 transition-colors duration-300 ${openIdx === i ? "text-red" : "text-white group-hover:text-gray-300"}`}>
                    {faq.q}
                  </span>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIdx === i ? "bg-red/10 text-red" : "text-gray-500"}`}>
                    {openIdx === i ? <FiMinus size={18} /> : <FiPlus size={18} />}
                  </span>
                </button>
                <div className={`accordion-content ${openIdx === i ? "open" : ""}`}>
                  <p className="text-gray-400 text-[15px] leading-relaxed pb-6">
                    {faq.a}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
