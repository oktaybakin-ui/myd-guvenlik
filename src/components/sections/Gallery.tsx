"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronLeft, FiChevronRight, FiArrowRight } from "react-icons/fi";
import SectionTitle from "@/components/ui/SectionTitle";
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
  "/galeri/galeri_32.jpg",
  "/galeri/galeri_33.jpg",
  "/galeri/galeri_34.jpg",
  "/galeri/galeri_35.jpg",
  "/galeri/galeri_36.jpg",
  "/galeri/galeri_37.jpg",
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const prev = useCallback(() => setCurrent((c) => (c === 0 ? photos.length - 1 : c - 1)), []);
  const next = useCallback(() => setCurrent((c) => (c === photos.length - 1 ? 0 : c + 1)), []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <section className="bg-dark-light py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionTitle
          label="Galeri"
          title="Sahadan"
          highlight="Kareler"
          description="Profesyonel güvenlik hizmetlerimizden kesitler."
        />

        <ScrollReveal>
          <div
            className="mt-16 relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden border border-border aspect-[16/9] bg-black">
              {photos.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt={`MYD Güvenlik Galeri ${i + 1}`}
                  fill
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 1400px"
                  className={`object-contain transition-opacity duration-1000 ${
                    current === i ? "opacity-100" : "opacity-0"
                  }`}
                  priority={i === 0}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="bg-red/90 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2.5 rounded-full">
                  {current + 1} / {photos.length}
                </span>
              </div>

              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                <div
                  className="h-full bg-red transition-all duration-300"
                  style={{ width: `${((current + 1) / photos.length) * 100}%` }}
                />
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

            {/* Link to full gallery */}
            <div className="text-center mt-10">
              <Link
                href="/galeri"
                className="inline-flex items-center gap-2 text-red hover:text-white transition-colors font-medium"
              >
                Tüm Galeriyi Görüntüle <FiArrowRight size={16} />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
