import Image from "next/image";
import { FiCheckCircle, FiShield, FiUsers, FiAward, FiClock } from "react-icons/fi";
import PageBanner from "@/components/PageBanner";

const stats = [
  { icon: FiShield, value: "1000+", label: "Uzman Personel" },
  { icon: FiUsers, value: "150+", label: "Kurumsal İş Ortağı" },
  { icon: FiAward, value: "10+", label: "Yıllık Deneyim" },
  { icon: FiClock, value: "7/24", label: "Kesintisiz Hizmet" },
];

const features = [
  "5188 Sayılı Kanun kapsamında tam yetkili faaliyet",
  "ISO 9001 Kalite Yönetim Sistemi sertifikalı",
  "Deneyimli ve sürekli eğitimli güvenlik kadrosu",
  "Modern teknoloji destekli güvenlik altyapısı",
  "7/24 aktif operasyon ve alarm izleme merkezi",
  "Sektöre özel güvenlik planlaması ve danışmanlık",
  "Şeffaf raporlama ve denetlenebilir süreçler",
  "Entegre hizmet yönetimi kapasitesi",
];

const values = [
  { title: "Güvenilirlik", desc: "Tüm hizmet süreçlerimizi yasal mevzuata uygun, denetlenebilir ve sürdürülebilir bir yapı ile yürütüyoruz." },
  { title: "Profesyonellik", desc: "Personelimiz sektör standartlarının üzerinde eğitim alır ve sürekli gelişim programlarına tabi tutulur." },
  { title: "Teknoloji", desc: "Operasyonel süreçleri dijital sistemlerle izliyor, ölçüyor ve raporlanabilir hale getiriyoruz." },
];

export const metadata = { title: "Hakkımızda" };

export default function HakkimizdaPage() {
  return (
    <>
      <PageBanner
        title="Hakkımızda"
        subtitle="MYD Özel Güvenlik Hizmetleri olarak, sektördeki derin bilgi birikimi ve tecrübemizle hizmet veriyoruz."
        breadcrumb="Hakkımızda"
      />

      {/* About Content */}
      <section className="bg-dark py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] img-zoom border border-border">
                <Image src="/hero.png" alt="MYD Güvenlik" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-red text-white rounded-2xl px-8 py-6 shadow-2xl shadow-red/20">
                <div className="stat-value text-4xl font-bold">10+</div>
                <div className="text-sm font-medium opacity-80 mt-1">Yıllık Tecrübe</div>
              </div>
            </div>

            <div>
              <span className="section-label">Biz Kimiz?</span>
              <h2 className="text-3xl md:text-4xl font-bold leading-[1.15] tracking-tight mb-6">
                Güvenlikte <span className="text-gradient-red">Güvenilir</span> Çözüm Ortağınız
              </h2>
              <p className="text-muted text-lg leading-[1.8] mb-6">
                MYD Özel Güvenlik Hizmetleri, sektördeki derin bilgi birikimi ve tecrübesiyle kurumsal ve bireysel müşterilerine en üst düzeyde güvenlik hizmeti sunmaktadır.
              </p>
              <p className="text-muted text-lg leading-[1.8] mb-10">
                5188 sayılı kanun kapsamında faaliyet gösteren firmamız, güvenlik ihtiyaçlarınızı analiz ederek size özel çözümler üretir.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <FiCheckCircle className="text-red-light flex-shrink-0 mt-1" size={17} />
                    <span className="text-base text-muted leading-relaxed">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-dark-light py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-dark-card border border-border rounded-2xl p-8 text-center hover-lift">
                <stat.icon className="text-red-light mx-auto mb-4" size={26} />
                <div className="stat-value text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-dark py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label justify-center">Değerlerimiz</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-2">
              Temel <span className="text-gradient-red">Değerlerimiz</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-dark-card border border-border rounded-2xl p-10 hover-lift">
                <h3 className="text-xl font-semibold mb-4 text-red-light">{v.title}</h3>
                <p className="text-muted text-base leading-[1.7]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
