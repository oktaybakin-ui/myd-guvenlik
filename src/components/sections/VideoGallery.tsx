"use client";

import { useRef, useState, useCallback } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const videos = [
  { src: "/videos/video1.mp4", title: "MYD Güvenlik Eğitim" },
  { src: "/videos/video2.mp4", title: "MYD Güvenlik Saha" },
  { src: "/videos/video3.mp4", title: "MYD Güvenlik Tanıtım" },
  { src: "/videos/video4.mov", title: "MYD Güvenlik" },
];

export default function VideoGallery() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleEnded = useCallback((index: number) => {
    const next = (index + 1) % videos.length;
    setActiveIndex(next);
    const nextVideo = videoRefs.current[next];
    if (nextVideo) {
      nextVideo.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => nextVideo.play(), 500);
    }
  }, []);

  return (
    <section className="bg-dark py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-[2px] bg-red rounded-full" />
              <span className="text-red text-sm font-semibold tracking-[0.2em] uppercase">
                Videolarımız
              </span>
              <span className="w-10 h-[2px] bg-red rounded-full" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">Eğitim & Saha Görüntüleri</h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, i) => (
            <ScrollReveal key={video.src} delay={i * 0.15}>
              <div className={`bg-dark-light border rounded-2xl overflow-hidden group hover-lift transition-all duration-300 ${activeIndex === i ? "border-red ring-1 ring-red/30" : "border-border"}`}>
                <video
                  ref={(el) => { videoRefs.current[i] = el; }}
                  controls
                  autoPlay={i === 0}
                  muted
                  preload="metadata"
                  playsInline
                  className="w-full"
                  onEnded={() => handleEnded(i)}
                  onPlay={() => setActiveIndex(i)}
                >
                  <source src={video.src} type={video.src.endsWith('.mov') ? 'video/quicktime' : 'video/mp4'} />
                </video>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
