import Link from "next/link";

interface PageBannerProps {
  title: string;
  subtitle: string;
  breadcrumb: string;
}

export default function PageBanner({ title, subtitle, breadcrumb }: PageBannerProps) {
  return (
    <section className="page-banner pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="flex items-center justify-center gap-2 text-sm mb-6 animate-fade-in">
          <Link href="/" className="text-white/60 hover:text-white transition-colors">Ana Sayfa</Link>
          <span className="text-white/40">/</span>
          <span className="text-white font-medium">{breadcrumb}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-5 animate-fade-in-up">{title}</h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">{subtitle}</p>
      </div>
    </section>
  );
}
