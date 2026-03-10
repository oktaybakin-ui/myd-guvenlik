import Link from "next/link";

interface PageBannerProps {
  title: string;
  subtitle: string;
  breadcrumb: string;
}

export default function PageBanner({ title, subtitle, breadcrumb }: PageBannerProps) {
  return (
    <section className="page-banner pt-36 pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-center gap-2 text-sm mb-6 animate-fade-in">
          <Link href="/" className="text-white/40 hover:text-white transition-colors duration-200">Ana Sayfa</Link>
          <span className="text-white/20">/</span>
          <span className="text-white/80 font-medium">{breadcrumb}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 animate-fade-in-up">{title}</h1>
        <p className="text-white/50 text-lg max-w-2xl leading-[1.7] animate-fade-in-up delay-100">{subtitle}</p>
      </div>
    </section>
  );
}
