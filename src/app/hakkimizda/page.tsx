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
      <section className="bg-dark py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-dark-light rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center border border-border">
                <div className="text-center p-12">
                  <Image src="/logo.jpg" alt="MYD" width={140} height={140} className="rounded-full mx-auto mb-6 border-2 border-red/20" />
                  <h3 className="text-xl font-bold mb-1.5">MYD Özel Güvenlik</h3>
                  <p className="text-muted text-sm">Profesyonel Güvenlik Hizmetleri</p>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 bg-red text-white rounded-xl px-6 py-4 shadow-xl shadow-red/15">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-xs font-medium opacity-90">Yıllık Tecrübe</div>
              </div>
            </div>

            <div>
              <span className="text-red-light text-xs font-semibold tracking-[0.2em] uppercase">Biz Kimiz?</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 tracking-tight">
                Güvenlikte <span className="text-gradient-red">Güvenilir</span> Çözüm Ortağınız
              </h2>
              <div className="section-divider mb-7" />
              <p className="text-muted leading-relaxed mb-5 text-[15px]">
                MYD Özel Güvenlik Hizmetleri, sektördeki derin bilgi birikimi ve tecrübesiyle kurumsal ve bireysel müşterilerine en üst düzeyde güvenlik hizmeti sunmaktadır. 5188 sayılı Özel Güvenlik Hizmetlerine Dair Kanun kapsamında faaliyet gösteren firmamız, güvenlik ihtiyaçlarınızı analiz ederek size özel çözümler üretir.
              </p>
              <p className="text-muted leading-relaxed mb-8 text-[15px]">
                Profesyonel kadromuz ve modern teknolojik altyapımız ile müşterilerimizin güvenlik ihtiyaçlarını en üst düzeyde karşılıyoruz.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <FiCheckCircle className="text-red-light flex-shrink-0 mt-0.5" size={15} />
                    <span className="text-sm text-muted leading-relaxed">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-dark-light py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-dark-card border border-border rounded-xl p-7 text-center">
                <stat.icon className="text-red-light mx-auto mb-3" size={24} />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-dark py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-red-light text-xs font-semibold tracking-[0.2em] uppercase">Değerlerimiz</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight">Temel <span className="text-gradient-red">Değerlerimiz</span></h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-dark-card border border-border rounded-xl p-9 hover-lift">
                <h3 className="text-lg font-semibold mb-3 text-red-light">{v.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
