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
  "Ustampark-2 Sitesi",
  "Ustampark-3 Sitesi",
  "Metrocity Sitesi",
  "Serracity Sitesi",
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

export default function References() {
  return (
    <section className="bg-surface-dark py-20 lg:py-28 border-y border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          label="Referanslarımız"
          title="Birlikte Çalıştığımız"
          highlight="Değerli Kurumlar"
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {references.map((ref, i) => (
            <ScrollReveal key={ref} delay={i * 0.05}>
              <div className="bg-dark-light border border-border rounded-2xl p-6 flex items-center gap-4 hover-lift group h-full">
                <div className="w-10 h-10 bg-red/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red/20 transition-colors">
                  <FiCheck className="text-red" size={18} />
                </div>
                <span className="text-white font-medium text-sm leading-tight">{ref}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-16 bg-dark-light border border-border rounded-2xl p-8 lg:p-10 text-center">
            <p className="text-gray-400 text-lg mb-6">Ayrıca aşağıdaki sektörlerde de hizmetinizdeyiz:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <span key={cat} className="bg-red/10 text-red border border-red/20 px-5 py-2.5 rounded-full text-sm font-semibold">
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
