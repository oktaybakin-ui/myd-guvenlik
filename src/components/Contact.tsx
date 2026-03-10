"use client";

import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";

const contactInfo = [
  {
    icon: FiPhone,
    title: "Telefon",
    lines: ["0 (543) 712 59 04"],
  },
  {
    icon: FiMail,
    title: "E-posta",
    lines: ["info@mydozelguvenlik.com"],
  },
  {
    icon: FiMapPin,
    title: "Adres",
    lines: ["İskender Mah. 106 Cad. No:36-38/4", "Merkez, Isparta"],
  },
  {
    icon: FiClock,
    title: "Çalışma Saatleri",
    lines: ["Pazartesi - Cuma: 08:30 - 18:00", "Cumartesi - Pazar: Kapalı"],
  },
];

export default function Contact() {
  return (
    <section id="iletisim" className="bg-navy py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm tracking-widest uppercase">
            İletişim
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Bizimle <span className="text-gold">İletişime</span> Geçin
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="flex items-start gap-4 bg-navy-light border border-white/5 rounded-xl p-5"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <info.icon className="text-gold" size={22} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{info.title}</h4>
                  {info.lines.map((line) => (
                    <p key={line} className="text-gray-400 text-sm">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-navy-light border border-white/5 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold mb-6">Teklif Formu</h3>

              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-colors"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-colors"
                    placeholder="0 (5xx) xxx xx xx"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    E-posta
                  </label>
                  <input
                    type="email"
                    className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-colors"
                    placeholder="ornek@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Hizmet Türü
                  </label>
                  <select className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors">
                    <option value="">Seçiniz</option>
                    <option value="fiziki">Fiziki Güvenlik</option>
                    <option value="elektronik">Elektronik Güvenlik</option>
                    <option value="etkinlik">Etkinlik Güvenliği</option>
                    <option value="vip">Yakın Koruma (VIP)</option>
                    <option value="alarm">Alarm İzleme</option>
                    <option value="danismanlik">Güvenlik Danışmanlığı</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm text-gray-400 mb-2">
                  Mesajınız
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-colors resize-none"
                  placeholder="Güvenlik ihtiyaçlarınızı kısaca açıklayın..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold-light text-navy font-bold py-4 rounded-lg transition-colors text-base"
              >
                Teklif Talep Et
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
