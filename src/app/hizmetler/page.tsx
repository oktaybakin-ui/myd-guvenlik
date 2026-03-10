import Link from "next/link";
import Image from "next/image";
import {
  FiShield,
  FiCamera,
  FiUsers,
  FiTruck,
  FiMonitor,
  FiFileText,
  FiArrowRight,
  FiHome,
  FiShoppingBag,
  FiHeart,
  FiBookOpen,
  FiTool,
  FiGlobe,
  FiCoffee,
} from "react-icons/fi";
import PageBanner from "@/components/PageBanner";

const services = [
  {
    icon: FiShield,
    title: "Fiziki Güvenlik Hizmetleri",
    desc: "Silahlı ve silahsız özel güvenlik görevlilerimiz ile tesislerinizin 7/24 fiziksel güvenliğini sağlıyoruz. Yetkin personel ve standartlara uygun operasyon yapısı ile sürdürülebilir güvenlik hizmetleri sunuyoruz.",
    features: ["7/24 nöbet sistemi", "Devriye hizmetleri", "Giriş-çıkış kontrol", "Olay müdahale"],
    image: "/services/services1.png",
  },
  {
    icon: FiFileText,
    title: "Risk Analiz Raporu Hazırlama",
    desc: "Mevzuata uygun risk analizleriyle potansiyel tehditleri belirliyor ve önleyici çözümler geliştiriyoruz. 5188 sayılı kanun kapsamında güvenlik değerlendirmelerinizi profesyonelce hazırlıyoruz.",
    features: ["Tehdit değerlendirmesi", "Güvenlik açığı analizi", "Mevzuat uyumluluk", "Önleyici tedbirler"],
    image: "/services/services2.png",
  },
  {
    icon: FiCamera,
    title: "Elektronik Güvenlik Sistemleri",
    desc: "CCTV kamera sistemleri, erişim kontrol, alarm sistemleri ve uzaktan izleme çözümleri sunuyoruz. Modern teknoloji ile güvenliğinizi bir üst seviyeye taşıyoruz.",
    features: ["CCTV kamera sistemleri", "Erişim kontrol", "Alarm sistemleri", "Uzaktan izleme"],
    image: "/services/services3.png",
  },
  {
    icon: FiUsers,
    title: "Etkinlik Güvenliği",
    desc: "Konser, kongre, spor müsabakaları ve özel organizasyonlarınız için profesyonel etkinlik güvenliği hizmeti sunuyoruz. Kalabalık yönetimi konusunda uzman kadromuzla yanınızdayız.",
    features: ["Kalabalık yönetimi", "VIP alan güvenliği", "Giriş kontrol", "Acil durum planlaması"],
    image: "/services/services4.png",
  },
  {
    icon: FiTruck,
    title: "Yakın Koruma (VIP)",
    desc: "Üst düzey yöneticiler ve özel kişiler için eğitimli yakın koruma personeli hizmeti veriyoruz. Profesyonel yakın koruma ekibimiz ile güvenliğiniz emin ellerde.",
    features: ["Kişisel koruma", "Güzergah güvenliği", "Araç eskort", "Tehdit analizi"],
    image: "/services/services1.png",
  },
  {
    icon: FiMonitor,
    title: "Dijital Güvenlik Çözümleri",
    desc: "Dijital altyapılar ve akıllı sistemlerle operasyonları anlık izliyor, ölçüyor ve raporlanabilir hale getiriyoruz. GPS takip, personel yönetim sistemi ve dijital raporlama.",
    features: ["GPS takip sistemi", "Dijital raporlama", "Personel yönetimi", "Anlık izleme"],
    image: "/services/services2.png",
  },
];

const sectors = [
  { icon: FiHome, label: "Rezidans & Site" },
  { icon: FiShoppingBag, label: "AVM & Mağaza" },
  { icon: FiHeart, label: "Sağlık Kuruluşları" },
  { icon: FiBookOpen, label: "Eğitim Kurumları" },
  { icon: FiTool, label: "Üretim & Sanayi" },
  { icon: FiGlobe, label: "Kamu Kurumları" },
  { icon: FiTruck, label: "Lojistik & Depo" },
  { icon: FiCoffee, label: "Otel & Turizm" },
];

export const metadata = { title: "Hizmetler" };

export default function HizmetlerPage() {
  return (
    <>
      <PageBanner
        title="Hizmetlerimiz"
        subtitle="İşletmenizin güvenlik ihtiyaçlarına özel, kapsamlı ve profesyonel güvenlik çözümleri sunuyoruz."
        breadcrumb="Hizmetler"
      />

      {/* Services */}
      <section className="bg-dark py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-6">
            {services.map((s, i) => (
              <div key={s.title} className={`bg-dark-card border border-white/5 rounded-xl overflow-hidden card-hover`}>
                <div className="relative h-48 w-full">
                  <Image src={s.image} alt={s.title} fill className="object-cover opacity-40" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent" />
                  <div className="absolute bottom-4 left-6 w-14 h-14 bg-red/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-red/20">
                    <s.icon className="text-red" size={28} />
                  </div>
                </div>
                <div className="p-8">
                <div>
                  <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{s.desc}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {s.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 bg-white/[0.03] rounded-lg px-3 py-2">
                        <div className="w-1.5 h-1.5 bg-red rounded-full flex-shrink-0" />
                        <span className="text-xs text-gray-400">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="bg-dark-light py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-red text-[11px] font-semibold tracking-widest uppercase">Hizmet Verdiğimiz Sektörler</span>
            <h2 className="text-3xl font-bold mt-2 mb-3">Her Sektöre Özel <span className="text-gradient-red">Güvenlik</span></h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sectors.map((s) => (
              <div key={s.label} className="bg-dark-card border border-white/5 rounded-xl p-5 text-center group card-hover">
                <div className="w-12 h-12 bg-red/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-red/20 transition-colors">
                  <s.icon className="text-red" size={22} />
                </div>
                <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Güvenlik İhtiyaçlarınız İçin <span className="text-gradient-red">Teklif Alın</span>
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            İşletmenize özel güvenlik planı ve fiyat teklifi için bizimle iletişime geçin.
          </p>
          <Link href="/iletisim" className="btn-primary inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-lg text-sm">
            İletişime Geçin <FiArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
