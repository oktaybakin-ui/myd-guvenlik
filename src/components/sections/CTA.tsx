"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiPhone } from "react-icons/fi";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CTA() {
  return (
    <section className="bg-dark py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image */}
          <ScrollReveal direction="left">
            <div className="relative rounded-2xl overflow-hidden border border-border img-zoom">
              <Image
                src="/services/services3.png"
                alt="İletişim"
                width={700}
                height={500}
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent" />
            </div>
          </ScrollReveal>

          {/* Right: Content */}
          <ScrollReveal delay={0.15}>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-[2px] bg-red rounded-full" />
                <span className="text-red text-[13px] font-semibold tracking-[0.2em] uppercase">
                  Bize Ulaşın
                </span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight mb-6">
                Hemen İletişime{" "}
                <span className="text-gradient-red">Geçin</span>
              </h2>

              <p className="text-gray-400 text-[15px] leading-relaxed mb-10">
                İşletmenize özel güvenlik planı ve ücretsiz fiyat teklifi için bizi arayın veya form doldurun. Uzman ekibimiz size en kısa sürede dönüş yapacaktır.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/iletisim"
                  className="btn-primary inline-flex items-center gap-3 text-white font-semibold px-8 py-4 rounded-full text-base"
                >
                  Teklif Formu <FiArrowRight size={18} />
                </Link>
                <a
                  href="tel:+905437125904"
                  className="btn-outline inline-flex items-center gap-3 text-white font-medium px-8 py-4 rounded-full text-base"
                >
                  <FiPhone size={18} /> 0 (543) 712 59 04
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
