import Link from "next/link";
import Image from "next/image";
import {
  FiShield,
  FiUsers,
  FiAward,
  FiClock,
  FiCamera,
  FiMonitor,
  FiFileText,
  FiArrowRight,
  FiCheckCircle,
  FiTarget,
  FiHeadphones,
  FiPhone,
  FiTruck,
} from "react-icons/fi";

/* ───── DATA ───── */
const services = [
  { icon: FiShield, title: "Fiziki Güvenlik", desc: "Silahlı ve silahsız özel güvenlik görevlilerimiz ile tesislerinizin 7/24 fiziksel güvenliğini sağlıyoruz." },
  { icon: FiFileText, title: "Risk Analiz Raporu", desc: "Mevzuata uygun risk analizleriyle potansiyel tehditleri belirliyor ve önleyici çözümler geliştiriyoruz." },
  { icon: FiCamera, title: "Elektronik Güvenlik", desc: "CCTV, erişim kontrol ve alarm sistemleri ile teknolojik güvenlik altyapısı kuruyoruz." },
  { icon: FiUsers, title: "Etkinlik Güvenliği", desc: "Konser, kongre ve organizasyonlarda profesyonel kalabalık yönetimi ve güvenlik hizmeti sunuyoruz." },
  { icon: FiTruck, title: "Yakın Koruma (VIP)", desc: "Üst düzey yöneticiler ve özel kişiler için eğitimli yakın koruma personeli hizmeti veriyoruz." },
  { icon: FiMonitor, title: "Dijital Çözümler", desc: "GPS takip, dijital raporlama ve personel yönetim sistemi ile operasyonları anlık izliyoruz." },
];

const advantages = [
  { icon: FiTarget, title: "Sektörel Uzmanlık", desc: "Her sektörün kendine özgü güvenlik ihtiyaçlarını analiz eder, size özel planlama yaparız." },
  { icon: FiUsers, title: "1000+ Eğitimli Personel", desc: "5188 sayılı kanun kapsamında eğitimli, sertifikalı ve sürekli gelişim programlarına dahil kadro." },
  { icon: FiMonitor, title: "Teknoloji Entegrasyonu", desc: "Dijital sistemlerle operasyonları takip ediyor, ölçüyor ve raporlanabilir hale getiriyoruz." },
  { icon: FiHeadphones, title: "7/24 Müdahale Merkezi", desc: "Aktif alarm izleme merkezimiz ile acil durumlarda anında saha müdahalesi yapıyoruz." },
];

const features = [
  "5188 Sayılı Kanun kapsamında tam yetkili",
  "ISO sertifikalı hizmet kalitesi",
  "10+ yıllık sektör deneyimi",
  "150+ kurumsal iş ortağı",
  "Modern teknoloji altyapısı",
  "Şeffaf raporlama ve denetim",
];

export default function Home() {
  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-dark">
        <div className="absolute inset-0">
          <Image src="/hero.png" alt="" fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-dark/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-24 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 bg-white/[0.04] border border-white/[0.08] rounded-full px-5 py-2.5 mb-10 animate-fade-in">
              <div className="w-2 h-2 bg-red-light rounded-full" />
              <span className="text-white/70 text-sm font-medium">Profesyonel Güvenlik Hizmetleri</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-8 animate-fade-in-up">
              Güvenliğiniz{" "}
              <br />
              Bizim{" "}
              <span className="text-gradient-red">Önceliğimiz</span>
            </h1>

            <p className="text-white/50 text-xl leading-[1.7] mb-12 max-w-2xl animate-fade-in-up delay-100">
              MYD Özel Güvenlik olarak, 1000&apos;i aşkın eğitimli personelimiz ve entegre hizmet anlayışımızla kurumsal güvenliğinizi en üst düzeyde sağlıyoruz.
            </p>

            <div className="flex flex-wrap gap-4 mb-20 animate-fade-in-up delay-200">
              <Link href="/iletisim" className="btn-primary btn-shine inline-flex items-center gap-3 text-white font-semibold px-8 py-4 rounded-xl text-base">
                Ücretsiz Teklif Alın
                <FiArrowRight size={18} />
              </Link>
              <a href="tel:+905437125904" className="btn-outline inline-flex items-center gap-3 text-white font-medium px-8 py-4 rounded-xl text-base">
                <FiPhone size={18} />
                0 (543) 712 59 04
              </a>
            </div>

            {/* Stats inline */}
            <div className="flex flex-wrap gap-12 animate-fade-in-up delay-300">
              {[
                { value: "1000+", label: "Güvenlik Personeli" },
                { value: "150+", label: "Kurumsal İş Ortağı" },
                { value: "10+", label: "Yıllık Deneyim" },
                { value: "7/24", label: "Kesintisiz Hizmet" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="stat-value text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/40">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ HİZMETLER ══════════ */}
      <section className="bg-dark-light py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 mb-16">
            <div className="lg:col-span-5">
              <span className="section-label">Hizmetlerimiz</span>
              <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight">
                Kapsamlı Güvenlik{" "}
                <span className="text-gradient-red">Çözümleri</span>
              </h2>
            </div>
            <div className="lg:col-span-7 flex items-end">
              <p className="text-muted text-lg leading-[1.8] max-w-2xl">
                İşletmenizin güvenlik ihtiyaçlarına özel, entegre ve profesyonel çözümler sunuyoruz. Fiziki güvenlikten dijital sistemlere kadar tüm alanlarda yanınızdayız.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="hover-lift bg-dark-card border border-border rounded-2xl p-10 group">
                <div className="w-14 h-14 bg-red/8 rounded-xl flex items-center justify-center mb-7 group-hover:bg-red/15 transition-colors duration-300">
                  <s.icon className="text-red-light" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-red-light transition-colors duration-300">{s.title}</h3>
                <p className="text-muted text-base leading-[1.7]">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/hizmetler" className="inline-flex items-center gap-2 text-red-light hover:text-white font-medium text-base transition-colors">
              Tüm Hizmetleri İnceleyin <FiArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ REFERANSLAR ══════════ */}
      <section className="bg-dark py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-14">
          <div className="text-center">
            <span className="section-label justify-center">Referanslarımız</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-2">
              Birlikte Çalıştığımız <span className="text-gradient-red">Değerli Kurumlar</span>
            </h2>
          </div>
        </div>
        {/* Marquee Row 1 */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-dark to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-dark to-transparent z-10" />
          <div className="animate-marquee marquee-track py-3">
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex items-center gap-6 flex-shrink-0 px-3">
                {["haier","katmerciler","roca","tei","iyte","bilnet","taris","megapol","hapimag","gulermak","tolkar","vansan","bgbatigrup","erkholding","novus","bonfiglioli","betonstar","tescom","sunchemical","akcelik"].map((name) => (
                  <div key={`${setIdx}-${name}`} className="flex-shrink-0 bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 w-[140px] h-[65px] flex items-center justify-center">
                    <Image src={`/references/${name}.png`} alt={name} width={100} height={40} className="object-contain opacity-50 hover:opacity-90 transition-opacity duration-300 brightness-0 invert" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        {/* Marquee Row 2 */}
        <div className="relative mt-4">
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-dark to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-dark to-transparent z-10" />
          <div className="animate-marquee marquee-track py-3" style={{ animationDirection: "reverse", animationDuration: "35s" }}>
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex items-center gap-6 flex-shrink-0 px-3">
                {["hoover","viltur","candy","bundy","altinok","bergama","billur","coffeemania","egeyapi","gimas","superpar","donmez","borovali","kansan","barankaya","maxwell","ersa","aytas","uniteks","saygilirulman"].map((name) => (
                  <div key={`${setIdx}-${name}`} className="flex-shrink-0 bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 w-[140px] h-[65px] flex items-center justify-center">
                    <Image src={`/references/${name}.png`} alt={name} width={100} height={40} className="object-contain opacity-50 hover:opacity-90 transition-opacity duration-300 brightness-0 invert" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ HAKKIMIZDA ══════════ */}
      <section className="bg-dark-light py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left - Image area */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] img-zoom border border-border">
                <Image src="/hero.png" alt="MYD Güvenlik Ekibi" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-red text-white rounded-2xl px-8 py-6 shadow-2xl shadow-red/20">
                <div className="stat-value text-4xl font-bold">10+</div>
                <div className="text-sm font-medium opacity-80 mt-1">Yıllık Tecrübe</div>
              </div>
            </div>

            {/* Right */}
            <div>
              <span className="section-label">Hakkımızda</span>
              <h2 className="text-3xl md:text-4xl font-bold leading-[1.15] tracking-tight mb-6">
                Güvenlikte Güvenilir{" "}
                <span className="text-gradient-red">Çözüm Ortağınız</span>
              </h2>
              <p className="text-muted text-lg leading-[1.8] mb-10">
                MYD Özel Güvenlik olarak, 5188 sayılı kanun kapsamında faaliyet gösteriyor ve kurumsal müşterilerimize en üst düzeyde güvenlik hizmeti sunuyoruz. Sektördeki derin bilgi birikimimiz ve profesyonel kadromuzla güvenlik ihtiyaçlarınızı analiz eder, size özel çözümler üretiriz.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <FiCheckCircle className="text-red-light flex-shrink-0" size={18} />
                    <span className="text-base text-muted">{f}</span>
                  </div>
                ))}
              </div>

              <Link href="/hakkimizda" className="btn-primary btn-shine inline-flex items-center gap-2.5 text-white font-semibold px-7 py-3.5 rounded-xl text-sm">
                Daha Fazla Bilgi <FiArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ NEDEN BİZ ══════════ */}
      <section className="bg-dark py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="section-label justify-center">Neden MYD Güvenlik?</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-2 mb-6">
              Farkımız <span className="text-gradient-red">Ortada</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto leading-[1.7]">
              Operasyonel verimlilik, şeffaflık ve sürdürülebilirlik ilkeleriyle güvenlik ihtiyaçlarınızı tek merkezden yönetiyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((item, i) => (
              <div key={item.title} className="flex gap-7 p-10 bg-dark-card border border-border rounded-2xl hover-lift group">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-16 h-16 bg-red/8 rounded-xl flex items-center justify-center group-hover:bg-red/15 transition-colors duration-300">
                      <item.icon className="text-red-light" size={28} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-red rounded-lg flex items-center justify-center text-white text-xs font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted text-base leading-[1.7]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-dark via-red to-red-dark" />
        <div className="absolute inset-0 opacity-10">
          <Image src="/hero.png" alt="" fill className="object-cover" />
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
            Güvenlik İhtiyaçlarınız İçin
            <br />
            Hemen İletişime Geçin
          </h2>
          <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto leading-[1.7]">
            İşletmenize özel güvenlik planı ve ücretsiz fiyat teklifi için bizi arayın.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/iletisim" className="inline-flex items-center gap-3 bg-white text-red-dark font-bold px-8 py-4 rounded-xl text-base hover:bg-white/90 transition-colors">
              Teklif Formu <FiArrowRight size={18} />
            </Link>
            <a href="tel:+905437125904" className="inline-flex items-center gap-3 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-xl text-base hover:bg-white/10 transition-colors">
              <FiPhone size={18} /> 0 (543) 712 59 04
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
