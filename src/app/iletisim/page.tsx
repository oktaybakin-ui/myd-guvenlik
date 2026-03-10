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

      <section className="bg-dark py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {contactInfo.map((info) => (
              <div key={info.title} className="bg-dark-card border border-white/5 rounded-xl p-6 group card-hover">
                <div className="w-12 h-12 bg-red/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red/20 transition-colors">
                  <info.icon className="text-red" size={22} />
                </div>
                <h4 className="font-bold text-sm mb-2">{info.title}</h4>
                {info.lines.map((line) => (
                  <p key={line} className="text-gray-500 text-[13px]">{line}</p>
                ))}
                {info.href && (
                  <a href={info.href} target={info.href.startsWith("http") ? "_blank" : undefined} rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-red text-xs mt-2 inline-block hover:text-red-light transition-colors">
                    {info.href.startsWith("tel") ? "Hemen Arayın →" : info.href.startsWith("mailto") ? "E-posta Gönderin →" : "Yol Tarifi Alın →"}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* Map placeholder */}
            <div className="lg:col-span-2">
              <div className="bg-dark-card border border-white/5 rounded-xl overflow-hidden h-full min-h-[400px] flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.5!2d30.560273!3d37.760335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ1JzM3LjIiTiAzMMKwMzMnMzcuMCJF!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 400 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MYD Güvenlik Konum"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-dark-card border border-white/5 rounded-xl p-8">
                <span className="text-red text-[11px] font-semibold tracking-widest uppercase">İletişim Formu</span>
                <h3 className="text-xl font-bold mt-1 mb-6">Bize Ulaşın</h3>

                <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1.5">Ad Soyad *</label>
                      <input type="text" required className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:border-red focus:outline-none transition-colors" placeholder="Adınız Soyadınız" />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1.5">Telefon *</label>
                      <input type="tel" required className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:border-red focus:outline-none transition-colors" placeholder="0 (5xx) xxx xx xx" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1.5">E-posta</label>
                      <input type="email" className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:border-red focus:outline-none transition-colors" placeholder="ornek@email.com" />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1.5">Hangi Desteğe İhtiyacınız Var?</label>
                      <select className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-sm text-gray-400 focus:border-red focus:outline-none transition-colors">
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
                    <label className="block text-xs text-gray-500 mb-1.5">Mesajınız</label>
                    <textarea rows={5} className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:border-red focus:outline-none transition-colors resize-none" placeholder="Güvenlik ihtiyaçlarınızı kısaca açıklayın..." />
                  </div>

                  <button type="submit" className="w-full btn-primary text-white font-bold py-3.5 rounded-lg text-sm">
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
