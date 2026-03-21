"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { FiCheck } from "react-icons/fi";

const references = [
  "AKFEN Isparta Şehir Hastanesi",
  "AKFEN Eskişehir Şehir Hastanesi",
  "AKFEN Tekirdağ Şehir Hastanesi",
  "ERN HOLDİNG Kara Havacılık Okulu",
  "AKFEN 5000 Kişilik Öğrenci Yurdu",
  "AEK Koleji",
  "Boğaziçi Koleji",
  "MG Gül Yağı Fabrikası",
  "Çokcanlar Tarım Makineleri",
  "Karikatür Kafe",
  "Ustampark-2 Sitesi",
  "Ustampark-3 Sitesi",
  "Metrocity Sitesi",
  "Serracity Sitesi",
  "Hayat Ağacı Evleri",
  "Ustam Gökçay Evleri",
  "Metro Vizyon Sitesi",
  "Metro Prestij Sitesi",
  "Metroklas Sitesi",
  "Koçal Yaşam Sitesi",
  "Yeni Yaka Sitesi",
  "Kadızade Konutları",
  "Kadızade Yaşam Evleri",
];

const categories = [
  "AVM",
  "Özel Hastane",
  "Fabrika",
  "Otel",
  "Depo",
  "Özel Okul",
  "Enerji Santrali Güvenliği",
];

function ReferenceCard({ name }: { name: string }) {
  return (
    <div className="glass-card rounded-2xl px-6 py-5 flex items-center gap-4 group flex-shrink-0 min-w-[280px]">
      <div className="w-10 h-10 bg-red/[0.08] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red/15 transition-colors duration-300">
        <FiCheck className="text-red" size={18} />
      </div>
      <span className="text-white font-medium text-sm leading-tight whitespace-nowrap">{name}</span>
    </div>
  );
}

export default function References() {
  // Double the list for seamless infinite scroll
  const doubled = [...references, ...references];

  return (
    <section className="relative bg-surface-dark py-20 lg:py-28 overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="section-divider absolute bottom-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          label="Referanslarımız"
          title="Birlikte Çalıştığımız"
          highlight="Değerli Kurumlar"
        />
      </div>

      {/* Marquee — full width overflow hidden */}
      <div className="mt-14 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface-dark to-transparent z-10 pointer-events-none" />
        <div className="flex gap-4 animate-marquee marquee-track">
          {doubled.map((ref, i) => (
            <ReferenceCard key={`${ref}-${i}`} name={ref} />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal delay={0.3}>
          <div className="mt-16 glass-card rounded-2xl p-8 lg:p-10 text-center">
            <p className="text-gray-400 text-lg mb-6">Ayrıca aşağıdaki sektörlerde de hizmetinizdeyiz:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <span key={cat} className="badge-premium text-red px-5 py-2.5 rounded-full text-sm font-semibold">
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
