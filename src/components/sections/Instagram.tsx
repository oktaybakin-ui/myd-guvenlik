"use client";

import Image from "next/image";
import { FiInstagram } from "react-icons/fi";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";

const posts = [
  { src: "/services/services1.png", alt: "Güvenlik operasyonu" },
  { src: "/services/services2.png", alt: "Saha personeli" },
  { src: "/services/services3.png", alt: "Eğitim" },
  { src: "/services/services4.png", alt: "Ekip çalışması" },
  { src: "/hero.png", alt: "Profesyonel güvenlik" },
  { src: "/hero-mobile.png", alt: "MYD Güvenlik" },
];

export default function Instagram() {
  return (
    <section className="bg-dark py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionTitle
          label="Bizi Takip Edin"
          title="Instagram'da"
          highlight="MYD"
          description="Son paylaşımlarımızı ve saha operasyonlarımızı Instagram'dan takip edin."
        />

        <ScrollReveal>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4">
            {posts.map((post, i) => (
              <a
                key={i}
                href="https://instagram.com/mydguvenlik"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-xl overflow-hidden border border-border"
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  <FiInstagram
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    size={32}
                  />
                </div>
              </a>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-10 text-center">
            <a
              href="https://instagram.com/mydguvenlik"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3 text-white font-semibold px-8 py-4 rounded-full text-base"
            >
              <FiInstagram size={20} />
              @mydguvenlik
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
