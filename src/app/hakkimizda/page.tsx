import Image from "next/image";
import { FiCheckCircle, FiShield, FiUsers, FiAward, FiClock } from "react-icons/fi";
import PageBanner from "@/components/PageBanner";

const stats = [
  { icon: FiShield, value: "500+", label: "Uzman Personel" },
  { icon: FiUsers, value: "150+", label: "Kurumsal İş Ortağı" },
  { icon: FiAward, value: "15+", label: "Yıllık Deneyim" },
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
      <section className="bg-dark py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-dark-light rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center border border-white/5">
                <div className="text-center p-8">
                  <Image src="/logo.jpg" alt="MYD" width={140} height={140} className="rounded-full mx-auto mb-5 border-2 border-red/20" />
                  <h3 className="text-2xl font-bold mb-2">MYD Özel Güvenlik</h3>
                  <p className="text-gray-500 text-sm">Profesyonel Güvenlik Hizmetleri</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-red text-white rounded-xl px-6 py-4 shadow-xl shadow-red/20">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-xs font-medium opacity-90">Yıllık Tecrübe</div>
              </div>
            </div>

            <div>
              <span className="text-red text-[11px] font-semibold tracking-widest uppercase">Biz Kimiz?</span>
              <h2 className="text-3xl font-bold mt-2 mb-3">
                Güvenlikte <span className="text-gradient-red">Güvenilir</span> Çözüm Ortağınız
              </h2>
              <div className="section-divider mb-5" />
              <p className="text-gray-400 leading-relaxed mb-5 text-[15px]">
                MYD Özel Güvenlik Hizmetleri, sektördeki derin bilgi birikimi ve tecrübesiyle kurumsal ve bireysel müşterilerine en üst düzeyde güvenlik hizmeti sunmaktadır. 5188 sayılı Özel Güvenlik Hizmetlerine Dair Kanun kapsamında faaliyet gösteren firmamız, güvenlik ihtiyaçlarınızı analiz ederek size özel çözümler üretir.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8 text-[15px]">
                Profesyonel kadromuz ve modern teknolojik altyapımız ile müşterilerimizin güvenlik ihtiyaçlarını en üst düzeyde karşılıyoruz. Sürekli eğitim ve gelişim anlayışımız ile sektörün en iyisi olmayı hedefliyoruz.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <FiCheckCircle className="text-red flex-shrink-0 mt-0.5" size={14} />
                    <span className="text-sm text-gray-400">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-dark-light py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-dark-card border border-white/5 rounded-xl p-6 text-center">
                <stat.icon className="text-red mx-auto mb-3" size={24} />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-dark py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-red text-[11px] font-semibold tracking-widest uppercase">Değerlerimiz</span>
            <h2 className="text-3xl font-bold mt-2 mb-3">Temel <span className="text-gradient-red">Değerlerimiz</span></h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-dark-card border border-white/5 rounded-xl p-7">
                <h3 className="text-lg font-bold mb-3 text-red">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
