import { FiCheckCircle } from "react-icons/fi";

const features = [
  "5188 Sayılı Kanun kapsamında tam yetkili",
  "ISO 9001 Kalite Yönetim Sistemi sertifikalı",
  "Deneyimli ve eğitimli güvenlik kadrosu",
  "Modern teknoloji destekli güvenlik altyapısı",
  "7/24 kesintisiz operasyon merkezi",
  "Sektöre özel güvenlik planlaması",
];

export default function About() {
  return (
    <section id="hakkimizda" className="bg-navy-light py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-navy to-navy-dark rounded-2xl p-1">
              <div className="bg-navy rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
                <div className="text-center z-10">
                  <div className="w-24 h-24 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-gold text-4xl font-bold">MYD</span>
                  </div>
                  <p className="text-gray-500 text-sm">
                    Profesyonel Güvenlik Hizmetleri
                  </p>
                </div>
              </div>
            </div>
            {/* Accent badge */}
            <div className="absolute -bottom-6 -right-6 bg-gold text-navy rounded-2xl px-6 py-4 shadow-lg">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm font-medium">Yıllık Tecrübe</div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="text-gold font-semibold text-sm tracking-widest uppercase">
              Hakkımızda
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              Güvenlikte <span className="text-gold">Güvenilir</span> Çözüm
              Ortağınız
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-gray-400 leading-relaxed mb-8">
              MYD Özel Güvenlik Hizmetleri, sektördeki derin bilgi birikimi ve
              tecrübesiyle kurumsal ve bireysel müşterilerine en üst düzeyde
              güvenlik hizmeti sunmaktadır. 5188 sayılı Özel Güvenlik
              Hizmetlerine Dair Kanun kapsamında faaliyet gösteren firmamız,
              güvenlik ihtiyaçlarınızı analiz ederek size özel çözümler üretir.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <FiCheckCircle
                    className="text-gold mt-0.5 flex-shrink-0"
                    size={18}
                  />
                  <span className="text-sm text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
