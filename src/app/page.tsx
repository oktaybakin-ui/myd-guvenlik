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
  { icon: FiShield, value: "1000+", label: "Güvenlik Personeli" },
  { icon: FiUsers, value: "150+", label: "Kurumsal İş Ortağı" },
  { icon: FiAward, value: "10+", label: "Yıllık Deneyim" },
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
          <Image src="/hero.png" alt="" fill className="object-cover opacity-15" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/95 to-dark/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-28 w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2.5 bg-red/8 border border-red/15 rounded-full px-4 py-2 mb-8 animate-fade-in">
                <FiShield className="text-red-light" size={14} />
                <span className="text-red-light text-xs font-medium tracking-wider uppercase">Güvenlik & Koruma Hizmetleri</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight mb-7 animate-fade-in-up">
                Siz Sadece{" "}
                <br className="hidden sm:block" />
                Asıl İşinize{" "}
                <span className="text-gradient-red">Odaklanın</span>
              </h1>

              <p className="text-muted text-lg leading-relaxed mb-10 max-w-lg animate-fade-in-up delay-100">
                MYD Özel Güvenlik olarak, profesyonel kadromuz ve entegre hizmet anlayışımızla güvenliğinizi en üst düzeyde sağlıyoruz.
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-in-up delay-200">
                <Link href="/iletisim" className="btn-primary btn-shine inline-flex items-center gap-2.5 text-white font-semibold px-7 py-3.5 rounded-lg text-sm">
                  Teklif Alın
                  <FiArrowRight size={16} />
                </Link>
                <Link href="/hizmetler" className="btn-outline inline-flex items-center gap-2.5 text-white font-medium px-7 py-3.5 rounded-lg text-sm">
                  Hizmetlerimiz
                </Link>
              </div>
            </div>

            {/* Right - Stats */}
            <div className="flex flex-col items-center gap-8">
              <div className="relative animate-fade-in delay-100">
                <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-red/20 shadow-2xl shadow-red/5 animate-float animate-pulse-glow">
                  <Image src="/logo.jpg" alt="MYD Özel Güvenlik" width={208} height={208} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                {stats.map((stat, i) => (
                  <div key={stat.label} className={`glass rounded-xl p-6 text-center animate-scale-in delay-${(i + 1) * 100}`}>
                    <stat.icon className="text-red-light mx-auto mb-2.5" size={20} />
                    <div className="text-2xl font-bold text-white mb-0.5">{stat.value}</div>
                    <div className="text-xs text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-light to-transparent" />
      </section>

      {/* ══════════ HİZMETLER ══════════ */}
      <section className="bg-dark-light py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-red-light text-xs font-semibold tracking-[0.2em] uppercase">Hizmetlerimiz</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight">
              Profesyonel Güvenlik <span className="text-gradient-red">Çözümleri</span>
            </h2>
            <div className="section-divider mx-auto" />
            <p className="text-muted max-w-xl mx-auto text-base leading-relaxed mt-5">
              İşletmenizin güvenlik ihtiyaçlarına özel, entegre ve profesyonel çözümler sunuyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="hover-lift bg-dark-card border border-border rounded-xl p-8 group">
                <div className="w-14 h-14 bg-red/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red/20 transition-colors duration-300">
                  <s.icon className="text-red-light" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-3 group-hover:text-red-light transition-colors duration-300">{s.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/hizmetler" className="inline-flex items-center gap-2 text-red-light hover:text-red font-medium text-sm transition-colors">
              Tüm Hizmetleri Görüntüle <FiArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ REFERANSLAR ══════════ */}
      <section className="bg-dark py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
          <div className="text-center">
            <span className="text-red-light text-xs font-semibold tracking-[0.2em] uppercase">Referanslarımız</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight">
              Birlikte Çalıştığımız <span className="text-gradient-red">Kurumlar</span>
            </h2>
            <div className="section-divider mx-auto" />
          </div>
        </div>
        {/* Marquee Row 1 */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark to-transparent z-10" />
          <div className="animate-marquee marquee-track py-3">
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex items-center gap-6 flex-shrink-0 px-3">
                {["haier","katmerciler","roca","tei","iyte","bilnet","taris","megapol","hapimag","gulermak","tolkar","vansan","bgbatigrup","erkholding","novus","bonfiglioli","betonstar","tescom","sunchemical","akcelik"].map((name) => (
                  <div key={`${setIdx}-${name}`} className="flex-shrink-0 bg-white/[0.03] border border-white/[0.05] rounded-lg p-4 w-[130px] h-[60px] flex items-center justify-center">
                    <Image src={`/references/${name}.png`} alt={name} width={100} height={40} className="object-contain opacity-40 hover:opacity-80 transition-opacity duration-300 brightness-0 invert" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        {/* Marquee Row 2 */}
        <div className="relative mt-4">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark to-transparent z-10" />
          <div className="animate-marquee marquee-track py-3" style={{ animationDirection: "reverse", animationDuration: "35s" }}>
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex items-center gap-6 flex-shrink-0 px-3">
                {["hoover","viltur","candy","bundy","altinok","bergama","billur","coffeemania","egeyapi","gimas","superpar","donmez","borovali","kansan","barankaya","maxwell","ersa","aytas","uniteks","saygilirulman"].map((name) => (
                  <div key={`${setIdx}-${name}`} className="flex-shrink-0 bg-white/[0.03] border border-white/[0.05] rounded-lg p-4 w-[130px] h-[60px] flex items-center justify-center">
                    <Image src={`/references/${name}.png`} alt={name} width={100} height={40} className="object-contain opacity-40 hover:opacity-80 transition-opacity duration-300 brightness-0 invert" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ HAKKIMIZDA ══════════ */}
      <section className="bg-dark-light py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div className="relative">
              <div className="bg-dark rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center border border-border">
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

            {/* Right */}
            <div>
              <span className="text-red-light text-xs font-semibold tracking-[0.2em] uppercase">Biz MYD&apos;yiz</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 tracking-tight">
                Profesyonel Güvenlik & <span className="text-gradient-red">Entegre Hizmet</span> Çözümleri
              </h2>
              <div className="section-divider mb-7" />
              <p className="text-muted leading-relaxed mb-8 text-[15px]">
                MYD Özel Güvenlik Hizmetleri olarak, sektördeki derin bilgi birikimi ve tecrübemizle kurumsal müşterilerimize en üst düzeyde güvenlik hizmeti sunmaktayız. 5188 sayılı Özel Güvenlik Hizmetlerine Dair Kanun kapsamında faaliyet gösteren firmamız, güvenlik ihtiyaçlarınızı analiz ederek size özel çözümler üretir.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-2.5">
                    <FiCheckCircle className="text-red-light flex-shrink-0" size={16} />
                    <span className="text-sm text-muted">{f}</span>
                  </div>
                ))}
              </div>

              <Link href="/hakkimizda" className="inline-flex items-center gap-2 text-red-light hover:text-red font-medium text-sm transition-colors">
                Hakkımızda <FiArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ SEKTÖRLER ══════════ */}
      <section className="bg-dark py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-red-light text-xs font-semibold tracking-[0.2em] uppercase">Hizmet Verdiğimiz Sektörler</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight">
              Her Sektöre Özel <span className="text-gradient-red">Güvenlik Çözümleri</span>
            </h2>
            <div className="section-divider mx-auto" />
            <p className="text-muted max-w-xl mx-auto text-base leading-relaxed mt-5">
              Farklı sektörlerin ihtiyaçlarına özel planlanan güvenlik yapımızla operasyonel verimlilik sağlıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {sectors.map((s) => (
              <div key={s.label} className="hover-lift bg-dark-card border border-border rounded-xl p-7 text-center group cursor-default">
                <div className="w-14 h-14 bg-red/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red/20 transition-colors duration-300">
                  <s.icon className="text-red-light" size={24} />
                </div>
                <span className="text-sm font-medium text-muted group-hover:text-foreground transition-colors duration-300">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ NEDEN BİZ ══════════ */}
      <section className="bg-dark-light py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-red-light text-xs font-semibold tracking-[0.2em] uppercase">Neden MYD Güvenlik?</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight">
              Operasyonlarınızı Güçlendiren <span className="text-gradient-red">Profesyonel</span> Çözümler
            </h2>
            <div className="section-divider mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <div key={item.title} className="text-center p-8 bg-dark-card border border-border rounded-xl hover-lift">
                <div className="relative mx-auto mb-5 w-fit">
                  <div className="w-16 h-16 bg-red/10 rounded-xl flex items-center justify-center mx-auto">
                    <item.icon className="text-red-light" size={28} />
                  </div>
                  <div className="absolute -top-1.5 -right-1.5 w-6 h-6 bg-red rounded-md flex items-center justify-center text-white text-xs font-bold">
                    {i + 1}
                  </div>
                </div>
                <h3 className="text-base font-semibold mb-2.5">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="bg-dark py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, rgba(185,28,28,0.06) 0%, transparent 70%)" }} />
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <span className="text-red-light text-xs font-semibold tracking-[0.2em] uppercase">Bize Ulaşın</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-5 tracking-tight">
            Sizin İçin <span className="text-gradient-red">Buradayız</span>
          </h2>
          <p className="text-muted mb-10 text-base max-w-lg mx-auto leading-relaxed">
            İşletmenizin ihtiyaçlarını analiz ederek en uygun güvenlik çözümlerini sunuyoruz.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/iletisim" className="btn-primary btn-shine inline-flex items-center gap-2.5 text-white font-semibold px-7 py-3.5 rounded-lg text-sm">
              İletişime Geçin <FiArrowRight size={16} />
            </Link>
            <a href="tel:+905437125904" className="btn-outline inline-flex items-center gap-2.5 text-white font-medium px-7 py-3.5 rounded-lg text-sm">
              <FiPhone size={16} /> 0 (543) 712 59 04
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
