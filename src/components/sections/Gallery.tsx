"use client";

import { useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";

const photos = [
  { src: "/services/services1.png", alt: "Fiziki Güvenlik Operasyonu", label: "Fiziki Güvenlik" },
  { src: "/services/services2.png", alt: "Risk Analizi ve Danışmanlık", label: "Risk Analizi" },
  { src: "/services/services3.png", alt: "Elektronik Güvenlik Sistemleri", label: "Elektronik Güvenlik" },
  { src: "/services/services4.png", alt: "Etkinlik Güvenliği", label: "Etkinlik Güvenliği" },
  { src: "/hero.png", alt: "Saha Operasyonu", label: "Saha Operasyonu" },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? photos.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === photos.length - 1 ? 0 : c + 1));

  return (
    <section className="bg-dark-light py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionTitle
          label="Operasyonlarımız"
          title="Sahadan"
          highlight="Kareler"
          description="Profesyonel güvenlik hizmetlerimizden kesitler."
        />

        <ScrollReveal>
          <div className="mt-16 relative">
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden border border-border aspect-[16/7]">
              <Image
                src={photos[current].src}
                alt={photos[current].alt}
                fill
                className="object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="bg-red/90 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2.5 rounded-full">
                  {photos[current].label}
                </span>
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red transition-colors border border-white/10 cursor-pointer"
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red transition-colors border border-white/10 cursor-pointer"
            >
              <FiChevronRight size={20} />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {photos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    current === i ? "bg-red w-8" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
