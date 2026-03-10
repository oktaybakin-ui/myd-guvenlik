import Link from "next/link";

interface PageBannerProps {
  title: string;
  subtitle: string;
  breadcrumb: string;
}

export default function PageBanner({ title, subtitle, breadcrumb }: PageBannerProps) {
  return (
    <section className="bg-dark-light border-b border-border pt-40 pb-20 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red/[0.03] via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-center gap-2 text-sm mb-6">
          <Link href="/" className="text-gray-500 hover:text-white transition-colors duration-200">Ana Sayfa</Link>
          <span className="text-gray-600">/</span>
          <span className="text-red font-medium">{breadcrumb}</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5">{title}</h1>
        <p className="text-gray-400 text-lg lg:text-xl max-w-2xl leading-[1.7]">{subtitle}</p>
      </div>
    </section>
  );
}
