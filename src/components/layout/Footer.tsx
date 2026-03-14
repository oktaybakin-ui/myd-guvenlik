"use client";

import Link from "next/link";
import Image from "next/image";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { FiInstagram, FiLinkedin } from "react-icons/fi";
import { branches } from "@/data/branches";

const quickLinks = [
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Eğitimler", href: "/egitimler" },
  { label: "İletişim", href: "/iletisim" },
];

const socials = [
  { Icon: FaWhatsapp, href: "https://wa.me/905069038502" },
  { Icon: FaXTwitter, href: "#" },
  { Icon: FiInstagram, href: "https://www.instagram.com/mydguvenlik/" },
  { Icon: FiLinkedin, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-dark border-t border-gray-800">
      {/* Main */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        {/* Top: Brand + Description centered */}
        <div className="flex flex-col items-center text-center mb-12">
          <Link href="/" className="inline-flex items-center gap-4 mb-6">
            <div className="bg-white rounded-xl p-2">
              <Image src="/logo.jpg" alt="MYD" width={52} height={52} className="rounded-lg" />
            </div>
            <span className="text-2xl font-bold text-white tracking-wide uppercase">MYD <span className="text-red">ÖZEL GÜVENLİK</span></span>
          </Link>
          <p className="text-gray-500 text-lg leading-relaxed mb-6">
            Güvenlik, temizlik, lojistik ve personel yönetiminde profesyonel çözümler sunuyoruz.
          </p>
          <div className="text-gray-600 text-sm font-medium mb-3">Bizi Takip Edebilirsiniz:</div>
          <div className="flex gap-3">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target={s.href !== "#" ? "_blank" : undefined}
                rel={s.href !== "#" ? "noopener noreferrer" : undefined}
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-white/50 hover:bg-red hover:border-red hover:text-white transition-all duration-300"
              >
                <s.Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Slogan centered */}
        <div className="border-t border-gray-800 pt-8 mb-12 text-center">
          <p className="text-2xl lg:text-3xl font-bold text-white italic">&ldquo;Siz Sadece Asıl İşinize Odaklanın!&rdquo;</p>
        </div>

        {/* Links - 2 columns centered */}
        <div className="border-t border-gray-800 pt-8 flex justify-center">
          <div className="grid sm:grid-cols-2 gap-10 max-w-2xl w-full text-center">
            {/* Quick Links */}
            <div>
              <h4 className="text-gray-600 text-[12px] uppercase tracking-[0.2em] font-semibold mb-5">Hızlı Bağlantılar</h4>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-gray-500 text-[15px] hover:text-red transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-gray-600 text-[12px] uppercase tracking-[0.2em] font-semibold mb-5">İletişim Bilgileri</h4>
              <div className="space-y-3">
                {branches.map((b) => (
                  <div key={b.id} className="flex items-start gap-3 justify-center">
                    <FiMapPin className="text-red mt-1 flex-shrink-0" size={14} />
                    <span className="text-gray-500 text-[15px]"><strong className="text-gray-400">{b.label}:</strong> {b.address.slice(0, 2).join(", ")}</span>
                  </div>
                ))}
                <div className="flex items-start gap-3 justify-center">
                  <FiPhone className="text-red mt-1 flex-shrink-0" size={14} />
                  <div className="text-gray-500 text-[15px]">
                    <strong className="text-gray-400">Isparta:</strong>{" "}
                    <a href="tel:+905069038502" className="hover:text-white transition-colors">0 (506) 903 85 02</a>{" / "}
                    <a href="tel:+905550156576" className="hover:text-white transition-colors">0 (555) 015 65 76</a>{" / "}
                    <a href="tel:+905056967978" className="hover:text-white transition-colors">0 (505) 696 79 78</a>{" / "}
                    <a href="tel:+902462322242" className="hover:text-white transition-colors">0 (246) 232 22 42</a>
                  </div>
                </div>
                <div className="flex items-start gap-3 justify-center">
                  <FiPhone className="text-red mt-1 flex-shrink-0" size={14} />
                  <div className="text-gray-500 text-[15px]">
                    <strong className="text-gray-400">Burdur:</strong>{" "}
                    <a href="tel:+905010723215" className="hover:text-white transition-colors">0 (501) 072 32 15</a>{" / "}
                    <a href="tel:+905069038502" className="hover:text-white transition-colors">0 (506) 903 85 02</a>
                  </div>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <FiMail className="text-red flex-shrink-0" size={14} />
                  <a href="mailto:mayda.mehmet32@gmail.com" className="text-gray-500 text-[15px] hover:text-white transition-colors">mayda.mehmet32@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
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
