import ScrollReveal from "./ScrollReveal";

interface Props {
  label: string;
  title: string;
  highlight?: string;
  description?: string;
  center?: boolean;
}

export default function SectionTitle({ label, title, highlight, description, center = true }: Props) {
  return (
    <div className={center ? "text-center" : ""}>
      <ScrollReveal>
        <div className={`flex items-center gap-3 mb-7 ${center ? "justify-center" : ""}`}>
          <span className="w-12 h-[2px] bg-red rounded-full" />
          <span className="text-red text-[13px] font-semibold tracking-[0.25em] uppercase">{label}</span>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
          {title}{" "}
          {highlight && <span className="text-gradient-red">{highlight}</span>}
        </h2>
      </ScrollReveal>
      {description && (
        <ScrollReveal delay={0.2}>
          <p className={`text-gray-400 text-lg lg:text-xl leading-[2] mt-8 ${center ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
            {description}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
