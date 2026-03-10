"use client";

import { useState } from "react";
import Link from "next/link";
import { FiChevronDown, FiArrowRight } from "react-icons/fi";
import PageBanner from "@/components/PageBanner";
import ScrollReveal from "@/components/ui/ScrollReveal";

const faqs = [
  {
    q: "MYD Güvenlik hangi hizmetleri sunuyor?",
    a: "MYD Özel Güvenlik; fiziki güvenlik, elektronik güvenlik (CCTV, alarm, erişim kontrol), etkinlik güvenliği, yakın koruma (VIP), risk analizi, güvenlik danışmanlığı ve dijital güvenlik çözümleri sunmaktadır.",
  },
  {
    q: "Hizmetlerinizi hangi sektörlere sunuyorsunuz?",
    a: "Sağlık, eğitim, üretim, lojistik, perakende, turizm, kamu kurumları, site ve rezidanslar, AVM'ler ve daha birçok sektöre entegre güvenlik çözümleri sağlıyoruz.",
  },
  {
    q: "Personel seçimi ve yönetimi nasıl yapılıyor?",
    a: "Tüm personellerimiz yasal mevzuata uygun eğitimli ve sertifikalıdır. Güvenlik görevlilerimiz 5188 sayılı kanun kapsamında zorunlu olan temel eğitimlerin yanı sıra, ilk yardım, yangın söndürme, iletişim ve kriz yönetimi gibi ek eğitimlerle donatılmıştır.",
  },
  {
    q: "Acil durumlarda müdahale süreniz ne kadardır?",
    a: "7/24 aktif alarm izleme merkezimiz sayesinde acil durumlarda saha ekiplerimiz ile hızlı müdahale ediyoruz. Tüm operasyonlarımız anlık takip ve raporlama sistemi ile izlenmektedir.",
  },
  {
    q: "Kamera ve alarm sistemi kurulumu yapıyor musunuz?",
    a: "Evet, elektronik güvenlik hizmetlerimiz kapsamında CCTV kamera sistemleri, erişim kontrol sistemleri, alarm sistemleri kurulumu ve 7/24 uzaktan izleme hizmeti sunmaktayız.",
  },
  {
    q: "Dijital ve teknolojik çözümler sunuyor musunuz?",
    a: "Evet. Operasyon, insan kaynakları ve hizmet süreçlerini dijital platformlar üzerinden yönetiyor; izlenebilir, raporlanabilir ve denetlenebilir sistemler sunuyoruz. GPS takip, dijital raporlama ve personel yönetim sistemi başlıca dijital çözümlerimizdir.",
  },
  {
    q: "Sözleşme süresi ne kadardır?",
    a: "Sözleşme süreleri müşteri ihtiyaçlarına göre esnek olarak belirlenir. Kısa süreli etkinlik güvenliğinden uzun vadeli kurumsal güvenlik sözleşmelerine kadar farklı seçenekler sunuyoruz.",
  },
  {
    q: "MYD Güvenlik ile çalışmanın avantajları nelerdir?",
    a: "Entegre hizmet yapımız sayesinde güvenlik ihtiyaçlarınızı tek merkezden yönetir, operasyonel verimlilik, şeffaflık ve sürdürülebilirlik sağlarız. 5188 sayılı kanun kapsamında tam yetkili firmamız, ISO sertifikalı hizmet kalitesi ile güvenliğinizi garanti altına alır.",
  },
];

export default function SSSPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <PageBanner
        title="Sıkça Sorulan Sorular"
        subtitle="Merak ettiğiniz soruların cevaplarını burada bulabilirsiniz."
        breadcrumb="S.S.S"
      />

      <section className="bg-dark py-36 lg:py-48">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 0.03}>
                <div className="border border-border rounded-2xl overflow-hidden bg-dark-light hover:border-white/[0.08] transition-colors duration-300">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-8 text-left"
                  >
                    <span className="font-semibold text-[15px] pr-8 leading-[1.6]">{faq.q}</span>
                    <FiChevronDown
                      className={`text-red flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                      size={20}
                    />
                  </button>
                  <div className={`accordion-content ${openIndex === index ? "open" : ""}`}>
                    <div className="px-8 pb-8">
                      <div className="w-full h-px bg-border mb-6" />
                      <p className="text-gray-400 text-[15px] leading-[2]">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.1}>
            <div className="mt-24 bg-dark-light border border-border rounded-2xl p-14 text-center">
              <h3 className="text-2xl font-bold mb-5">Başka Sorunuz mu Var?</h3>
              <p className="text-gray-400 text-[15px] mb-10 leading-[2]">Aklınızdaki tüm sorular için destek ekibimize ulaşabilirsiniz.</p>
              <Link href="/iletisim" className="btn-primary inline-flex items-center gap-3 text-white font-semibold px-10 py-5 rounded-full text-base">
                Destek Talebi Oluşturun <FiArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
