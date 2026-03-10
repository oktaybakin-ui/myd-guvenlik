"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiPhone, FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="animate-hero-zoom absolute inset-0">
          <Image src="/hero.png" alt="" fill className="object-cover opacity-25" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-52 pb-44 w-full">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-16 items-center">
          {/* Left — %60 */}
          <div className="w-full lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-12"
            >
              <span className="w-12 h-[2px] bg-red rounded-full" />
              <span className="text-red text-[13px] font-semibold uppercase tracking-[0.25em]">Profesyonel Güvenlik Hizmetleri</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold leading-[1.08] tracking-tight mb-10"
            >
              Güvenliğiniz
              <br />
              Bizim{" "}
              <span className="text-gradient-red">Önceliğimiz</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 text-lg lg:text-xl leading-[2] mb-16 max-w-xl"
            >
              1000&apos;i aşkın eğitimli personelimiz ve entegre hizmet anlayışımızla kurumsal güvenliğinizi en üst düzeyde sağlıyoruz.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-5"
            >
              <Link
                href="/iletisim"
                className="btn-primary inline-flex items-center gap-3 text-white font-semibold px-10 py-5 rounded-full text-lg"
              >
                Ücretsiz Teklif Alın <FiArrowRight size={20} />
              </Link>
              <a
                href="tel:+905437125904"
                className="btn-outline inline-flex items-center gap-3 text-white font-medium px-10 py-5 rounded-full text-lg"
              >
                <FiPhone size={20} /> 0 (543) 712 59 04
              </a>
            </motion.div>
          </div>

          {/* Right — %40 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="hidden lg:block w-full lg:w-2/5"
          >
            <div className="relative">
              <div className="rounded-3xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/50">
                <Image
                  src="/services/services1.png"
                  alt="MYD Güvenlik"
                  width={640}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/30 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-8 -left-8 bg-red text-white rounded-2xl px-8 py-6 shadow-2xl shadow-red/25 hidden lg:block">
                <div className="stat-value text-4xl font-bold">10+</div>
                <div className="text-sm font-medium text-white/80 mt-1">Yıllık Tecrübe</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-gray-500 text-xs uppercase tracking-[0.25em]">Keşfet</span>
        <FiChevronDown className="text-gray-500 animate-bounce-arrow" size={20} />
      </div>
    </section>
  );
}
