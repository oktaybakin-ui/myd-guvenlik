import Link from "next/link";

interface PageBannerProps {
  title: string;
  subtitle: string;
  breadcrumb: string;
}

export default function PageBanner({ title, subtitle, breadcrumb }: PageBannerProps) {
  return (
    <section className="page-banner pt-36 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="flex items-center justify-center gap-2 text-xs mb-5 animate-fade-in">
          <Link href="/" className="text-white/50 hover:text-white transition-colors duration-200">Ana Sayfa</Link>
          <span className="text-white/30">/</span>
          <span className="text-white font-medium">{breadcrumb}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight animate-fade-in-up">{title}</h1>
        <p className="text-white/60 text-base max-w-xl mx-auto leading-relaxed animate-fade-in-up delay-100">{subtitle}</p>
      </div>
    </section>
  );
}
