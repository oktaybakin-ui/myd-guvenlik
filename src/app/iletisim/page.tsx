"use client";

import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { branches } from "@/data/branches";

export default function IletisimPage() {
  const contactInfo = [
    {
      icon: FiPhone,
      title: "Isparta Telefonları",
      lines: ["0 (506) 903 85 02", "0 (555) 015 65 76", "0 (505) 696 79 78", "0 (246) 232 22 42"],
      href: "tel:+905069038502",
      cta: "Hemen Arayın",
    },
    {
      icon: FiPhone,
      title: "Burdur Telefonları",
      lines: ["0 (501) 072 32 15", "0 (506) 903 85 02"],
      href: "tel:+905010723215",
      cta: "Hemen Arayın",
    },
    {
      icon: FiMail,
      title: "E-posta",
      lines: ["mayda.mehmet32@gmail.com"],
      href: "mailto:mayda.mehmet32@gmail.com",
      cta: "E-posta Gönderin",
    },
    {
      icon: FiClock,
      title: "Çalışma Saatleri",
      lines: ["Hafta İçi: 08:30 - 18:00", "Cumartesi: 09:00 - 14:00"],
    },
  ];

  return (
    <>
      <section className="bg-dark pt-40 lg:pt-48 pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
            {contactInfo.map((info, i) => (
              <ScrollReveal key={info.title} delay={i * 0.1}>
                <div className="bg-dark-light border border-border rounded-2xl p-9 group hover-lift h-full text-center">
                  <div className="w-14 h-14 bg-red/10 rounded-2xl flex items-center justify-center mb-7 group-hover:bg-red/20 transition-colors duration-300 mx-auto">
                    <info.icon className="text-red" size={22} />
                  </div>
                  <h4 className="font-bold text-lg mb-4">{info.title}</h4>
                  {info.lines.map((line) => (
                    <p key={line} className="text-gray-400 text-base leading-relaxed">{line}</p>
                  ))}
                  {info.href && (
                    <a href={info.href} target={info.href.startsWith("http") ? "_blank" : undefined} rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-red text-sm mt-5 inline-block hover:text-white transition-colors duration-200 font-semibold">
                      {info.cta} →
                    </a>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Isparta & Burdur Maps Side by Side */}
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {branches.map((b) => (
                <div key={b.id} className="bg-dark-light border border-border rounded-2xl overflow-hidden">
                  <div className="p-6 border-b border-border">
                    <div className="flex items-center gap-3">
                      <FiMapPin className="text-red" size={20} />
                      <h3 className="text-xl font-bold">{b.label} Şubesi</h3>
                    </div>
                    <p className="text-gray-400 text-sm mt-2">{b.address.join(", ")}</p>
                    <a
                      href={`https://maps.google.com/?q=${b.mapQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red text-sm mt-3 inline-block hover:text-white transition-colors font-semibold"
                    >
                      Yol Tarifi Alın →
                    </a>
                  </div>
                  <iframe
                    src={b.mapEmbed}
                    width="100%"
                    height="350"
                    style={{ border: 0, filter: "grayscale(100%) contrast(1.1) invert(92%) hue-rotate(180deg)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`MYD Güvenlik ${b.label} Şubesi`}
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
                <div className="bg-dark-light border border-border rounded-2xl p-10 lg:p-12">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-10 h-[2px] bg-red rounded-full" />
                    <span className="text-red text-sm font-semibold tracking-[0.2em] uppercase">İletişim Formu</span>
                  </div>
                  <h3 className="text-2xl font-bold mt-2 mb-10">Bize Ulaşın</h3>

                  <form onSubmit={(e) => e.preventDefault()} className="space-y-7">
                    <div className="grid md:grid-cols-2 gap-7">
                      <div>
                        <label className="block text-sm text-gray-400 mb-3 font-medium">Ad Soyad *</label>
                        <input type="text" required className="w-full bg-dark border border-border rounded-2xl px-6 py-4 text-white text-base placeholder-white/20 focus:border-red focus:outline-none transition-colors duration-200" placeholder="Adınız Soyadınız" />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-3 font-medium">Telefon *</label>
                        <input type="tel" required className="w-full bg-dark border border-border rounded-2xl px-6 py-4 text-white text-base placeholder-white/20 focus:border-red focus:outline-none transition-colors duration-200" placeholder="0 (5xx) xxx xx xx" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-7">
                      <div>
                        <label className="block text-sm text-gray-400 mb-3 font-medium">E-posta</label>
                        <input type="email" className="w-full bg-dark border border-border rounded-2xl px-6 py-4 text-white text-base placeholder-white/20 focus:border-red focus:outline-none transition-colors duration-200" placeholder="ornek@email.com" />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-3 font-medium">Hangi Desteğe İhtiyacınız Var?</label>
                        <select className="w-full bg-dark border border-border rounded-2xl px-6 py-4 text-base text-gray-400 focus:border-red focus:outline-none transition-colors duration-200">
                          <option value="">Seçiniz</option>
                          <option value="fiziki">Güvenlik Hizmetleri</option>
                          <option value="risk">Risk Analiz Raporu</option>
                          <option value="elektronik">Elektronik Güvenlik</option>
                          <option value="etkinlik">Etkinlik Güvenliği</option>
                          <option value="vip">Yakın Koruma (VIP)</option>
                          <option value="dijital">Dijital Çözümler</option>
                          <option value="diger">Diğer</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-3 font-medium">Mesajınız</label>
                      <textarea rows={5} className="w-full bg-dark border border-border rounded-2xl px-6 py-4 text-white text-base placeholder-white/20 focus:border-red focus:outline-none transition-colors duration-200 resize-none" placeholder="Güvenlik ihtiyaçlarınızı kısaca açıklayın..." />
                    </div>

                    <button type="submit" className="w-full btn-primary text-white font-semibold py-4.5 rounded-2xl text-base">
                      Mesaj Gönder
                    </button>
                  </form>
                </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
