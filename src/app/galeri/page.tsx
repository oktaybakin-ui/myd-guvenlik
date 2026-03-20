"use client";

import { useState } from "react";
import Image from "next/image";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import PageBanner from "@/components/PageBanner";
import ScrollReveal from "@/components/ui/ScrollReveal";

const photos = [
  "/galeri/IMG_1716.JPG",
  "/galeri/IMG_1717.JPG",
  "/galeri/IMG_1718.JPG",
  "/galeri/IMG_1719.JPG",
  "/galeri/IMG_1720.JPG",
  "/galeri/IMG_1721.JPG",
  "/galeri/IMG_1722.JPG",
  "/galeri/IMG_1723.JPG",
  "/galeri/IMG_1725.JPG",
  "/galeri/IMG_1727.jpg",
  "/galeri/IMG_1728.jpg",
  "/galeri/IMG_1729.JPG",
  "/galeri/IMG_1730.JPG",
  "/galeri/IMG_1731.jpg",
  "/galeri/IMG_1733.JPG",
  "/galeri/IMG_1734.jpg",
  "/galeri/IMG_1735.JPG",
  "/galeri/IMG_1736.jpg",
  "/galeri/IMG_1737.jpg",
  "/galeri/IMG_1738.jpg",
  "/galeri/IMG_1739.JPG",
  "/galeri/IMG_1741.JPG",
  "/galeri/IMG_1742.JPG",
  "/galeri/IMG_1743.JPG",
  "/galeri/d3c61ef7-9302-4f67-8b8d-272766f88ac8.JPG",
  "/galeri/e0a9b6f2-4c12-4e47-8cf8-6e492d01dbc2.JPG",
  "/galeri/e3aa50c7-f292-4617-9401-097ac580aef2.jpg",
  "/galeri/f7faf41f-6b8e-4c9e-8765-8086a5d72d14.jpg",
  "/galeri/498cec63-8bd9-45f7-8d6b-c988f17a3403.jpg",
  "/galeri/5072922d-26ea-4333-9103-10f5ee5df196.JPG",
  "/galeri/d77fe647-baed-424a-bcef-db788da1da06.JPG",
];

export default function GaleriPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox((c) => (c === null ? null : c === 0 ? photos.length - 1 : c - 1));
  const next = () => setLightbox((c) => (c === null ? null : c === photos.length - 1 ? 0 : c + 1));

  return (
    <>
      <PageBanner
        title="Foto Galeri"
        subtitle="Sahadan kareler, eğitimlerden ve operasyonlardan profesyonel kesitler."
        breadcrumb="Galeri"
      />

      <section className="bg-dark py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {photos.map((src, i) => (
              <ScrollReveal key={src} delay={i * 0.03}>
                <div
                  className="relative overflow-hidden rounded-xl border border-border cursor-pointer group break-inside-avoid"
                  onClick={() => openLightbox(i)}
                >
                  <Image
                    src={src}
                    alt={`MYD Güvenlik Galeri ${i + 1}`}
                    width={800}
                    height={1000}
                    quality={95}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-red/80 px-4 py-2 rounded-full">
                      Büyüt
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-red rounded-full flex items-center justify-center text-white transition-colors cursor-pointer z-10"
          >
            <FiX size={24} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-red rounded-full flex items-center justify-center text-white transition-colors cursor-pointer z-10"
          >
            <FiChevronLeft size={24} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-red rounded-full flex items-center justify-center text-white transition-colors cursor-pointer z-10"
          >
            <FiChevronRight size={24} />
          </button>

          <div
            className="relative max-w-[90vw] max-h-[85vh] w-auto h-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[lightbox]}
              alt={`MYD Güvenlik Galeri ${lightbox + 1}`}
              width={1920}
              height={1920}
              quality={100}
              sizes="90vw"
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full">
              {lightbox + 1} / {photos.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
