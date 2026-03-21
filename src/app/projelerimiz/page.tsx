"use client";

import { FiShield, FiUsers, FiHome, FiMapPin, FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const projects = [
  {
    icon: FiShield,
    title: "AKFEN Şehir Hastaneleri",
    location: "Isparta / Eskişehir / Tekirdağ",
    scope: "Özel Güvenlik",
    personnel: 120,
    desc: "AKFEN Isparta, Eskişehir ve Tekirdağ Şehir Hastanelerinde 7/24 güvenlik hizmeti, hasta ve ziyaretçi yönlendirme ve acil müdahale koordinasyonu sağlıyoruz.",
    highlights: ["Hastane Güvenliği", "Ziyaretçi Kontrolü", "Acil Müdahale"],
  },
  {
    icon: FiUsers,
    title: "ERN HOLDİNG Kara Havacılık Okulu",
    location: "Isparta",
    scope: "Özel Güvenlik",
    personnel: 40,
    desc: "Kara Havacılık Okulu bünyesinde giriş-çıkış kontrolü, çevre güvenliği ve tesis koruma hizmetlerini profesyonel kadromuzla yürütüyoruz.",
    highlights: ["Tesis Koruma", "Giriş-Çıkış Kontrolü", "Çevre Güvenliği"],
  },
  {
    icon: FiHome,
    title: "AKFEN 5000 Kişilik Öğrenci Yurdu",
    location: "Isparta",
    scope: "Güvenlik & Yönetim",
    personnel: 35,
    desc: "5000 kişi kapasiteli öğrenci yurdunda güvenlik, giriş-çıkış kontrolü ve genel düzen sağlama hizmetlerini kesintisiz olarak sunuyoruz.",
    highlights: ["Yurt Güvenliği", "Kimlik Kontrolü", "7/24 Nöbet"],
  },
  {
    icon: FiShield,
    title: "AEK Koleji",
    location: "Isparta",
    scope: "Özel Güvenlik",
    personnel: 10,
    desc: "Eğitim kurumunda öğrenci ve personel güvenliğini sağlayarak, okul giriş-çıkış kontrolü ve kampüs güvenliği hizmeti veriyoruz.",
    highlights: ["Okul Güvenliği", "Öğrenci Güvenliği", "Kampüs Kontrolü"],
  },
  {
    icon: FiHome,
    title: "Site Yönetim Danışmanlığı",
    location: "Isparta",
    scope: "Güvenlik & Site Yönetimi",
    personnel: 45,
    desc: "Ustampark-2, Ustampark-3, Metrocity ve Serracity sitelerinde güvenlik, site yönetim danışmanlığı ve genel düzen hizmetlerini profesyonel ekibimizle sağlıyoruz.",
    highlights: ["Site Güvenliği", "Yönetim Danışmanlığı", "Genel Düzen"],
  },
];

const projectStats = [
  { value: 10, suffix: "+", label: "Aktif Proje" },
  { value: 270, suffix: "+", label: "ÖGG" },
  { value: 5, suffix: "", label: "Hizmet Kategorisi" },
  { value: 10, suffix: "+", label: "Yıllık Deneyim" },
];

export default function ProjelerimizPage() {
  return (
    <>
      {/* Projeler Grid */}
      <section className="bg-dark pt-40 lg:pt-48 pb-20 lg:pb-28">
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
                Şehir hastanelerinden eğitim kurumlarına, öğrenci yurtlarından site yönetimine kadar geniş bir yelpazede profesyonel güvenlik hizmeti sunuyoruz.
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

      {/* Proje İstatistikleri */}
      <section className="bg-dark-light py-16 lg:py-20 border-y border-white/[0.04]">
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

      {/* CTA */}
      <section className="bg-dark-light pt-24 lg:pt-28 pb-16 lg:pb-20 border-t border-white/[0.04]">
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
