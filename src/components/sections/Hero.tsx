"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 270, suffix: "+", label: "ÖGG" },
  { value: 25, suffix: "", label: "Kurumsal İş Ortağı" },
  { value: 5, suffix: "", label: "Hizmet Kategorisi" },
  { label: "Kesintisiz Hizmet", static: "7/24" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-dark noise-overlay">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="animate-hero-zoom absolute inset-0">
          <Image src="/hero.png" alt="" fill className="object-cover opacity-15" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-dark/70 to-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-transparent to-dark/80" />
      </div>

      {/* Subtle accent glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-red/5 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-red/3 rounded-full blur-[128px] pointer-events-none" />

      {/* Watermark Logo */}
      <div className="absolute inset-0 flex items-center justify-center z-[1] pointer-events-none">
        <Image
          src="/logo.jpg"
          alt=""
          width={500}
          height={500}
          className="opacity-[0.03] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] object-contain"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 pt-40 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-12 h-[2px] bg-gradient-to-r from-red to-red-light rounded-full" />
            <span className="text-red text-xs font-semibold uppercase tracking-[0.25em]">
              Güvenlik Eğitimi &amp; Entegre Hizmetler
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight mb-10"
          >
            Güvenliğiniz Bizim{" "}
            <span className="text-gradient-red">Önceliğimiz</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 space-y-3"
          >
            <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
              🎓 Isparta &amp; Burdur&apos;da Özel Güvenlik Eğitimlerinde <span className="text-red-light font-bold">Lider Kurum</span> — Temel, yenileme ve silah farkı eğitimlerinde uzman kadromuzla geleceğin güvenlik profesyonellerini yetiştiriyoruz. <a href="tel:+905069038502" className="text-white font-semibold hover:text-red-light transition-colors">Isparta: 0 (506) 903 85 02</a> · <a href="tel:+905010723215" className="text-white font-semibold hover:text-red-light transition-colors">Burdur: 0 (501) 072 32 15</a>
            </p>
            <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
              270&apos;i aşkın özel güvenlik görevlimiz ve entegre hizmet anlayışımızla kurumsal güvenliğinizi en üst düzeyde sağlıyoruz. Güvenlik, güvenlik danışmanlığı ve profesyonel site yönetim danışmanlığı alanlarında çözümler sunuyoruz.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/iletisim"
              className="btn-primary inline-flex items-center gap-3 text-white font-semibold px-9 py-4 rounded-full text-base"
            >
              Hizmetlerimiz için Teklif Alın <FiArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Stats bar at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative z-10"
      >
        <div className="section-divider" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-baseline gap-2">
                <span className="text-3xl lg:text-4xl font-bold text-white stat-value">
                  {stat.static || <AnimatedCounter end={stat.value!} suffix={stat.suffix!} />}
                </span>
                <span className="text-[11px] text-gray-500 uppercase tracking-[0.15em] font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-gray-600 text-[10px] uppercase tracking-[0.3em]">Keşfet</span>
        <FiChevronDown className="text-gray-600 animate-bounce-arrow" size={16} />
      </div>
    </section>
  );
}
