"use client";

import { useEffect } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Instagram() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
          <div className="mt-16">
            <div
              className="elfsight-app-3f8661b0-d17e-4b6e-9edf-e221fbcdce00"
              data-elfsight-app-lazy
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
