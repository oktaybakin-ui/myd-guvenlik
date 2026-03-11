"use client";

import Image from "next/image";
import Link from "next/link";
import { FiCheckCircle, FiShield, FiUsers, FiAward, FiClock, FiTarget, FiEye, FiArrowRight } from "react-icons/fi";
import PageBanner from "@/components/PageBanner";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { icon: FiShield, value: 1000, suffix: "+", label: "Uzman Personel" },
  { icon: FiUsers, value: 150, suffix: "+", label: "Kurumsal İş Ortağı" },
  { icon: FiAward, value: 10, suffix: "+", label: "Yıllık Deneyim" },
  { icon: FiClock, value: 7, suffix: "/24", label: "Kesintisiz Hizmet" },
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

const timeline = [
  { year: "2014", title: "Kuruluş", desc: "MYD Özel Güvenlik, Isparta merkezli olarak güvenlik sektörüne adım attı." },
  { year: "2016", title: "Kurumsal Büyüme", desc: "İlk büyük kurumsal sözleşmeler imzalanarak hizmet portföyü genişletildi." },
  { year: "2018", title: "Entegre Hizmetler", desc: "Temizlik, lojistik ve personel yönetimi hizmetleri portföye eklendi." },
  { year: "2020", title: "Dijital Dönüşüm", desc: "GPS takip, dijital raporlama ve personel yönetim sistemi devreye alındı." },
  { year: "2022", title: "ISO Sertifikası", desc: "ISO 9001 Kalite Yönetim Sistemi sertifikası alınarak standartlar belgelendi." },
  { year: "2024", title: "1000+ Personel", desc: "Aktif personel sayısı 1000'i aşarak sektördeki konumunu güçlendirdi." },
];

export default function HakkimizdaPage() {
  return (
    <>
      <PageBanner
        title="Hakkımızda"
        subtitle="MYD Özel Güvenlik Hizmetleri olarak, sektördeki derin bilgi birikimi ve tecrübemizle hizmet veriyoruz."
        breadcrumb="Hakkımızda"
      />

      {/* Biz Kimiz */}
      <section className="bg-dark py-32 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6 justify-center">
                <span className="w-10 h-[2px] bg-red rounded-full" />
                <span className="text-red text-sm font-semibold tracking-[0.2em] uppercase">Biz Kimiz?</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-8">
                Güvenlikte <span className="text-gradient-red">Güvenilir</span> Çözüm Ortağınız
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-gray-400 text-lg leading-relaxed mb-4 max-w-3xl mx-auto">
                MYD Özel Güvenlik, sektördeki derin bilgi birikimi ve tecrübesiyle kurumsal müşterilerine en üst düzeyde güvenlik hizmeti sunmaktadır.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
                5188 sayılı kanun kapsamında faaliyet gösteren firmamız, güvenlik ihtiyaçlarınızı analiz ederek size özel çözümler üretir.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden img-zoom border border-border shadow-2xl">
                  <Image src="/hero.png" alt="MYD Güvenlik" width={640} height={480} className="w-full h-auto object-cover aspect-[4/3]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-red text-white rounded-2xl px-8 py-6 shadow-2xl shadow-red/20 hidden sm:block">
                  <div className="stat-value text-4xl font-bold">10+</div>
                  <div className="text-sm font-medium text-white/80 mt-1">Yıllık Tecrübe</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-3.5">
                    <FiCheckCircle className="text-red flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-400 text-base leading-relaxed">{f}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* İstatistikler */}
      <section className="bg-dark-light py-24 lg:py-32 border-y border-white/[0.04]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center relative">
                  <stat.icon className="text-red mx-auto mb-5" size={28} />
                  <div className="text-5xl lg:text-6xl font-bold text-white mb-3">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-[0.15em] font-medium">{stat.label}</div>
                  {i < stats.length - 1 && <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-20 bg-white/[0.06]" />}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Misyon & Vizyon */}
      <section className="bg-dark py-32 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-10">
            <ScrollReveal>
              <div className="bg-dark-card border border-border rounded-2xl p-10 lg:p-14 h-full">
                <div className="w-16 h-16 bg-red/10 rounded-2xl flex items-center justify-center mb-8">
                  <FiTarget className="text-red" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-5">Misyonumuz</h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  Güvenlik, temizlik, lojistik ve personel yönetiminde sektör standartlarının üzerinde hizmet sunarak müşterilerimizin operasyonel süreçlerini güvenilir, verimli ve sürdürülebilir hale getirmek. 5188 sayılı kanun kapsamında, yasal mevzuata tam uyumlu çözümler üretmek.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="bg-dark-card border border-border rounded-2xl p-10 lg:p-14 h-full">
                <div className="w-16 h-16 bg-red/10 rounded-2xl flex items-center justify-center mb-8">
                  <FiEye className="text-red" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-5">Vizyonumuz</h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  Entegre hizmet yönetimi alanında Türkiye&apos;nin en güvenilir ve yenilikçi markası olmak. Dijital dönüşümü güvenlik sektörüne entegre ederek, teknoloji odaklı ve ölçülebilir hizmet standartları oluşturmak.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Tarihçe */}
      <section className="bg-dark-light py-32 lg:py-40 border-y border-white/[0.04]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-20">
              <div className="flex items-center gap-3 justify-center mb-6">
                <span className="w-10 h-[2px] bg-red rounded-full" />
                <span className="text-red text-sm font-semibold tracking-[0.2em] uppercase">Tarihçemiz</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Büyüme <span className="text-gradient-red">Hikayemiz</span></h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.08}>
                <div className="bg-dark-card border border-border rounded-2xl p-8 h-full hover-lift">
                  <span className="text-red text-3xl font-bold">{item.year}</span>
                  <h4 className="text-lg font-bold mt-4 mb-3">{item.title}</h4>
                  <p className="text-gray-400 text-[15px] leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Temel Değerlerimiz */}
      <section className="bg-dark py-32 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-20">
              <div className="flex items-center gap-3 justify-center mb-6">
                <span className="w-10 h-[2px] bg-red rounded-full" />
                <span className="text-red text-sm font-semibold tracking-[0.2em] uppercase">Değerlerimiz</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Temel <span className="text-gradient-red">Değerlerimiz</span></h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-10">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="bg-dark-card border border-border rounded-2xl p-10 lg:p-12 hover-lift h-full text-center">
                  <h3 className="text-xl font-bold mb-5 text-red">{v.title}</h3>
                  <p className="text-gray-400 text-base leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-light py-24 lg:py-32 border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Birlikte <span className="text-gradient-red">Çalışalım</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              İşletmenize özel güvenlik planı ve ücretsiz fiyat teklifi için hemen iletişime geçin.
            </p>
            <Link
              href="/iletisim"
              className="btn-primary inline-flex items-center gap-3 text-white font-semibold px-8 py-4 rounded-full text-base"
            >
              İletişime Geçin <FiArrowRight size={17} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
