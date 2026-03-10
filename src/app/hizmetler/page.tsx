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
      <section className="bg-dark py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((s) => (
              <div key={s.title} className="bg-dark-card border border-border rounded-2xl overflow-hidden hover-lift">
                <div className="relative h-56 w-full">
                  <Image src={s.image} alt={s.title} fill className="object-cover opacity-30" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/80 to-transparent" />
                  <div className="absolute bottom-6 left-8 w-14 h-14 bg-red/15 backdrop-blur-sm rounded-xl flex items-center justify-center border border-red/20">
                    <s.icon className="text-red-light" size={26} />
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-semibold mb-4">{s.title}</h3>
                  <p className="text-muted text-base leading-[1.7] mb-7">{s.desc}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {s.features.map((f) => (
                      <div key={f} className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.04] rounded-xl px-4 py-3">
                        <div className="w-1.5 h-1.5 bg-red-light rounded-full flex-shrink-0" />
                        <span className="text-sm text-muted">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="bg-dark-light py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label justify-center">Hizmet Verdiğimiz Sektörler</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-2">
              Her Sektöre Özel <span className="text-gradient-red">Güvenlik</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sectors.map((s) => (
              <div key={s.label} className="bg-dark-card border border-border rounded-2xl p-8 text-center group hover-lift">
                <div className="w-16 h-16 bg-red/8 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-red/15 transition-colors duration-300">
                  <s.icon className="text-red-light" size={26} />
                </div>
                <span className="text-base font-medium text-muted group-hover:text-foreground transition-colors duration-300">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-dark via-red to-red-dark" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-white tracking-tight">
            Güvenlik İhtiyaçlarınız İçin Teklif Alın
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto leading-[1.7]">
            İşletmenize özel güvenlik planı ve fiyat teklifi için bizimle iletişime geçin.
          </p>
          <Link href="/iletisim" className="inline-flex items-center gap-3 bg-white text-red-dark font-bold px-8 py-4 rounded-xl text-base hover:bg-white/90 transition-colors">
            İletişime Geçin <FiArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
