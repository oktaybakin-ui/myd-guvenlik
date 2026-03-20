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
          <span className="w-12 h-[2px] bg-gradient-to-r from-red to-red-light rounded-full" />
          <span className="text-red text-xs font-semibold tracking-[0.25em] uppercase">{label}</span>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
          {title}{" "}
          {highlight && <span className="text-gradient-red">{highlight}</span>}
        </h2>
      </ScrollReveal>
      {description && (
        <ScrollReveal delay={0.2}>
          <p className={`text-gray-400 text-base lg:text-lg leading-relaxed mt-6 ${center ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
            {description}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
