"use client";

import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";

const photos = [
  { src: "/services/services1.png", alt: "Fiziki Güvenlik Operasyonu", label: "Fiziki Güvenlik" },
  { src: "/services/services3.png", alt: "Elektronik Güvenlik Sistemleri", label: "Elektronik Güvenlik" },
  { src: "/services/services4.png", alt: "Etkinlik Güvenliği", label: "Etkinlik Güvenliği" },
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
              <div className="group relative rounded-2xl overflow-hidden border border-border aspect-[4/5]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-block bg-red/90 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2.5 rounded-full">
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
