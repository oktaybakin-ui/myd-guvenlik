"use client";

import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import PageBanner from "@/components/PageBanner";
import ScrollReveal from "@/components/ui/ScrollReveal";

const contactInfo = [
  {
    icon: FiPhone,
    title: "Telefon",
    lines: ["0 (543) 712 59 04"],
    href: "tel:+905437125904",
    cta: "Hemen Arayın",
  },
  {
    icon: FiMail,
    title: "E-posta",
    lines: ["info@mydozelguvenlik.com"],
    href: "mailto:info@mydozelguvenlik.com",
    cta: "E-posta Gönderin",
  },
  {
    icon: FiMapPin,
    title: "Adres",
    lines: ["İskender Mah. 106 Cad.", "No:36-38/4, Merkez / Isparta"],
    href: "https://maps.google.com/?q=İskender+Mah+106+Cad+Isparta",
    cta: "Yol Tarifi Alın",
  },
  {
    icon: FiClock,
    title: "Çalışma Saatleri",
    lines: ["Hafta İçi: 08:30 - 18:00", "Cumartesi: 09:00 - 14:00"],
  },
];

export default function IletisimPage() {
  return (
    <>
      <PageBanner
        title="İletişim"
        subtitle="Güvenlik ihtiyaçlarınız için bizimle iletişime geçin, size en uygun çözümü birlikte belirleyelim."
        breadcrumb="İletişim"
      />

      <section className="bg-dark py-36 lg:py-48">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-28">
            {contactInfo.map((info, i) => (
              <ScrollReveal key={info.title} delay={i * 0.1}>
                <div className="bg-dark-light border border-border rounded-2xl p-9 group hover-lift h-full">
                  <div className="w-14 h-14 bg-red/10 rounded-2xl flex items-center justify-center mb-7 group-hover:bg-red/20 transition-colors duration-300">
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

          <ScrollReveal>
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Map */}
              <div className="lg:col-span-2">
                <div className="bg-dark-light border border-border rounded-2xl overflow-hidden h-full min-h-[520px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.5!2d30.560273!3d37.760335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ1JzM3LjIiTiAzMMKwMzMnMzcuMCJF!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: 520, filter: "grayscale(100%) contrast(1.1) invert(92%) hue-rotate(180deg)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="MYD Güvenlik Konum"
                  />
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
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
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
