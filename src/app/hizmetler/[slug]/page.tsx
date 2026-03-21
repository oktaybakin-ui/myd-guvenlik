"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FiCheckCircle, FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { services } from "@/data/services";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="bg-dark min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Hizmet Bulunamadı</h1>
          <Link href="/hizmetler" className="text-red hover:underline">Hizmetlere Dön</Link>
        </div>
      </div>
    );
  }

  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <>
      {/* Detail Section */}
      <section className="bg-dark pt-40 lg:pt-48 pb-20 lg:pb-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Image */}
            <ScrollReveal direction="left">
              <div className="rounded-2xl overflow-hidden border border-border shadow-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={700}
                  height={500}
                  quality={100}
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal delay={0.15}>
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-red/10 rounded-2xl flex items-center justify-center">
                    <service.icon className="text-red" size={30} />
                  </div>
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed mb-10">{service.desc}</p>

                <div className="space-y-4 mb-10">
                  {service.details.map((d) => (
                    <div key={d} className="flex items-start gap-3.5">
                      <FiCheckCircle className="text-red flex-shrink-0 mt-1" size={18} />
                      <span className="text-gray-400 text-base leading-relaxed">{d}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/iletisim"
                  className="btn-primary inline-flex items-center gap-3 text-white font-semibold px-8 py-4 rounded-full text-base"
                >
                  Teklif Alın <FiArrowRight size={17} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-dark-light py-16 lg:py-20 border-y border-white/[0.04]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold tracking-tight">
                Hizmet <span className="text-gradient-red">Kapsamı</span>
              </h3>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {service.features.map((f, i) => (
              <ScrollReveal key={f} delay={i * 0.06}>
                <div className="bg-dark-card border border-border rounded-xl p-6 text-center hover-lift">
                  <div className="w-3 h-3 bg-red rounded-full mx-auto mb-4" />
                  <span className="text-white font-medium text-[15px]">{f}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-dark py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold tracking-tight">
                Diğer <span className="text-gradient-red">Hizmetlerimiz</span>
              </h3>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.slice(0, 3).map((s, i) => (
              <ScrollReveal key={s.slug} delay={i * 0.08}>
                <Link href={`/hizmetler/${s.slug}`} className="group block h-full">
                  <div className="bg-dark-card border border-border rounded-2xl p-8 h-full hover-lift">
                    <div className="w-14 h-14 bg-red/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-red transition-colors duration-300">
                      <s.icon className="text-red group-hover:text-white transition-colors duration-300" size={24} />
                    </div>
                    <h4 className="text-lg font-bold mb-3 group-hover:text-red transition-colors">{s.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{s.shortDesc}</p>
                    <span className="text-red text-sm font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                      Detaylı Bilgi <FiArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/hizmetler"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-medium"
            >
              <FiArrowLeft size={16} /> Tüm Hizmetlere Dön
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
