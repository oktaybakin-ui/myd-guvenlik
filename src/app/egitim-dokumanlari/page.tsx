"use client";

import { FiFileText, FiDownload, FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const dokumanlar = [
  {
    title: "Devamsızlık Hususları ve Ders Saatleri (EK-11 / EK-13)",
    desc: "Özel güvenlik temel ve yenileme eğitimi ders saatleri, devamsızlık hakları tablosu.",
    type: "PDF",
    href: "/docs/devamsizlik-ders-saatleri.pdf",
  },
  {
    title: "Silahsız Özel Güvenlik Temel Eğitimi Müfredatı",
    desc: "100 saatlik silahsız özel güvenlik temel eğitim programının detaylı müfredat içeriği.",
    type: "PDF",
  },
  {
    title: "Silahlı Özel Güvenlik Temel Eğitimi Müfredatı",
    desc: "120 saatlik silahlı özel güvenlik temel eğitim programının detaylı müfredat içeriği.",
    type: "PDF",
  },
  {
    title: "Yenileme Eğitimi Müfredatı",
    desc: "60 saatlik yenileme eğitim programının detaylı müfredat içeriği.",
    type: "PDF",
  },
  {
    title: "Silah Fark Eğitimi Müfredatı",
    desc: "25 saatlik silah fark eğitim programının detaylı müfredat içeriği.",
    type: "PDF",
  },
  {
    title: "Özel Güvenlik Sınav Kılavuzu",
    desc: "Özel güvenlik sınavına hazırlık için gerekli bilgiler ve sınav formatı hakkında kılavuz.",
    type: "PDF",
  },
  {
    title: "Başvuru Formu",
    desc: "Eğitim programlarına kayıt için doldurulması gereken başvuru formu.",
    type: "PDF",
  },
  {
    title: "5188 Sayılı Özel Güvenlik Hizmetlerine Dair Kanun",
    desc: "Özel güvenlik hizmetlerinin yasal çerçevesini belirleyen kanun metni.",
    type: "PDF",
  },
  {
    title: "Özel Güvenlik Yönetmeliği",
    desc: "5188 sayılı kanunun uygulama yönetmeliği ve ilgili düzenlemeler.",
    type: "PDF",
  },
];

export default function EgitimDokumanlariPage() {
  return (
    <>
      <section className="bg-dark pt-40 lg:pt-48 pb-20 lg:pb-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="flex items-center gap-2.5 justify-center mb-4">
                <span className="w-10 h-[2px] bg-red rounded-full" />
                <span className="text-red text-sm font-semibold tracking-[0.2em] uppercase">Dokümanlar</span>
                <span className="w-10 h-[2px] bg-red rounded-full" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Eğitim Müfredatları ve Formlar</h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {dokumanlar.map((doc, i) => (
              <ScrollReveal key={doc.title} delay={i * 0.06}>
                <div className="bg-dark-light border border-border rounded-2xl p-7 group hover-lift h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-red/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red/20 transition-colors duration-300">
                      <FiFileText className="text-red" size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-base mb-2 leading-snug">{doc.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{doc.desc}</p>
                    </div>
                  </div>
                  <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">{doc.type}</span>
                    {doc.href ? (
                      <a href={doc.href} target="_blank" rel="noopener noreferrer" className="text-red text-sm font-semibold inline-flex items-center gap-1.5 hover:text-white transition-colors duration-200">
                        <FiDownload size={14} />
                        İndir
                      </a>
                    ) : (
                      <button className="text-red text-sm font-semibold inline-flex items-center gap-1.5 hover:text-white transition-colors duration-200">
                        <FiDownload size={14} />
                        İndir
                      </button>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-16 text-center">
              <p className="text-gray-500 text-sm">
                Dokümanlarla ilgili sorularınız için{" "}
                <Link href="/iletisim" className="text-red hover:text-white transition-colors font-medium">
                  iletişim sayfamızı
                </Link>{" "}
                ziyaret edebilirsiniz.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-dark via-red to-red-dark" />
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white tracking-tight">Eğitimlerimiz Hakkında Bilgi Alın</h2>
            <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto leading-[1.8]">
              Eğitim tarihleri, kontenjan bilgisi ve başvuru süreci için bizimle iletişime geçin.
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
