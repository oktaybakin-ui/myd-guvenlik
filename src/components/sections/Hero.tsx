"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 1000, suffix: "+", label: "Uzman Personel" },
  { value: 150, suffix: "+", label: "Kurumsal İş Ortağı" },
  { value: 25, suffix: "+", label: "Hizmet Kategorisi" },
  { label: "Kesintisiz Hizmet", static: "7/24" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-dark">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="animate-hero-zoom absolute inset-0">
          <Image src="/hero.png" alt="" fill className="object-cover opacity-20" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/60 to-dark" />
      </div>

      {/* Watermark Logo */}
      <div className="absolute inset-0 flex items-center justify-center z-[1] pointer-events-none">
        <Image
          src="/logo.jpg"
          alt=""
          width={500}
          height={500}
          className="opacity-[0.04] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] object-contain"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 pt-40 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-10 h-[2px] bg-red rounded-full" />
            <span className="text-red text-[13px] font-semibold uppercase tracking-[0.2em]">
              Güvenlik Eğitimi &amp; Entegre Hizmetler
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mb-8"
          >
            Güvenliğiniz Bizim <span className="text-gradient-red">Önceliğimiz</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-red/10 border-2 border-red/40 rounded-xl px-8 py-5 mb-8 backdrop-blur-sm"
          >
            <p className="text-white font-bold text-2xl lg:text-3xl">
              🎓 Isparta &amp; Burdur&apos;da Özel Güvenlik Eğitimlerinde <span className="text-red">Lider Kurum</span>
            </p>
            <p className="text-gray-300 text-lg lg:text-xl mt-2">
              Isparta ve Burdur şubelerimizde temel, yenileme ve silah eğitimlerinde uzman kadromuzla geleceğin güvenlik profesyonellerini yetiştiriyoruz.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-gray-400 text-base lg:text-lg leading-relaxed mb-10"
          >
            1000&apos;i aşkın eğitimli personelimiz ve entegre hizmet anlayışımızla kurumsal güvenliğinizi en üst düzeyde sağlıyoruz.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-6"
          >
            <Link
              href="/iletisim"
              className="btn-primary inline-flex items-center gap-3 text-white font-semibold px-8 py-4 rounded-full text-base"
            >
              Hizmetlerimiz için Teklif Alın <FiArrowRight size={18} />
            </Link>
            <div>
              <span className="text-gray-500 text-sm">Uzmanlarımıza Ulaşın:</span>
              <a href="tel:+905069038502" className="block text-white font-semibold text-lg hover:text-red transition-colors">
                0 (506) 903 85 02
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats bar at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative z-10 border-t border-white/10"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-baseline gap-1">
                <span className="text-3xl lg:text-4xl font-bold text-white stat-value">
                  {stat.static || <AnimatedCounter end={stat.value!} suffix={stat.suffix!} />}
                </span>
                <span className="text-[11px] text-gray-500 uppercase tracking-[0.15em] font-medium ml-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-gray-600 text-[10px] uppercase tracking-[0.25em]">Keşfet</span>
        <FiChevronDown className="text-gray-600 animate-bounce-arrow" size={16} />
      </div>
    </section>
  );
}
