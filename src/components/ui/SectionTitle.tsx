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
        <div className={`flex items-center gap-3 mb-6 ${center ? "justify-center" : ""}`}>
          <span className="w-10 h-[2px] bg-red rounded-full" />
          <span className="text-red text-sm font-semibold tracking-[0.2em] uppercase">{label}</span>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08]">
          {title}{" "}
          {highlight && <span className="text-gradient-red">{highlight}</span>}
        </h2>
      </ScrollReveal>
      {description && (
        <ScrollReveal delay={0.2}>
          <p className={`text-gray-400 text-xl leading-[1.9] mt-7 ${center ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
            {description}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
