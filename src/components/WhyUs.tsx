import { FiTarget, FiClock, FiAward, FiHeadphones } from "react-icons/fi";

const reasons = [
  {
    icon: FiTarget,
    title: "Odaklı Çözümler",
    description:
      "Her müşterinin ihtiyaçlarını ayrı analiz ederek, sektöre özel güvenlik planları oluşturuyoruz.",
  },
  {
    icon: FiClock,
    title: "7/24 Kesintisiz Hizmet",
    description:
      "Alarm izleme merkezimiz ve saha ekiplerimiz ile gece gündüz demeden yanınızdayız.",
  },
  {
    icon: FiAward,
    title: "Sertifikalı Personel",
    description:
      "Tüm güvenlik görevlilerimiz, yasal eğitimleri tamamlamış sertifikalı profesyonellerdir.",
  },
  {
    icon: FiHeadphones,
    title: "Hızlı Destek",
    description:
      "Acil durumlarda ortalama 10 dakika içinde müdahale kapasitesiyle hizmet veriyoruz.",
  },
];

export default function WhyUs() {
  return (
    <section id="neden-biz" className="bg-navy-light py-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm tracking-widest uppercase">
            Neden Biz?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Bizi <span className="text-gold">Tercih Etmeniz</span> İçin
            Nedenler
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={reason.title} className="text-center group">
              <div className="relative mx-auto mb-6">
                <div className="w-20 h-20 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-gold/20 transition-all group-hover:rounded-xl">
                  <reason.icon
                    className="text-gold"
                    size={36}
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold rounded-lg flex items-center justify-center text-navy font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-lg font-bold mb-3">{reason.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-20 bg-gradient-to-r from-gold/20 to-gold/5 border border-gold/20 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">
              Güvenlik İhtiyaçlarınızı Konuşalım
            </h3>
            <p className="text-gray-400">
              Ücretsiz güvenlik analizi ve teklif için hemen bizimle iletişime
              geçin.
            </p>
          </div>
          <a
            href="#iletisim"
            className="flex-shrink-0 bg-gold hover:bg-gold-light text-navy font-bold px-8 py-4 rounded-lg transition-colors"
          >
            İletişime Geçin
          </a>
        </div>
      </div>
    </section>
  );
}
