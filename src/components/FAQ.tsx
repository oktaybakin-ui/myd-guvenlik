"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    question: "Özel güvenlik hizmeti almak için ne yapmalıyım?",
    answer:
      "İletişim formumuzu doldurarak veya bizi arayarak ücretsiz güvenlik analizi talep edebilirsiniz. Uzman ekibimiz işletmenizi yerinde inceleyerek ihtiyaçlarınıza özel bir güvenlik planı hazırlar.",
  },
  {
    question: "Güvenlik görevlileriniz hangi eğitimleri almıştır?",
    answer:
      "Tüm güvenlik personelimiz, 5188 sayılı kanun kapsamında zorunlu olan temel ve yenileme eğitimlerini almıştır. Bunun yanı sıra ilk yardım, yangın söndürme, iletişim ve kriz yönetimi gibi ek eğitimlerle donatılmıştır.",
  },
  {
    question: "Hangi bölgelerde hizmet veriyorsunuz?",
    answer:
      "Türkiye genelinde birçok ilde aktif olarak hizmet vermekteyiz. Detaylı bilgi için bizimle iletişime geçebilirsiniz.",
  },
  {
    question: "Acil durumlarda müdahale süreniz ne kadardır?",
    answer:
      "7/24 aktif alarm izleme merkezimiz sayesinde acil durumlarda ortalama 10 dakika içinde saha ekiplerimiz ile müdahale ediyoruz.",
  },
  {
    question: "Kamera ve alarm sistemi kurulumu da yapıyor musunuz?",
    answer:
      "Evet, elektronik güvenlik hizmetlerimiz kapsamında CCTV kamera sistemleri, erişim kontrol sistemleri, alarm sistemleri kurulumu ve 7/24 uzaktan izleme hizmeti sunmaktayız.",
  },
  {
    question: "Sözleşme süresi ne kadardır?",
    answer:
      "Sözleşme süreleri müşteri ihtiyaçlarına göre esnek olarak belirlenir. Kısa süreli etkinlik güvenliğinden uzun vadeli kurumsal güvenlik sözleşmelerine kadar farklı seçenekler sunuyoruz.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="sss" className="bg-navy-light py-24">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm tracking-widest uppercase">
            SSS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Sıkça Sorulan <span className="text-gold">Sorular</span>
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold pr-4">{faq.question}</span>
                <FiChevronDown
                  className={`text-gold flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  size={20}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
