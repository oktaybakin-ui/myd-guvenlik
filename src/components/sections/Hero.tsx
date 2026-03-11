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
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/70 to-dark" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 pt-52 pb-44 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12 justify-center"
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
          className="text-gray-400 text-lg lg:text-xl leading-[2] mb-16 max-w-2xl mx-auto"
        >
          1000&apos;i aşkın eğitimli personelimiz ve entegre hizmet anlayışımızla kurumsal güvenliğinizi en üst düzeyde sağlıyoruz.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap gap-5 justify-center"
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

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-gray-500 text-xs uppercase tracking-[0.25em]">Keşfet</span>
        <FiChevronDown className="text-gray-500 animate-bounce-arrow" size={20} />
      </div>
    </section>
  );
}
