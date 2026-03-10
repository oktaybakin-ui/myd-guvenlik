import Link from "next/link";

interface PageBannerProps {
  title: string;
  subtitle: string;
  breadcrumb: string;
}

export default function PageBanner({ title, subtitle, breadcrumb }: PageBannerProps) {
  return (
    <section className="page-banner pt-36 pb-16">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-center gap-2 text-xs mb-5 animate-fade-in">
          <Link href="/" className="text-gray-500 hover:text-red transition-colors">Ana Sayfa</Link>
          <span className="text-gray-700">/</span>
          <span className="text-red font-medium">{breadcrumb}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-3 animate-fade-in-up">{title}</h1>
        <p className="text-gray-500 text-sm max-w-xl animate-fade-in-up delay-100">{subtitle}</p>
        <div className="section-divider mt-5 animate-fade-in-up delay-200" />
      </div>
    </section>
  );
}
