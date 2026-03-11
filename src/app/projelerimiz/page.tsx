"use client";

import { FiShield, FiUsers, FiHome, FiTruck, FiMapPin, FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const projects = [
  {
    icon: FiShield,
    title: "Organize Sanayi Bölgeleri",
    location: "Isparta / Burdur",
    scope: "Güvenlik & Lojistik",
    personnel: 120,
    desc: "Birden fazla organize sanayi bölgesinde 7/24 güvenlik, giriş-çıkış kontrol ve lojistik destek hizmeti sağlıyoruz.",
    highlights: ["7/24 Nöbet Sistemi", "Araç Giriş-Çıkış Kontrolü", "CCTV İzleme"],
  },
  {
    icon: FiHome,
    title: "Toplu Konut & Site Yönetimi",
    location: "Isparta / Antalya",
    scope: "Güvenlik & Yönetim",
    personnel: 85,
    desc: "Büyük ölçekli site ve toplu konut projelerinde güvenlik, temizlik ve teknik yönetim hizmetlerini entegre olarak sunuyoruz.",
    highlights: ["Site Güvenliği", "Temizlik Yönetimi", "Teknik Bakım"],
  },
  {
    icon: FiUsers,
    title: "Kamu Kurum ve Kuruluşları",
    location: "Isparta / Bölgesel",
    scope: "Özel Güvenlik",
    personnel: 250,
    desc: "Devlet kurumları, hastaneler ve eğitim kurumlarında mevzuata uygun profesyonel güvenlik hizmeti veriyoruz.",
    highlights: ["Hastane Güvenliği", "Kurum Güvenliği", "Eğitim Tesisleri"],
  },
  {
    icon: FiTruck,
    title: "Lojistik & Depo Tesisleri",
    location: "Isparta / Burdur",
    scope: "Güvenlik & Lojistik",
    personnel: 60,
    desc: "Büyük ölçekli depo ve lojistik merkezlerinde sevkiyat güvenliği, personel yönetimi ve operasyonel destek sağlıyoruz.",
    highlights: ["Depo Güvenliği", "Sevkiyat Kontrolü", "Personel Yönetimi"],
  },
  {
    icon: FiShield,
    title: "AVM & Ticari Tesisler",
    location: "Isparta",
    scope: "Güvenlik & Temizlik",
    personnel: 95,
    desc: "Alışveriş merkezleri ve ticari tesislerde güvenlik, temizlik ve müşteri yönlendirme hizmetlerini profesyonel ekibimizle yürütüyoruz.",
    highlights: ["Tesis Güvenliği", "Hijyen Yönetimi", "Müşteri Yönlendirme"],
  },
  {
    icon: FiHome,
    title: "Enerji & Endüstriyel Tesisler",
    location: "Bölgesel",
    scope: "Güvenlik & Operasyon",
    personnel: 70,
    desc: "Enerji santralleri ve endüstriyel tesislerde yüksek güvenlik standartlarına uygun koruma ve operasyon desteği sunuyoruz.",
    highlights: ["Tesis Koruma", "Çevre Güvenliği", "Risk Yönetimi"],
  },
];

const projectStats = [
  { value: 30, suffix: "+", label: "Aktif Proje" },
  { value: 1000, suffix: "+", label: "Saha Personeli" },
  { value: 6, suffix: "+", label: "Farklı Sektör" },
  { value: 10, suffix: "+", label: "Yıllık Deneyim" },
];

export default function ProjelerimizPage() {
  return (
    <>
      <PageBanner
        title="Projelerimiz"
        subtitle="Farklı sektörlerde yürüttüğümüz projelerle güvenlik ve entegre hizmet alanında güçlü bir portföy oluşturduk."
        breadcrumb="Projelerimiz"
      />

      {/* Proje İstatistikleri */}
      <section className="bg-dark-light py-16 lg:py-20 border-b border-white/[0.04]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16">
            {projectStats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center relative">
                  <div className="text-5xl lg:text-6xl font-bold text-white mb-3">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-[0.15em] font-medium">{stat.label}</div>
                  {i < projectStats.length - 1 && <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-20 bg-white/[0.06]" />}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projeler Grid */}
      <section className="bg-dark py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-20">
              <div className="flex items-center gap-3 justify-center mb-6">
                <span className="w-10 h-[2px] bg-red rounded-full" />
                <span className="text-red text-sm font-semibold tracking-[0.2em] uppercase">Portföyümüz</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                Hizmet Verdiğimiz <span className="text-gradient-red">Projeler</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
                Organize sanayi bölgelerinden kamu kurumlarına, site yönetiminden endüstriyel tesislere kadar geniş bir yelpazede hizmet sunuyoruz.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 0.08}>
                <div className="bg-dark-card border border-border rounded-2xl p-8 lg:p-10 h-full hover-lift group">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-red/10 rounded-xl flex items-center justify-center group-hover:bg-red transition-colors duration-300">
                      <project.icon className="text-red group-hover:text-white transition-colors duration-300" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-red transition-colors duration-300">{project.title}</h3>
                      <div className="flex items-center gap-2 mt-1.5">
                        <FiMapPin className="text-gray-500" size={13} />
                        <span className="text-gray-500 text-sm">{project.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-400 text-[15px] leading-relaxed mb-6">{project.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.highlights.map((h) => (
                      <span key={h} className="text-xs font-medium bg-red/10 text-red px-3 py-1.5 rounded-full">{h}</span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-5 border-t border-border">
                    <div>
                      <span className="text-gray-500 text-xs uppercase tracking-wider">Kapsam</span>
                      <p className="text-white text-sm font-medium mt-0.5">{project.scope}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-gray-500 text-xs uppercase tracking-wider">Personel</span>
                      <p className="text-white text-sm font-medium mt-0.5">{project.personnel}+</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-light py-16 lg:py-20 border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Projeniz İçin <span className="text-gradient-red">Teklif Alın</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              İşletmenize özel güvenlik ve entegre hizmet planı için hemen bizimle iletişime geçin.
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
