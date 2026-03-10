"use client";

import Link from "next/link";
import { FiArrowRight, FiPhone } from "react-icons/fi";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CTA() {
  return (
    <section className="relative py-36 lg:py-48 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-dark via-red to-red-dark" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <ScrollReveal>
          <p className="text-white/40 text-sm font-semibold uppercase tracking-[0.25em] mb-6">
            Güvenlik İhtiyaçlarınız İçin
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-8 leading-[1.1]">
            Hemen İletişime Geçin
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-white/50 text-xl max-w-xl mx-auto leading-[1.9] mb-14">
            İşletmenize özel güvenlik planı ve ücretsiz fiyat teklifi için bizi arayın veya form doldurun.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-wrap justify-center gap-5">
            <Link
              href="/iletisim"
              className="btn-white inline-flex items-center gap-3 font-bold px-10 py-5 rounded-full text-lg"
            >
              Teklif Formu <FiArrowRight size={20} />
            </Link>
            <a
              href="tel:+905437125904"
              className="inline-flex items-center gap-3 border-2 border-white/30 text-white font-semibold px-10 py-5 rounded-full text-lg hover:bg-white/10 transition-colors"
            >
              <FiPhone size={20} /> 0 (543) 712 59 04
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
