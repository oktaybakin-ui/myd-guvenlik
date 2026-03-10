"use client";

import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import PageBanner from "@/components/PageBanner";

const contactInfo = [
  {
    icon: FiPhone,
    title: "Telefon",
    lines: ["0 (543) 712 59 04"],
    href: "tel:+905437125904",
  },
  {
    icon: FiMail,
    title: "E-posta",
    lines: ["info@mydozelguvenlik.com"],
    href: "mailto:info@mydozelguvenlik.com",
  },
  {
    icon: FiMapPin,
    title: "Adres",
    lines: ["İskender Mah. 106 Cad.", "No:36-38/4, Merkez / Isparta"],
    href: "https://maps.google.com/?q=İskender+Mah+106+Cad+Isparta",
  },
  {
    icon: FiClock,
    title: "Çalışma Saatleri",
    lines: ["Pazartesi - Cuma: 08:30 - 18:00", "Cumartesi: 09:00 - 14:00", "Pazar: Kapalı"],
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

      <section className="bg-dark py-28">
        <div className="max-w-7xl mx-auto px-6">
          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {contactInfo.map((info) => (
              <div key={info.title} className="bg-dark-light border border-border rounded-xl p-7 group hover-lift">
                <div className="w-12 h-12 bg-red/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-red/20 transition-colors duration-300">
                  <info.icon className="text-red-light" size={20} />
                </div>
                <h4 className="font-semibold text-sm mb-2.5">{info.title}</h4>
                {info.lines.map((line) => (
                  <p key={line} className="text-muted text-sm leading-relaxed">{line}</p>
                ))}
                {info.href && (
                  <a href={info.href} target={info.href.startsWith("http") ? "_blank" : undefined} rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-red-light text-xs mt-3 inline-block hover:text-red transition-colors duration-200 font-medium">
                    {info.href.startsWith("tel") ? "Hemen Arayın →" : info.href.startsWith("mailto") ? "E-posta Gönderin →" : "Yol Tarifi Alın →"}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Map */}
            <div className="lg:col-span-2">
              <div className="bg-dark-light border border-border rounded-xl overflow-hidden h-full min-h-[480px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.5!2d30.560273!3d37.760335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ1JzM3LjIiTiAzMMKwMzMnMzcuMCJF!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 480, filter: "grayscale(100%) contrast(1.1) invert(92%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MYD Güvenlik Konum"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-dark-light border border-border rounded-xl p-9">
                <span className="text-red-light text-xs font-semibold tracking-[0.2em] uppercase">İletişim Formu</span>
                <h3 className="text-xl font-bold mt-2 mb-7">Bize Ulaşın</h3>

                <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-muted mb-2">Ad Soyad *</label>
                      <input type="text" required className="w-full bg-dark border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder-muted/50 focus:border-red focus:outline-none transition-colors duration-200" placeholder="Adınız Soyadınız" />
                    </div>
                    <div>
                      <label className="block text-xs text-muted mb-2">Telefon *</label>
                      <input type="tel" required className="w-full bg-dark border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder-muted/50 focus:border-red focus:outline-none transition-colors duration-200" placeholder="0 (5xx) xxx xx xx" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-muted mb-2">E-posta</label>
                      <input type="email" className="w-full bg-dark border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder-muted/50 focus:border-red focus:outline-none transition-colors duration-200" placeholder="ornek@email.com" />
                    </div>
                    <div>
                      <label className="block text-xs text-muted mb-2">Hangi Desteğe İhtiyacınız Var?</label>
                      <select className="w-full bg-dark border border-border rounded-lg px-4 py-3 text-sm text-muted focus:border-red focus:outline-none transition-colors duration-200">
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
                    <label className="block text-xs text-muted mb-2">Mesajınız</label>
                    <textarea rows={5} className="w-full bg-dark border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder-muted/50 focus:border-red focus:outline-none transition-colors duration-200 resize-none" placeholder="Güvenlik ihtiyaçlarınızı kısaca açıklayın..." />
                  </div>

                  <button type="submit" className="w-full btn-primary btn-shine text-white font-semibold py-3.5 rounded-lg text-sm">
                    Mesaj Gönder
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
