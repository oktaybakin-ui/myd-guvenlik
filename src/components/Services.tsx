import {
  FiShield,
  FiCamera,
  FiUsers,
  FiTruck,
  FiMonitor,
  FiFileText,
} from "react-icons/fi";

const services = [
  {
    icon: FiShield,
    title: "Fiziki Güvenlik",
    description:
      "Silahlı ve silahsız özel güvenlik görevlilerimiz ile tesislerinizin 7/24 fiziksel güvenliğini sağlıyoruz.",
  },
  {
    icon: FiCamera,
    title: "Elektronik Güvenlik",
    description:
      "CCTV kamera sistemleri, erişim kontrol, alarm sistemleri ve uzaktan izleme çözümleri sunuyoruz.",
  },
  {
    icon: FiUsers,
    title: "Etkinlik Güvenliği",
    description:
      "Konser, kongre, spor müsabakaları ve özel organizasyonlarınız için profesyonel etkinlik güvenliği.",
  },
  {
    icon: FiTruck,
    title: "Yakın Koruma (VIP)",
    description:
      "Üst düzey yöneticiler ve özel kişiler için eğitimli yakın koruma personeli hizmeti.",
  },
  {
    icon: FiMonitor,
    title: "Alarm İzleme Merkezi",
    description:
      "7/24 aktif alarm izleme merkezimiz ile anlık müdahale ve raporlama hizmeti veriyoruz.",
  },
  {
    icon: FiFileText,
    title: "Güvenlik Danışmanlığı",
    description:
      "Risk analizi, güvenlik planlaması ve mevzuata uygunluk konularında profesyonel danışmanlık.",
  },
];

export default function Services() {
  return (
    <section id="hizmetler" className="bg-navy py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm tracking-widest uppercase">
            Hizmetlerimiz
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Kapsamlı <span className="text-gold">Güvenlik</span> Çözümleri
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            İşletmenizin güvenlik ihtiyaçlarına özel, entegre ve profesyonel
            çözümler sunuyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="service-card bg-navy-light border border-white/5 rounded-2xl p-8 group cursor-pointer"
            >
              <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <service.icon
                  className="text-gold group-hover:scale-110 transition-transform"
                  size={28}
                />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
