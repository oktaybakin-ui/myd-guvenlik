import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";

const row1 = ["haier","katmerciler","roca","tei","iyte","bilnet","taris","megapol","hapimag","gulermak","tolkar","vansan","bgbatigrup","erkholding","novus","bonfiglioli","betonstar","tescom","sunchemical","akcelik"];
const row2 = ["hoover","viltur","candy","bundy","altinok","bergama","billur","coffeemania","egeyapi","gimas","superpar","donmez","borovali","kansan","barankaya","maxwell","ersa","aytas","uniteks","saygilirulman"];

function LogoRow({ logos, reverse }: { logos: string[]; reverse?: boolean }) {
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface-dark to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface-dark to-transparent z-10" />
      <div
        className="animate-marquee marquee-track py-4"
        style={reverse ? { animationDirection: "reverse", animationDuration: "35s" } : undefined}
      >
        {[0, 1].map((setIdx) => (
          <div key={setIdx} className="flex items-center gap-10 flex-shrink-0 px-5">
            {logos.map((name) => (
              <div
                key={`${setIdx}-${name}`}
                className="flex-shrink-0 bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 w-[170px] h-[80px] flex items-center justify-center hover:bg-white/[0.06] transition-colors duration-300"
              >
                <Image
                  src={`/references/${name}.png`}
                  alt={name}
                  width={120}
                  height={48}
                  className="object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 brightness-0 invert"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function References() {
  return (
    <section className="bg-surface-dark py-32 lg:py-40 border-y border-white/[0.04] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-14">
        <SectionTitle
          label="Referanslarımız"
          title="Birlikte Çalıştığımız"
          highlight="Değerli Kurumlar"
        />
      </div>
      <LogoRow logos={row1} />
      <div className="mt-10">
        <LogoRow logos={row2} reverse />
      </div>
    </section>
  );
}
