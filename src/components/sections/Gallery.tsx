"use client";

import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";

const photos = [
  { src: "/services/services1.png", alt: "Fiziki Güvenlik Operasyonu", label: "Fiziki Güvenlik" },
  { src: "/services/services2.png", alt: "Risk Analizi ve Danışmanlık", label: "Risk Analizi" },
  { src: "/services/services3.png", alt: "Elektronik Güvenlik Sistemleri", label: "Elektronik Güvenlik" },
];

export default function Gallery() {
  return (
    <section className="bg-dark-light py-32 lg:py-44">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          label="Operasyonlarımız"
          title="Sahadan"
          highlight="Kareler"
          description="Profesyonel güvenlik hizmetlerimizden kesitler."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-20">
          {photos.map((photo, i) => (
            <ScrollReveal key={photo.label} delay={i * 0.1}>
              <div className="group relative rounded-2xl overflow-hidden border border-border cursor-pointer aspect-[4/3]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Default overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-all duration-500 group-hover:from-black/80" />
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-7 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block bg-red/90 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg">
                    {photo.label}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
