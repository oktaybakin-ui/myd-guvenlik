import {
  FiHome,
  FiShoppingBag,
  FiHeart,
  FiBookOpen,
  FiTool,
  FiGlobe,
  FiTruck,
  FiCoffee,
} from "react-icons/fi";

const sectors = [
  { icon: FiHome, label: "Rezidans & Site" },
  { icon: FiShoppingBag, label: "AVM & Mağaza" },
  { icon: FiHeart, label: "Sağlık Kuruluşları" },
  { icon: FiBookOpen, label: "Eğitim Kurumları" },
  { icon: FiTool, label: "Fabrika & Üretim" },
  { icon: FiGlobe, label: "Kamu Kurumları" },
  { icon: FiTruck, label: "Lojistik & Depo" },
  { icon: FiCoffee, label: "Otel & Turizm" },
];

export default function Sectors() {
  return (
    <section className="bg-navy py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm tracking-widest uppercase">
            Hizmet Verdiğimiz Sektörler
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Her <span className="text-gold">Sektöre</span> Özel Güvenlik
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {sectors.map((sector) => (
            <div
              key={sector.label}
              className="bg-navy-light border border-white/5 rounded-xl p-6 text-center group hover:border-gold/30 transition-all cursor-pointer"
            >
              <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                <sector.icon className="text-gold" size={28} />
              </div>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                {sector.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
