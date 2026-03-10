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
  FiHome,
  FiShoppingBag,
  FiHeart,
  FiBookOpen,
  FiTool,
  FiGlobe,
  FiTruck,
  FiCoffee,
  FiPhone,
} from "react-icons/fi";

/* ───── DATA ───── */
const stats = [
  { icon: FiShield, value: "500+", label: "Güvenlik Personeli" },
  { icon: FiUsers, value: "150+", label: "Kurumsal İş Ortağı" },
  { icon: FiAward, value: "15+", label: "Yıllık Deneyim" },
  { icon: FiClock, value: "7/24", label: "Kesintisiz Hizmet" },
];

const services = [
  { icon: FiShield, title: "Güvenlik Hizmetleri", desc: "Yetkin personel ve standartlara uygun operasyon yapısı ile sürdürülebilir güvenlik hizmetleri sunuyoruz." },
  { icon: FiFileText, title: "Risk Analiz Raporu", desc: "Mevzuata uygun risk analizleriyle potansiyel tehditleri belirliyor ve önleyici çözümler geliştiriyoruz." },
  { icon: FiCamera, title: "Elektronik Güvenlik", desc: "CCTV, erişim kontrol ve alarm sistemleri ile teknolojik güvenlik altyapısı kuruyoruz." },
  { icon: FiMonitor, title: "Dijital Çözümler", desc: "Dijital altyapılar ve akıllı sistemlerle operasyonları anlık izliyor ve raporluyoruz." },
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

const whyUs = [
  { icon: FiTarget, title: "Sektörel Uzmanlık", desc: "Her sektörün ihtiyacına özel güvenlik planlaması yapıyoruz." },
  { icon: FiUsers, title: "Eğitimli Kadro", desc: "Tüm personelimiz yasal mevzuata uygun eğitimli profesyonellerdir." },
  { icon: FiMonitor, title: "Teknoloji Destekli", desc: "Dijital sistemlerle operasyonları takip ediyor ve raporluyoruz." },
  { icon: FiHeadphones, title: "Hızlı Müdahale", desc: "7/24 aktif merkezimiz ile acil durumlarda anında müdahale ediyoruz." },
];

const features = [
  "5188 Sayılı Kanun kapsamında yetkili",
  "ISO sertifikalı hizmet kalitesi",
  "Deneyimli profesyonel kadro",
  "Modern teknoloji altyapısı",
  "7/24 kesintisiz operasyon merkezi",
  "Sektöre özel güvenlik planlaması",
];

export default function Home() {
  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-dark">
        <div className="absolute inset-0">
          <Image src="/hero.png" alt="" fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-dark/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 pt-36 pb-32 w-full">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-3 bg-red/10 border border-red/20 rounded-full px-5 py-2 mb-8 animate-fade-in">
                <FiShield className="text-red" size={15} />
                <span className="text-red text-xs font-semibold tracking-wider uppercase">Güvenlik & Koruma Hizmetleri</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 animate-fade-in-up">
                Siz Sadece Asıl İşinize{" "}
                <span className="text-gradient-red">Odaklanın</span>
              </h1>

              <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-xl animate-fade-in-up delay-100">
                MYD Özel Güvenlik olarak, profesyonel kadromuz ve entegre hizmet anlayışımızla kurumların güvenliğini en üst düzeyde sağlıyor, güvenilir ve sürdürülebilir çözümler sunuyoruz.
              </p>

              <div className="flex flex-wrap gap-5 animate-fade-in-up delay-200">
                <Link href="/iletisim" className="btn-primary inline-flex items-center gap-3 text-white font-bold px-10 py-4 rounded-xl text-base">
                  Hizmetlerimiz için Teklif Alın
                  <FiArrowRight size={18} />
                </Link>
                <Link href="/hizmetler" className="btn-outline inline-flex items-center gap-3 text-white font-semibold px-10 py-4 rounded-xl text-base">
                  Hizmetlerimiz
                </Link>
              </div>
            </div>

            {/* Right - Logo + Stats */}
            <div className="flex flex-col items-center gap-10">
              <div className="relative">
                <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-red/20 shadow-2xl shadow-red/10 animate-float">
                  <Image src="/logo.jpg" alt="MYD Özel Güvenlik" width={256} height={256} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5 w-full max-w-lg">
                {stats.map((stat, i) => (
                  <div key={stat.label} className={`bg-white/[0.03] border border-white/[0.06] rounded-2xl p-7 text-center animate-scale-in delay-${(i + 1) * 100}`}>
                    <stat.icon className="text-red mx-auto mb-3" size={24} />
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ HİZMETLER ══════════ */}
      <section className="bg-dark-light py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="text-center mb-20">
            <span className="text-red text-xs font-semibold tracking-widest uppercase">Hizmetlerimiz</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-5">
              Profesyonel Güvenlik <span className="text-gradient-red">Çözümleri</span>
            </h2>
            <div className="section-divider mx-auto mb-6" />
            <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
              İşletmenizin güvenlik ihtiyaçlarına özel, entegre ve profesyonel çözümler sunuyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s) => (
              <div key={s.title} className="hover-lift bg-dark-card border border-border rounded-2xl p-8 group">
                <div className="w-16 h-16 bg-red/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red/20 transition-colors">
                  <s.icon className="text-red" size={28} />
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-red transition-colors">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/hizmetler" className="inline-flex items-center gap-2 text-red hover:text-red-light font-semibold text-base transition-colors">
              Tüm Hizmetleri Görüntüle <FiArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ REFERANSLAR ══════════ */}
      <section className="bg-dark py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 mb-14">
          <div className="text-center">
            <span className="text-red text-xs font-semibold tracking-widest uppercase">Referanslarımız</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-5">
              Birlikte Çalıştığımız <span className="text-gradient-red">Değerli Kurumlar</span>
            </h2>
            <div className="section-divider mx-auto" />
          </div>
        </div>
        {/* Marquee Row 1 */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-dark to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-dark to-transparent z-10" />
          <div className="animate-marquee marquee-track py-4">
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex items-center gap-8 flex-shrink-0 px-4">
                {["haier","katmerciler","roca","tei","iyte","bilnet","taris","megapol","hapimag","gulermak","tolkar","vansan","bgbatigrup","erkholding","novus","bonfiglioli","betonstar","tescom","sunchemical","akcelik"].map((name) => (
                  <div key={`${setIdx}-${name}`} className="flex-shrink-0 bg-white/[0.04] border border-white/[0.06] rounded-xl p-4 w-[140px] h-[70px] flex items-center justify-center">
                    <Image src={`/references/${name}.png`} alt={name} width={110} height={45} className="object-contain opacity-50 hover:opacity-100 transition-opacity brightness-0 invert" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        {/* Marquee Row 2 */}
        <div className="relative mt-5">
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-dark to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-dark to-transparent z-10" />
          <div className="animate-marquee marquee-track py-4" style={{ animationDirection: "reverse", animationDuration: "35s" }}>
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex items-center gap-8 flex-shrink-0 px-4">
                {["hoover","viltur","candy","bundy","altinok","bergama","billur","coffeemania","egeyapi","gimas","superpar","donmez","borovali","kansan","barankaya","maxwell","ersa","aytas","uniteks","saygilirulman"].map((name) => (
                  <div key={`${setIdx}-${name}`} className="flex-shrink-0 bg-white/[0.04] border border-white/[0.06] rounded-xl p-4 w-[140px] h-[70px] flex items-center justify-center">
                    <Image src={`/references/${name}.png`} alt={name} width={110} height={45} className="object-contain opacity-50 hover:opacity-100 transition-opacity brightness-0 invert" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ HAKKIMIZDA ══════════ */}
      <section className="bg-dark-light py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left */}
            <div className="relative">
              <div className="bg-dark rounded-3xl overflow-hidden aspect-[4/3] flex items-center justify-center border border-border">
                <div className="text-center p-12">
                  <Image src="/logo.jpg" alt="MYD" width={150} height={150} className="rounded-full mx-auto mb-6 border-4 border-red/20" />
                  <h3 className="text-2xl font-bold mb-2">MYD Özel Güvenlik</h3>
                  <p className="text-gray-500">Profesyonel Güvenlik Hizmetleri</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-red text-white rounded-2xl px-8 py-5 shadow-2xl shadow-red/20">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm font-medium opacity-90">Yıllık Tecrübe</div>
              </div>
            </div>

            {/* Right */}
            <div>
              <span className="text-red text-xs font-semibold tracking-widest uppercase">Biz MYD&apos;yiz</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-5">
                Profesyonel Güvenlik & <span className="text-gradient-red">Entegre Hizmet</span> Çözümleri
              </h2>
              <div className="section-divider mb-8" />
              <p className="text-gray-400 leading-relaxed mb-10 text-base">
                MYD Özel Güvenlik Hizmetleri olarak, sektördeki derin bilgi birikimi ve tecrübemizle kurumsal müşterilerimize en üst düzeyde güvenlik hizmeti sunmaktayız. 5188 sayılı Özel Güvenlik Hizmetlerine Dair Kanun kapsamında faaliyet gösteren firmamız, güvenlik ihtiyaçlarınızı analiz ederek size özel çözümler üretir.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <FiCheckCircle className="text-red flex-shrink-0" size={18} />
                    <span className="text-base text-gray-400">{f}</span>
                  </div>
                ))}
              </div>

              <Link href="/hakkimizda" className="inline-flex items-center gap-2 text-red hover:text-red-light font-semibold text-base transition-colors">
                Hakkımızda <FiArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ SEKTÖRLER ══════════ */}
      <section className="bg-dark py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="text-center mb-20">
            <span className="text-red text-xs font-semibold tracking-widest uppercase">Hizmet Verdiğimiz Sektörler</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-5">
              Her Sektöre Özel <span className="text-gradient-red">Güvenlik Çözümleri</span>
            </h2>
            <div className="section-divider mx-auto mb-6" />
            <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
              Farklı sektörlerin ihtiyaçlarına özel planlanan güvenlik yapımızla operasyonel verimlilik sağlıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sectors.map((s) => (
              <div key={s.label} className="hover-lift bg-dark-card border border-border rounded-2xl p-8 text-center group cursor-default">
                <div className="w-16 h-16 bg-red/10 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-red/20 transition-colors">
                  <s.icon className="text-red" size={28} />
                </div>
                <span className="text-base font-medium text-gray-400 group-hover:text-white transition-colors">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ NEDEN BİZ ══════════ */}
      <section className="bg-dark-light py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="text-center mb-20">
            <span className="text-red text-xs font-semibold tracking-widest uppercase">Neden MYD Güvenlik?</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-5">
              Operasyonlarınızı Güçlendiren <span className="text-gradient-red">Profesyonel</span> Çözümler
            </h2>
            <div className="section-divider mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, i) => (
              <div key={item.title} className="text-center p-8 bg-dark-card border border-border rounded-2xl hover-lift">
                <div className="relative mx-auto mb-6 w-fit">
                  <div className="w-20 h-20 bg-red/10 rounded-2xl flex items-center justify-center mx-auto">
                    <item.icon className="text-red" size={34} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-red rounded-lg flex items-center justify-center text-white text-sm font-bold">
                    {i + 1}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="bg-dark py-32 relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, rgba(196,30,42,0.06) 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto px-8 lg:px-12 text-center relative z-10">
          <span className="text-red text-xs font-semibold tracking-widest uppercase">Bize Ulaşın</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Sizin İçin <span className="text-gradient-red">Buradayız</span>
          </h2>
          <p className="text-gray-400 mb-12 text-lg max-w-xl mx-auto leading-relaxed">
            İşletmenizin ihtiyaçlarını analiz ederek en uygun güvenlik çözümlerini sunuyoruz. Ücretsiz teklif için hemen arayın.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link href="/iletisim" className="btn-primary inline-flex items-center gap-3 text-white font-bold px-10 py-4 rounded-xl text-base">
              İletişime Geçin <FiArrowRight size={18} />
            </Link>
            <a href="tel:+905437125904" className="btn-outline inline-flex items-center gap-3 text-white font-semibold px-10 py-4 rounded-xl text-base">
              <FiPhone size={18} /> 0 (543) 712 59 04
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
