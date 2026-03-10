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
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-48 pb-40 w-full">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-28 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2.5 mb-8"
            >
              <span className="w-2 h-2 bg-red rounded-full" />
              <span className="text-red text-sm font-medium uppercase tracking-widest">Profesyonel Güvenlik Hizmetleri</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight mb-7"
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
              className="text-gray-400 text-lg lg:text-xl leading-[1.8] mb-12 max-w-xl"
            >
              MYD Özel Güvenlik olarak, 1000&apos;i aşkın eğitimli personelimiz ve entegre hizmet anlayışımızla kurumsal güvenliğinizi en üst düzeyde sağlıyoruz.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/iletisim"
                className="btn-primary inline-flex items-center gap-3 text-white font-semibold px-8 py-4 rounded-full text-base"
              >
                Ücretsiz Teklif Alın <FiArrowRight size={18} />
              </Link>
              <a
                href="tel:+905437125904"
                className="btn-outline inline-flex items-center gap-3 text-white font-medium px-8 py-4 rounded-full text-base"
              >
                <FiPhone size={18} /> 0 (543) 712 59 04
              </a>
            </motion.div>
          </div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-white/[0.06] shadow-2xl shadow-black/40">
                <Image
                  src="/services/services1.png"
                  alt="MYD Güvenlik"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-red text-white rounded-2xl px-7 py-5 shadow-2xl shadow-red/20">
                <div className="stat-value text-3xl font-bold">10+</div>
                <div className="text-sm font-medium text-white/80 mt-0.5">Yıllık Tecrübe</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-gray-500 text-xs uppercase tracking-widest">Keşfet</span>
        <FiChevronDown className="text-gray-500 animate-bounce-arrow" size={20} />
      </div>
    </section>
  );
}
