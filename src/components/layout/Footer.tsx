"use client";

import Link from "next/link";
import Image from "next/image";
import { FiPhone, FiMail, FiMapPin, FiArrowRight } from "react-icons/fi";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { FiInstagram, FiLinkedin } from "react-icons/fi";
import { branches } from "@/data/branches";

const quickLinks = [
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Eğitimler", href: "/egitimler" },
  { label: "Projelerimiz", href: "/projelerimiz" },
  { label: "Galeri", href: "/galeri" },
  { label: "İletişim", href: "/iletisim" },
];

const socials = [
  { Icon: FaWhatsapp, href: "https://wa.me/905069038502", label: "WhatsApp" },
  { Icon: FaXTwitter, href: "#", label: "Twitter" },
  { Icon: FiInstagram, href: "https://www.instagram.com/mydguvenlik/", label: "Instagram" },
  { Icon: FiLinkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="relative bg-surface-dark overflow-hidden">
      <div className="section-divider" />

      {/* Accent glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-red/[0.03] rounded-full blur-[120px] pointer-events-none" />

      {/* Main */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-20 pb-12 relative">
        {/* Top: Brand + Slogan */}
        <div className="flex flex-col items-center text-center mb-16">
          <Link href="/" className="inline-flex items-center gap-4 mb-6 group">
            <div className="bg-white rounded-xl p-2 transition-transform duration-300 group-hover:scale-105">
              <Image src="/logo.jpg" alt="MYD" width={48} height={48} className="rounded-lg" />
            </div>
            <span className="text-2xl font-bold text-white tracking-wide uppercase">
              MYD <span className="text-red">ÖZEL GÜVENLİK</span>
            </span>
          </Link>
          <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-lg">
            Güvenlik, güvenlik danışmanlığı ve profesyonel site yönetim danışmanlığı alanlarında çözümler sunuyoruz.
          </p>
          <div className="flex gap-3">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target={s.href !== "#" ? "_blank" : undefined}
                rel={s.href !== "#" ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-500 hover:bg-red hover:border-red hover:text-white transition-all duration-300 hover:scale-110"
              >
                <s.Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Slogan */}
        <div className="text-center mb-16">
          <p className="text-2xl lg:text-3xl font-bold text-white italic opacity-90">
            &ldquo;Siz Sadece Asıl İşinize Odaklanın!&rdquo;
          </p>
        </div>

        {/* Divider */}
        <div className="section-divider mb-12" />

        {/* Links - 4 columns wide layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-[0.15em] mb-6">Hızlı Bağlantılar</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-2 text-gray-500 text-[15px] hover:text-white transition-colors"
                >
                  <FiArrowRight size={12} className="text-red opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Isparta */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-[0.15em] mb-6">Isparta</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FiMapPin className="text-red mt-1 flex-shrink-0" size={14} />
                <span className="text-gray-500 text-[15px] leading-relaxed">{branches[0].address.slice(0, 2).join(", ")}</span>
              </div>
              <div className="flex items-start gap-3">
                <FiPhone className="text-red mt-1 flex-shrink-0" size={14} />
                <div className="text-gray-500 text-[15px] space-y-1">
                  <a href="tel:+905069038502" className="block hover:text-white transition-colors">0 (506) 903 85 02</a>
                  <a href="tel:+905550156576" className="block hover:text-white transition-colors">0 (555) 015 65 76</a>
                  <a href="tel:+905056967978" className="block hover:text-white transition-colors">0 (505) 696 79 78</a>
                  <a href="tel:+902462322242" className="block hover:text-white transition-colors">0 (246) 232 22 42</a>
                </div>
              </div>
            </div>
          </div>

          {/* Burdur */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-[0.15em] mb-6">Burdur</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FiMapPin className="text-red mt-1 flex-shrink-0" size={14} />
                <span className="text-gray-500 text-[15px] leading-relaxed">{branches[1].address.slice(0, 2).join(", ")}</span>
              </div>
              <div className="flex items-start gap-3">
                <FiPhone className="text-red mt-1 flex-shrink-0" size={14} />
                <div className="text-gray-500 text-[15px] space-y-1">
                  <a href="tel:+905010723215" className="block hover:text-white transition-colors">0 (501) 072 32 15</a>
                  <a href="tel:+905069038502" className="block hover:text-white transition-colors">0 (506) 903 85 02</a>
                </div>
              </div>
            </div>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-[0.15em] mb-6">İletişim</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FiMail className="text-red flex-shrink-0" size={14} />
                <a href="mailto:mayda.mehmet32@gmail.com" className="text-gray-500 text-[15px] hover:text-white transition-colors">
                  mayda.mehmet32@gmail.com
                </a>
              </div>
              <div className="mt-6">
                <p className="text-gray-600 text-sm mb-2">Çalışma Saatleri</p>
                <p className="text-gray-500 text-[15px]">Hafta İçi: 08:30 - 18:00</p>
                <p className="text-gray-500 text-[15px]">Cumartesi: 09:00 - 14:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.04]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-600 text-[13px]">&copy; {new Date().getFullYear()} MYD Özel Güvenlik Hizmetleri. Tüm hakları saklıdır.</p>
          <div className="flex gap-6 text-[13px] text-gray-600">
            <a href="#" className="hover:text-gray-400 transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Hizmet Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
